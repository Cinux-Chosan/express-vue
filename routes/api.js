const express = require('express');
const router = express.Router();
const assert = require('assert');
const crypto = require('crypto');
const mongodb = require('mongodb');
const mongo = require('../lib/utils/mongo');
const { bk, encrypt, getMongoCounter } = require('../lib/utils/util');
require('../lib/utils/mk-mongo-counter');

new mongo('posts').getDB().then(db => {

  let colPosts = db.collection('posts');
  let colCategory = db.collection('category');
  let colUser = db.collection('user');

  router.get('/posts', async (req, res, next) => {
    try {
      let docs = await colPosts.find().project({ title: 1 }).toArray();
      res[bk](docs);
    } catch(e) {
      res.status(500)[bk]('服务端错误', false);
    }
  })

  router.get('/post', async (req, res, next) => {
    let col = colPosts;
    let _id = req.query.id;
    if (_id) {
      let doc = await col.findOne({ _id: mongodb.ObjectID(_id) });
      res.json({ state: 1, data: doc });
    } else {
      res.json({ state: 0, data: 'id缺失' });
    }
  })

  router.post('/post', async(req, res, next) => {
    console.log(req.session);

    if (!req.session.username) {
      return res[bk]('用户未登录!', false);
    }
    let col = colPosts;
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
    let col = colCategory;
    try {
      let categories = await col.find().toArray();
      res[bk]({categories, hasEditPermission: !!req.session.username});
    } catch (error) {
      res.status(500)[bk]('服务端错误', 0);
    }
  });

  router.post('/category', async (req, res, next) => {
    let col = colCategory;
    let r = await col.insertOne(req.body);
    res[bk](r, r.insertedCount === 1);
  });

  router.post('/login', async (req, res) => {

    let loginTimes = req.session.loginTimes;
    req.session.loginTimes = loginTimes ? ++loginTimes : 0;
    if (req.session.failTimes > 5) {
      return res[bk]('兄弟, 错 5 次了还不死心 ?', false);
    }

    let col = colUser;
    let pwd = encrypt(req.body.pwd);
    let doc = {...req.body, pwd};
    let r = await col.findOne(doc);

    if(r) {
      req.session.username = req.body.name;
      req.session.uid = r._id;
      res[bk]('登陆成功');
      console.log(req.session.username);
    } else {
      let failTimes = res.session.failTimes;
      res.session.failTimes = failTimes ? ++failTimes : 0;
      res[bk]('登陆失败!', false);
    }
  })

  router.get('/logged', (req, res) => {
    let isLogged = !!req.session.username;
    res[bk](isLogged);
  })

  router.post('/addCate', async (req, res) => {
    if (!req.session.username) {
      return res[bk]('用户未登录!', false);
    }
    if (req.body.parentId) {
      req.body._id = getMongoCounter();
      colCategory.updateOne();
    } else {
      let r = await colCategory.insertOne(req.body);
      res[bk](`添加${r.insertedCount ? '成功' : '失败'}!`, r.insertedCount);
    }
  })

  router.post('/updateCategory',async (req, res) => {
    let col = colCategory;
    let r = await col.updateOne({ _id: mongodb.ObjectID(req.body.id) }, { $set: { name: req.body.name }});
    res[bk]('更新成功!', r.nModified);
  })
});

router.post('/signup', async function (req, res, next) {
  if (!process.env.ALLOW_SIGNUP) res[bk]('不允许注册!');
  let db = await (new mongo('posts')).getDB();
  let col = colUser;

  let doc = await col.findOne({name: req.body.name});
  let msg = '';
  if (doc) {
    msg = '用户名已经存在!';
    res[bk]('注册失败!', false);
  } else {
    let pwd = encrypt(req.body.pwd);
    let r = await col.insertOne({...req.body, pwd});
    assert.equal(1, r.insertedCount);
    res[bk]('注册成功!', true);
  }
});

module.exports = router;
