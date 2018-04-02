let COS = require('cos-nodejs-sdk-v5');

let cosData = require('../../conf/cos.js');

// 创建实例
let cos = new COS(cosData);

function colUpload(Key, FilePath, cb) {
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

module.exports = {
  colUpload
}