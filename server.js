var http = require("http");
var url = require("url");

function onload(route, handle) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log(pathname);

		route(handle, pathname);

		console.log("Request has received.");
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		var content = route(handle, pathname);
		response.write(content);
		response.end();
	}

	http.createServer(onRequest).listen(3000);

	console.log("Server is running on PORT 3000.");
}

exports.onload = onload;
