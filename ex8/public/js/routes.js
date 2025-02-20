/**
 * Web Atelier 2023  - 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Author: _Elvira Baltasar_
 *
 * Client-side controllers
 *
 */

/**
 * Task 3
 */
function refresh_map_list() {

    document.title = "Map List";

    api.getMaps().then((maps) => {
        document.querySelector("main").innerHTML = ejs.views_map_list({ maps });
        document.querySelector("sidebar").innerHTML = ejs.views_sidebar_gen();

        maps.forEach(initMapThumb);

        setup_map_list(document.querySelector("main"));

    });

    function setup_map_list(dom) {
        //TODO add event listeners to the delete, favourite and clone buttons
        //TODO add event listeners to the map view and edit links

        dom.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", (e) => {

                e.preventDefault();
                let url = new URL(e.currentTarget.href);

                route(url);

                //TODO prevent the browser from following the link
                //TODO call the client-side router based on the link href

            });
        });

        dom.querySelectorAll("form[action$='DELETE']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                api.deleteMap(id).then( ()=>{
                    refresh_map_list();
                }
                )

                //TODO prevent the browser from submitting the form
                //TODO delete the map and then, refresh the map list
            });

        });

        dom.querySelectorAll("form[action$='clone']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                //TODO prevent the browser from submitting the form
                //TODO clone the map and then, refresh the map list
                api.cloneMap(id).then( ()=>{
                    refresh_map_list();
                }
                )
            });

        });

        dom.querySelectorAll("form[action$='PATCH']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                //TODO prevent the browser from submitting the form
                //TODO toggle the map fav bit and then, refresh the map list
                api.toggleFav(id).then( ()=>{
                    refresh_map_list();
                }
                )

            });

        });


        //TODO add event listeners to the map view and edit links
    }
}


/**
 * Display a map in the div#map element and update its center/zoom from the map object
 * Synchronize the form input values from if the user changes the map
 * The function returns various functions which can be used to:
 * @return {SyncTilesToMap} update the map tiles from the form input values
 * @return {SyncMapPosition} update the map view from the form input values
 * @return {addMapClickEventListener} register a callback function for the map click event
 * @return {addMarkerClickEventListener} register a callback function for the marker click event
 * @return {showMarker} display a marker on the map
 * @return {getMarkerIcon} select a marker icon based on the marker type
 *
 */
let showMap = (function () {

    let leaflet_map = L.map('map');
    let marker_layer = L.layerGroup().addTo(leaflet_map);
    let tile_layer;

    /**
     * Updates the form input values from the map.
     */
    function SyncMapToForm() {

        var zoom = leaflet_map.getZoom();
        var center = leaflet_map.getCenter();

        function setValue(id, value) {
            if (document.getElementById(id)) {
                document.getElementById(id).value = value;
            }
        }
        setValue("zoom", zoom);
        setValue("lat", center.lat);
        setValue("lng", center.lng);
    }

    /**
     * Initializes map tiles based on the data for a given map object.
     */
    function SyncTilesToMap(map) {
        if (tile_layer) { tile_layer.remove(); }
        tile_layer = initMapTiles(map, leaflet_map);
        api.replaceMap(map._id, map);
    }

    function SyncMapPosition(map) {
        leaflet_map.setView(map.center, map.zoom);
    }

    function addMapClickEventListener(f) {
        leaflet_map.on("click", f);
    }

    let marker_click_listeners = [];

    function addMarkerClickEventListener(f) {
        marker_click_listeners.push(f);
    }

    let getMarkerIcon = function () {

        let icons = {};

        /**
         * Returns a leaflet icon object for a given marker type.
         * Assumes that the marker icon images are stored in the public/images/ directory.
         * @param {String} type - the marker type
         * Assumes that the marker icon svg file for the type exists in the public/images/ directory.
         */
        return function (type) {

            if (!icons[type]) {
                let icon = new L.Icon({
                    iconUrl: '/images/marker-' + type + ".svg",
                    shadowUrl: '/images/marker-shadow.svg',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                });
                icons[type] = icon;
            }

            return icons[type];
        }
    }(); //getMarkerIcon IIFE

    let _editable = false;

    hue_offline = `hue-rotate(90deg)`
    hue_online = `hue-rotate(180deg)`

    function showMarker(marker) {

        let m = L.marker(marker.location, {
            icon: getMarkerIcon(marker.type),
            draggable: _editable,
            autoPan: _editable
        }).addTo(marker_layer);

        m._icon.style.filter = hue_online;

        if (_editable) {

            m.on("click", function (e) {
                e.marker = marker;
                marker_click_listeners.forEach((f) => f(e));
       
            });

            m.on("moveend", function (e) {

                let position = e.target.getLatLng();
                marker.location = { lat: position.lat, lng: position.lng };

                //Task 7
                //TODO update the marker through the API

                api.replaceMarker(marker, marker.map_id)

            });

        }
        return m

    }

    return function (map, editable = false) {
        _editable = editable;

        SyncMapPosition(map);
        tile_layer = initMapTiles(map, leaflet_map);

        leaflet_map.on('zoomend', () => {
            SyncMapToForm()
            if(editable) {
                let map_obj = form2obj()
                api.replaceMap(map._id, map_obj).then(()=>{
                    ws.message({topic: 'editing', id: map._id})
                });
            }
        })
        leaflet_map.on('moveend', () => {
            SyncMapToForm()
            if(editable) {
                let map_obj = form2obj()
                api.replaceMap(map._id, map_obj).then(()=>{
                    ws.message({topic: 'editing', id: map._id})
                });
            }
        });
      
        if (map._id != "new" && map._id){
            api.getMarkers(map._id).then(markers => {
                markers.forEach(showMarker)
            })
        }

        return {
            SyncTilesToMap,
            SyncMapPosition,
            addMapClickEventListener,
            addMarkerClickEventListener,
            showMarker,
            getMarkerIcon,
            leaflet_map,
            marker_layer
        };
    }

}); //showMap IIFE


/**
 * Task 4
 * @param {String} id of the map to be displayed
 */
function refresh_map_view(id) {

    document.title = "Map View";

    //TODO get the map from the API and display it using showMap
    //TODO display the map title
    //TODO display a link to edit the map

    api.getMap(id).then((map) => {

        document.querySelector("main").innerHTML = ejs.views_map_view({ map });
        document.querySelector("sidebar").innerHTML = ejs.views_sidebar({map});

        showMap()(map, false);

        document.getElementById("edit").addEventListener("click", (e) => {
    
            e.preventDefault();
    
            let url = new URL(window.location.origin + `/map/${id}/edit`);
            
            route(url)
        });

    });


}
function form2obj() {

    let title = document.getElementById("title").value;
    let zoom = parseInt(document.getElementById("zoom").value);
    let lat = parseFloat(document.getElementById("lat").value);
    let lng = parseFloat(document.getElementById("lng").value);
    let tiles = document.getElementById("tiles").value;

    return {
        title,
        zoom,
        center: {lat,lng},
        tiles
    }
}

/**
 * Task 5
 * @param {String} id of the map to be edited or created (if id=="new")
 */
function refresh_map_editor(id) {

    document.title = "Map Editor";

    /**
     * Reads the form data and returns a map object with the title, zoom, center and tiles fields.
     * @returns {Object} the map object based on the form data
     */


    /**
 * Converts a floating point number representing a GPS coordinate to a string in DMS format.
 * @param {Float} gps - A floating point number representing a GPS coordinate (latitude or longitude).
 * @returns a string with the DMS representation of the GPS coordinate
 */
function gps2str(gps) {
    if (-180 > gps > 180 || isNaN(gps)){
        return undefined;
    }

    let degrees = Math.trunc(gps);
    
    let minutesFloat = (gps - degrees) * 60;
    
    let minutes = Math.trunc(minutesFloat);
    minutes = Math.abs(minutes);
    let secondsFl = (Math.abs(gps) - Math.abs(degrees) - minutes/60) * 3600;
    let seconds = Math.round(secondsFl)
    seconds = Math.abs(seconds);

    if (seconds === 60){
        minutes++;
        seconds = 0;
    }
    if (minutes === 60){
        if (degrees < 0){
            degrees--;
        }else{
            degrees++;
        }

        minutes = 0;
    }
  // Format the result as a string
    return `${degrees}° ${minutes}' ${seconds}"`;
}

    let default_map = {
        zoom: 2,
        center: { lat: 0, lng: 0 },
        center_str: {lat: gps2str(0), lng: gps2str(0)},
        tiles: "osm",
        title: "New Map",
        id: -1
    };
    if(id !== "new"){
        api.getMap(id).then((map) => {

            document.querySelector("main").innerHTML = ejs.views_map_edit({ map });
            document.querySelector("sidebar").innerHTML = ejs.views_sidebar({map});

            setup_map_editor(false, map);

        });
    } else {
        document.querySelector("main").innerHTML = ejs.views_map_edit({map: default_map})
        
        document.querySelector("sidebar").innerHTML = ejs.views_sidebar({map: default_map});
        setup_map_editor(true, default_map)

    }

    function setup_map_editor(create, map) {

        /**
         * Updates the leaflet map tiles or view from the form input values.
         * @param {Function} f - the function to be called with the map object obtained from the form
         */
        function SyncFormToMap(f) {
            let map_obj = form2obj();
            f(map_obj);

            api.replaceMap(id, map_obj).then(()=>{
                ws.message({topic: 'editing', id: id})
            });
        }

        let leaflet_map_handler = showMap()
        let { SyncTilesToMap,
              SyncMapPosition,
              addMapClickEventListener,
              addMarkerClickEventListener,
              showMarker,
              getMarkerIcon
            } = leaflet_map_handler(map, true);

        //TODO display the map editor form

        //setup the change event listeners for the form input fields
        document.getElementById("zoom").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition))
        document.getElementById("lat").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition))
        document.getElementById("lng").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition))
        document.getElementById("title").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition))
        document.getElementById("tiles").addEventListener("change", SyncFormToMap.bind(this, SyncTilesToMap))
        
        let createBtn = document.querySelector("button[data-action='create']");
        if (createBtn) {

            createBtn.addEventListener("click", function (e) {

                e.preventDefault();

                let map_data = {
                    zoom: parseInt(document.getElementById("zoom").value) || default_map.zoom,
                    center: {
                        lat: parseFloat(document.getElementById("lat").value) || default_map.center.lat,
                        lng: parseFloat(document.getElementById("lng").value) || default_map.center.lng
                    },
                    title: document.getElementById("title").value || default_map.title,
                    tiles: document.getElementById("tiles").value || default_map.tiles,
                }

                api.addMap(map_data).then((map) => {
        
                    let url = new URL(window.location.origin + `/map/${map._id}`);
                    
                    route(url)
                });

                //TODO prevent the browser from submitting the form
                //TODO create a new map object from the form input data
                //TODO post the new map object to the server through the API
                //TODO then, display the newly created map
            });

        }

        let updateBtn = document.querySelector("button[data-action='update']");
        if (updateBtn) {

            updateBtn.addEventListener("click", function (e) {

                e.preventDefault();

                let map_data = {
                    zoom: parseInt(document.getElementById("zoom").value) || map.zoom,
                    center: {
                        lat: parseFloat(document.getElementById("lat").value) || map.center.lat,
                        lng: parseFloat(document.getElementById("lng").value) || map.center.lng
                    },
                    title: document.getElementById("title").value || map.title,
                    tiles: document.getElementById("tiles").value || map.tiles,
                    fav: map.fav
                }
        
                api.replaceMap(id, map_data).then(() =>{
                    let url = new URL(window.location.origin + `/map/${id}`);
                
                    route(url)
                })

                
                //TODO prevent the browser from submitting the form
                //TODO replace the updated map object on the server
                //TODO then, refresh the map list view


            });

        }

        // Task 6
        addMapClickEventListener((e) => {

            let marker = {
                location: e.latlng,
                title: "New Marker",
                hue: Math.floor(Math.random() * 360)
            }

            //TODO add a marker and show it on the map

            if (id != "new" && id){
            api.addMarker(marker, id).then(marker => {
                showMarker(marker)   
                ws.message({topic: 'editing', id: id})
            })
        }
        })

        addMarkerClickEventListener((e) => {

            //this is the marker object which can be used to store the marker in the database
            let marker = e.marker;

            //this is the leaflet marker object which can be used to access the visible marker on the map
            let leaflet_marker = e.target;

            //used to display different icons, should correspond to the images/marker-*.svg files
            let types = ["undefined", "hotel", "restaurant", "school", "shop", "viewpoint", "star", "charger"];

            //TODO render the marker editor form
            //TODO setup the event listeners for the marker editor form input fields
            //TODO setup the event listener for the delete button
            //TODO save the marker through the API when the input fields change
            //TODO refresh the marker shown on the map to reflect the values of the input fields

            document.querySelector("sidebar").innerHTML = ejs.views_marker_edit({ marker, types });

            document.getElementById("mtitle").addEventListener("change", function(e){
                e.preventDefault();

                marker.title = document.getElementById("mtitle").value;

                api.replaceMarker(marker, id).then(()=>{
                    ws.message({topic: 'editing', id: id})
                })
                
            });
            document.getElementById("mhue").addEventListener("change", function(e){
                e.preventDefault();

                marker.hue = document.getElementById("mhue").value;

                api.replaceMarker(marker, id).then(()=>{
                    leaflet_marker._icon.style.filter = `hue-rotate(${marker.hue}deg)`;
                    ws.message({topic: 'editing', id: id})
                })

            });
            

            document.querySelectorAll('input[name=type]').forEach((element) => element.addEventListener("click", function(e){


                let valor = document.querySelector('input[name=type]:checked').value;

                marker.type = valor;

                api.replaceMarker(marker, id).then(()=>{
                    leaflet_marker.setIcon(getMarkerIcon(marker.type));
                    ws.message({topic: 'editing', id: id})
                })           
            }))
        
        let delet = document.querySelector("button[data-action='delete']");
        if (delet) {

            delet.addEventListener("click", function (e) {

                e.preventDefault();

                api.deleteMarker(marker, id).then(()=>{
                    leaflet_marker.remove();
                    document.querySelector("sidebar").innerHTML = ejs.views_sidebar_gen();
                    ws.message({topic: 'editing', id: id})
                })
    
            });
    }
            

        })

    };

}

function refresh_user_map() {

    document.title = "User map";
    let names = {}
    let can = false;
    let name;

    document.querySelector("main").innerHTML = ejs.views_users();
    document.querySelector("sidebar").innerHTML = ejs.views_sidebar_loc();

    let map = {
        zoom: 2,
        center: { lat: 0, lng: 0 },
        center_str: {lat: gps2str(0), lng: gps2str(0)},
        tiles: "osm",
        title: "New Map",
        id: -1
    };
    
    function refrescarMapa(){
        document.querySelector("main").innerHTML = ejs.views_users();
        let map = {
            zoom: 2,
            center: { lat: 0, lng: 0 },
            center_str: {lat: gps2str(0), lng: gps2str(0)},
            tiles: "osm",
            title: "New Map",
            id: -1
        };

        let leaflet_map_handler = showMap()
        let { 
            addMapClickEventListener,
            addMarkerClickEventListener,
            showMarker,
            getMarkerIcon,
            leaflet_map,
            marker_layer
        } = leaflet_map_handler(map, false);
        

            addMapClickEventListener((e) => {

                if (can){
                    let marker = {
                        location: e.latlng,
                        title: name,
                        hue: Math.floor(Math.random() * 360)
                    }
        
                    api.addLocation(marker).then(marker => {
                        anadirMarcador(marker)
                        ws.message2(marker)
                    })
        
                }
            })

    }

    let leaflet_map_handler = showMap()
    let { 
            addMapClickEventListener,
            addMarkerClickEventListener,
            showMarker,
            getMarkerIcon,
            leaflet_map,
            marker_layer
    } = leaflet_map_handler(map, false);

    hue_offline = `hue-rotate(90deg)`
    hue_online = `hue-rotate(180deg)`
    function updateUsers(connected_users) {
        for (name in names) {
            if (connected_users.hasOwnProperty(name)) {
                names[name].forEach((m) => m._icon.style.filter = hue_online)
            } else {
                names[name].forEach((m) => m._icon.style.filter = hue_offline)
            }
        }
    }
       
    // Task 6
    addMapClickEventListener((e) => {

        if (can){
            let marker = {
                location: e.latlng,
                title: name,
                hue: Math.floor(Math.random() * 360)
            }

            api.addLocation(marker).then(marker => {
                anadirMarcador(marker)
                ws.message2(marker)
            })

        }
    })

    function anadirMarcador(marker) {
        let Lmarker = showMarker(marker) 
        let nameAux = marker.title
        Lmarker.bindTooltip(marker.title).openTooltip();   
        if (!names.hasOwnProperty(nameAux)) {
            names[nameAux] = []
        }
        names[nameAux].push(Lmarker)
        if (names[nameAux].length > 1) {
            L.polyline([names[nameAux][names[nameAux].length-2].getLatLng(), Lmarker.getLatLng()], {color: 'red'}).addTo(leaflet_map);
        }
    }

    document.getElementById("log in").addEventListener("click", function (e) {
        if (!can){
            can = true;
            name = document.getElementById("login").value
            ws.logUser(name)
            e.preventDefault();
            ws.addFunction(anadirMarcador, refrescarMapa, updateUsers)
            api.getLocation().then((markers)=>{
                
                markers.forEach((marker) => {
                    let Lmarker = showMarker(marker) 
                    if (!names.hasOwnProperty(marker.title)) {
                        names[marker.title] = []
                    }
                    names[marker.title].push(Lmarker)
                    Lmarker.bindTooltip(marker.title);
                })
                for (let name in names) {
                    if (names[name].length > 1) {
                        for (let i = 1; i < names[name].length; i++) {
                            L.polyline([names[name][i-1].getLatLng(), names[name][i].getLatLng()], {color: 'red'}).addTo(leaflet_map);
                        }
                    }
                }
            })
            
        }
    });
    document.getElementById("clear").addEventListener("click", function (e) {

        e.preventDefault();

        api.deleteLocation().then(()=>{
            refrescarMapa()
            ws.clear()
        })

    });

}

/**
 * Lookup the route matching the url and call the corresponding function
 * @param {URL} url
 * @returns true if the url matches a route, false otherwise
 */
function route(url, save = true) {

    let pathname = url.pathname;

    //Task 2
    //TODO complete the client-side routing table
    const routes =
    {
        "/map": () => refresh_map_list(),
        "/map/new": () => refresh_map_editor("new"),
        "/map/users": () => refresh_user_map(),
        "/map/:id": (id) => refresh_map_view(id),
        "/map/:id/edit": (id) => refresh_map_editor(id),
        
    };

    let href = url.pathname.split("/");

    let args = [];

    let match = Object.keys(routes).find((path) => {

        let p = path.split("/");

        if (p.length == href.length) {

            return p.every((segment, i) => {

                if (segment.startsWith(":")) {
                    args.push(href[i]);
                }

                return segment.startsWith(":") || segment == href[i];

            });

        }

        return false;

    });

    if (match) {
        routes[match](...args);

        //Task 8
        //TODO push the current url to the browser history
        //history.pushState(null, null, url.pathname)

        //window.location.hash(url.href)
        if (save) {
            history.pushState(null, null, '#'+url.pathname);
        }
        return true;

    } else {
        console.log("404 unknown link: " + url.pathname);

        return false;
    }

}





function init() {

    //Task 8
    //TODO call the client-side router based on the current url fragment value

    a = window.location.hash;
    if (a){
        b = a.substring(1);
        route(new URL(window.location.origin + b));
    }else{

        //by default, refresh the map list view
        refresh_map_list();
    }

    //intercept all links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            //make sure the browser does not escape the single-page app
            e.preventDefault();

            let url = new URL(e.currentTarget.href);

            //call the client-side router based on the link target href
            route(url);

        });
    })

    window.addEventListener("popstate", (e) => {
        //Task 8
        //TODO call the client-side router based on the url retrieved from the browser history
        let a = window.location.hash;
        b = a.substring(1);
        route(new URL(window.location.origin + b), false);
    });

} //init
