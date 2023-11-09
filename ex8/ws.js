/**
 * Web Atelier 2023  - Exercise 8 - Real-time Web applications with Socket.io
 *
 * Author: __Student_Name__
 *
 * Web Socket Server
 *
 */

const io = require('socket.io')();

function init(server) {

    io.attach(server);

    io.on('connection', function(socket){
        console.log('client connected',socket.id);

        //TODO register event handlers for the socket
        //TODO keep track of the number of connected clients

    });

}


const EventEmitter = require('events');

const eventBus = new EventEmitter();

eventBus.on('broadcast', function(event){

    console.log('Broadcasting',event);

    //send to all clients
    io.emit(event.topic, event.payload);
});


module.exports.eventBus = eventBus;

module.exports.init = init;