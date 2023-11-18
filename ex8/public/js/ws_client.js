/**
 * Web Atelier 2023  - 8 - Real-time Web applications with Socket.io
 *
 * Author: __Elvira Baltasar_Jamila Oubenali
 *
 * Web Socket Client
 *
 */



const ws = function(){

    //assumes the socket.io client library is loaded in the HTML file
    const socket = io();

    socket.on('message', function(){
        console.log("connected to the server");
    });

    socket.on('update', (count) => {
        document.getElementById('clientCount').innerText = count;
    })

    socket.on('updatingMap', function(){
        
        refresh_map_list();
    })

    socket.on('editing', function(data) {
        //recibo el mensaje q lanzo otro usuario
        // get el titulo del documento

        let title = document.title;

        if (title == 'Map List'){
            refresh_map_list();
        }else {
            let id = document.querySelector("#title").getAttribute("map_id");
            if (data != undefined && id  == data.id){
                if (title == 'Map Editor'){
                    refresh_map_editor(id);
                }else if (title == 'Map View'){
                    refresh_map_view(id);
                }
            }
        }
    })

    socket.on('user', function(marker){
        let title = document.title;
        if (title == 'User map'){
            showMarker(marker)
        }
    })

    socket.on('clear', function(){
        refreshMap();
    })

    function message(message){
        socket.emit('editing', message)
    }
    function message2(marker){
        socket.emit('user', marker)
    }

    function clear(){
        socket.emit('clear')
    }
//TODO register event handlers for the socket to receive messages from the server

let showMarker, refreshMap

function addFunction(showMarkerAux, refreshMapAux) {
    showMarker = showMarkerAux;
    refreshMap = refreshMapAux;
}


//TODO publish methods to send messages to the server
    return {
        message,
        message2,
        addFunction,
        clear
    };

}();
