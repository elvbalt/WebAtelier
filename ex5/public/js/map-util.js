/**
 * Web Atelier 2023 3 - Object-Oriented JavaScript
 *
 * Map utility functions
 *
 * Read-only file
 *
 */


/**
 * Initializes map tiles based on map data for a given map object.
 * Use this function to switch between different map tile providers
 *
 * @param {Object} map_data - The map object, which should include the tiles field,
 * identifying one of the following tile providers:
 * - watercolor
 * - toner
 * - osm
 * - topo
 * - natgeo
 * - ESRI_world_imagery
 * - Swiss_Color
 * - Swiss_Imagery
 * @param {Object} map - The leaflet map object in which the tiles will be displayed.
 */
function initMapTiles(map_data, map) {

    const tiles = {
        "watercolor": () => {
            return L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                minZoom: 1,
                maxZoom: 16
            });
        },
        "toner": () => L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 1,
            maxZoom: 16
        })
        ,
        "osm": () => {
            return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            });
        },
        "topo": () => L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png',
            {
                subdomains: 'abc',
                attribution: '© OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)'
            }),
        "natgeo": () => {
            return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
                maxZoom: 16
            });
        },
        "ESRI_world_imagery": () => {
            return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            });
        },
        "Swiss_Color": () => L.tileLayer('https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg', {
            attribution: '&copy; <a href="https://www.swisstopo.admin.ch/">swisstopo</a>',
            minZoom: 2,
            maxZoom: 18,
            bounds: [[45.398181, 5.140242], [48.230651, 11.47757]]
        }),
        "Swiss_Imagery": () => L.tileLayer('https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg', {
            attribution: '&copy; <a href="https://www.swisstopo.admin.ch/">swisstopo</a>',
            minZoom: 2,
            maxZoom: 19,
            bounds: [[45.398181, 5.140242], [48.230651, 11.47757]]
        })
    }

    try {
        return tiles[map_data.tiles]().addTo(map);
    } catch (e) {
        console.log(e);
    }
}

/**
 * Initializes a non-interactive map thumbnail based on map data.
 *
 * @param {Object} map_data - The data representing the map and its configuration.
 * @param {String} map_data.id - The ID of the map. It assumes that a DOM element with ID "map-thumb-" + map_data.id exists.
 */
function initMapThumb(map_data) {

    var map = L.map('map-thumb-' + map_data.id, {
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        boxZoom: false,
        doubleClickZoom: false,
        keyboard: false,
        scrollWheelZoom: false,
        tap: false
    }).setView(map_data.center || [map_data.lat, map_data.lng], Math.max(1, map_data.zoom - 2));

    initMapTiles(map_data, map);

}

//intercept map creations and add them to a global list
L.Map.addInitHook(function () {
    L.maps = L.maps || [];
    L.maps.push(this);
});