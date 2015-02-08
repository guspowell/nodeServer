var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});

app.get('/', function(request, response) {
  response.send('hello world')
});

module.exports = server;
