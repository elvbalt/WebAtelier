/**
 * Web Atelier 2023 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Map collection model
 *
 * Student: __STUDENT NAME__
 *
 * Task 1
 *
 * Hint: hunt for useful code snippets in the marker-list-db.js file
 *
 */

let { ObjectID } = require("mongodb");

/**
 * Create a new StatusError object with the specified status code.
 * @param {Number} status - The status code of the error.
 * @returns the new StatusError object.
 */
function StatusError(status) {

    let messages = {
        404: "Not found",
        400: "Bad request",
        500: "Internal server error"
    }

    let err = new Error(messages[status] || "Unknown error");
    err.status = status;

    return err;
}

/**
 * Create a new map collection object and connect it to the given database and collection.
 * @param {MongoClient} client - The MongoClient object already connected to the database.
 * @param {string} db_name - The name of the database to connect to.
 * @param {string} collection_name - The name of the collection to connect to.
 */
let make_map_list = function (client, db_name, collection_name) {

    const collection = client.db(db_name).collection(collection_name);

    /**
     * Retrieves the collection of maps from the map collection.
     *
     * @returns {Array} An array with all map objects found in the collection.
     */
    async function getMaps() {
        //TODO find all objects in the collection
    }

    /**
     * Retrieves a map by its ID from the map collection
     *
     * @param {string} id - The ID of the map to retrieve.
     * @returns {Object|undefined} The map with the specified ID, or undefined if not found.
     * @throws {StatusError} the status code will be 404 if the map is not found.
     */
    async function getMap(id) {
        //TODO find the object with the specified ID
    }

    /**
     * Adds a new map to the collection of maps and assigns it an ID if it doesn't have one.
     *
     * @param {Object} map - The map object to add to the collection.
     * @returns {Object} The added map object, with an assigned or existing ID.
     */
    async function addMap(map) {
        //TODO insert the map object into the db collection
        return map;
    }

    /**
     * Creates a copy of an existing map by its ID and adds it to the collection.
     *
     * @param {string} id - The ID of the map to clone.
     * @returns {Object|undefined} The cloned map object.
     * @throws {StatusError} the status code will be 404 if the map is not found.
     */
    async function cloneMap(id) {
        //TODO add a copy of the existing object to the collection
    }

    /**
     * Replaces a map with a new map object identified by its ID in the collection.
     * If the ID doesn't exist, a new map is added to the collection.
     * If the map object does not have an _id, it is assigned the specified ObjectID(id).
     *
     * @param {string} id - The ID of the map to replace or add.
     * @param {Object} map - The new map object to replace or add.
     * @returns {Object} The new map object and whether the object was added or replaced.
     */
    async function replaceMap(id, map) {
        //TODO replace the existing object or insert a new object if not found
        let found = false;
        return { found, map };

    }

    /**
     * Deletes a map by its ID from the collection of maps.
     *
     * @param {string} id - The ID of the map to delete.
     * @returns {Object} The deleted map object.
     * @throws {StatusError} the status code will be 404 if the map is not found.
     */
    async function deleteMap(id) {
        //TODO find the existing object and delete it from the collection
    }

    /**
     * Toggles the 'fav' property of a map by its ID.
     * If the map is favorited, it will be unfavorited, and vice versa.
     *
     * @param {string} id - The ID of the map of which the favorite status should be toggled.
     * @throws {StatusError} the status code will be 404 if the map is not found.
     * @returns {Promise} resolving to undefined
     */
    async function toggleFav(id) {
        //TODO check whether the object already exists

        await collection.updateOne({ _id: ObjectID(id) }, [{ $set: { fav: { $not: '$fav' } } }]);
    }

    /**
     * Counts the number of maps in the collection.
     *
     * @returns {Promise} which resolves to the number of maps in the collection.
     */
    async function count() {
    }

    /**
     * Empty the collection of maps
     */
    async function clear() {
    }

    /**
     * Resets the state by initializing the collection with some test data.
     * This method is used for testing purposes.
     * The data is expected by the tests and should not be changed.
     */
    async function reset() {
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
        await collection.insertMany(list);
    }

    // public methods of the map list object
    return {
        clear,
        reset,
        count,
        addMap,
        getMap,
        getMaps,
        replaceMap,
        deleteMap,
        cloneMap,
        toggleFav
    }

}

module.exports = make_map_list;
