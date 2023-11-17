/**
 * Web Atelier 2023  - Exercise 8 - Real-time Web applications with Socket.io
 *
 * Author: __Elvira Baltasar__
 *
 * Web Socket Server
 *
 */

const io = require('socket.io')();
let clients = 0;

function init(server) {
    io.attach(server);

    io.on('connection', function(socket){
        console.log("client connected");
        clients++;
        io.emit('update', clients);

        //TODO register event handlers for the socket
        //TODO keep track of the number of connected clients

        //socket.on()

        socket.on('disconnect', function () {
            console.log('client disconnected');
            clients--;
            io.emit('update', clients);
        })
        socket.on('message', function(message){
            console.log("MASSAGE", message);
            io.emit('message', message);
        })

        socket.on('editing', function(data){
            console.log("EDITING", data);
            socket.broadcast.emit('editing', data);
        })

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