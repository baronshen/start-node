var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");

    // function sleep(millSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + millSeconds) {
    //         ;
    //     }
    // }

    // sleep(10000);

    var content = "empty";
    exec("find /", function (error, stdout, stderr) {
        content = stdout;
    });

    // return "Web is starting...";
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Files are loading...";
}

exports.start = start;
exports.upload = upload;