require('./db')

var express = require('express')
var path = require('path')
var fs = require('fs')
var FileStreamRotator = require('file-stream-rotator')
var is = require('is_js')
var resApi = require('res.api')
var logger = require('morgan')
var log4js = require('log4js')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(resApi)

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
});

module.exports = app;
