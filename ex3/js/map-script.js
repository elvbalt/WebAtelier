/**
 * Web Atelier 2023 3 - Object-Oriented JavaScript
 *
 * Map list and editor behavior
 *
 * Student: __Elvira Baltasar__
 *
 */




/**
 * Task 2
 *
 * Initializes the map gallery list page.
 */
function initMapList() {

    //switch the localStorage key to avoid conflicts with the user's data
    let url = new URL(window.location);
    let storage_key = url.searchParams.get("test");

    let map_list = make_map_list(storage_key);

    let list = [];

    function reload() {

        //1. load maps from the localStorage and render the map list

        map_list.load();

        map_list.render("main.map-index"); 

        //2. setup event listeners

        //2.1 setup the event listeners for the delete map button
        document.querySelectorAll("form[action$='DELETE']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();
                let id = e.target.parentNode.dataset.mapid;

                map_list.deleteMap(id);
                
                reload();

                //TODO delete the map and reload the page
            });

        });

        //2.1 setup the event listeners for the clone map button
        //"form[action$='CLONE'] no es asi pq clone no es un metodo ?
        document.querySelectorAll("form[action$='clone']").forEach(form => {

            form.addEventListener("submit", function (e) {

                e.preventDefault();

                let id = e.target.parentNode.dataset.mapid;

                map_list.cloneMap(id);

                reload();

                //TODO clone the map and reload the page
            });

        });

        //2.1 setup the event listeners for the favourite toggle button
        document.querySelectorAll("form[action$='PATCH']").forEach(form => {

            form.addEventListener("submit", function (e) {
                e.preventDefault();

                let id = e.target.parentNode.dataset.mapid;

                map_list.toggleFav(id);

                reload();

                //TODO put favourite the map and reload the page
            });

        });

        
        //document.querySelector("sort");

        let sort = document.getElementById('sort');

            sort.addEventListener("change", function (e) {
                
                list = map_list.getMaps();

                var sortBy = this.value;

                switch (sortBy) {
                    case 'Lat':
                        list.sort((a, b) => {
                            return a.center.lat - b.center.lat;
                        });
                    break;
                    case 'Lng':
                        list.sort((a, b) => {
                            return a.center.lng - b.center.lng;
                        });
                    break;
                    case 'zoomLevel':
                        list.sort((a, b) => {
                            return a.zoom - b.zoom;
                        });
                        
                    break;
                    case 'title':
                        list.sort((a, b) => {
                            return a.title.localeCompare(b.title);
                        });
                    break;
                }
                map_list.setMaps(list);
                reload();
            });
        
        

    }

    reload();

    //when localStorage changes refresh the map list
    window.addEventListener("storage", reload);

}




/**
 * Task 3
 *
 * Initializes the map editor page.
 */
function initMapEditor() {

    let url = new URL(window.location);

    //get the map id from the URL
    let id = url.searchParams.get("id");

    //switch the localStorage key to avoid conflicts with the user's data in the tests
    let storage_key = url.searchParams.get("test");

    let map_list = make_map_list(storage_key);

    //TODO get the image from the list after loading it from the localStorage

    map_list.load();
  
    //TODO initialize the default map and hide the update button if the map is not found

    let map_obj;
    if (id === undefined || map_list.getMap(id) === undefined){
        map_obj = {
                zoom: 2,
                center: { lat: 0, lng: 0},
                tiles: "osm",
                title: "New Map"
        }
        document.querySelector("button[data-action='update']").style.display = "none";
    }else{
        map_obj = map_list.getMap(id);
    }
    
    map = createMap([map_obj.center.lat, map_obj.center.lng] , map_obj.zoom);

    //TODO initialize the leaflet map and the tiles layer using initMapTiles
    let layer = initMapTiles(map_obj, map);


    /**
     * Initializes map tiles based on the data for a given map object.
     */
    function SyncTilesToMap() {
        let tiles = form2obj().tiles;
        if (layer) { layer.remove(); }
        layer = initMapTiles({tiles}, map);
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
        let map_obj = form2obj();
        map.setView([map_obj.center.lat, map_obj.center.lng], map_obj.zoom);
        SyncTilesToMap()
    }

    /**
     * Updates the form input values from the map;
     */
    function SyncMapToForm() {
        var zoom = map.getZoom();
        var center = map.getCenter();
        //TODO update the values of the corresponding form input fields
        document.getElementById("zoom").value = zoom;
        document.getElementById("lat").value = center.lat;
        document.getElementById("lng").value = center.lng;
    }

    //Initialize the form input fields from the map object
    SyncMapToForm();
    document.getElementById("tiles").value = map_obj.tiles;
    document.getElementById("title").value = map_obj.title;

    //TODO setup the zoomend and moveend event listeners for the map
    map.on('zoomend', SyncMapToForm);
    map.on('moveend', SyncMapToForm);

    //TODO setup the change event listeners for the form input fields
    document.getElementById("zoom").addEventListener("change", SyncFormToMap);
    document.getElementById("tiles").addEventListener("change", SyncFormToMap);
    document.getElementById("lat").addEventListener("change", SyncFormToMap);
    document.getElementById("lng").addEventListener("change", SyncFormToMap);


    let createBtn = document.querySelector("button[data-action='create']");
    if (createBtn) {

        createBtn.addEventListener("click", function (e) {

            e.preventDefault();

            //TODO create a new map from the form input data and add it to the list
            map_list.addMap(form2obj());

        });

    }

    let updateBtn = document.querySelector("button[data-action='update']");
    if (updateBtn) {

        updateBtn.addEventListener("click", function (e) {

            e.preventDefault();
            map_list.replaceMap(id, form2obj());
            
        });

    }

    let centerBtn = document.querySelector("button[data-action='zcenter']");

    if (centerBtn) {
        centerBtn.addEventListener("click", function (e) {

            e.preventDefault();
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                  var userLat = position.coords.latitude;
                  var userLng = position.coords.longitude;
                  map.setView([userLat, userLng], 12);
                });
              } 
            
        });
    }

    //TODO add the update button event listener and replace the map object in the list
}
