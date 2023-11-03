
let leaf_map = L.map("map").setView([map.center.lat, map.center.lng] , map.zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(leaf_map);

marker_layer = L.layerGroup().addTo(leaf_map);


let layer = initMapTiles(map, leaf_map);


function SyncTilesToMap() {
    let tiles = form2obj().tiles;
    if (layer) { layer.remove(); }
    layer = initMapTiles({tiles}, leaf_map);
}

/**
     * Reads the form data and returns a map object with the title, zoom, center and tiles fields.
     * @returns {Object} the map object based on the form data (TODO)
     */
function form2obj() {

    let title = document.getElementById("title").value;
    let zoom = parseInt(document.getElementById("zoom").value);
    let lat = parseFloat(document.getElementById("lat").value);
    let lng = parseFloat(document.getElementById("lng").value);
    let tiles = document.getElementById("tiles").value;

        return {
            //TODO construct the map object from the above values
            "zoom": zoom,
            "title": title,
            "tiles": tiles,
            "center": {
                "lat": lat,
                "lng": lng
            }
        }
    }

    /**
     * Updates the map from the form input values;
     */
    function SyncFormToMap() {
        let map = form2obj();
        leaf_map.setView([map.center.lat, map.center.lng], map.zoom);
        SyncTilesToMap()
    }

    /**
     * Updates the form input values from the map;
     */
    function SyncMapToForm() {
        var zoom = leaf_map.getZoom();
        var center = leaf_map.getCenter();
        //TODO update the values of the corresponding form input fields
        document.getElementById("zoom").value = zoom;
        document.getElementById("lat").value = center.lat;
        document.getElementById("lng").value = center.lng;
    }

    document.getElementById("tiles").addEventListener("change", SyncFormToMap);
    
    //Initialize the form input fields from the map object
    SyncMapToForm();
    document.getElementById("tiles").value = map.tiles;
    document.getElementById("title").value = map.title;

    //TODO setup the zoomend and moveend event listeners for the map
    leaf_map.on('zoomend', SyncMapToForm);
    leaf_map.on('moveend', SyncMapToForm);

