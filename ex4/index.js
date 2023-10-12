/**
 * Web Atelier 2023  Exercise 4 - JavaScript on the Server-side
 *
 * Student: __STUDENT NAME__
 *
 * Web Server
 *
 */

//Useful module to work with the HTTP protocol
const http = require("http");

//Useful module to work with the file system
const fs = require("fs-extra");

//configure the path to the folder which will be served by this Web server
let site_path = "./public";

//load the script module (Task 3)
const script = require('./script-module');


let content_types = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "png": "image/png",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "gif": "image/gif",
    "ico": "image/x-icon",
    "svg": "image/svg+xml",
    "json": "application/json",
    "pdf": "application/pdf",
    "zip": "application/zip",
    "csv": "text/csv",
    "txt": "text/plain",
    "ttf": "font/ttf",
}

/**
 * Task 2
 * @param {String} pathname - the URL pathname
 * @param {Object} response - the HTTP response object
 */
function sendFile(pathname, response) {
    //TODO - map the URL pathname to the local file system path
    const localPath = "TODO";

    const file = fs.createReadStream(localPath);

    file.on('error', function(err) {

        switch (err.code) {
            case 'ENOENT':
                console.log(`File ${localPath} does not exist.`);
                //TODO send 404 status code and close the connection
                break;
            case 'EISDIR':
                console.log(`File ${localPath} is a directory.`);
                //TODO send 401 status code and close the connection
                break;
            default:
                console.log('Error: ' + err);
                //TODO send 500 status code and close the connection
        }
    });

    file.on('open', function() {

        //TODO - the Content-Type header should be set depending on the filename extension

        let header = {};
        response.writeHead(200, header);
        file.pipe(response);

    });
}

/**
 * Task 3
 * @param {Object} url - the request URL object
 * @param {Object} response - the HTTP response object
 */
function renderDynamicCSV(url, response) {

}

/**
 * Tasks 5 and 6
 * @param {String} pathname - the URL pathname
 * @param {Object} response - the HTTP response object
 */
function renderTile(pathname, response) {

    //assumes /tiles/what/z/x/y.png
    let path = pathname.split("/");
    let what = path[2];
    let z = path[3];
    let x = path[4];
    let y = path[5].split(".")[0];


}



function onrequest(request, response) {

    //Parse Request
    let url = new URL(request.url, "http://localhost:8989/");
    const pathname = url.pathname;

    console.log(request.method, pathname);

    //Task 1
    if (pathname == "/") {
//TODO send 302 status code with the Location header set to /index.html and close the connection
        return;
    }

//TODO depending on the URL pathname, call the appropriate function
//     passing either the url or the pathname and the response object

        response.writeHead(404); //not found
        response.end();
}

http.createServer(onrequest).listen(8989);
console.log('Server listening at http://localhost:8989/')

