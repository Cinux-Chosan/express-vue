const http = require('http');
const crypto = require('crypto');
const mongo = require('./mongo');

const bk = Symbol('format response data');

http.ServerResponse.prototype[bk] = function (data, meta = {}) {
  if (Array.isArray(data)) {
    data = data.map(el => mkJSONAPI(el));
  } else {
    data = mkJSONAPI(data);
  }
  meta = typeof meta !== 'object' ? { state: meta } : meta;
  return this.json({ data, meta });
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

function mkJSONAPI(data) {
  let { _id, type, meta } = data;
  delete data._id;
  delete data.type;
  delete data.meta;
  return {
    attributes: data,
    _id,
    type,
    meta
  }
}