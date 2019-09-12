// server.js
// load the things we need
var express = require('express');
var app = express();
var data = require("./data.json")
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/Home',{thisdata: data});
});

// about page 
app.get('/Student', function(req, res) {
    res.render('pages/Student',{thisdata: data});
});

app.listen(8080);
console.log('MAGIC MAGIC MAGIC MAGIC MAGIC');