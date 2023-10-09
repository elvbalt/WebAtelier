/**
 * Web Atelier 2023 3 - Object-Oriented JavaScript
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Update 9.10.23
 *
 * - test storage key is now random
 * - map ids are now strings
 * - 2 minute timeout for the list.html tests
 *
 */


function makeInvalidJSON(obj) {
    return JSON.stringify(obj).replace(/"/g, "'").replace(/,/g, "\t").replace(/:/g, ",").replace(/}/g, ")").replace(/{/g, "(");
}

function makeRandomStorageKey() {
    return "test-map-"+Math.floor(Math.random() * 1000000);
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



describe('★☆☆', function () {

    let storageKey = makeRandomStorageKey();

    describe('Task 1', function () {

        describe('map_list', function () {

            it('getMap(id) should return undefined maps when empty', function () {

                let test_map_list = make_map_list(storageKey);

                fc.assert(fc.property(fc.integer({ min: -999, max: 999 }), (id) => {

                    should(test_map_list.getMap(id)).be.undefined();

                }));

            });

            it('getMap(id) should return predefined maps after reset', function () {

                let test_map_list = make_map_list(storageKey);

                test_map_list.reset();
                {
                    let map = test_map_list.getMap("0");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":7,"title":"Konkordiaplatz","tiles":"natgeo","fav":true,"desc":"","id":"0","center":{"lat":46.807098698384735,"lng":9.956003765810221}});
                }
                {
                    let map = test_map_list.getMap("1");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":15,"title":"Lugano Satellite","tiles":"ESRI_world_imagery","id":"1","center":{"lat":46.00976488037914,"lng":8.967461585998537}});
                }
                {
                    let map = test_map_list.getMap("2");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":5,"title":"Europe","tiles":"watercolor","id":"2","center":{"lat":45.166547157856016,"lng":16.523437500000004}});
                }
                {
                    let map = test_map_list.getMap("3");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":15,"title":"Ritom","tiles":"ESRI_world_imagery","desc":"Beautiful Ticino Lake","id":"3","center":{"lat":46.539307083117805,"lng":8.691687583923342}});
                }
                {
                    let map = test_map_list.getMap("4");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":8,"title":"Switzerland","tiles":"natgeo","desc":"","id":"4","center":{"lat":46.5854469512097,"lng":8.189412981840018}});
                }
                {
                    let map = test_map_list.getMap("5");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":9,"title":"Corse","tiles":"ESRI_world_imagery","id":"5","center":{"lat":42.07478160216737,"lng":9.396057128906252}});
                }
                {
                    let map = test_map_list.getMap("6");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":8,"title":"Alps","tiles":"ESRI_world_imagery","id":"6","center":{"lat":45.71193311776845,"lng":10.6512451171875}});
                }
                {
                    let map = test_map_list.getMap("7");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":13,"title":"Zurich","tiles":"osm","desc":"","id":"7","center":{"lat":47.38451105175862,"lng":8.526077968100157}});
                }
                {
                    let map = test_map_list.getMap("8");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":8,"title":"Jyväskylä","tiles":"natgeo","desc":"","id":"8","center":{"lat":61.976396187471956,"lng":26.427612304687504}});
                }
                {
                    let map = test_map_list.getMap("9");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":12,"title":"Interlaken","tiles":"Swiss_Imagery","id":"9","center":{"lat":46.68866222628092,"lng":7.859344482421876}});
                }
                {
                    let map = test_map_list.getMap("10");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":11,"title":"Berlin","tiles":"topo","id":"10","center":{"lat":52.469605989368794,"lng":13.311309814453127}});
                }
                {
                    let map = test_map_list.getMap("11");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":4,"title":"Down Under","tiles":"toner","id":"11","center":{"lat":-29.420460341013133,"lng":-221.13281250000003}});
                }
                {
                    let map = test_map_list.getMap("12");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":14,"title":"Venice","tiles":"watercolor","fav":true,"desc":"","id":"12","center":{"lat":45.435021772040116,"lng":12.336096870057816}});
                }
                {
                    let map = test_map_list.getMap("14");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":7,"title":"Iceland","tiles":"watercolor","fav":true,"desc":"","id":"14","center":{"lat":65.1091177513242,"lng":-18.962261537418925}});
                }
                {
                    let map = test_map_list.getMap("16");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":13,"title":"Lugano","tiles":"Swiss_Color","id":"16","center":{"lat":46.01194069320304,"lng":8.961061835289003}});
                }
                {
                    let map = test_map_list.getMap("17");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":7,"title":"New Zealand","tiles":"watercolor","fav":true,"desc":"","id":"17","center":{"lat":-40.9448215590864,"lng":173.37441762352876}});
                }
                {
                    let map = test_map_list.getMap("19");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":8,"title":"Hawaii","tiles":"natgeo","id":"19","center":{"lat":20.223543059033542,"lng":-157.08251953125003}});
                }
                {
                    let map = test_map_list.getMap("20");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":16,"title":"Tremola","tiles":"Swiss_Color","id":"20","center":{"lat":46.54505572291053,"lng":8.573026657104494}});
                }
                {
                    let map = test_map_list.getMap("21");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":11,"title":"Netherlands","tiles":"osm","id":"21","center":{"lat":52.17793193118188,"lng":5.003585815429688}});
                }
                {
                    let map = test_map_list.getMap("22");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":8,"title":"Colombia","tiles":"topo","id":"22","center":{"lat":4.631179340411012,"lng":-74.08905029296876}});
                }
                {
                    let map = test_map_list.getMap("23");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":7,"title":"Great Lakes","tiles":"toner","desc":"","id":"23","center":{"lat":44.91753133529358,"lng":-84.56176757812501}});
                }
                {
                    let map = test_map_list.getMap("24");
                    should(map).not.be.undefined();
                    should(map).be.an.Object();
                    should(map.center).be.an.Object();
                    should(map).be.deepEqual({"zoom":15,"title":"Hainan","tiles":"ESRI_world_imagery","id":"24","center":{"lat":19.66190617905129,"lng":109.17442560195924}});
                }

            }); //it


            it('addMap(map) should add maps generating their ids', function () {

                let test_map_list = make_map_list(storageKey);

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

            it('addMap(id) should add maps preserving their ids', function () {

                let test_map_list = make_map_list(storageKey);
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

                let test_map_list = make_map_list(storageKey);

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

                let test_map_list = make_map_list(storageKey);

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


            it('deleteMap(id) should remove maps', function () {

                let test_map_list = make_map_list(storageKey);

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

                let test_map_list = make_map_list(storageKey);

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

                let test_map_list = make_map_list(storageKey);

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


            it('save should store the map on localStorage as valid JSON', function () {

                let test_map_list = make_map_list(storageKey);

                test_map_list.reset();
                test_map_list.save();

                let json = localStorage.getItem(storageKey);

                should(json).not.be.undefined();

                (() => JSON.parse(json)).should.not.throw();

            });

            it('load should retrieve the map from localStorage', function () {

                let test_map_list = make_map_list(storageKey);

                let json = localStorage.getItem(storageKey);

                should(json).not.be.undefined();

                should(test_map_list.count()).be.equal(0);

                test_map_list.load();

                should(test_map_list.count()).be.equal(22);

            });

            it('load should not affect the map when loading from invalid JSON', function () {

                let test_map_list = make_map_list(storageKey);

                localStorage.setItem(storageKey, makeInvalidJSON(makeRandomMap("Invalid JSON")));

                should(test_map_list.count()).be.equal(0);

                let json = localStorage.getItem(storageKey);

                (()=>JSON.parse(json)).should.throw();

                test_map_list.load();

                should(test_map_list.count()).be.equal(0);

                test_map_list.reset();

                should(test_map_list.count()).be.equal(22);

                localStorage.setItem(storageKey, makeInvalidJSON(test_map_list.getMaps()));

                json = localStorage.getItem(storageKey);

                (()=>JSON.parse(json)).should.throw();

                test_map_list.load();

                should(test_map_list.count()).be.equal(22);

            });


        });
    });

    describe('Task 2', function () {

        function loadMapList(src, check) {
            let x = document.querySelector("iframe[name='list']");
            x.src = src;
            x.onload = function () {
                var y = (x.contentWindow || x.contentDocument);

                check(y.document, y);
            }
        }

        // function rangeMove(doc, value) {
        //     let range = doc.querySelector("input[type='range']#range-population");
        //     range.value = value;
        //     let inputEvent = new Event('input');
        //     range.dispatchEvent(inputEvent);
        // }

        describe('Map Gallery', function () {

            it("should contain an empty map list", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();

                loadMapList("list.html?test="+storageKey, function (doc, w) {

                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(0);
                    should(Array.from(doc.querySelectorAll("main.map-index header")).length).be.equal(1);

                    done();

                });

            });

            it("should contain the reset map list", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.reset();
                test_map_list.save();

                loadMapList("list.html?test="+storageKey, function (doc, w) {

                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                    should(Array.from(doc.querySelectorAll("main.map-index header")).length).be.equal(1);

                    should(doc.querySelector("main.map-index section#map-0 h4").innerText).be.equal("Konkordiaplatz");
                    should(doc.querySelector("main.map-index section#map-1 h4").innerText).be.equal("Lugano Satellite");
                    should(doc.querySelector("main.map-index section#map-2 h4").innerText).be.equal("Europe");
                    should(doc.querySelector("main.map-index section#map-3 h4").innerText).be.equal("Ritom");
                    should(doc.querySelector("main.map-index section#map-4 h4").innerText).be.equal("Switzerland");
                    should(doc.querySelector("main.map-index section#map-5 h4").innerText).be.equal("Corse");
                    should(doc.querySelector("main.map-index section#map-6 h4").innerText).be.equal("Alps");
                    should(doc.querySelector("main.map-index section#map-7 h4").innerText).be.equal("Zurich");
                    should(doc.querySelector("main.map-index section#map-8 h4").innerText).be.equal("Jyväskylä");
                    should(doc.querySelector("main.map-index section#map-9 h4").innerText).be.equal("Interlaken");
                    should(doc.querySelector("main.map-index section#map-10 h4").innerText).be.equal("Berlin");
                    should(doc.querySelector("main.map-index section#map-11 h4").innerText).be.equal("Down Under");
                    should(doc.querySelector("main.map-index section#map-12 h4").innerText).be.equal("Venice");
                    should(doc.querySelector("main.map-index section#map-14 h4").innerText).be.equal("Iceland");
                    should(doc.querySelector("main.map-index section#map-16 h4").innerText).be.equal("Lugano");
                    should(doc.querySelector("main.map-index section#map-17 h4").innerText).be.equal("New Zealand");
                    should(doc.querySelector("main.map-index section#map-19 h4").innerText).be.equal("Hawaii");
                    should(doc.querySelector("main.map-index section#map-20 h4").innerText).be.equal("Tremola");
                    should(doc.querySelector("main.map-index section#map-21 h4").innerText).be.equal("Netherlands");
                    should(doc.querySelector("main.map-index section#map-22 h4").innerText).be.equal("Colombia");
                    should(doc.querySelector("main.map-index section#map-23 h4").innerText).be.equal("Great Lakes");
                    should(doc.querySelector("main.map-index section#map-24 h4").innerText).be.equal("Hainan");
                    done();

                }); //load

            }).timeout(120000);

            it("delete map button should work", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.reset();
                test_map_list.save();

                loadMapList("list.html?test="+storageKey, function (doc, w) {

                {
                    let form = doc.querySelector("main.map-index section#map-0 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 0");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-0")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(21);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-1 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 1");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-1")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(20);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-2 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 2");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-2")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(19);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-3 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 3");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-3")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(18);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-4 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 4");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-4")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(17);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-5 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 5");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-5")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(16);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-6 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 6");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-6")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(15);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-7 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 7");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-7")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(14);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-8 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 8");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-8")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(13);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-9 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 9");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-9")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(12);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-10 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 10");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-10")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(11);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-11 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 11");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-11")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(10);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-12 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 12");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-12")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(9);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-14 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 14");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-14")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(8);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-16 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 16");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-16")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(7);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-17 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 17");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-17")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(6);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-19 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 19");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-19")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(5);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-20 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 20");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-20")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(4);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-21 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 21");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-21")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(3);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-22 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 22");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-22")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(2);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-23 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 23");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-23")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(1);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-24 form[action$='DELETE']");
                    should(form).be.not.undefined();

                    console.log("deleting 24");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-24")).be.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(0);
                }

                    done();

                }); //load

            }).timeout(120000);

            it("clone map button should work", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.reset();
                test_map_list.save();

                loadMapList("list.html?test="+storageKey, function (doc, w) {

                {
                    let form = doc.querySelector("main.map-index section#map-0 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 0");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-0")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(23);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-1 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 1");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-1")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(24);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-2 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 2");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-2")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(25);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-3 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 3");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-3")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(26);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-4 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 4");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-4")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(27);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-5 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 5");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-5")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(28);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-6 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 6");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-6")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(29);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-7 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 7");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-7")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(30);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-8 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 8");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-8")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(31);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-9 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 9");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-9")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(32);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-10 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 10");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-10")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(33);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-11 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 11");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-11")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(34);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-12 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 12");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-12")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(35);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-14 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 14");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-14")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(36);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-16 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 16");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-16")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(37);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-17 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 17");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-17")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(38);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-19 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 19");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-19")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(39);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-20 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 20");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-20")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(40);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-21 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 21");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-21")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(41);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-22 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 22");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-22")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(42);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-23 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 23");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-23")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(43);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-24 form[action$='clone']");
                    should(form).be.not.undefined();

                    console.log("cloning 24");

                    form.requestSubmit();

                    //assumes that the form submission event handler is handled synchronously

                    should(doc.querySelector("main.map-index section#map-24")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(44);
                }

                    //checks that all titles have been duplicated (assumes distinct titles)
                    let titles = Array.from(doc.querySelectorAll("main.map-index section h4")).map(h=>h.innerText);

                    let counts = titles.reduce((c,t)=>(c[t] = (c[t] || 0) + 1, c),{});

                    Object.keys(counts).forEach(title=>{
                        should(counts[title]).be.equal(2);
                    })

                    done();

                }); //load

            }).timeout(120000);


            it("favourite map button should work", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.reset();
                test_map_list.save();

                loadMapList("list.html?test="+storageKey, function (doc, w) {

                {
                    let form = doc.querySelector("main.map-index section#map-0 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 0");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-0 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-0")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-1 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 1");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-1 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-1")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-2 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 2");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-2 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-2")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-3 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 3");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-3 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-3")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-4 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 4");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-4 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-4")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-5 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 5");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-5 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-5")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-6 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 6");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-6 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-6")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-7 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 7");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-7 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-7")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-8 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 8");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-8 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-8")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-9 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 9");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-9 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-9")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-10 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 10");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-10 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-10")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-11 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 11");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-11 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-11")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-12 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 12");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-12 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-12")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-14 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 14");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-14 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-14")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-16 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 16");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-16 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-16")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-17 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 17");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-17 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-17")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-19 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 19");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-19 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-19")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-20 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 20");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-20 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-20")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-21 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 21");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-21 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-21")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-22 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 22");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-22 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-22")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-23 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 23");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-23 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-23")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                {
                    let form = doc.querySelector("main.map-index section#map-24 form[action$='PATCH']");
                    should(form).be.not.undefined();

                    let button = form.querySelector("button");
                    should(button).be.not.undefined();

                    let original_button = button.innerText;

                    console.log("fav click on 24");

                    form.requestSubmit();
                    //assumes that the form submission event handler is handled synchronously

                    let new_button = doc.querySelector("main.map-index section#map-24 form[action$='PATCH'] button");
                    should(new_button).be.not.undefined();

                    should(new_button.innerText).be.not.equal(original_button);

                    should(doc.querySelector("main.map-index section#map-24")).be.not.null();
                    should(Array.from(doc.querySelectorAll("main.map-index section")).length).be.equal(22);
                }
                done();

                }); //load
            }).timeout(120000);
        });
    });

    describe('Task 3', function () {

        function loadMapEditor(src, check) {
            let x = document.querySelector("iframe[name='editor']");
            x.src = src;
            x.onload = function () {
                var y = (x.contentWindow || x.contentDocument);

                check(y.document, y);
            }
        }

        // function rangeMove(doc, value) {
        //     let range = doc.querySelector("input[type='range']#range-population");
        //     range.value = value;
        //     let inputEvent = new Event('input');
        //     range.dispatchEvent(inputEvent);
        // }

        describe('Map Editor', function () {

            it("should contain the default map object with no id parameter", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();

                loadMapEditor("editor.html?test="+storageKey, function (doc, w) {

                    should(doc.querySelector("form #title").value).be.equal("New Map");
                    should(doc.querySelector("form #tiles").value).be.equal("osm");
                    should(doc.querySelector("form #zoom").value).be.equal("2");
                    should(doc.querySelector("form #lat").value).be.equal("0");
                    should(doc.querySelector("form #lng").value).be.equal("0");

                    done();

                });

            });

            it("update button should be hidden with no id parameter", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();

                loadMapEditor("editor.html?test="+storageKey, function (doc, w) {

                    should(doc.querySelector("form button[data-action='update']").style.display).be.equal("none");
                    should(doc.querySelector("form button[data-action='create']").style.display).not.be.equal("none");

                    done();

                });

            });

            it("should load the map with the given id", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                let rmap = makeRandomMap("Test Map Editor");
                test_map_list.addMap(rmap);
                test_map_list.save();

                loadMapEditor(`editor.html?test=${storageKey}&id=${rmap.id}`, function (doc, w) {

                    should(doc.querySelector("form #title").value).be.equal(rmap.title);
                    should(doc.querySelector("form #tiles").value).be.equal(rmap.tiles);
                    should(doc.querySelector("form #zoom").value).be.equal(""+rmap.zoom);;
                    should(doc.querySelector("form #lat").value).be.equal(""+rmap.center.lat);
                    should(doc.querySelector("form #lng").value).be.equal(""+rmap.center.lng);

                    done();

                });

            });

            it("should sync form zoom with map zoom", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();

                loadMapEditor(`editor.html?test=`+storageKey, function (doc, w) {

                    //if this fails make sure that the map-util.js is loaded before the map.js script
                    should(w.L.maps).be.not.undefined();

                    //if this fails make sure that the map is created in the #map container
                    let map = w.L.maps.find(m=>m.getContainer().id == 'map');
                    should(map).be.not.undefined();

                    let zooms = [];

                    map.on('zoomend', function () {
                        let map_zoom = map.getZoom();
                        let form_zoom = doc.querySelector("form #zoom").value;

                        zooms.push({map_zoom, form_zoom});
                    });

                    fc.assert(fc.asyncProperty(fc.integer({ min: 1, max: 19 }), (zoom) => {

                        doc.querySelector("form #zoom").value = ""+zoom;
                        let changeEvent = new Event('change');
                        doc.querySelector("form #zoom").dispatchEvent(changeEvent);

                    }),
                    {numRuns: 10}
                    ).then(
                    ()=>{

                        zooms.forEach(z=>{
                            should(""+z.map_zoom).be.equal(z.form_zoom);
                        })

                    }).then(done, (e)=>{done(e);});

                });

            });

            it("should sync form lat, lng with map center", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();

                loadMapEditor(`editor.html?test=`+storageKey, function (doc, w) {

                    //if this fails make sure that the map-util.js is loaded before the map.js script
                    should(w.L.maps).be.not.undefined();

                    //if this fails make sure that the map is created in the #map container
                    let map = w.L.maps.find(m=>m.getContainer().id == 'map');
                    should(map).be.not.undefined();

                    console.log(map);

                    let centers = [];

                    map.on('moveend', function () {
                        let map_center = map.getCenter();
                        let form_lat = doc.querySelector("form #lat").value;
                        let form_lng = doc.querySelector("form #lng").value;

                        centers.push({map_center, form_lat, form_lng});
                    });

                    fc.assert(fc.asyncProperty(fc.integer({ min: -90, max: 90 }), fc.integer({ min: -180, max: 180 }), (lat, lng) => {

                        {
                            doc.querySelector("form #lat").value = ""+lat;
                            let changeEvent = new Event('change');
                            doc.querySelector("form #lat").dispatchEvent(changeEvent);
                        }
                        {
                            doc.querySelector("form #lat").value = ""+lng;
                            let changeEvent = new Event('change');
                            doc.querySelector("form #lat").dispatchEvent(changeEvent);
                        }

                    }),
                    {numRuns: 10}
                    ).then(
                    ()=>{

                        centers.forEach(z=>{
                            should(""+z.map_center.lat).be.equal(z.form_lat);
                            should(""+z.map_center.lng).be.equal(z.form_lng);
                        })

                    }).then(done, (e)=>{done(e);});

                });

            });



            it("should create a new map", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                test_map_list.save();
                should(test_map_list.count()).be.equal(0);

                loadMapEditor(`editor.html?test=${storageKey}`, function (doc, w) {

                    let amap = makeRandomMap("Test Map Editor "+new Date());

                    doc.querySelector("form #title").value = amap.title;
                    doc.querySelector("form #tiles").value = amap.tiles;
                    doc.querySelector("form #zoom").value = ""+amap.zoom;
                    doc.querySelector("form #lat").value = ""+amap.center.lat;
                    doc.querySelector("form #lng").value = ""+amap.center.lng;

                    let button = doc.querySelector("form button[data-action='create']");
                    should(button).be.not.undefined();

                    button.click();

                    let updated_map_list = make_map_list(storageKey);
                    updated_map_list.load();
                    should(updated_map_list.count()).be.equal(1);
                    let umap = updated_map_list.getMaps()[0];

                    should(umap).be.not.undefined();
                    should(umap.title).be.equal(amap.title);
                    should(umap.tiles).be.equal(amap.tiles);
                    should(umap.zoom).be.equal(amap.zoom);
                    should(umap.center).be.deepEqual(amap.center);

                    done();

                });

            });


            it("should update the map", function(done) {

                localStorage.removeItem(storageKey);

                let test_map_list = make_map_list(storageKey);
                let rmap = makeRandomMap("Test Map Editor");
                test_map_list.addMap(rmap);
                test_map_list.save();

                loadMapEditor(`editor.html?test=${storageKey}&id=${rmap.id}`, function (doc, w) {

                    let amap = makeRandomMap("Test Map Editor "+new Date());

                    doc.querySelector("form #title").value = amap.title;
                    doc.querySelector("form #tiles").value = amap.tiles;
                    doc.querySelector("form #zoom").value = ""+amap.zoom;
                    doc.querySelector("form #lat").value = ""+amap.center.lat;
                    doc.querySelector("form #lng").value = ""+amap.center.lng;

                    let button = doc.querySelector("form button[data-action='update']");
                    should(button).be.not.undefined();

                    button.click();

                    let updated_map_list = make_map_list(storageKey);
                    updated_map_list.load();
                    let umap = updated_map_list.getMap(rmap.id);

                    should(umap).be.not.undefined();
                    should(umap.title).be.equal(amap.title);
                    should(umap.tiles).be.equal(amap.tiles);
                    should(umap.zoom).be.equal(amap.zoom);
                    should(umap.center).be.deepEqual(amap.center);

                    done();

                });

            });




        });

    });
})
