var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('util');
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.writeHead(301, { 'Location': 'https://www.zbj.com/?reqtoken=1' });
  res.end();
});

module.exports = router;

