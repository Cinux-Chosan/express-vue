var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var compression = require('compression')

var index = require('./routes/index');
var signup = require('./routes/signup');
var api = require('./routes/api');
var upload = require('./routes/upload');
var jump = require('./routes/jump');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json({type: '*/vnd.api+json'}));
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression({
  threshold: '10b',
  filter: req => !req.url.match(/\.(png|jpeg|jpg|gif)$/)  // 一般图片等二进制文件压缩收益不高，因此不对图片等二进制文件进行压缩
}));

app.use((req, res, next) => {
  if (req.url.match(/\.(css|js|jpg|png|jpeg|jpg|gif)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=30758400');
  }
  next();
})

app.use(express.static(path.join(__dirname, 'app-ember/dist'), { index: false }));
app.use(express.static(path.join(__dirname, 'app-vue/dist'), { index: false }));
app.use(express.static('/zhangjianjun/statics', { index: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "DELETE,GET,POST,HEAD,PATCH,PUT");
  next();
});

app.use(session({
  secret: 'chosan',
  resave: false,
  saveUninitialized: true,
  rolling: true,  // 每次请求更新登陆超时时间
  cookie: {
    maxAge: 3600000 // 60分钟有效
  }
}))

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use('/', index);
app.use('/signup', signup);
app.use('/upload', upload);
app.use('/jump', jump);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
