/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Read-only code (do not edit)
 *
 * Task 1. Database Tests
 *
 */

const fc = require('fast-check');
const should = require('should');
const request = require('supertest')("http://localhost:8989");

const { connect } = require('../model/');

const ObjectId = require('mongodb').ObjectId;

const mongodb_uri = 'mongodb://127.0.0.1:27017/';
const mongodb_db = 'web-atelier-test';
const mongodb_maps = 'maps';

function makeRandomMap(title = "Random Map") {
    return {
        zoom: Math.floor(Math.random() * 20) + 1,
        title,
        tiles: Math.random() < 0.5 ? "natgeo" : "osm",
        center: {
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
        }
    }
}



describe('Task 1. Database', function () {

    let map_list;
    let db_collection;

    let added_count = 0;
    let added_ids = [];

    //block the tests until the model connects to the database
    before(function (done) {

        connect(mongodb_db, mongodb_uri).then(async model => {
            map_list = model.map_list;
            db_collection = model.maps;

            added_count = await map_list.count();

            done();
        });

    });

    describe("getMaps()", function () {

        it("should return a promise which resolves to the array of maps", function (done) {

            let p = map_list.getMaps();
            should(p).be.a.Promise();

            p.then(maps => {
                should(maps).be.an.Array();
                done();
            }).catch(done);

        });

        it("should return a promise which resolves to the array of maps listing the content of the maps collection", async function () {

            let a_maps = await db_collection.find().toArray();
            let maps = await map_list.getMaps();

            should(maps).be.deepEqual(a_maps);

        });

    });

    describe("getMap() addMap()", function () {

        let map_count;

        it("should add a map object and find it through its _id", async function () {

            map_count = await db_collection.countDocuments();

            let new_map = makeRandomMap();
            let a_map = await map_list.addMap(new_map);

            added_count++;
            added_ids.push(a_map._id.toString());

            should(a_map).have.property("_id");

            let g_map = await map_list.getMap(a_map._id);

            should(g_map).be.deepEqual(a_map);

            let new_map_count = await db_collection.countDocuments();

            should(new_map_count).be.equal(map_count + 1);

        });

        it('addMap() should add maps generating their _id', function (done) {

            fc.assert(fc.asyncProperty(fc.integer({ min: 0, max: 10 }),
                async (add) => {

                    let ids = [];

                    for (let i = 0; i < add; i++) {

                        let rmap = makeRandomMap("Added Map " + i);

                        should(rmap._id).be.undefined();

                        let amap = await map_list.addMap(rmap);

                        added_count++;
                        added_ids.push(amap._id.toString());

                        should(amap._id).not.be.undefined();
                        ids.push(amap._id);

                        let map = await map_list.getMap(amap._id);

                        should(map).be.deepEqual(amap);

                    }

                    should(ids.length).be.equal(add);

                    should(ids.length).be.equal(new Set(ids).size);

                    // should(ids.length).be.equal(added_count);
                }
            )).then(done, done);

        });

    });

    describe('cloneMap() count() getMap()', function () {

        it('cloneMap(id) should duplicate maps', async function () {

            return fc.assert(fc.asyncProperty(
                fc.integer({ min: 0, max: added_ids.length - 1 }), fc.string(),
                async (i, newtitle) => {

                    {
                        let id = added_ids[i];

                        //map exists before clone
                        let map = await map_list.getMap(id);
                        should(map).not.be.undefined();
                        should(map).be.an.Object();
                        should(map).not.be.a.Promise();
                        should(map.center).be.an.Object();

                        let size = await map_list.count();

                        let newmap = await map_list.cloneMap(id);

                        added_count++;

                        should(size + 1).be.equal(await map_list.count());

                        should(newmap._id.toString()).not.be.equal(map._id.toString());

                        let cmap = await map_list.getMap(newmap._id.toString());
                        should(cmap).not.be.undefined();
                        should(cmap).be.an.Object();
                        should(cmap).not.be.a.Promise();
                        should(cmap.center).be.an.Object();

                        should(cmap.zoom).be.equal(newmap.zoom);
                        should(cmap.zoom).be.equal(map.zoom);

                        should(cmap.center).be.deepEqual(newmap.center);
                        should(cmap.center).be.deepEqual(map.center);

                        should(cmap.title).be.equal(newmap.title);
                        should(cmap.title).be.equal(map.title);

                        should(cmap.tiles).be.equal(newmap.tiles);
                        should(cmap.tiles).be.equal(map.tiles);

                    }

                }));

        }); //it

    });

    describe("clear() count() reset() getMap()", function () {

        let map_ids = {};

        it("count() should return the number of objects in the database collection", async function () {

            let map_count = await map_list.count();

            should(map_count).be.equal(added_count);

        });

        it("clear() should empty the database collection", async function () {

            await map_list.clear();

            let map_count = await db_collection.countDocuments();

            should(map_count).be.equal(0);

            map_count = await map_list.count();

            should(map_count).be.equal(0);

        });

        it("reset() should populate the database collection", async function () {

            await map_list.reset();

            map_count = await map_list.count();

            should(map_count).be.equal(22);

            // this assumes that the old id strings are stored within the map object by reset
            let a = await db_collection.find().toArray();

            a.forEach(m => map_ids[m.id] = m._id.toString());

        });

        it("getMap() should find the expected maps after reset", async function () {

            // this assumes that the old id strings are stored within the map object by reset
            // console.log(map_ids);
            {
                let map = await map_list.getMap(map_ids["0"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(7);
                should(map.title).be.equal("Konkordiaplatz");
                should(map.tiles).be.equal("natgeo");
                should(map.center).be.deepEqual({"lat":46.807098698384735,"lng":9.956003765810221});
            }
            {
                let map = await map_list.getMap(map_ids["1"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(15);
                should(map.title).be.equal("Lugano Satellite");
                should(map.tiles).be.equal("ESRI_world_imagery");
                should(map.center).be.deepEqual({"lat":46.00976488037914,"lng":8.967461585998537});
            }
            {
                let map = await map_list.getMap(map_ids["2"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(5);
                should(map.title).be.equal("Europe");
                should(map.tiles).be.equal("watercolor");
                should(map.center).be.deepEqual({"lat":45.166547157856016,"lng":16.523437500000004});
            }
            {
                let map = await map_list.getMap(map_ids["3"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(15);
                should(map.title).be.equal("Ritom");
                should(map.tiles).be.equal("ESRI_world_imagery");
                should(map.center).be.deepEqual({"lat":46.539307083117805,"lng":8.691687583923342});
            }
            {
                let map = await map_list.getMap(map_ids["4"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(8);
                should(map.title).be.equal("Switzerland");
                should(map.tiles).be.equal("natgeo");
                should(map.center).be.deepEqual({"lat":46.5854469512097,"lng":8.189412981840018});
            }
            {
                let map = await map_list.getMap(map_ids["5"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(9);
                should(map.title).be.equal("Corse");
                should(map.tiles).be.equal("ESRI_world_imagery");
                should(map.center).be.deepEqual({"lat":42.07478160216737,"lng":9.396057128906252});
            }
            {
                let map = await map_list.getMap(map_ids["6"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(8);
                should(map.title).be.equal("Alps");
                should(map.tiles).be.equal("ESRI_world_imagery");
                should(map.center).be.deepEqual({"lat":45.71193311776845,"lng":10.6512451171875});
            }
            {
                let map = await map_list.getMap(map_ids["7"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(13);
                should(map.title).be.equal("Zurich");
                should(map.tiles).be.equal("osm");
                should(map.center).be.deepEqual({"lat":47.38451105175862,"lng":8.526077968100157});
            }
            {
                let map = await map_list.getMap(map_ids["8"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(8);
                should(map.title).be.equal("Jyväskylä");
                should(map.tiles).be.equal("natgeo");
                should(map.center).be.deepEqual({"lat":61.976396187471956,"lng":26.427612304687504});
            }
            {
                let map = await map_list.getMap(map_ids["9"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(12);
                should(map.title).be.equal("Interlaken");
                should(map.tiles).be.equal("Swiss_Imagery");
                should(map.center).be.deepEqual({"lat":46.68866222628092,"lng":7.859344482421876});
            }
            {
                let map = await map_list.getMap(map_ids["10"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(11);
                should(map.title).be.equal("Berlin");
                should(map.tiles).be.equal("topo");
                should(map.center).be.deepEqual({"lat":52.469605989368794,"lng":13.311309814453127});
            }
            {
                let map = await map_list.getMap(map_ids["11"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(4);
                should(map.title).be.equal("Down Under");
                should(map.tiles).be.equal("toner");
                should(map.center).be.deepEqual({"lat":-29.420460341013133,"lng":-221.13281250000003});
            }
            {
                let map = await map_list.getMap(map_ids["12"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(14);
                should(map.title).be.equal("Venice");
                should(map.tiles).be.equal("watercolor");
                should(map.center).be.deepEqual({"lat":45.435021772040116,"lng":12.336096870057816});
            }
            {
                let map = await map_list.getMap(map_ids["14"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(7);
                should(map.title).be.equal("Iceland");
                should(map.tiles).be.equal("watercolor");
                should(map.center).be.deepEqual({"lat":65.1091177513242,"lng":-18.962261537418925});
            }
            {
                let map = await map_list.getMap(map_ids["16"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(13);
                should(map.title).be.equal("Lugano");
                should(map.tiles).be.equal("Swiss_Color");
                should(map.center).be.deepEqual({"lat":46.01194069320304,"lng":8.961061835289003});
            }
            {
                let map = await map_list.getMap(map_ids["17"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(7);
                should(map.title).be.equal("New Zealand");
                should(map.tiles).be.equal("watercolor");
                should(map.center).be.deepEqual({"lat":-40.9448215590864,"lng":173.37441762352876});
            }
            {
                let map = await map_list.getMap(map_ids["19"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(8);
                should(map.title).be.equal("Hawaii");
                should(map.tiles).be.equal("natgeo");
                should(map.center).be.deepEqual({"lat":20.223543059033542,"lng":-157.08251953125003});
            }
            {
                let map = await map_list.getMap(map_ids["20"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(16);
                should(map.title).be.equal("Tremola");
                should(map.tiles).be.equal("Swiss_Color");
                should(map.center).be.deepEqual({"lat":46.54505572291053,"lng":8.573026657104494});
            }
            {
                let map = await map_list.getMap(map_ids["21"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(11);
                should(map.title).be.equal("Netherlands");
                should(map.tiles).be.equal("osm");
                should(map.center).be.deepEqual({"lat":52.17793193118188,"lng":5.003585815429688});
            }
            {
                let map = await map_list.getMap(map_ids["22"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(8);
                should(map.title).be.equal("Colombia");
                should(map.tiles).be.equal("topo");
                should(map.center).be.deepEqual({"lat":4.631179340411012,"lng":-74.08905029296876});
            }
            {
                let map = await map_list.getMap(map_ids["23"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(7);
                should(map.title).be.equal("Great Lakes");
                should(map.tiles).be.equal("toner");
                should(map.center).be.deepEqual({"lat":44.91753133529358,"lng":-84.56176757812501});
            }
            {
                let map = await map_list.getMap(map_ids["24"]);
                should(map).not.be.undefined();
                should(map).be.an.Object();
                should(map.center).be.an.Object();
                should(map.zoom).be.equal(15);
                should(map.title).be.equal("Hainan");
                should(map.tiles).be.equal("ESRI_world_imagery");
                should(map.center).be.deepEqual({"lat":19.66190617905129,"lng":109.17442560195924});
            }
        });

    });

    describe('replaceMap() getMap() addMap()', function () {

        it('replaceMap(id, map) should change the existing map at the given id', async function () {

            return fc.assert(fc.asyncProperty(
                fc.string(), fc.string(),
                async (title, newtitle) => {

                    let oldmap = makeRandomMap(title);
                    let newmap = makeRandomMap(newtitle);

                    let a_map = await map_list.addMap(oldmap);

                    {
                        let amap = await map_list.getMap(a_map._id);
                        should(amap).not.be.undefined();
                        should(amap).be.an.Object();
                        should(amap.center).be.an.Object();
                        should(amap).be.deepEqual(oldmap);
                        should(amap).not.be.deepEqual(newmap);
                    }

                    let result = await map_list.replaceMap(a_map._id, newmap);

                    should(result.found).be.true();

                    {
                        let amap = await map_list.getMap(a_map._id);
                        should(amap).not.be.undefined();
                        should(amap).be.an.Object();
                        should(amap._id).be.deepEqual(a_map._id);
                        should(amap.center).be.an.Object();
                        should(amap).not.be.deepEqual(oldmap);
                        should(amap).be.deepEqual(newmap);
                    }

                }));

        }); //it

        it('replaceMap(id, map) should create the non-existing map at the given id', async function () {

            return fc.assert(fc.asyncProperty(
                fc.integer({ min: 0, max: added_ids.length - 1 }), fc.string(),
                async (i, newtitle) => {

                    let newmap = makeRandomMap(newtitle);

                    let id = added_ids[i];

                    let expect;
                    let oldmap;

                    try {
                        oldmap = await map_list.getMap(id);

                        expect = true;

                    } catch (e) {

                        expect = false;
                    }

                    let result = await map_list.replaceMap(id, newmap);

                    should(result.found).be.equal(expect);

                    {
                        let amap = await map_list.getMap(id);
                        should(amap).not.be.undefined();
                        should(amap).be.an.Object();
                        should(amap._id).be.deepEqual(result.map._id);
                        should(amap.center).be.an.Object();
                        should(amap).be.deepEqual(newmap);
                        should(amap).be.deepEqual(result.map);
                        should(amap).be.not.deepEqual(oldmap);
                    }

                }));

        }); //it

    });

    describe("toggleFav()", function () {

        it('toggleFav(id) should toggle the fav boolean flag', async function () {

            let maps = await map_list.getMaps();

            return fc.assert(fc.asyncProperty(
                fc.integer({ min: 0, max: maps.length - 1 }),
                async (i) => {

                    let id = maps[i]._id.toString();

                    let map = await map_list.getMap(id);

                    let fav = map.fav;

                    await map_list.toggleFav(id);

                    let amap = await map_list.getMap(id);

                    if (fav != undefined) {
                        should(amap.fav).be.equal(!fav);
                    } else {
                        should(amap.fav).be.true();
                    }

                    await map_list.toggleFav(id);

                    let bmap = await map_list.getMap(id);

                    if (fav != undefined) {
                        should(bmap.fav).be.equal(fav);
                    } else {
                        should(bmap.fav).be.false();
                    }
                    should(bmap.fav).be.equal(!amap.fav);

                }));

        });

    });



    describe("deleteMap() count() getMap()", function () {

        it('deleteMap(id) should remove maps', async function () {

            let maps = await map_list.getMaps();

            let already_deleted = [];

            return fc.assert(fc.asyncProperty(
                fc.integer({ min: 0, max: maps.length - 1 }),
                async (i) => {

                    let id = maps[i]._id.toString();

                    if (already_deleted.includes(id)) return;

                    already_deleted.push(id);

                    let map = await map_list.getMap(id);
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map).not.be.a.Promise();
                    should(map.center).be.an.Object();

                    let size = await map_list.count();

                    await map_list.deleteMap(id);

                    should(size - 1).be.equal(await map_list.count());

                    let t = false;

                    try {
                        let dmap = await map_list.getMap(id);
                        // should(dmap).be.undefined();
                    } catch(e) {
                        t = true;
                    }

                    should(t).be.true();


                }));

        });

    });

});
