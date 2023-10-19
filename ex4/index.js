/**
 * Web Atelier 2023  Exercise 4 - JavaScript on the Server-side
 *
 * Student: __ELVIRA BALTASAR__
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

const { createCanvas, loadImage } = require('canvas')


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

const geoData = []; // archivo geo.csv

//Cargar los datos del archivo geo.csv
const csvData = fs.readFileSync('geo.csv', 'utf8');
const geoCSV = script.parseCSV(csvData);

if (geoCSV) {
    geoData.push(...geoCSV); //paso los datos de geoCSV a geoData
}

/**
 * Task 2
 * @param {String} pathname - the URL pathname
 * @param {Object} response - the HTTP response object
 */
function sendFile(pathname, response) {
    //TODO - map the URL pathname to the local file system path
    const localPath = "public"+pathname;

    const file = fs.createReadStream(localPath);

    file.on('error', function(err) {
        switch (err.code) {
            case 'ENOENT':
                console.log(`File ${localPath} does not exist.`);
                //TODO send 404 status code and close the connection
                response.writeHead(404); //not found
                response.end();
                break;
            case 'EISDIR':
                console.log(`File ${localPath} is a directory.`);
                //TODO send 401 status code and close the connection
                response.writeHead(401); 
                response.end();
                break;
            default:
                console.log('Error: ' + err);
                //TODO send 500 status code and close the connection
                response.writeHead(500);
                response.end();
        }
    });

    file.on('open', function() {

        let fileExtension = pathname.split('.').pop();

        let contentType = getContentType(fileExtension);

        let header = {
            'Content-Type': contentType,
        };

        response.writeHead(200, header);

        file.pipe(response);

    });
}

function getContentType(fileExtension) {
    // Mapea las extensiones de archivo a tipos MIME
    const contentTypeMap = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        jpeg: 'image/jpeg',
        png: 'image/png',
        ttf: 'font/ttf'
    };

    // Devuelve el tipo MIME correspondiente
    return contentTypeMap[fileExtension];
}

/**
 * Task 3
 * @param {Object} url - the request URL object
 * @param {Object} response - the HTTP response object
 */
function renderDynamicCSV(url, response) {
    
    if (url.searchParams.has("c") && url.searchParams.has("city") ){
        let country = decodeURI(url.searchParams.get("c"));
        let city = decodeURI(url.searchParams.get("city"));

        let cityData = script.filter(geoData, 3, country); //filtro las cities q coincien con la country
        cityData = script.filter(cityData, 0, city); // me quedo solo con la city q decodifique

        if (cityData.length > 0){
            let cityInf = script.renderCityPage(cityData[0], script.URL_dynamic_formatter); //solo hay un elemento en el array asi q pongo citydata[0]

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(cityInf);
        }else{ 
            response.writeHead(404);
            response.end("Not Found");
        }
       
    } else if (url.searchParams.has("c")) {
        let country = decodeURI(url.searchParams.get("c"));

        let filterC = script.filter(geoData, 3, country); //filtro las cities q coincien con la country
        let cities = script.getDistinctValues(filterC, 0) //me quedo solo con los nombres de las ciudades, no sus caracteristicas

        let list = script.renderCountryPage(country, cities, script.URL_dynamic_formatter)
       
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(list);

    } else{
        let countries = script.getDistinctValues(geoData, 3); //solo nombres de paises para hacer la lista

        let countriesP = script.renderCountryIndex(countries, script.URL_dynamic_formatter);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(countriesP);

    }
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

    const canvas = createCanvas(256, 256);
    const context = canvas.getContext("2d");

    context.strokeStyle='blue'
    context.font = '24px arial'
    context.lineWidth= 3
    context.strokeRect(0, 0, canvas.width, canvas.height)

    if (what == 'test'){ //task 5 
        let yP = 30
        context.fillText(`${pathname}`, 10, yP)
        yP += 50;
        context.fillStyle = 'blue';
        context.fillText(`z = ${z}`, 10, yP);
        yP += 30
        context.fillStyle = 'red';
        context.fillText(`x = ${x}`, 10, yP);
        yP += 30
        context.fillStyle = 'green';
        context.fillText(`y = ${y}`, 10, yP);

        response.writeHead(200, { 'Content-Type': 'image/png' });
        canvas.createPNGStream().pipe(response)
    }

    
    
}



function onrequest(request, response) {

    //Parse Request
    let url = new URL(request.url, "http://localhost:8989/");
    const pathname = url.pathname;

    console.log(request.method, pathname);

    //Task 1
    if (pathname == "/") {
    //TODO send 302 status code with the Location header set to /index.html and close the connection
        response.writeHead(302, {'Location' : '/index.html'});

        response.end();
        return;
    }

    //TODO depending on the URL pathname, call the appropriate function
    //     passing either the url or the pathname and the response object

     else if (pathname.startsWith('/geo')) {
        renderDynamicCSV(url, response);
    } else if (pathname.startsWith('/tiles')) {
        renderTile(pathname, response);
    } else {
        sendFile(pathname, response);
        /*response.writeHead(404); //not found
        response.end();*/
        }
}

http.createServer(onrequest).listen(8989);
console.log('Server listening at http://localhost:8989/')

