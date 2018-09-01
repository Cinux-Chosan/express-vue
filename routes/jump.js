const express = require('express');
const router = express.Router();
const path = require('path');
const util = require('util');
const mongodb = require('mongodb');
const myMongo = require('../lib/utils/mongo');
const ObjectID = mongodb.ObjectID;

router.get('/:jumpId', async function(req, res, next) {
  const db = await new myMongo('jump').getDB();
  const col = db.collection('jump');
  const { jumpId } = req.params;
  const jumpInfo = await col.findOne({ _id: ObjectID(jumpId) });
  const { jumpUrl } = jumpInfo;
  res.writeHead(302, { 'Location': jumpUrl });
  res.end();
});

module.exports = router;

