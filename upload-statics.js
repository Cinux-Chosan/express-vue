let { colUpload } = require('./lib/utils/cos');
let glob = require("glob");
let assert = require('assert');
let path = require('path');

glob('app-ember/dist/+(assets|images)/**/*.*', { absolute: true }, (err, files) => {
  assert.equal(null, err);
  let count = 0;
  files.forEach(el => {

    // let basename = path.basename(el);
    // console.log(basename, el);
    // console.log('/app-ember/' + path.relative('app-ember/dist', el));

    colUpload('/app-ember/' + path.relative('app-ember/dist', el), el, (err, data) => {
      assert.equal(null, err);
      if (++count === files.length) {
        console.log('静态文件上传完成');
      }
    });
  })
})