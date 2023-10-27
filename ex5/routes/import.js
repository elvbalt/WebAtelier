/**
 * Web Atelier 2023  Exercise 5 - Web Apps with Express.js
 *
 * Student: __Elvira Baltasar__
 *
 * /import router
 *
 * TODO wire this router into the application app.js
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { map_list } = require("../model");


router.get("/", (req, res) => {

    //TODO render the import form page

});

router.post("/", (req, res) => {

    //TODO implement the upload, parse and import logic

    //if import was successful, redirect to the map list page
    res.redirect("/map?msg=Map imported successfully");

});
