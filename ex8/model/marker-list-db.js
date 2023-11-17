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

let make_marker_list = function (client, db_name, collection_name) {

    let collection = client.db(db_name).collection(collection_name);

    client.on('connect', () => {
        collection = client.db(db_name).collection(collection_name);
    });

    function checkMapId(marker) {
        if (marker.map_id == undefined) {
            throw new StatusError(500); //trying to add a marker without a map_id
        }
        if (!(marker.map_id instanceof ObjectId)) {
            marker.map_id = new ObjectId(marker.map_id);
        }
    }

    /**
     * Retrieves the list of markers from the database.
     *
     * @param {string} map_id - The ID of the map to retrieve the markers for.
     * @returns {Array} An array with all marker objects.
     */
    async function getMarkers(map_id) {
        try {
            id = new ObjectId(map_id)
        } catch {
            throw StatusError(404)
        }

        return collection.find({map_id: id}).toArray();
    }

    /**
     * Retrieves a marker by its ID from the database
     *
     * @param {string} id - The ID of the marker to retrieve.
     * @returns {Object|undefined} The marker with the specified ID, or undefined if not found.
     * @throws {StatusError} the status code will be 404 if the marker is not found.
     */
    async function getMarker(id) {
        try {
            id = new ObjectId(id)
        } catch {
            throw StatusError(404)
        }
        let found = await collection.findOne({ _id: id });
        if (!found) {
            throw new StatusError(404);
        }
        return found;
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

        let added = await collection.findOne({ map_id: result.insertedId });

        // _id added by the database
        // console.log(marker._id);

        return added;
    }

    /**
     * Replaces a marker with a new marker object by its ID in the list.
     * If the ID doesn't exist, a new marker is added to the list.
     * If the marker object does not have an _id, it is assigned the specified ObjectID(id).
     *
     * @param {string} id - The ID of the marker to replace or add.
     * @param {Object} marker - The new marker object to replace or add.
     * @returns {Object} The new marker object and whether the object was added or replaced.
     */
    async function replaceMarker(id, marker) {
        checkMapId(marker);

        try {
            id = new ObjectId(id)
        } catch {
            throw StatusError(404)
        }

        let result = await collection.replaceOne({ _id: id }, marker, { upsert: true });

        // console.log(marker._id, id, result.upsertedId);

        marker._id = result.upsertedId || id;
        let found = (result.upsertedCount == 0);
        return { marker, found };
    }

    /**
     * Deletes a marker by its ID from the list of markers.
     *
     * @param {string} id - The ID of the marker to delete.
     */
    async function deleteMarker(id) {
        try {
            id = new ObjectId(id)
        } catch {
            throw StatusError(404)
        }
        let found = await collection.findOneAndDelete({ _id: id });

        if (!found) {
            console.log("didfubdfsib")
            throw new StatusError(404);
        }

        return found;
    }

    /**
     * Counts the number of markers in the list.
     *
     * @returns {number} The number of markers in the list.
     */
    function count() {
        return collection.countDocuments();
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
        count,
        addMarker,
        getMarker,
        getMarkers,
        replaceMarker,
        deleteMarker,
    }

}

module.exports = make_marker_list;
