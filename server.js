var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 9999

app.get('/', function(request, response) {
  response.send("Hello world")
});

server.listen(port, function() {
  console.log("Server listening on port 9999");
});

module.exports = server;
