var middleware = {
		requireAuthentication: function(request, response, next){
			console.log('private route hit');
			next();
		},//end requireAuth
		logger: function(request, response, next){
			console.log('Request: [' + new Date().toString() + '] ' +  request.method + ' ' + request.originalUrl);
			next()
		}//end logger	
	};//var object

module.exports = middleware;
