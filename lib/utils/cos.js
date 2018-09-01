let COS = require('cos-nodejs-sdk-v5');
let fs = require('fs');
let cosData = require('../../conf/cos.js');

// 创建实例
let cos = new COS(cosData);

let params = {
  Bucket: `posts-${cosData.AppId}`,
  Region: 'ap-chengdu',
  CacheControl: `public, max-age=${60 * 60 * 24 * 10}` // 缓存10天
}

function colUpload(opts = {}, cb) {
  // 分片上传
  cos.sliceUploadFile({
    ...params,
    ...opts
  }, function (err, data) {
    cb(...arguments);
    if (opts.unlink) {
      fs.unlink(FilePath);
    }
  });
}

function delObj(opts = {}, cb) {
  cos.deleteObject({ ...params, ...opts }, cb);
}

module.exports = {
  colUpload,
  delObj
}