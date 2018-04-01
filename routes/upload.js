let express = require('express');
let router = express.Router();
let formidable = require('formidable');
let util = require('util');
let COS = require('cos-nodejs-sdk-v5');
let cosData = require('./data/cos.js');

// 创建实例
let cos = new COS(cosData);

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
  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
      if (Array.isArray(files)) {
        //
      } else {
        for (const key in files) {
          if (files.hasOwnProperty(key)) {
            const element = files[key];
            colUpload(res, element.name, element.path, cb);
          }
        }
      }
  });
}

function colUpload(res, Key, FilePath, cb) {
  // 分片上传
  cos.sliceUploadFile({
    Bucket: `posts-${cosData.AppId}`,
    Region: 'ap-chengdu',
    Key,
    FilePath
  }, function (err, data) {
    cb(...arguments);
  });
}



module.exports = router;