var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 9999;

app.set('view engine', 'ejs');
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/javascript', express.static(__dirname + '/public/javascript'));


app.get('/', function(request, response){
  response.header("Access-Control-Allow-Origin", "*")
  response.render('github', request.query);
});

server.listen(port, function(){
  console.log('server running on port ' + port);
});

module.exports = server;












//
// app.get('/', function(request, response) {
//   response.render('index', request.query);
// });
//
// app.get('/reflect.json', function(request, response) {
//   response.render('reflect', {query: request.query});
// });
//
// app.get('/github', function(request, response) {
//   response.render('github', request.query);
// });
