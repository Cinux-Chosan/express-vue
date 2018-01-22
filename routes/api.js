var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongodb = require('mongodb');
var mongo = require('../lib/utils/mongo');

router.get('/submit', function (req, res, next) {
  (new mongo).getDB().then(db => {
    let col = db.collection('user');
    col.find({
      name: req.query.name
    }).toArray((err, docs) => {
      var msg = '';
      console.log(docs);
      if (docs.length) {
        msg = '用户名已经存在!';
      } else {
        col.insertOne(req.query);
      }
      col.find().toArray((err, docs) => {
        console.log(docs);
        res.render('result', {
          persons: docs,
          msg
        });
      })
    })
  })
});


router.get('/posts', function (req, res, next) {
  var mg = new mongo('posts');
  mg.getDB().then(db => {
    db.collection('posts').find().project({ title: 1 }).toArray((err, docs) => {
      assert.equal(null, null);
      res.status(200).json({
        state: 1,
        data: docs
      });
    })
  })
})


router.get('/post', async function (req, res, next) {
  var mg = new mongo('posts');

  let db = await mg.getDB();
  let col = db.collection('posts');
  let _id = req.query.id;
  if (_id) {
    let doc = await col.findOne({ _id: mongodb.ObjectID(_id) });
    res.json({ state: 1, data: doc });
  } else {
    res.json({ state: 0, data: 'id缺失' });
  }
})

router.post('/post', function (req, res, next) {
  var mg = new mongo('posts');

  mg.getDB().then(async (db) => {
    let col = db.collection('posts');
    let _id = req.body._id;
    if (_id) {
      delete req.body._id;
      col.replaceOne(
        { _id: mongodb.ObjectID(_id) },
        req.body
      );
    } else {
      delete req.body._id;
      let r = await col.insertOne(req.body);
      res.status(200).json({ state: 1, data: { insertedId: r.insertedId } });
      // res.status(500).json({state:0}).end();

    }
  })
})


module.exports = router;