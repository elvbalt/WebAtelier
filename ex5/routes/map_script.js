/**
 * Web Atelier 2023  Exercise 5 - Web Apps with Express.js
 *
 * Student: __Elvira Baltasar__
 *
 * /map router
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { map_list } = require("../model");



router.get("/maps.js", (req, res) => {

    res.render("map-list-script.ejs",{ maps: map_list.getMaps() });

});





router.get("/map/:id/map.js", (req, res) => {

    res.render("map-script.ejs",{ map: map_list.getMap(req.params.id) });

});

router.get("/map/:id", (req, res) => {

    res.render("map-script.ejs",{ map: map_list.getMap(req.params.id) });

});

