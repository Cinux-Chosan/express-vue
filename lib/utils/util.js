const http = require('http');
const crypto = require('crypto');

const bk = Symbol('send data to client with a given format');

http.ServerResponse.prototype[bk] = function (data, state = 1) {
  state = +state;
  return this.json({ state, data });
}

const mySecret = 'zhangjianjun.secret';

function encrypt(str = '', secret = mySecret) {
  console.log(secret);
  return crypto.createHmac('sha256', secret)
    .update(str)
    .digest('hex');
}

function getMongoCounter(db, col = 'counter') {
  return db.collection(col).updateOne({}, {$inc: { counter: 1 } }).counter;
}

exports = module.exports = {
  bk,
  encrypt,
  getMongoCounter
};