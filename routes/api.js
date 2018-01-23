var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongodb = require('mongodb');
var mongo = require('../lib/utils/mongo');

router.get('/submit', async function (req, res, next) {
  let db = await (new mongo).getDB();
  let col = db.collection('user');
  let doc = await col.findOne({name: req.query.name});
  let msg = '';
  if (doc) {
    msg = '用户名已经存在!';
  } else {
    let r = await col.insertOne(req.query);
    assert.equal(1, r.insertedCount);
    res.json({state: 1, data: '注册成功!'});
  }
});


router.get('/posts', async (req, res, next) => {
  try {
    let db = await new mongo('posts').getDB();
    let docs = await db.collection('posts').find().project({ title: 1 }).toArray();
    res.json({ state: 1, data: docs });
  } catch(e) {
    res.status(500).json({state: 0, data: '服务端错误'})
  }
})


router.get('/post', async (req, res, next) => {
  let db = await new mongo('posts').getDB();
  let col = db.collection('posts');
  let _id = req.query.id;
  if (_id) {
    let doc = await col.findOne({ _id: mongodb.ObjectID(_id) });
    res.json({ state: 1, data: doc });
  } else {
    res.json({ state: 0, data: 'id缺失' });
  }
})

router.post('/post', async(req, res, next) => {
  let db = await new mongo('posts').getDB();
  let col = db.collection('posts');
  let post_id = req.body.post_id;
  if (post_id) {
    delete req.body.post_id;
    let r = await col.replaceOne({ _id: mongodb.ObjectID(post_id) }, req.body );
    res.json({ state: 1, data: { id: post_id }});
  } else {
    delete req.body.post_id;
    let r = await col.insertOne(req.body);
    res.json({ state: 1, data: { id: r.insertedId } });
  }
})

router.get('/categories', async (req, res, next) => {
  // let 
});


module.exports = router;