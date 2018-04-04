let express = require('express');
let router = express.Router();
let formidable = require('formidable');
let util = require('util');
let { colUpload } = require('../lib/utils/cos.js');

router.post('/', function (req, res, next) {
  return upload(...arguments);
});

router.post('/editormdUpload', function(req, res, next) {
  return upload(...arguments, (err, data) => {
    res.json({ success: +!err, message: err ? '上传失败!': '上传成功!', url: `//${data.Location}` });
  });
})

router.post('/kindEditorUpload', function (req, res, next) {
  return upload(...arguments, (err, data) => {
    res.json({ error: +err, url: `//${data.Location}` });
  })
})

function upload(req, res, next, cb) {
  if (req.session.username) {
    let dirname = req.query.dirname ? req.query.dirname + '/' : '';
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (Array.isArray(files)) {
          //
        } else {
          for (const key in files) {
            if (files.hasOwnProperty(key)) {
              const element = files[key];
              colUpload(dirname + element.name, element.path, cb, true);
            }
          }
        }
    });
  } else {
    cb('用户未登陆!', {});
  }
}





module.exports = router;