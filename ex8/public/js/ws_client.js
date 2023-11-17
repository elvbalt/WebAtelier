/**
 * Web Atelier 2023  - 8 - Real-time Web applications with Socket.io
 *
 * Author: __Elvira Baltasar_
 *
 * Web Socket Client
 *
 */


const ws = function(){

    //assumes the socket.io client library is loaded in the HTML file
    const socket = io();
    console.log("dam it")

    socket.on('message', function(){
        console.log("connected to the server");
    });

    socket.on('update', (count) => {
        document.getElementById('clientCount').innerText = count;
    })

//TODO register event handlers for the socket to receive messages from the server



//TODO publish methods to send messages to the server
    return {};

}();
