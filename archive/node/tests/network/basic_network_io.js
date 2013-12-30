var http = require("http");
	urls = ["google.com", "nba.com", "mlb.com"];

function fetchPage(url) {
	var start = new Date();
	http.get({host:url}, function(res){
		console.log("Got response from: " + url);
		console.log("Request tool: ", new Date - start, "ms");
	})
}

for (var i = 0; i < urls.length; i++) {
	fetchPage(urls[i]);
}