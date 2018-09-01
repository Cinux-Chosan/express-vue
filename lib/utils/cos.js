let COS = require('cos-nodejs-sdk-v5');
let fs = require('fs');
let cosData = require('../../conf/cos.js');

// 创建实例
let cos = new COS(cosData);

function colUpload(Key, FilePath, cb, unlink = false) {
  // 分片上传
  cos.sliceUploadFile({
    Bucket: `posts-${cosData.AppId}`,
    Region: 'ap-chengdu',
    Key,
    FilePath,
    ContentEncoding: 'gzip'
  }, function (err, data) {
    cb(...arguments);
    if (unlink) {
      fs.unlink(FilePath);
    }
  });
}

module.exports = {
  colUpload
}