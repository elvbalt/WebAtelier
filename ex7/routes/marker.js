/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Read-only code (do not edit)
 *
 * /map/:mid/marker router
 *
 * Task 4
 *
 */

const express = require('express');
const router = express.Router();
module.exports = router;

let script = require("../script-module");

let { model } = require('../model');


router.get("/:mid/marker", async (req, res) => {
    try {
        let markers = await model.marker_list.getMarkers(req.params.mid);
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

router.get("/:mid/marker/:id", async (req, res) => {
    try {
        let marker = await model.marker_list.getMarker(req.params.id);

        res.format({
            json: () => {
                res.json(marker)
            }
        });
    } catch (e) {
        res.sendStatus(e.status);
    }
});


router.post("/:mid/marker", async (req, res) => {
    try{

    let marker_data = {
        location: {
            lat: parseFloat(req.body.location.lat),
            lng: parseFloat(req.body.location.lng)
        },
        title: req.body.title,
        type: req.body.type,
        hue: parseInt(req.body.hue),
        map_id: req.params.mid
    }

    await model.marker_list.addMarker(marker_data);

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

router.put("/:mid/marker/:id", async (req, res) => {

    let marker_data = {
        location: {
            lat: parseFloat(req.body.location.lat),
            lng: parseFloat(req.body.location.lng)
        },
        title: req.body.title,
        type: req.body.type,
        hue: parseInt(req.body.hue),
        map_id: req.params.mid
    }

    let { marker, found } = await model.marker_list.replaceMarker(req.params.id, marker_data);

    let added = !found;

    res.format({
        json: () => {
            res.status(added ? 201 : 200).json(marker_data);
        },
        default: () => {
            res.status(406).send('Not Acceptable')
        }
    });
});

router.delete("/:mid/marker/:id", async (req, res) => {
    try {
        await model.marker_list.deleteMarker(req.params.id);

        res.format({
            default: () => {
                res.sendStatus(204);
            }
        });
    } catch (e) {
        res.sendStatus(e.status);
    }
});





