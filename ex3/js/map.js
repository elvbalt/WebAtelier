/**
 * Web Atelier 2023 2 - JavaScript
 *
 * Map functions
 *
 * Read-only file (do not edit)
 *
 */



_leaflet = loadLeaflet('map');


//--------------------------------------------------------------------------------------
// Task 3, 4, 5
//
// Use the following global functions to interact with the map and display the data
//--------------------------------------------------------------------------------------


/**
 * Display a map inside the document element with id='map'
 * @param {Number[2]} center, array with latitude and longitude
 * @param {Integer]} zoom, integer with zoom level (default 2)
 */
let createMap = _leaflet("createMap");

/**
 * Display a colored marker inside the map at the given coordinates
 * @param {Number} lat, latitude
 * @param {Number} lng, longitude
 * @param {Number} hue, hue to color the marker (0-360) - by default a random marker color is used
 * @returns {void} nothing, since the marker is added asynchronously
 */
let createMarker = _leaflet("createMarker");

/**
 * Remove all markers from the map
 */
let removeMarkers = _leaflet("removeMarkers");

/**
 * @param {Array} cities, the array of cities matching the filter
 */
function displayNumberOfCities(cities) {
    let citiesCount = cities.length;
    document.getElementById("cities-count").innerHTML = format_thousands(citiesCount);
}

/**
 * @param {Integer} population, the population level selected to filter the data
 */
function displayPopulationLevel(population) {
    document.getElementById("cities-population").innerHTML = format_thousands(population);
}



//--------------------------------------------------------------------------------------
// The following code transforms the Leafleft object-oriented API into a functional API
//--------------------------------------------------------------------------------------

function loadLeaflet(dom_id) {

    //we need to set the shadow size to 0 to make the markers display faster
    var icon = new L.Icon.Default();
    icon.options.shadowSize = [0, 0];

    //reference to the Leaflet map API
    let map;

    //reference to the Leaflet layer containing the markers
    let marker_layer;

    /**
     * Display the marker on the map with the given hue
     * @param {Marker Object} m with the following properties:
     * - lat: latitude
     * - lng: longitude
     * - hue: hue to color the marker (0-360)
     */
    function showMarker(m) {

        let marker = L.marker([m.lat, m.lng], { icon, keyboard: false, interactive: false }).addTo(marker_layer);

        marker._icon.style.filter = `hue-rotate(${m.hue}deg)`;

    }

    //adding thousands of markers at once is slow
    //so we add them one by one asynchronously
    let pump = make_fifo_pump(showMarker);

    function createMap(center, zoom = 2) {
        map = L.map(dom_id).setView(center, zoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        marker_layer = L.layerGroup().addTo(map);
        return map
    }

    function createMarker(lat, lng, hue = Math.random()*360) {

        if (pump === undefined) {
            showMarker({ lat, lng, hue });
        } else {
            pump({ lat, lng, hue });
        }

    }

    function removeMarkers() {

        if (pump !== undefined) {
            //empty the pump
            pump();
        }

        marker_layer.clearLayers();

    }

    return function (k) {
        if (k == "createMap") return createMap;
        if (k == "createMarker") return createMarker;
        if (k == "removeMarkers") return removeMarkers;
        if (k == "map") return {map, marker_layer};
    }
    //return [createMarker, removeMarkers];

}

