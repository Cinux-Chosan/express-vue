import Vue from 'vue';
import axios from 'axios';

let isDev = ~location.href.indexOf('localhost');

if (isDev) {
  axios.defaults.baseURL = '//localhost:3000'
}

Vue.prototype.axios = Vue.axios || axios;

export default {}