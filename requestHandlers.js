var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    // function sleep(millSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + millSeconds) {
    //         ;
    //     }
    // }

    // sleep(10000);

    var content = "empty";
    exec("ls -lah", function print_message(error, stdout, stderr) {
        content = stdout;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    });

    // return "Web is starting...";
    // return content;
}

function upload(response) {
    console.log("Request handler 'upload' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Files are loading...");
    response.end();
    // return "Files are loading...";
}

exports.start = start;
exports.upload = upload;