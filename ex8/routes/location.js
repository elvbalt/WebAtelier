const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { model } = require('../model');


router.get("/user", async (req, res) => {
    try {
        let markers = await model.location_list.getMarkers();
        res.format({
            json: () => {
                res.json(markers)
            },
            default: () => {
                res.status(406).send('Not Acceptable')
            }
        });
    } catch (e) {
        res.sendStatus(e.status ?? 500);
    }
});


router.post("/user", async (req, res) => {
   
    try{

        let marker_data = {
            location: {
                lat: parseFloat(req.body.location.lat),
                lng: parseFloat(req.body.location.lng)
            },
            title: req.body.title,
            hue: parseInt(req.body.hue)
        }

        await model.location_list.addMarker(marker_data);

        res.format({
            json: () => {
                res.status(201).json(marker_data);
            },
            default: () => {
                res.status(406).send('Not Acceptable')
            }
        });
    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});


router.delete("/user", async (req, res) => {
    try {
        await model.location_list.clear();

        res.format({
            default: () => {
                res.sendStatus(204);
            }
        });
    } catch (e) {
        res.sendStatus(e.status);
    }
});





