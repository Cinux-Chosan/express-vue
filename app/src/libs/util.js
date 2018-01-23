import Vue from 'vue';
import axios from 'axios';

let isDev = ~location.href.indexOf('localhost');

if (isDev) {
  axios.defaults.baseURL = '//localhost:3000'
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

function load(files) {
  if (files instanceof Array) {
    return Promise.all(files.map(el => load(el)));
  } else if (typeof files === 'string') {
    return new Promise((res, rej) => {
      if (files.endsWith('.js')) {
        return $.getScript(files).then(() => res());
      }
      if (files.endsWith('.css')) {
        let link = document.createElement('link');
        link.onload = () => res();
        link.rel = 'stylesheet';
        link.href = files;
        document.head.appendChild(link);
      }
    });
  }
}

export {
  check,
  load
};
