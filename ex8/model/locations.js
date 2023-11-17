/**
 * Web Atelier 2023 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Marker list model
 *
 * Task 4
 *
 */

let { ObjectId } = require("mongodb");

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

let make_location_list = function (client, db_name, collection_name) {

    let collection = client.db(db_name).collection(collection_name);

    client.on('connect', () => {
        collection = client.db(db_name).collection(collection_name);
    });

    function checkMapId(marker) {
        if (marker.map_id == undefined || !(marker._id instanceof ObjectId)) {
            marker.map_id = new ObjectId(marker.map_id);
        }
    }

    /**
     * Retrieves the list of markers from the database.
     *
     * @param {string} map_id - The ID of the map to retrieve the markers for.
     * @returns {Array} An array with all marker objects.
     */
    async function getMarkers() {
        return collection.find({}).toArray();
    }

    

    /**
     * Adds a new marker to the list of markers and assigns it an ID if it doesn't have one.
     *
     * @param {Object} marker - The marker object to add to the list.
     * @param {string} marker.map_id - The ID of the map to add the marker to.
     * @returns {Object} The added marker object, with an assigned or existing ID.
     */
    async function addMarker(marker) {
        checkMapId(marker);

        let result = await collection.insertOne(marker);
        return result;
    }

    /**
     * Empty the list of markers
     */
    function clear() {
        return collection.deleteMany({});
    }

    // public methods of the map-list module
    return {
        clear,
        addMarker,
        getMarkers,
    }

}

module.exports = make_location_list;
