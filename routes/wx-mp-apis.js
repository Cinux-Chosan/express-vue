var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/tokencheck', function(req, res, next) {
  try {
      
  
    let { signature, timestamp, nonce, echostr } = req.query;
    let arr = [timestamp, nonce, echostr].sort();
    let result = getSha1(arr.join(''));
    console.log(result);
    console.log(signature);
    console.log(result === signature);
    res.end(echostr);
  } catch (error) {
      console.log(error);
  }
});

module.exports = router;

function getSha1(str) {
  var sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  sha1.update(str);
  var res = sha1.digest("hex");  //加密后的值d
  return res;
}
