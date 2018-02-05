import Vue from 'vue';
import axios from 'axios';

let isDev = ~location.href.indexOf('localhost');
var baseURL = '';

if (isDev) {
  axios.defaults.baseURL = baseURL = '//localhost:3000/api/'
} else {
  axios.defaults.baseURL = baseURL = '/api/';
}

Vue.prototype.axios = Vue.axios || axios;

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

var _file_loaded = {};

function load(files) {
  if (files instanceof Array) {
    return Promise.all(files.map(el => load(el)));
  } else if (typeof files === 'string') {
    return new Promise((res, rej) => {
      if (_file_loaded[files]) return res();
      if (files.endsWith('.js')) {
        return $.getScript(files).then(() => res(_file_loaded[files] = true));
      }
      if (files.endsWith('.css')) {
        let link = document.createElement('link');
        link.onload = () => res(_file_loaded[files] = true);
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
  url = (!url.match(/^((http)|(\/\/))/) && isDev) ? baseURL + url : url;
  return new Promise((res, rej) => {
    let promise = $.ajax({
      url,
      data,
      type: type.toUpperCase()
    });
    promise
    .then(data => {
      data.state || tip(data.msg, 'error');
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
