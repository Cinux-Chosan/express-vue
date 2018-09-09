let { colUpload, delObj } = require('./lib/utils/cos');
let glob = require("glob");
let assert = require('assert');
let path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const zlib = require('zlib');


glob('app-ember/dist/+(assets|images)/**/*.*', { absolute: true }, (err, files) => {
  assert.equal(null, err);
  let count = 0;
  delObj({
    Key: '/app-ember/'
  }, (err, data) => {
    console.log('删除完成！', err, data);
  });
  files.forEach(FilePath => {
    let options = {
      Key: '/app-ember/' + path.relative('app-ember/dist', FilePath),
      FilePath
    };
    if (FilePath.match(/\.(js|css)$/)) {
      options.ContentEncoding = 'gzip';
      writeFileSync(FilePath, zlib.gzipSync(readFileSync(FilePath)));
    }
    colUpload(options, err => {
      assert.equal(null, err);
      if (++count === files.length) {
        console.log('静态文件上传完成');
      }
    });
  })
})

