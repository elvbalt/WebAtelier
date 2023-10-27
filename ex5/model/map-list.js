/**
 * Web Atelier 2023 5 - Web Apps with Express.js
 *
 * Map list model
 *
 * Student: __ELVIRA BALTASAR__
 *
 * Task 1
 *
 */

const fs = require('fs-extra');
const path = require('path');

/**
 * Create a map list object whose content is stored as JSON file
 * @param {String} filename of the .json file to use for storage
 * @returns the map list object
 */
let make_map_list = function (filename = path.resolve("./model/maps.json")) {

    //private variables of the closure
    let list = [];
    
    function getNewID(){
        let max = 0
        list.forEach(map => {
            if(parseInt(map.id) > max) max = parseInt(map.id)
        })
        return (max + 1).toString()
    }
    /**
     * Retrieves the list of maps.
     *
     * @returns {Array} An array with all map objects.
     */
    function getMaps() {
        return list;
    }

    /**
     * Retrieves a map by its ID from the list of maps.
     *
     * @param {string} id - The ID of the map to retrieve.
     * @returns {Object|undefined} The map with the specified ID, or undefined if not found.
     */
    function getMap(id) {
        //TODO fill with the implementation from ex3
        if (id == undefined || list.length == 0 || id == null){
            return undefined;
        }
        
        return list.find((element) => element.id == id.toString());
    }


    /**
     * Adds a new map to the list of maps and assigns it an ID if it doesn't have one.
     * Should save the updated list to local storage.
     *
     * @param {Object} map - The map object to add to the list.
     * @returns {Object} The added map object, with an assigned or existing ID.
     */
    function addMap(map) {
        //TODO fill with the implementation from ex3
        if (map.id === undefined){ 
           
            map.id = getNewID();
        }

        list.push(map);

        save();

        return map;
    }

    /**
     * Creates a copy of an existing map by its ID and adds it to the list.
     * Should save the updated list to local storage.
     *
     * @param {string} id - The ID of the map to clone.
     * @returns {Object|undefined} The cloned map object, or undefined if the source map doesn't exist.
     */
    function cloneMap(id) {
        //TODO fill with the implementation from ex3
        //     make sure it performs a deep copy of the map object
        if (getMap(id) === undefined){
            return undefined;
        }

        //let map2 ={...getMap(id)}; // when you add property to the object, it doesn´t create a correct copy, so you need to use deep copy
        let map2 = JSON.parse(JSON.stringify(getMap(id)));
        map2.id = undefined;

        addMap(map2);

        save();

        return map2;
    }

    /**
     * Replaces a map with a new map object by its ID in the list.
     * If the ID doesn't exist, a new map is added to the list.
     * If the map object does not have an id, it is assigned the specified ID.
     * Should save the updated list to local storage.
     *
     *
     * @param {string} id - The ID of the map to replace or add.
     * @param {Object} map - The new map object to replace or add.
     */
    function replaceMap(id, map) {
        //TODO fill with the implementation from ex3
        if (id === undefined){
            addMap(map);
        }
        let m = list.findIndex((element) => element.id === id.toString());
        if (m === -1){
            addMap(map);
        }
        
        map.id = id;
        list.splice(m, 1, map);

        save();
    }

    /**
     * Deletes a map by its ID from the list of maps.
     * Should save the updated list to local storage.
     *
     * @param {string} id - The ID of the map to delete.
     */
    function deleteMap(id) {
        //TODO fill with the implementation from ex3
        if (id === undefined){
            return undefined;
        }
        let m = list.findIndex((element) => element.id === id.toString());
        if (m === -1){
            return undefined;
        }
        //_id = Math.min(list[m].id, _id);
        list.splice(m, 1);
        save();
    }

    /**
     * Toggles the 'fav' property of a map by its ID.
     * If the map is favorited, it will be unfavorited, and vice versa.
     * Should save the updated list to local storage.
     *
     * @param {string} id - The ID of the map to toggle favorited status.
     */
    function toggleFav(id) {
        //TODO fill with the implementation from ex3
        if (id === undefined || getMap(id) === undefined){
            return undefined;
        }

        let fav = getMap(id).fav;
        getMap(id).fav = !fav;
        save();
    }

    /**
     * Counts the number of maps in the list.
     *
     * @returns {number} The number of maps in the list.
     */
    function count() {
        return list.length;
    }

    /**
     * Saves the current state of the list as JSON into the file named filename.
     */
    function save() {
        //TODO complete using fs.writeJSONSync

        fs.writeJSONSync(filename, list)
    }

    /**
     * Loads data from the filename and updates the list with the loaded data if available.
     * If no data is available or the JSON in the file is invalid, the list is not changed.
     */
    function load() {
        //TODO complete using fs.readJSONSync
        //si el json es invalido solo devuelve null y ya con { throws: false }
        let obj = fs.readJSONSync(filename, { throws: false }) 
        if (obj != null && obj != undefined && obj.length > 0){
            list = obj
        }


        //console.log(list)
    }

    /**
     * Empty the list of maps
     */
    function clear() {
        list = [];
        save();
    }

    /**
     * Resets the state by initializing the list with some test data.
     * This method is used for testing purposes.
     * The data is expected by the tests and should not be changed.
     */
    function reset() {
        //_id = 25;
        list = [
            {
                "zoom": 7,
                "title": "Konkordiaplatz",
                "tiles": "natgeo",
                "fav": true,
                "desc": "",
                "id": "0",
                "center": {
                    "lat": 46.807098698384735,
                    "lng": 9.956003765810221
                }
            },
            {
                "zoom": 15,
                "title": "Lugano Satellite",
                "tiles": "ESRI_world_imagery",
                "id": "1",
                "center": {
                    "lat": 46.00976488037914,
                    "lng": 8.967461585998537
                }
            },
            {
                "zoom": 5,
                "title": "Europe",
                "tiles": "watercolor",
                "id": "2",
                "center": {
                    "lat": 45.166547157856016,
                    "lng": 16.523437500000004
                }
            },
            {
                "zoom": 15,
                "title": "Ritom",
                "tiles": "ESRI_world_imagery",
                "desc": "Beautiful Ticino Lake",
                "id": "3",
                "center": {
                    "lat": 46.539307083117805,
                    "lng": 8.691687583923342
                }
            },
            {
                "zoom": 8,
                "title": "Switzerland",
                "tiles": "natgeo",
                "desc": "",
                "id": "4",
                "center": {
                    "lat": 46.5854469512097,
                    "lng": 8.189412981840018
                }
            },
            {
                "zoom": 9,
                "title": "Corse",
                "tiles": "ESRI_world_imagery",
                "id": "5",
                "center": {
                    "lat": 42.07478160216737,
                    "lng": 9.396057128906252
                }
            },
            {
                "zoom": 8,
                "title": "Alps",
                "tiles": "ESRI_world_imagery",
                "id": "6",
                "center": {
                    "lat": 45.71193311776845,
                    "lng": 10.6512451171875
                }
            },
            {
                "zoom": 13,
                "title": "Zurich",
                "tiles": "osm",
                "desc": "",
                "id": "7",
                "center": {
                    "lat": 47.38451105175862,
                    "lng": 8.526077968100157
                }
            },
            {
                "zoom": 8,
                "title": "Jyväskylä",
                "tiles": "natgeo",
                "desc": "",
                "id": "8",
                "center": {
                    "lat": 61.976396187471956,
                    "lng": 26.427612304687504
                }
            },
            {
                "zoom": 12,
                "title": "Interlaken",
                "tiles": "Swiss_Imagery",
                "id": "9",
                "center": {
                    "lat": 46.68866222628092,
                    "lng": 7.859344482421876
                }
            },
            {
                "zoom": 11,
                "title": "Berlin",
                "tiles": "topo",
                "id": "10",
                "center": {
                    "lat": 52.469605989368794,
                    "lng": 13.311309814453127
                }
            },
            {
                "zoom": 4,
                "title": "Down Under",
                "tiles": "toner",
                "id": "11",
                "center": {
                    "lat": -29.420460341013133,
                    "lng": -221.13281250000003
                }
            },
            {
                "zoom": 14,
                "title": "Venice",
                "tiles": "watercolor",
                "fav": true,
                "desc": "",
                "id": "12",
                "center": {
                    "lat": 45.435021772040116,
                    "lng": 12.336096870057816
                }
            },
            {
                "zoom": 7,
                "title": "Iceland",
                "tiles": "watercolor",
                "fav": true,
                "desc": "",
                "id": "14",
                "center": {
                    "lat": 65.1091177513242,
                    "lng": -18.962261537418925
                }
            },
            {
                "zoom": 13,
                "title": "Lugano",
                "tiles": "Swiss_Color",
                "id": "16",
                "center": {
                    "lat": 46.01194069320304,
                    "lng": 8.961061835289003
                }
            },
            {
                "zoom": 7,
                "title": "New Zealand",
                "tiles": "watercolor",
                "fav": true,
                "desc": "",
                "id": "17",
                "center": {
                    "lat": -40.9448215590864,
                    "lng": 173.37441762352876
                }
            },
            {
                "zoom": 8,
                "title": "Hawaii",
                "tiles": "natgeo",
                "id": "19",
                "center": {
                    "lat": 20.223543059033542,
                    "lng": -157.08251953125003
                }
            },
            {
                "zoom": 16,
                "title": "Tremola",
                "tiles": "Swiss_Color",
                "id": "20",
                "center": {
                    "lat": 46.54505572291053,
                    "lng": 8.573026657104494
                }
            },
            {
                "zoom": 11,
                "title": "Netherlands",
                "tiles": "osm",
                "id": "21",
                "center": {
                    "lat": 52.17793193118188,
                    "lng": 5.003585815429688
                }
            },
            {
                "zoom": 8,
                "title": "Colombia",
                "tiles": "topo",
                "id": "22",
                "center": {
                    "lat": 4.631179340411012,
                    "lng": -74.08905029296876
                }
            },
            {
                "zoom": 7,
                "title": "Great Lakes",
                "tiles": "toner",
                "desc": "",
                "id": "23",
                "center": {
                    "lat": 44.91753133529358,
                    "lng": -84.56176757812501
                }
            },
            {
                "zoom": 15,
                "title": "Hainan",
                "tiles": "ESRI_world_imagery",
                "id": "24",
                "center": {
                    "lat": 19.66190617905129,
                    "lng": 109.17442560195924
                }
            }
        ]
    }

    // public methods of the map-list module
    return {
        clear,
        reset,
        load,
        save,
        count,
        addMap,
        getMap,
        getMaps,
        replaceMap,
        deleteMap,
        cloneMap,
        toggleFav,
        getNewID
    }

}

module.exports = make_map_list;
