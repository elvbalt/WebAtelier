/**
 * Web Atelier 2023  Exercise 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Student: __STUDENT NAME__
 *
 * Main Server Application
 *
 * version 2081 Thu Nov 02 2023 11:07:27 GMT+0100 (Central European Standard Time)
 *
 */


const path = require('path');

// Import NodeJS modules for the express framework
const express = require('express');

// Import NodeJS modules for the middlewares
const logger = require('morgan');
const methodOverride = require('method-override');
const multer  = require('multer');


// Express application and HTTP server initialization sandwich
const server = initServer(initControllers(initMiddleware(initApp())));

/**
 * Initizlies the Express application
 */
function initApp() {
    let app = express();

    // Setting the view-engine of the application
    app.set("view engine", "ejs");

    //precompile the views so they can run on the browser
    require('ejsc-views').compile();

    // Connecting to the MongoDB database.
    // The connect method is provided by the model.
    require("./model").connect();

    return app;
}

/**
 * Initializes the Express's application with the settings provided by Professor Pautasso
 * and an additional setting that override Express default "Content-Type" header's value
 * when returning a .js file (MIME type).
 */
function initMiddleware(app) {

    // Log HTTP request and responses on the console
    app.use(logger('dev'));

    // Parse application/x-www-form-urlencoded
    // Used to parse the HTML form values placed in URL into a JS object.
    app.use(express.urlencoded( {
        extended: false
    }));

    // // Parse application/json
    app.use(express.json({limit: '4MB'}));

    // //Parse multipart/form-data but do not allow any file upload
    app.use("/map",multer().none());

    // Setting the location of the public static folder
    // Override the Express default
    let staticOptions = {
        "setHeaders" : function (res, path, stat) {
            if(path.includes(".js")){
                res.set("Content-type", "text/javascript")
            }
        }
    };
    app.use(express.static(path.join(__dirname, "public"), staticOptions));

    // Overriding HTTP POST method with the query parameter _method's value
    // (ex: map/?_method=DELETE will be converted in a DELETE request rather than POST
    // Used because HTML forms can only use GET and POST methods.
    app.use(methodOverride("_method"));

    return app;
}

/**
 * Initializes the middleware controllers used by the application.
 * Initializes the default faulty request and server error handlers.
 */
function initControllers(app) {
    // Load all the controllers from the routes folder
    const routers = require("./routes");

    // Sequentially adding controllers to the express application
    app.use("/map",routers["map"]);
    app.use("/map",routers["marker"]);

    // Default faulty request handler -  Respond with 404
    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err)
    });

    // Default server error handler - Respond with 500
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        })
    });

    return app;
}

/**
 * Initializes the HTTP server listening on the default port 8989
 */
function initServer(app) {

    app.set("port", process.env.PORT || 8989);

    let server = app.listen(app.get("port"));

    server.on('listening', function() {
        console.log('Express server listening on http://localhost:' + server.address().port);
    });

    return server;
}