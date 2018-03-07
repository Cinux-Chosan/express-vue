const express = require('express');
const router = express.Router();
const assert = require('assert');
const crypto = require('crypto');
const mongodb = require('mongodb');
const mongo = require('../lib/utils/mongo');
const { bk, encrypt } = require('../lib/utils/util');
const ObjectID = mongodb.ObjectID;

new mongo('posts').getDB().then(db => {

  router.get('/posts', async (req, res, next) => {
    try {
      let docs = await db.collection('posts').find().project({ title: 1 }).toArray();
      res[bk](docs);
    } catch(e) {
      res.status(500)[bk]('服务端错误', false);
    }
  })

  router.get('/post', async (req, res, next) => {
    let col = db.collection('posts');
    let _id = req.query.id;
    if (_id) {
      let doc = await col.findOne({ _id: ObjectID(_id) });
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
    let col = db.collection('posts');
    let post_id = req.body.post_id;
    if (post_id) {
      delete req.body.post_id;
      let r = await col.replaceOne({ _id: ObjectID(post_id) }, req.body );
      res[bk]({id: post_id}, r.modifiedCount === 1);
    } else {
      delete req.body.post_id;
      let r = await col.insertOne(req.body);
      res[bk]({id: r.insertedId}, r.insertedCount === 1);
    }
  })

  router.get('/categories', async (req, res, next) => {
    let col = db.collection('category');
    try {
      let categories = await col.find().toArray();
      res[bk]({categories, hasEditPermission: !!req.session.username});
    } catch (error) {
      res.status(500)[bk]('服务端错误', 0);
    }
  });

  router.post('/category', async (req, res, next) => {
    let col = db.collection('category');
    let r = await col.insertOne(req.body);
    res[bk](r, r.insertedCount === 1);
  });



  router.post('/login', async (req, res) => {

    let loginTimes = req.session.loginTimes;
    req.session.loginTimes = loginTimes ? ++loginTimes : 0;
    if (req.session.failTimes > 5) {
      return res[bk]('兄弟, 错 5 次了还不死心 ?', false);
    }

    let col = db.collection('user');
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
    let col = db.collection('category');
    if (req.body._id) {
      
    }
    let r = await col.insertOne({});
  })

  router.post('/delCate', async (req, res) => {
    let col = db.collection('category');
    let rootId = req.body.rootId;
    if (rootId) {
      let root = await col.findOne({_id: ObjectID(rootId)});
      if (root) {
        let r;
        if (root._id === req.body._id) {
          r = await col.deleteOne({_id: ObjectID(root._id)});
        } else {
          findChild(root, req.body._id, (el, index, arr) => {
            arr.splice(index, 1);
          })
          r = await col.replaceOne({_id: ObjectID(rootId)}, root);
        }
        let delOk = !!(r.deletedCount || r.modifiedCount)
        res[bk](`删除${delOk ? '成功' : '失败'}!`, delOk);
      } 
      res[bk]('参数 rootId 无匹配项', false);
    } else {
      res[bk]('缺少参数 rootId', false);
    }
  });


  router.post('/updateCategory',async (req, res) => {
    let col = db.collection('category');
    let rootId = req.body.rootId;
    if (rootId) {
      let r;
      let root = await col.findOne({_id: ObjectID(rootId)});
      if (root) {
        if (rootId == root._id) {
          // 更新该分类
          r = await col.updateOne({_id, ObjectID(rootId)}, { $set: { name: req.body.name } });
        } else {
          findChild(root, req.body._id, (el, index, arr) => {
            el.name = req.body.name;
          });
          r = await col.replaceOne({_id: ObjectID(rootId)}, root);
        }
        let updateOk = !!(r.updateCount || r.modifiedCount);
        res[bk](`更新${delOk ? '成功' : '失败'}!`, updateOk);
      } else {
        res[bk]('参数 rootId 无匹配项', false);
      }
    } else {
      res[bk]('缺少参数 rootId', false);
    }
  })
});

router.post('/signup', async function (req, res, next) {
  if (!process.env.ALLOW_SIGNUP) res[bk]('不允许注册!');
  let db = await (new mongo('posts')).getDB();
  let col = db.collection('user');

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


function findChild(node, _id, cb) {
  let it;
  while(it = node.children) {
    for(let i = 0, len = it.length; i < len; i++) {
      if (it[i]._id == _id) {
        return cb(it[i], i, it);
      } else {
        return findChild(it[i], _id, cb);
      }
    }
  }
}