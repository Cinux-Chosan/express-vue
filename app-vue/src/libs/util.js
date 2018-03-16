// import axios from 'axios';

let isDev = ~location.href.indexOf('localhost');
var baseURL = '';

if (isDev) {
  // axios.defaults.baseURL =
  baseURL = '//localhost:3000/api/'
} else {
  // axios.defaults.baseURL =
  baseURL = '/api/';
}

// Vue.prototype.axios = Vue.axios || axios;

function check(fn, timeout = 15000) {
  let interval = 30;
  let wasted = interval;
  return new Promise((res, rej) => {
    let timer = setInterval(() => {
      if (fn()) {
        clearInterval(timer);
        res();
      } else if ((wasted += interval) > timeout) {
        clearInterval(timer);
        rej(new Error('load超时'));
      }
    }, interval);
  })
}

var fileLoaded = {};

function load(files) {
  if (files instanceof Array) {
    return Promise.all(files.map(el => load(el)));
  } else if (typeof files === 'string') {
    return new Promise((res, rej) => {
      if (fileLoaded[files]) return res();
      if (files.endsWith('.js')) {
        return $.getScript(files).then(() => res(fileLoaded[files] = true));
      }
      if (files.endsWith('.css')) {
        let link = document.createElement('link');
        link.onload = () => res(fileLoaded[files] = true);
        link.rel = 'stylesheet';
        link.href = files;
        document.head.appendChild(link);
      }
    });
  }
}

load.prototype.loaded = {};

function tip(msg, type = 'info') {
  let opts = {
    extraClasses: 'messenger-on-top messenger-on-right messenger-fixed',
    type
  }
  window.Messenger(opts).post(msg).update(opts);
}


function getJson(url = '', data = {}, type = 'GET') {
  url = !url.match(/^((http)|(\/\/))/) ? baseURL + url : url;
  return new Promise((res, rej) => {
    let promise = $.ajax({
      url,
      data,
      type: type.toUpperCase(),
      xhrFields: {
        withCredentials: true
     }
    });
    promise
    .then(data => {
      data.state || tip(data.msg || data.data, 'error');
      return data;
    })
    .done(res)
    .fail(rej);
  })
}

export {
  check,
  load,
  tip,
  getJson
};
