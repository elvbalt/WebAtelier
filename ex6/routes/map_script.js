/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Read-only code (do not edit)
 *
 * Routers for rendering the map list and map object into a JavaScript file
 *
 * This code has already been adapted to handle the promises returned by the model operations
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let { model } = require("../model");

router.get("/maps.js", async (req, res) => {

    res.render("map-list-script.ejs", { maps: await model.map_list.getMaps() });

});

router.get("/map/:id/map.js", async (req, res) => {

    res.render("map-script.ejs", { map: await model.map_list.getMap(req.params.id) });

});
