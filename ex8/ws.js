/**
 * Web Atelier 2023  - Exercise 8 - Real-time Web applications with Socket.io
 *
 * Author: _Elvira Baltasar_Jamila Oubenali
 *
 * Web Socket Server
 *
 */

const io = require('socket.io')();
let clients = 0;
let connected_users = {}

function init(server) {
    io.attach(server);

    io.on('connection', function(socket){
        console.log("client connected");
        clients++;
        io.emit('update', clients);
        
        let user = ""
        //TODO register event handlers for the socket
        //TODO keep track of the number of connected clients

        for (let connected_user in connected_users) {
            socket.emit('login', connected_user)
        }

        socket.on('disconnect', function () {
            console.log('client disconnected');
            clients--;
            io.emit('update', clients);
            if (connected_users.hasOwnProperty(user)) {
                io.emit('logout', user)
                delete connected_users[user]
            }
        })
        socket.on('message', function(message){
            io.emit('message', message);
        })

        socket.on('editing', function(data){
            socket.broadcast.emit('editing', data);
        })
        socket.on('user', function(marker){
            socket.broadcast.emit('user', marker);
        })
        socket.on('clear', function(){
            socket.broadcast.emit('clear');
        })
        socket.on('login', function(user_name) {
            if (!connected_users.hasOwnProperty(user_name)) {
                connected_users[user_name] = []
                io.emit('login', user_name);
                user = user_name
            }  
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