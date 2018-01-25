var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongodb = require('mongodb');
var mongo = require('../lib/utils/mongo');
var { bk } = require('../lib/utils/util');

new mongo('posts').getDB().then(db => {

  router.get('/posts', async (req, res, next) => {
    try {
      // let db = await new mongo('posts').getDB();
      let docs = await db.collection('posts').find().project({ title: 1 }).toArray();
      res[bk](docs);
    } catch(e) {
      res.status(500)[bk]('服务端错误', false);
    }
  })

  router.get('/post', async (req, res, next) => {
    // let db = await new mongo('posts').getDB();
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
    // let db = await new mongo('posts').getDB();
    let col = db.collection('posts');
    let post_id = req.body.post_id;
    if (post_id) {
      delete req.body.post_id;
      let r = await col.replaceOne({ _id: mongodb.ObjectID(post_id) }, req.body );
      res[bk]({id: post_id}, r.modifiedCount === 1);
    } else {
      delete req.body.post_id;
      let r = await col.insertOne(req.body);
      res[bk]({id: r.insertedId}, r.insertedCount === 1);
    }
  })

  router.get('/categories', async (req, res, next) => {
    // let db = await new mongo('posts').getDB();
    let col = db.collection('category');
    try {
      let r = await col.find().toArray();
      res[bk](r);
    } catch (error) {
      res.status(500)[bk]('服务端错误', 0);
    }
  });

  router.post('/category', async (req, res, next) => {
    let col = db.collection('category');
    let r = await col.insertOne(req.body);
    res[bk](r, r.insertedCount === 1);
  });
});

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



module.exports = router;