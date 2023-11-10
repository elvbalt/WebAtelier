/**
 * Web Atelier 2023  - 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Author: __Elvira Baltasar__
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
        document.querySelector("main").innerHTML = ejs.views_map_list({ maps });;

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

                api.deleteMap(id);

                //TODO prevent the browser from submitting the form
                //TODO delete the map and then, refresh the map list
                refresh_map_list();
            });

        });

        dom.querySelectorAll("form[action$='clone']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                //TODO prevent the browser from submitting the form
                //TODO clone the map and then, refresh the map list
                api.cloneMap(id);

                refresh_map_list();

            });

        });

        document.querySelectorAll("form[action$='PATCH']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                //TODO prevent the browser from submitting the form
                //TODO toggle the map fav bit and then, refresh the map list
                api.toggleFav(id);
                refresh_map_list();

            });

        });

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

    leaflet_map.on('zoomend', SyncMapToForm);
    leaflet_map.on('moveend', SyncMapToForm);

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

    function showMarker(marker) {

        let m = L.marker(marker.location, {
            icon: getMarkerIcon(marker.type),
            draggable: _editable,
            autoPan: _editable
        }).addTo(marker_layer);

        m._icon.style.filter = `hue-rotate(${marker.hue}deg)`;

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

            });

        }

    }

    return function (map, editable = false) {

        _editable = editable;

        SyncMapPosition(map);
        tile_layer = initMapTiles(map, leaflet_map);

        //Task 6
        //TODO load the markers from the API and display them on the map

        return {
            SyncTilesToMap,
            SyncMapPosition,
            addMapClickEventListener,
            addMarkerClickEventListener,
            showMarker,
            getMarkerIcon
        };
    }

})(); //showMap IIFE


/**
 * Task 4
 * @param {String} id of the map to be displayed
 */
function refresh_map_view(id) {

    document.title = "Map View";

    //TODO get the map from the API and display it using showMap
    //TODO display the map title
    //TODO display a link to edit the map


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

    let default_map = {
        zoom: 2,
        center: { lat: 0, lng: 0 },
        tiles: "osm",
        title: "New Map"
    };

    if (id == "new") {
        setup_map_editor(true, default_map);
    } else {
        api.getMap(id).then(setup_map_editor.bind(this, false));
    }

    function setup_map_editor(create, map) {

        /**
         * Updates the leaflet map tiles or view from the form input values.
         * @param {Function} f - the function to be called with the map object obtained from the form
         */
        function SyncFormToMap(f) {
            let map_obj = form2obj();
            f(map_obj);
        }


        let { SyncTilesToMap,
              SyncMapPosition,
              addMapClickEventListener,
              addMarkerClickEventListener,
              showMarker,
              getMarkerIcon
            } = showMap(map, true);

        //TODO display the map editor form

        //setup the change event listeners for the form input fields
        document.getElementById("zoom").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition));
        document.getElementById("lat").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition));
        document.getElementById("lng").addEventListener("change", SyncFormToMap.bind(this, SyncMapPosition));
        document.getElementById("tiles").addEventListener("change", SyncFormToMap.bind(this, SyncTilesToMap));

        let createBtn = document.querySelector("button[data-action='create']");
        if (createBtn) {

            createBtn.addEventListener("click", function (e) {

                //TODO prevent the browser from submitting the form
                //TODO create a new map object from the form input data
                //TODO post the new map object to the server through the API
                //TODO then, display the newly created map


            });

        }

        let updateBtn = document.querySelector("button[data-action='update']");
        if (updateBtn) {

            updateBtn.addEventListener("click", function (e) {

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


        });

    };

}

/**
 * Lookup the route matching the url and call the corresponding function
 * @param {URL} url
 * @returns true if the url matches a route, false otherwise
 */
function route(url) {

    //Task 2
    //TODO complete the client-side routing table
    const routes =
    {
        "/map": () => refresh_map_list(),
        "/map/new": () => refresh_map_editor("new"),
        "/map/:id": () => refresh_map_view(id),
        "/map/:id/edit": () => refresh_map_editor(id)
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

        return true;

    } else {
        console.log("404 unknown link: " + url.pathname);

        return false;
    }

}



function init() {

    //Task 8
    //TODO call the client-side router based on the current url fragment value

    //by default, refresh the map list view
    refresh_map_list();

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
    });

} //init