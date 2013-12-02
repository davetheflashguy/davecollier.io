var port = 3000;
var ip = "localhost";
var localPath = "/Users/dave/node_modules/";

var http = require('http');
	http.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		var d = new Date();
		res.end('Server is running\n');
	}).listen(port, ip);

console.log("Server running");

var _ = require(localPath + 'underscore');

_.each([1, 2, 3], function(num){
	console.log("underscore.js says " + num);
})