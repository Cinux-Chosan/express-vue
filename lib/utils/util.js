const http = require('http');
const crypto = require('crypto');

const bk = Symbol('send data to client with fomatted')

http.ServerResponse.prototype[bk] = function (data, state = 1) {
  state = +state;
  return this.json({ state, data });
}

const secret1 = 'zhangjianjun.secret';

function encrypt(str = '', secret = secret1) {
  console.log(secret);
  return crypto.createHmac('sha256', secret)
    .update(str)
    .digest('hex');
}

exports = module.exports = {
  bk,
  encrypt
};