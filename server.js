var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 9999

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/greeting', function(request, response) {
  response.render('/greeting', {name: "gus"});
});

server.listen(port, function() {
  console.log("Server listening on port 9999");
});

module.exports = server;
