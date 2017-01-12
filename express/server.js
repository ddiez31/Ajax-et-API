var express = require('express');
var app = express();

var places = require('./data');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (request, response) {
	console.log("/");
	
	response.send('Rien par ici, désolé');
});

app.get('/place', function(request, response){
	console.log("/place");
	response.send("Nope, toujours pas...");
});

app.get('/places', function(request, response){
	console.log("/places");

	places.places[5].password = Date.now();
	response.send(places);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
