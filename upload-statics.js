let { colUpload, delObj } = require('./lib/utils/cos');
let glob = require("glob");
let assert = require('assert');
let path = require('path');
const { createReadStream, createWriteStream } = require('fs');
const zlib = require('zlib');


glob('app-ember/dist/+(assets|images)/**/*.*', { absolute: true }, (err, files) => {
  assert.equal(null, err);
  let count = 0;
  delObj({
    Key: '/app-ember/'
  }, (err, data) => {
    console.log('删除完成！', err,  data);
  });
  files.forEach(FilePath => {
    let options = {
      Key: '/app-ember/' + path.relative('app-ember/dist', FilePath), 
      FilePath
    };
    console.log(options)

    if (FilePath.match(/.(js|css)$/)) {
      let ws = createWriteStream(FilePath);
      options.ContentEncoding = 'gzip';
      ws.on('finish', () => {
        console.log(`文件\t${FilePath}\t压缩完成`);
        colUpload(options, err => {
          assert.equal(null, err);
          if (++count === files.length) {
            console.log('静态文件上传完成');
          }
        });
      })
      createReadStream(FilePath).pipe(zlib.createGzip()).pipe(ws);
    } else {
      colUpload(options, err => {
        assert.equal(null, err);
        if (++count === files.length) {
          console.log('静态文件上传完成');
        }
      });
    }
  })
})

