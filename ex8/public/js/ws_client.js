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

    let connected_users = {}

    socket.on('login', function(user) {
        if (!connected_users.hasOwnProperty(user)) {
            connected_users[user] = {}
        }
        if (updateUsers)
            updateUsers(connected_users)
    })

    socket.on('logout', function(user) {
        if (connected_users.hasOwnProperty(user)) {
            delete connected_users[user]
        }
        if (updateUsers)
            updateUsers(connected_users)
    })

    function message(message){
        socket.emit('editing', message)
    }
    function message2(marker){
        socket.emit('user', marker)
        if (updateUsers)
        updateUsers(connected_users)
    }

    function logUser(user_name) {
        socket.emit('login', user_name)
        if (updateUsers)
        updateUsers(connected_users)
    }

    function clear(){
        socket.emit('clear')
    }
//TODO register event handlers for the socket to receive messages from the server

let showMarker, refreshMap, updateUsers

function addFunction(showMarkerAux, refreshMapAux, updateUsersAux) {
    showMarker = showMarkerAux;
    refreshMap = refreshMapAux;
    updateUsers = updateUsersAux
}


//TODO publish methods to send messages to the server
    return {
        message,
        message2,
        addFunction,
        clear,
        logUser
    };

}();