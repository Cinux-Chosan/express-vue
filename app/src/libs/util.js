import Vue from 'vue';
import axios from 'axios';

let isDev = ~location.href.indexOf('localhost');

if (isDev) {
  axios.defaults.baseURL = '//localhost:3000'
}

Vue.prototype.axios = Vue.axios || axios;

function check(fn, timeout = 15000) {
  let time = 30;
  return new Promise((resolve, reject) => {
    let id = setInterval(() => {
      if (fn()) {
        resolve();
        clearInterval(id);
      } else if ((time += 30) > timeout) {
        reject(new Error('超时'));
        clearInterval(id);
      }
    }, time);
  })
}

export {
  check
};