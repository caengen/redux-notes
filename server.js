var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var express = require('express');
var Firebase = require("firebase");
var refComments = new Firebase('https://react-comments.firebaseio.com/comments');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');
var MESSAGES_FILE = path.join(__dirname, 'messages.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '.')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
