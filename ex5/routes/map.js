/**
 * Web Atelier 2023  Exercise 5 - Web Apps with Express.js
 *
 * Student: __STUDENT NAME__
 *
 * /map router
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { map_list } = require("../model");



router.get("/", (req, res) => {

    console.log(map_list.getMaps());


});



/**
 * Example route for the PATCH /map/:id request
 *
 * All routes should follow a similar structure
*/
router.patch("/:id", (req, res) => {

    //lookup the map based on the id parameter
    let map = map_list.getMap(req.params.id);

    //if the map does not exist, send back 404
    if (map == undefined) {
        res.sendStatus(404);
        return;
    }

    //if the request body does not contain the required fields, send back 400
    if (req.body.title == undefined
    && req.body.tiles == undefined
    && req.body.zoom == undefined
    && req.body.lat == undefined
    && req.body.lng == undefined) {
        res.sendStatus(400);
        return;
    }

    //incrementally update the map with the request body data
    let map_data = {
        zoom: parseInt(req.body.zoom) || map.zoom,
        center: {
            lat: parseFloat(req.body.lat) || map.center.lat,
            lng: parseFloat(req.body.lng) || map.center.lng
        },
        title: req.body.title || map.title,
        tiles: req.body.tiles || map.tiles,
        fav: req.body.fav || map.fav
    }

    //save the updated map
    map_list.replaceMap(req.params.id, map_data);

    //redirect to the map page
    res.redirect("/map/" + map.id);

});




