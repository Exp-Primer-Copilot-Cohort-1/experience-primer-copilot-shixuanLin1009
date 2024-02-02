// Create web server and listen on port 3000
// 1. Load the express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 2. Create a web server
var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:3000/');})