/**
 * Web Atelier 2023 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Model index
 *
 * Student: __STUDENT NAME__
 *
 * Task 1
 */

const mongodb = require('mongodb');

/* Optional Task */

const local_mongodb_uri = 'mongodb://127.0.0.1:27017/';
const cloud_mongodb_uri = 'mongodb+srv://db_user:mF14Cac1Jfvg2wZz@cluster0.x6zd3.mongodb.net/Feedback?retryWrites=true&w=majority';

// const default_mongodb_uri = cloud_mongodb_uri;
const default_mongodb_uri = local_mongodb_uri;

const clients = {};
const connections = {};

let model = {};

let connect = function(db_name, mongodb_uri) {

    db_name = db_name ?? 'web-atelier-ex';
    mongodb_uri = mongodb_uri ?? default_mongodb_uri;

    let client = clients[mongodb_uri];

    if (client === undefined) {
        client = new mongodb.MongoClient(mongodb_uri);
        clients[mongodb_uri] = client;

        console.log("Connecting to mongodb server");
        connections[mongodb_uri] = client.connect().then(client => {
            console.log("Connected to mongodb server");

            map_list = require("./map-list-db")(client, db_name, "maps");
            marker_list = require("./marker-list-db")(client, db_name, "markers");

            model.map_list = map_list;
            model.marker_list = marker_list;

            return { client,
                     marker_list,
                     map_list,
                     maps: client.db(db_name).collection("maps"),
                     markers: client.db(db_name).collection("markers")
                   }
        }).catch(err => console.error(err));
    }

    return connections[mongodb_uri];

}

module.exports = { connect, model };