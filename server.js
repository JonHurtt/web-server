var express = require('express');
var app = express();
var PORT = 3001;

var middleware = require('./middleware.js');

//app.get(route, function(request, response))
/*app.get('/', function(request, response){
	console.log('Request Made to root directory (\'/\')')	
	response.send('Hello Express!<br><a href="/about">About</a>');
});
*/


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,  function (request, response){
	console.log('Request Made to root directory (\'/about\')')	
	response.send('About Page will be located here...<br><a href="/">Back</a>');
});

app.use(express.static(__dirname + '/public'));


console.log("Starting Web Server...");
app.listen(PORT, function(){
	console.log('Express Web Server Started...');
	console.log('Please visit http://127.0.0.1:'+ PORT + '!');

});
