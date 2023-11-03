/**
 * Web Atelier 2023  Exercise 5 - Web Apps with Express.js
 *
 * Student: __ELVIRA BALTASAR__
 *
 * /map router
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { map_list } = require("../model");

router.use((req, res, next) => {
    map_list.load();
    next();
});

router.get("/", (req, res) => {
    
    message = req.query.msg;

    res.render("map-list",{ maps: map_list.getMaps(), gps2str: script.gps2str, msg: message });

});

router.get("/new", (req, res) => {

    let mapita = { 
        title : "default",
        tiles : "osm",
        center: { lat: "0", lng: "0" },
        zoom: 2,
        id: -1
      }

      res.render("map-edit", {map : mapita, gps2str: script.gps2str})
});

router.get("/:id", (req, res) => {

    let mapita = map_list.getMap(req.params.id);
    
    
    if (mapita == undefined) {
        res.sendStatus(404);
        return;
    }

    res.render("map-view", {map : mapita, gps2str: script.gps2str})
});

router.get("/:id/edit", (req, res) => {
    let mapita = map_list.getMap(req.params.id);

    if (mapita == undefined) {
        res.sendStatus(404);
        return;
    }

    res.render("map-edit", {map : mapita, gps2str: script.gps2str})
});

router.post("/", (req, res) => {
    let mapita ={
        title : req.body.title,
        center: {
            lat: parseFloat(req.body.lat) || map.center.lat,
            lng: parseFloat(req.body.lng) || map.center.lng
        },
        tiles: req.body.tiles || map.tiles,
        zoom: parseInt(req.body.zoom) || map.zoom
    }

     //if the request body does not contain the required fields, send back 400
     if (req.body.title == undefined
        || req.body.tiles == undefined
        || req.body.zoom == undefined
        || req.body.lat == undefined
        || req.body.lng == undefined) {
            res.sendStatus(400);
            return;
        }
    map_list.addMap(mapita);

    res.redirect("/map/" + mapita.id);
})

router.put("/:id", (req, res) => {

    console.log(req.body)

    let map = map_list.getMap(req.params.id)
    
    //if the request body does not contain the required fields, send back 400
    if (req.body.title == undefined
        || req.body.tiles == undefined
        || req.body.zoom == undefined
        || req.body.lat == undefined
        || req.body.lng == undefined) {
            res.sendStatus(400);
            return;
        }

    let mapita ={
        title : req.body.title,
        center: {
            lat: parseFloat(req.body.lat) || map.center.lat,
            lng: parseFloat(req.body.lng) || map.center.lng
        },
        tiles: req.body.tiles || map.tiles,
        zoom: parseInt(req.body.zoom) || map.zoom
    }

     
    map_list.replaceMap(req.params.id, mapita);

    res.redirect("/map/" + mapita.id);
})


router.delete("/:id", (req, res) => {
    if (map_list.getMap(req.params.id) == undefined) {
        res.sendStatus(404);
        return;
    } else {
        
        map_list.deleteMap(req.params.id);

        res.redirect("/map?msg=Map+deleted");

    }
})


router.post("/:id/clone", (req, res) => {
    let map = map_list.getMap(req.params.id);
    if (map == undefined) {
        res.sendStatus(404);
        return;
    } else {
        
        let cloned_map = map_list.cloneMap(req.params.id);
        res.redirect("/map/" + cloned_map.id);
    }
})

router.patch("/:id/fav", (req, res) => {
    if (map_list.getMap(req.params.id) == undefined) {
        res.sendStatus(404);
        return;
    } else {
        map_list.toggleFav(req.params.id);
        res.redirect("/map");
    }
})

/**
 * Example route for the PATCH /map/:id request
 *
 * All routes should follow a similar structure
*/
router.patch("/:id/", (req, res) => {

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




