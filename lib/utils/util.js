const http = require('http');
const crypto = require('crypto');
const mongo = require('./mongo');

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

async function getMongoCounter(db = 'posts', col = 'counter') {
  db = await new mongo(db).getDB();
  col = db.collection(col);
  let r = await col.updateOne({}, {$inc: { counter: 1 } });
  r = await col.findOne({});
  return r.counter;
}

exports = module.exports = {
  bk,
  encrypt,
  getMongoCounter
};