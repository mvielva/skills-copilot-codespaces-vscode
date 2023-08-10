// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var fs = require('fs');
var path = require('path');
var port = 3000;

//create web server
var server = app.listen(port, function(){
  console.log('Server running at http://localhost:' + port);
});

//get data from json file
var comments = require('./comments.json');

//get all comments
app.get('/comments', function(req, res){
  res.json(comments);
});

//get comment by id
app.get('/comments/:id', function(req, res){
  var id = req.params.id;
  var comment = comments.filter(function(comment){
    return comment.id == id;
  });
  res.json(comment[0]);
});

//add comment
app.post('/comments', function(req, res){
  var comment = {
    id: req.body.id;
    comments.push(comment);
    res.json(comment);
});