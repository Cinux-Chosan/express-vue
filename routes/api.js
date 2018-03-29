const express = require('express');
const assert = require('assert');
const crypto = require('crypto');
const mongodb = require('mongodb');
const mongo = require('../lib/utils/mongo');
require('../lib/utils/mk-mongo-counter');
const router = express.Router();
const ObjectID = mongodb.ObjectID;
const { bk, encrypt, getMongoCounter } = require('../lib/utils/util');

new mongo('posts').getDB().then(db => {

  let colPosts = db.collection('posts'),
    colCategory = db.collection('category'),
    colUser = db.collection('user');

  router.get('/posts', async (req, res, next) => {
      try {
        let docs = await colPosts.find().project({ title: 1 }).toArray();
        docs.forEach(el => el.type = 'post');
        res[bk](docs, true);
      } catch(e) {
        res.status(500)[bk]('服务端错误', false);
      }
  })

  router.get('/posts/:post_id', async (req, res, next) => {
    let col = colPosts;
    let _id = req.params.post_id;
    if (_id) {
      let doc = await col.findOne({ _id: ObjectID(_id) });
      doc.type = 'post';
      res[bk](doc, true);
    } else {
      res.json({ state: 0, data: 'id缺失' });
    }
  })

  // router.get('/post', async (req, res, next) => {
  //   let col = colPosts;
  //   let _id = req.query.id;
  //   if (_id) {
  //     let doc = await col.findOne({ _id: ObjectID(_id) });
  //     res.json({ state: 1, data: doc });
  //   } else {
  //     res.json({ state: 0, data: 'id缺失' });
  //   }
  // })

  router.post('/posts', checkLogin(async (req, res) => {
    let col = colPosts;
    let doc = getJSONAPIData(req.body);
    let r = await col.insertOne(doc);
    doc = await col.findOne({_id: ObjectID(r.insertedId)});
    doc.type = 'post';
    res[bk](doc, r.insertedCount === 1);
  }))

  router.patch('/posts/:post_id', checkLogin(async(req, res, next) => {
    let col = colPosts;
    let post_id = req.params.post_id;
    let doc = getJSONAPIData(req.body);
    if (post_id) {
      let _id = ObjectID(post_id);
      let r = await col.replaceOne({ _id }, doc );
      doc = await col.findOne({_id });
      doc.type = 'post';
      res[bk](doc, r.modifiedCount === 1);
    } else {
      // 缺失 id
    }
  }))

  router.get('/categories', async (req, res, next) => {
    let col = colCategory;
    try {
      let categories = await col.find().toArray();
      // categories.forEach(el => {
      //   mapTree(el, el => {
      //     el.type = 'category';
      //     if (!el.attributes) {
      //       let { name, children } = el;
      //       el.attributes = { name, children };
      //     }
      //   });
      // });
      res.json({ data: categories });
    } catch (error) {
      res.status(500)[bk]('服务端错误', 0);
    }
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
      let failTimes = req.session.failTimes;
      req.session.failTimes = failTimes ? ++failTimes : 1;
      res[bk]('登陆失败!', false);
    }
  })

  router.get('/login', (req, res) => {
    let isLogged = req.ip == '127.0.0.1' || !!req.session.username;
    res[bk]({ isLogged, _id: 1 });
  })

  router.post('/addCategory', checkLogin(async (req, res) => {
    let col = colCategory;
    let rootId = req.body.rootId;
    let parentId = req.body.parentId;
    let r;
    if (rootId) {
      let root = await col.findOne({_id: ObjectID(req.body.rootId)})
      if (!root) return res[bk]('rootId 无匹配项, 可能已经删除!', false);
      let _id = await genId();
      if (rootId === parentId) {
        root.children = root.children || [];
        root.children.push({_id, name: req.body.name});
      } else {
        findChild(root, parentId, (el, index, arr) => {
          el.children = el.children || [];
          el.children.push({_id, name: req.body.name});
        })
      }
      r = await col.replaceOne({_id: root._id}, root);
    } else {
      r = await col.insertOne({name: req.body.name});
    }
    let isAddOk = !!(r.insertedCount || r.modifiedCount);
    res[bk](`添加${isAddOk ? '成功' : '失败'}!`, isAddOk);
  }))

  router.post('/delCategory', checkLogin(async (req, res) => {
    let col = colCategory;
    let rootId = req.body.rootId;
    if (rootId) {
      let root = await col.findOne({_id: ObjectID(rootId)});
      if (root) {
        let r;
        if (root._id == req.body._id) {
          r = await col.deleteOne({_id: ObjectID(root._id)});
        } else {
          findChild(root, req.body._id, (el, index, arr) => {
            arr.splice(index, 1);
          })
          r = await col.replaceOne({_id: ObjectID(rootId)}, root);
        }
        let delOk = !!(r.deletedCount || r.modifiedCount)
        res[bk](`删除${delOk ? '成功' : '失败'}!`, delOk);
      } else {
        res[bk]('参数 rootId 无匹配项', false);
      }
    } else {
      res[bk]('缺少参数 rootId', false);
    }
  }));


  router.post('/updateCategory', checkLogin(async (req, res) => {
    let col = colCategory;
    let rootId = req.body.rootId;
    if (rootId) {
      let r;
      let root = await col.findOne({_id: ObjectID(rootId)});
      if (root) {
        if (rootId == root._id) {
          r = await col.updateOne({_id: ObjectID(rootId) }, { $set: { name: req.body.name } });
        } else {
          findChild(root, req.body._id, (el, index, arr) => {
            el.name = req.body.name;
          });
          r = await col.replaceOne({_id: ObjectID(rootId)}, root);
        }

        let updateOk = !!r.modifiedCount;
        res[bk](`更新${updateOk ? '成功' : '失败'}!`, updateOk);
      } else {
        res[bk]('参数 rootId 无匹配项', false);
      }
    } else {
      res[bk]('缺少参数 rootId', false);
    }
  }));

  router.get('/catePosts', async (req, res) => {
    let cate = req.query.cate;
    let col = colPosts;
    if (cate) {
      let r = await col.find({cateNodes: { $regex: new RegExp(cate)}}).project({title: 1}).toArray();
      res[bk](r, true);
    } else {
      res[bk]('缺少 cate 参数!', false);
    }
  })

  router.post('/signup', async function (req, res, next) {
    if (!process.env.ALLOW_SIGNUP) return res[bk]('不允许注册!');
    let db = await (new mongo('posts')).getDB();
    let col = colUser;

    let doc = await col.findOne({name: req.body.name});
    let msg = '';
    if (doc) {
      msg = '注册失败, 用户名已经存在!';
      res[bk](msg, false);
    } else {
      let pwd = encrypt(req.body.pwd);
      let r = await col.insertOne({...req.body, pwd});
      assert.equal(1, r.insertedCount);
      res[bk]('注册成功!', true);
    }
  });
});



module.exports = router;

function mapTree(treeRoot, cb) {
  if (treeRoot) {
    cb(treeRoot);
    if (treeRoot.children) {
      return treeRoot.children.forEach(child => mapTree(child, cb));
    }
  }
}


function findChild(node, _id, cb) {
  let it;
  while((it = node.children) && it.length) {
    for(let i = 0, len = it.length; i < len; i++) {
      if (it[i]._id == _id) {
        cb(it[i], i, it);
        return true;
      } else {
        if (findChild(it[i], _id, cb)) {
          return true;
        }
      }
    }
  }
}

function isDev(req) {
  return ~req.hostname.indexOf('localhost');
}

async function genId() {
  return 'time.' + Date.now() + '&counter.' + await getMongoCounter();
}

function checkLogin(cb) {
  return (req, res, next) => {
    if (!req.hostname.includes('localhost') && !req.session.username) {
        return res[bk]('用户未登录!', false);
    }
    return cb(req, res, next);
  }
}

function getJSONAPIData(body = {}) {
  return body.data.attributes || {};
}