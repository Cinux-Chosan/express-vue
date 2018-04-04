var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  return res.end(util.inspect(req));
  if (req.hostname.startsWith('vue.')) {
    res.sendFile(path.resolve('./app-vue/dist/index.html'));
  } else {
    res.sendFile(path.resolve('./app-ember/dist/index.html'))
  }
});

module.exports = router;

