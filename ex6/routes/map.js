/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Student: __Elvira Baltasar__
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

        let trans = maps.map((map) => {
            let center2 = {
                lat: script.gps2str(map.center.lat),
                lng: script.gps2str(map.center.lng)
            };
            return {...map, center_str: center2};
        });

        res.format({
            html: () => {
                res.render("map-list.ejs",
                    {
                        maps: trans,
                        title: "Maps",
                        gps2str: script.gps2str,
                        msg
                    });
            },
            json: () => {
            
                res.json(trans)
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
    let mapita = { 
        title : "default",
        tiles : "osm",
        center: { lat: "0", lng: "0" },
        zoom: 2,
        _id: -1
    }

    let center2 = {
        lat: script.gps2str(mapita.center.lat),
        lng: script.gps2str(mapita.center.lng)
    };

    mapi = {...mapita, center_str: center2};

    res.render("map-edit", {map : mapi, gps2str: script.gps2str})
});

router.get("/:id", async (req, res) => {
    try{
        let mapita = await map_list.getMap(req.params.id);

        if (mapita == undefined) {
            res.sendStatus(404);
            return;
        }

        await map_list.updateView(mapita._id);
        
        let center2 = {
            lat: script.gps2str(mapita.center.lat),
            lng: script.gps2str(mapita.center.lng)
        };

        mapi = {...mapita, center_str: center2};
            
        res.format({
            html: () => {
                res.render("map-view",
                    {
                        map: mapi,
                        gps2str: script.gps2str,
                    });
            },
            json: () => {

                res.json(mapi)
            },
            default: () => {
                res.status(406).send('Not Acceptable')
            }
        });

    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});

router.get("/:id/edit", async (req, res) => {
    try{
        let mapita = await map_list.getMap(req.params.id);

        if (mapita == undefined) {
            res.sendStatus(404);
            return;
        }

        await map_list.updateView(mapita._id);
        
        let center2 = {
            lat: script.gps2str(mapita.center.lat),
            lng: script.gps2str(mapita.center.lng)
        };

        mapi = {...mapita, center_str: center2};

        res.format({
            html: () => {
                res.render("map-edit.ejs",
                    {
                        map: mapi,
                        gps2str: script.gps2str,
                    });
            },
            json: () => {
                res.json(mapi)
            }
        });

    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});


router.post("/", async (req, res) => {

    try{

        //let map = await map_list.getMap(req.params.id);
        let lat = req.body.lat || req.body.center.lat
        let lng = req.body.lng || req.body.center.lng

        let mapita ={
            title : req.body.title,
            center: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            tiles: req.body.tiles,
            zoom: parseInt(req.body.zoom)
        }
        // html: req.body.lat json: req.body.center.lat
        if (req.body.title == undefined
            || req.body.tiles == undefined
            || req.body.zoom == undefined
            || lat == undefined
            || lng == undefined) {
                res.sendStatus(400);
                return;
            }

        await map_list.addMap(mapita);

        res.format({
            html: () => {
                res.redirect("/map/" + mapita._id);
            },
            json: () => {
                res.status(201).json(mapita);
            }
        });

    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});

router.put("/:id", async (req, res) => {
    try{
        let lat = req.body.lat || req.body.center.lat
        let lng = req.body.lng || req.body.center.lng
    
        let mapita ={
            title : req.body.title,
            center: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            tiles: req.body.tiles,
            zoom: parseInt(req.body.zoom)
        }

        let result = await map_list.replaceMap(req.params.id, mapita);

        res.format({
            html: () => {
                res.redirect("/map/" + mapita._id);
            },
            json: () => {
                // 200 si updateas, 201 si creas
                res.status(200 + !result.found).json(mapita);
            }
        });

    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});

router.post("/:id/clone", async (req, res) => {
    try{
        let mapita = await map_list.getMap(req.params.id);

        if (mapita == undefined) {
            res.sendStatus(404);
            return;
        }

        let cloned = await map_list.cloneMap(req.params.id);
        res.format({
            html: () => {
                res.redirect("/map/" + cloned._id);
            },
            json: () => {
                res.json(cloned);
            }
        });
    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});

router.patch("/:id/fav", async (req, res) => {    try{
        let mapita = await map_list.getMap(req.params.id);
        if (mapita == undefined) {
            res.sendStatus(404);
            return;
        }

        await map_list.toggleFav(req.params.id);
        mapita = await map_list.getMap(req.params.id)
        res.format({
            html: () => {
                res.redirect("/map");
            },
            json: () => {
                res.json(mapita);
            }
        });
    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
});


router.delete("/:id", async (req, res) => {
    try{
        let map_data = await map_list.getMap(req.params.id);

        if (map_data == undefined) {
            res.sendStatus(404);
            return;
        }

        await map_list.deleteMap(req.params.id);

        res.format({
            html: () => {
                res.redirect("/map?msg=Map+deleted");
            },
            json: () => {
                res.status(204).json(map_data);
            }
        });

    }catch (e){
        res.sendStatus(e.status ?? 500);
    }
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




