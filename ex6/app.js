/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Student: __Elvira Baltasar__
 *
 * Main Server Application
 *
 * version 1818 Thu Oct 26 2023 15:50:19 GMT+0200 (Central European Summer Time)
 *
 */






//require framework and middleware dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const multer  = require('multer');

const fs = require('fs-extra');



//init framework
const app = express();



app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(express.json({limit: '4MB'}));    // parse application/json
app.use("/map", multer().none());    //parse multipart/form-data

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');


//controllers
const routers = require('./routes');

app.use(routers.map_script);
app.use("/map",routers.marker);
app.use("/map",routers.map);

//default fallback handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
    message: err.message,
    error: err
    });
});
//}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message,
//     error: {}
//   });
// });



//connect to the database
require("./model").connect();



//start server
app.set('port', process.env.PORT || 8989);

var server = require('http').createServer(app);

server.on('listening', function() {
    console.log('Express server listening on http://localhost:' + server.address().port);
});

server.listen(app.get('port'));




