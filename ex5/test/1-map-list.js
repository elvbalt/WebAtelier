/**
 * Web Atelier 2023 5 - Web Apps with Express.js
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Task 1: Map List Model Module
 *
 */

let fc = require('fast-check');
let fs = require('fs-extra');

function makeInvalidJSON(obj) {
    return JSON.stringify(obj).replace(/"/g, "'").replace(/,/g, "\t").replace(/:/g, ",").replace(/}/g, ")").replace(/{/g, "(");
}

function makeRandomStorageKey() {
    return "test/test-"+Math.floor(Math.random() * 1000000)+".json";
}

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


const should = require('should');
const make_map_list = require("../model/map-list");

describe('Task 2: Map List Model Module', function() {

    let filename = makeRandomStorageKey();

    it('make_map_list module should be defined', function() {

        should.exist(make_map_list);

    });

    it('getMap(id) should return predefined maps after reset', function () {

        let map_list = make_map_list(filename);
        map_list.reset();
        {
            let map = map_list.getMap("0");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});
        }
        {
            let map = map_list.getMap("1");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});
        }
        {
            let map = map_list.getMap("2");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});
        }
        {
            let map = map_list.getMap("3");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});
        }
        {
            let map = map_list.getMap("4");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});
        }
        {
            let map = map_list.getMap("5");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});
        }
        {
            let map = map_list.getMap("6");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});
        }
        {
            let map = map_list.getMap("7");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});
        }
        {
            let map = map_list.getMap("8");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});
        }
        {
            let map = map_list.getMap("9");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});
        }
        {
            let map = map_list.getMap("10");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});
        }
        {
            let map = map_list.getMap("11");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});
        }
        {
            let map = map_list.getMap("12");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});
        }
        {
            let map = map_list.getMap("14");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});
        }
        {
            let map = map_list.getMap("16");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});
        }
        {
            let map = map_list.getMap("17");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});
        }
        {
            let map = map_list.getMap("19");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});
        }
        {
            let map = map_list.getMap("20");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});
        }
        {
            let map = map_list.getMap("21");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});
        }
        {
            let map = map_list.getMap("22");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});
        }
        {
            let map = map_list.getMap("23");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});
        }
        {
            let map = map_list.getMap("24");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map.center).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});
        }

    }); //it


    it('addMap(map) should add maps generating their ids', function () {

        let test_map_list = make_map_list(filename);

        fc.assert(fc.property(fc.integer({ min: 0, max: 10 }),
        (add)=>{

            let ids = [];

            for (let i = 0; i < add; i++) {

                let rmap = makeRandomMap("Added Map "+i);

                let amap = test_map_list.addMap(rmap);

                should(amap.id).not.be.undefined();
                ids.push(amap.id);

                let map = test_map_list.getMap(amap.id);

                should(map).be.deepEqual(amap);

            }

            should(ids.length).be.equal(add);

            should(ids.length).be.equal(new Set(ids).size);
        }
        ));

    });


    it('clear() should empty the list of maps', function () {

        let test_map_list = make_map_list(filename);
        test_map_list.reset();

        should(test_map_list.count()).be.equal(22);

        test_map_list.clear();

        should(test_map_list.count()).be.equal(0);

    });


    it('addMap(id) should add maps preserving their ids', function () {

        let test_map_list = make_map_list(filename);
        {
            //map does not exist before add
            let map = test_map_list.getMap("0");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("0");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("1");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("1");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("2");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("2");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("3");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("3");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("4");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("4");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("5");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("5");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("6");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("6");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("7");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("7");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("8");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("8");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("9");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("9");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("10");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("10");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("11");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("11");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("12");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("12");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("14");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("14");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("16");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("16");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("17");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("17");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("19");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("19");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("20");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("20");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("21");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("21");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("22");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("22");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("23");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("23");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});
            should(amap).be.deepEqual(newmap);

        }
        {
            //map does not exist before add
            let map = test_map_list.getMap("24");
            should(map).be.undefined();

            let size = test_map_list.count();

            let newmap = test_map_list.addMap({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});

            should(size + 1).be.equal(test_map_list.count());

            let amap = test_map_list.getMap("24");
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).be.deepEqual({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});
            should(amap).be.deepEqual(newmap);

        }
    }); //it

    it('replaceMap(id, map) should change the map at the given id', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.reset();

        fc.assert(fc.property(fc.integer({ min: 0, max: test_map_list.count() - 1 }),
        fc.string(),
        (id, title) => {

            id = ""+id;

            let map = test_map_list.getMap(id);
            let size = test_map_list.count();

            let newmap = makeRandomMap(title);

            test_map_list.replaceMap(id, newmap);

            if (map != undefined) {
                should(size).be.equal(test_map_list.count());
            } else {
                should(size + 1).be.equal(test_map_list.count());
            }

            let amap = test_map_list.getMap(id);
            should(amap).not.be.undefined();
            should(amap).be.an.Object();
            should(amap.center).be.an.Object();
            should(amap).not.be.deepEqual(map);
            should(amap).be.deepEqual(newmap);

        }));

    }); //it


    it('cloneMap(id) should duplicate maps', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.reset();
        {
            //map exists before clone
            let map = test_map_list.getMap("0");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("0");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("1");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("1");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("2");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("2");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("3");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("3");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("4");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("4");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("5");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("5");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("6");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("6");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("7");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("7");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("8");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("8");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("9");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("9");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("10");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("10");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("11");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("11");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("12");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("12");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("14");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("14");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("16");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("16");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("17");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("17");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("19");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("19");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("20");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("20");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("21");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("21");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("22");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("22");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("23");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("23");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
        {
            //map exists before clone
            let map = test_map_list.getMap("24");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});

            let size = test_map_list.count();

            let newmap = test_map_list.cloneMap("24");

            should(size + 1).be.equal(test_map_list.count());

            should(newmap.id).not.be.equal(map.id);

            let cmap = test_map_list.getMap(newmap.id);
            should(cmap).not.be.undefined();
            should(cmap).be.an.Object();
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
    }); //it


    it('cloneMap(id) should duplicate maps with a deep copy', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.clear();

        let amap = test_map_list.addMap(makeRandomMap("Map 1"));

        should(amap).not.be.undefined();

        let cmap = test_map_list.cloneMap(amap.id);

        should(cmap).not.be.undefined();

        should(amap.id).not.be.equal(cmap.id);

        should(cmap.center).be.deepEqual(amap.center);

        cmap.center.lat = -cmap.center.lat;

        should(cmap.center).not.be.deepEqual(amap.center);

        cmap.center.lng = -cmap.center.lng;

        should(cmap.center).not.be.deepEqual(amap.center);

    });


    it('deleteMap(id) should remove maps', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.reset();
        {
            //map exists before delete
            let map = test_map_list.getMap("0");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});

            let size = test_map_list.count();

            test_map_list.deleteMap("0");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("0");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("1");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});

            let size = test_map_list.count();

            test_map_list.deleteMap("1");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("1");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("2");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});

            let size = test_map_list.count();

            test_map_list.deleteMap("2");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("2");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("3");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});

            let size = test_map_list.count();

            test_map_list.deleteMap("3");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("3");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("4");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});

            let size = test_map_list.count();

            test_map_list.deleteMap("4");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("4");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("5");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});

            let size = test_map_list.count();

            test_map_list.deleteMap("5");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("5");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("6");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});

            let size = test_map_list.count();

            test_map_list.deleteMap("6");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("6");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("7");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});

            let size = test_map_list.count();

            test_map_list.deleteMap("7");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("7");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("8");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});

            let size = test_map_list.count();

            test_map_list.deleteMap("8");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("8");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("9");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});

            let size = test_map_list.count();

            test_map_list.deleteMap("9");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("9");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("10");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});

            let size = test_map_list.count();

            test_map_list.deleteMap("10");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("10");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("11");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});

            let size = test_map_list.count();

            test_map_list.deleteMap("11");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("11");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("12");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});

            let size = test_map_list.count();

            test_map_list.deleteMap("12");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("12");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("14");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});

            let size = test_map_list.count();

            test_map_list.deleteMap("14");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("14");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("16");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});

            let size = test_map_list.count();

            test_map_list.deleteMap("16");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("16");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("17");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});

            let size = test_map_list.count();

            test_map_list.deleteMap("17");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("17");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("19");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});

            let size = test_map_list.count();

            test_map_list.deleteMap("19");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("19");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("20");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});

            let size = test_map_list.count();

            test_map_list.deleteMap("20");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("20");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("21");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});

            let size = test_map_list.count();

            test_map_list.deleteMap("21");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("21");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("22");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});

            let size = test_map_list.count();

            test_map_list.deleteMap("22");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("22");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("23");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});

            let size = test_map_list.count();

            test_map_list.deleteMap("23");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("23");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
        {
            //map exists before delete
            let map = test_map_list.getMap("24");
            should(map).not.be.undefined();
            should(map).be.an.Object();
            should(map).be.deepEqual({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});

            let size = test_map_list.count();

            test_map_list.deleteMap("24");

            should(size - 1).be.equal(test_map_list.count());

            let dmap = test_map_list.getMap("24");

            //map disappeared after delete
            should(dmap).be.undefined();

        }
    }); //it

    it('toggleFav(id) should toggle the fav boolean flag', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.reset();

        fc.assert(fc.property(fc.integer({ min: 0, max: test_map_list.count() - 1 }),
        (id)=>{
            let map = test_map_list.getMap(""+id);

            if (map != undefined) {

                let fav = map.fav;

                test_map_list.toggleFav(""+id);

                let amap = test_map_list.getMap(""+id);

                should(amap.fav).be.equal(!fav);

            }

        }));

    });

    it('count() should return the number of maps in the list', function () {

        let test_map_list = make_map_list(filename);

        fc.assert(fc.property(fc.integer({ min: 0, max: 10 }),
        fc.integer({ min: 0, max: 10 }),
        (add, remove)=>{

            let size = test_map_list.count();

            remove = Math.min(remove, add);

            let ids = [];

            for (let i = 0; i < add; i++) {

                let amap = test_map_list.addMap(makeRandomMap("Added Map "+i));

                should(size + i + 1).be.equal(test_map_list.count());

                ids.push(amap.id);

                let map = test_map_list.getMap(amap.id);

                should(map).be.deepEqual(amap);

            }

            size = test_map_list.count();

            for (let i = 0; i < remove; i++) {

                test_map_list.deleteMap(ids[i]);

                should(size - i - 1).be.equal(test_map_list.count());

                let dmap = test_map_list.getMap(ids[i]);

                should(dmap).be.undefined();

            }

        }));

    });


    it('save should store the map on filename as valid JSON', function () {

        let test_map_list = make_map_list(filename);

        test_map_list.reset();
        test_map_list.save();

        let json = fs.readFileSync(filename);

        //let json = localStorage.getItem(storageKey);

        should(json).not.be.undefined();

        (() => JSON.parse(json)).should.not.throw();

    });

    it('load should retrieve the map from filename', function () {

        let test_map_list = make_map_list(filename);

        let json = fs.readJSONSync(filename);

        should(json).not.be.undefined();

        should(test_map_list.count()).be.equal(0);

        test_map_list.load();

        should(test_map_list.count()).be.equal(22);

    });

    it('load should not affect the maps when loading from invalid JSON', function () {

        let test_map_list = make_map_list(filename);

        fs.writeFileSync(filename, makeInvalidJSON(makeRandomMap("Invalid JSON")));

        should(test_map_list.count()).be.equal(0);

        let json = fs.readFileSync(filename);

        (()=>JSON.parse(json)).should.throw();

        test_map_list.load();

        should(test_map_list.count()).be.equal(0);

        test_map_list.reset();

        should(test_map_list.count()).be.equal(22);

        fs.writeFileSync(filename, makeInvalidJSON(test_map_list.getMaps()));

        json = fs.readFileSync(filename);

        (()=>JSON.parse(json)).should.throw();

        test_map_list.load();

        should(test_map_list.count()).be.equal(22);

    });

});