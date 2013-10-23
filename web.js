var port = process.env.PORT || 5000;
var http = require('http');
var fs = require('fs');
var url = require("url");
var path = require("path");

http.createServer(function (request, response) {    
	var uri = url.parse(request.url).pathname;  
    var filename = path.join(process.cwd(), uri); 
	console.log('request starting...' + filename);
	fs.readFile(filename, function(error, content) {
		console.log('request ending...' + filename);
		if (error) {
		console.log('request error...');
			response.writeHead(500);
			response.end();
		}
		else {
		console.log('request success...');
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});
	
}).listen(port);
console.log('Server running ' + port);