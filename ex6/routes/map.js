/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Student: __STUDENT NAME__
 *
 * /map router
 *
 * Task 2 and 3
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { model } = require('../model');

router.get("/", async (req, res) => {
    try {

        let msg = req.query.msg ?? "";

        let maps = await model.map_list.getMaps();

        res.format({
            html: () => {
                res.render("map-list.ejs",
                    {
                        maps,
                        title: "Maps",
                        gps2str: script.gps2str,
                        msg
                    });
            },
            json: () => {
                res.json(maps)
            },
            default: () => {
                res.status(406).send('Not Acceptable')
            }
        });
    } catch (e) {
        res.sendStatus(e.status ?? 500);
    }
});


router.get("/new", (req, res) => {
});

router.get("/:id", async (req, res) => {
});

router.get("/:id/edit", async (req, res) => {
});


router.post("/", async (req, res) => {
});

router.put("/:id", async (req, res) => {
});

router.post("/:id/clone", async (req, res) => {
});

router.patch("/:id/fav", async (req, res) => {
});


router.delete("/:id", async (req, res) => {
});

/**
 * Example route for the PATCH /map/:id request
 *
 * All routes should follow a similar structure
*/
router.patch("/:id", async (req, res) => {

    try {
        //lookup the map based on the id parameter
        let map = await model.map_list.getMap(req.params.id);

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
                lat: parseFloat(req.body.lat ?? req.body.center.lat) || map.center.lat,
                lng: parseFloat(req.body.lng ?? req.body.center.lng) || map.center.lng
            },
            title: req.body.title || map.title,
            tiles: req.body.tiles || map.tiles,
            fav: req.body.fav || map.fav
        }

        //save the updated map
        await model.map_list.replaceMap(req.params.id, map_data);

        //redirect to the map page
        res.format({
            html: () => {
                res.redirect("/map/" + map._id);
            },
            json: () => {
                res.json(map_data);
            }
        });
    } catch (e) {
        res.sendStatus(e.status);
    }

});




