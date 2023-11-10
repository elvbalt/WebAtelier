/**
 * Web Atelier 2023 7 - Single-Page Web Applications with Fetch and Client-side Views
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 */

function randomName(len = 24) {
    return Array.from(crypto.getRandomValues(new Uint8Array(len)), (x) => x.toString(16).padStart(2, "0")).join("").substring(0, len);
}

function makeRandomMap(title = "Random Map") {
    return {
        zoom: Math.floor(Math.random() * 15) + 1,
        title,
        tiles: Math.random() < 0.5 ? "natgeo" : "osm",
        center: {
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
        }
    }
}

function wait(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t);
    });
}

describe('★☆☆', function () {

    this.timeout(60000000000);

    let iframe_load_count = 0;

    function checkLinkEscaped(dom) {
        return _checkEscaped(() => dom.click());
    }

    function checkFormEscaped(dom) {
        return _checkEscaped(() => dom.requestSubmit());
    }

    function _checkEscaped(f) {
        return new Promise((resolve, reject) => {

            f();

            setTimeout(function () {

                console.log("iframe loaded ", iframe_load_count, " times (check)");

                if (iframe_load_count == 1) {
                    resolve();
                } else {
                    reject(new Error("escaped after click on " + dom.href));
                }
            }, 250)
        });

    }

    function loadiframe(src, check) {
        iframe_load_count = 0;
        let x = document.querySelector("iframe");
        x.src = src;
        x.onload = function () {
            var y = (x.contentWindow || x.contentDocument);

            iframe_load_count++;

            console.log("iframe loaded ", iframe_load_count, " times");

            if (iframe_load_count == 1) {

                check(y.document, y);

            }


        }
    }

    describe('Should not escape the single page application', function () {

        it("when clicking on navigation links", function (done) {
            loadiframe("index.html", function (doc, win) {

                let p = ["a[href$='/map/new' i]", "a[href$='/map' i]", "a[href$='/map/new' i]"];

                Promise.all(p.map(s => doc.querySelector(s)).map(checkLinkEscaped)).then(() => done()).catch(done);

            });
        });

        it("when clicking on view links", function (done) {
            loadiframe("index.html", async function (doc, win) {

                doc.querySelector("a[href='/map'").click();

                await wait(100);

                let p = doc.querySelectorAll("main a[target='view']");

                console.log("Found ", p.length, " view links");

                Promise.all(Array.from(p).map(checkLinkEscaped)).then(() => done()).catch(done);

            });
        });

        it("when clicking on edit links", function (done) {
            loadiframe("index.html", async function (doc, win) {

                doc.querySelector("a[href='/map'").click();

                await wait(100);

                let p = doc.querySelectorAll("main a[href$='/edit']");

                console.log("Found ", p.length, " editor links");

                Promise.all(Array.from(p).map(checkLinkEscaped)).then(() => done()).catch(done);

            });
        });

        it("when creating a new map", function (done) {
            loadiframe("index.html", async function (doc, win) {

                try {

                    doc.querySelector("a[href$='/map/new' i]").click();

                    let create_button = doc.querySelector("form button[data-action='create']");

                    should(create_button).not.be.null();

                    checkLinkEscaped(create_button).then(() => done()).catch(done);

                } catch (e) {
                    done(e);
                }

            });
        });

        it("when cloning an existing map", function (done) {
            loadiframe("index.html", async function (doc, win) {

                try {

                    doc.querySelector("a[href$='/map' i]").click();

                    await wait(100);

                    let clone_form = Array.from(doc.querySelectorAll("main.map-index form[action$='clone']")).pop();

                    should(clone_form).not.be.null();

                    checkFormEscaped(clone_form).then(() => done()).catch(done);

                } catch (e) {
                    done(e);
                }

            });
        });

        it("when starring an existing map", function (done) {
            loadiframe("index.html", async function (doc, win) {

                try {

                    doc.querySelector("a[href$='/map' i]").click();

                    await wait(100);

                    let fav_form = Array.from(doc.querySelectorAll("main.map-index form[action$='PATCH']")).pop();

                    should(fav_form).not.be.null();

                    checkFormEscaped(fav_form).then(() => done()).catch(done);

                } catch (e) {
                    done(e);
                }

            });
        });

        it("when deleting an existing map", function (done) {
            loadiframe("index.html", async function (doc, win) {

                try {

                    doc.querySelector("a[href$='/map' i]").click();

                    await wait(100);

                    let delete_form = Array.from(doc.querySelectorAll("main.map-index form[action$='DELETE']")).pop();

                    should(delete_form).not.be.null();

                    checkFormEscaped(delete_form).then(() => done()).catch(done);

                } catch (e) {
                    done(e);
                }

            });
        });

    });

    describe('Task 1', function () {

        let initial_count = 0;

        let rmap = makeRandomMap("Adding New Map");
        let umap = makeRandomMap("Replacing Updated Map");
        let map_id;
        let cmap_id;

        it("getMaps()", async function () {

            let maps = await api.getMaps();
            initial_count = maps.length;

        });

        it("addMap()", async function () {

            let amap = await api.addMap(rmap);

            should(amap).not.be.null();
            should(amap.title).be.equal(rmap.title);
            should(amap.zoom).be.equal(rmap.zoom);
            should(amap.tiles).be.equal(rmap.tiles);
            should(amap.center).be.deepEqual(rmap.center);
            should(amap._id).not.be.undefined();

            map_id = amap._id;

        });

        it("getMap() - should find the added map", async function () {

            let amap = await api.getMap(map_id);

            should(amap).not.be.undefined();
            should(amap).not.be.null();
            should(amap._id).be.equal(map_id);
            should(amap.title).be.equal(rmap.title);
            should(amap.zoom).be.equal(rmap.zoom);
            should(amap.tiles).be.equal(rmap.tiles);
            should(amap.center).be.deepEqual(rmap.center);

        });

        it("getMaps() - addMap() should increase the number of maps", async function () {

            let maps = await api.getMaps();

            should(maps.length).be.equal(initial_count + 1);

            let amap = maps.find(m => m._id == map_id);
            should(amap).be.not.undefined();
            should(amap).not.be.null();
            should(amap.title).be.equal(rmap.title);
            should(amap.zoom).be.equal(rmap.zoom);
            should(amap.tiles).be.equal(rmap.tiles);
            should(amap.center).be.deepEqual(rmap.center);
            should(amap._id).be.equal(map_id);

        });

        it("cloneMap()", async function () {

            let cmap = await api.cloneMap(map_id);

            should(cmap).be.not.undefined();
            should(cmap).not.be.null();
            should(cmap.title).be.equal(rmap.title);
            should(cmap.zoom).be.equal(rmap.zoom);
            should(cmap.tiles).be.equal(rmap.tiles);
            should(cmap.center).be.deepEqual(rmap.center);
            should(cmap._id).not.be.equal(map_id);

            cmap_id = cmap._id;

        })

        it("getMaps() - cloneMap() should increase the number of maps", async function () {

            let maps = await api.getMaps();

            should(maps.length).be.equal(initial_count + 2);

            let amap = maps.find(m => m._id == map_id);
            let cmap = maps.find(m => m._id == cmap_id);

            should(cmap).be.not.undefined();
            should(cmap).not.be.null();
            should(amap).be.not.undefined();
            should(amap).not.be.null();
            should(amap.title).be.equal(cmap.title);
            should(amap.zoom).be.equal(cmap.zoom);
            should(amap.tiles).be.equal(cmap.tiles);
            should(amap.center).be.deepEqual(cmap.center);

        });

        it("replaceMap()", async function () {

            let amap = await api.replaceMap(cmap_id, umap);

            should(amap).be.not.undefined();
            should(amap).not.be.null();
            should(amap.title).be.equal(umap.title);
            should(amap.zoom).be.equal(umap.zoom);
            should(amap.tiles).be.equal(umap.tiles);
            should(amap.center).be.deepEqual(umap.center);
            should(amap._id).be.equal(cmap_id);

        });

        it("getMaps() - replaceMap() should not change the number of maps", async function () {

            let maps = await api.getMaps();

            should(maps.length).be.equal(initial_count + 2);

        });

        it("toggleFav()", async function () {

            let amap = await api.getMap(cmap_id);

            let cmap = await api.toggleFav(cmap_id);

            should(cmap).be.not.undefined();
            should(cmap).not.be.null();

            should(amap).be.not.undefined();
            should(amap).not.be.null();

            should(amap.title).be.equal(cmap.title);
            should(amap.zoom).be.equal(cmap.zoom);
            should(amap.tiles).be.equal(cmap.tiles);
            should(amap.center).be.deepEqual(cmap.center);
            should(amap._id).be.equal(cmap._id);

            if (amap.fav === undefined) {
                should(cmap.fav).be.true();
            } else {
                should(cmap.fav).be.equal(!amap.fav);
            }

            let dmap = await api.toggleFav(cmap_id);

            should(amap.title).be.equal(dmap.title);
            should(amap.zoom).be.equal(dmap.zoom);
            should(amap.tiles).be.equal(dmap.tiles);
            should(amap.center).be.deepEqual(dmap.center);
            should(amap._id).be.equal(dmap._id);

            if (amap.fav === undefined) {
                should(dmap.fav).be.false();
            } else {
                should(dmap.fav).be.equal(amap.fav);
                should(dmap.fav).be.equal(!cmap.fav);

            }

        });

        it("deleteMap()", async function () {

            await api.deleteMap(map_id);

        });

        it("getMaps() - deleteMap() should decrease the number of maps", async function () {

            let maps = await api.getMaps();

            should(maps.length).be.equal(initial_count + 1);

            let amap = maps.find(m => m._id == map_id);
            let cmap = maps.find(m => m._id == cmap_id);

            should(cmap).be.not.undefined();
            should(cmap).not.be.null();
            should(amap).be.undefined();

        });

        it("deleteMap()", async function () {

            await api.deleteMap(cmap_id);

        });

        it("getMaps() - deleteMap() should decrease the number of maps", async function () {

            let maps = await api.getMaps();

            should(maps.length).be.equal(initial_count + 0);

            let amap = maps.find(m => m._id == map_id);
            let cmap = maps.find(m => m._id == cmap_id);

            should(cmap).be.undefined();
            should(amap).be.undefined();

        });

    });

    describe('Task 2', function () {

        it("should have a link to the map list view -- map list view should already be opened when loading the page", function (done) {

            loadiframe("index.html", async function (doc, win) {

                try {

                    await wait(100);

                    let a = doc.querySelector("a[href='/map' i]");

                    should(a).not.be.null();

                    let sections = doc.querySelectorAll("main.map-index section").length;

                    a.click();

                    await wait(100);

                    let sections2 = doc.querySelectorAll("main.map-index section").length;

                    should(sections).be.equal(sections2);

                    done();

                } catch (e) {
                    done(e);
                }

            });

        });

        it("should have the routing table setup correctly", function (done) {

            loadiframe("index.html", async function (doc, win) {

                try {

                    let id = randomName(24);

                    should(win.route({pathname: "/map"})).be.true("missing route for /map");
                    should(win.route({pathname:"/map/new"})).be.true("missing route for /map/new");
                    should(win.route({pathname:"/map/"+id})).be.true("missing route for /map/:id");
                    should(win.route({pathname:"/map/"+id+"/edit"})).be.true("missing route for /map/:id/edit");

                    done();

                } catch (e) {
                    done(e);
                }

            });

        });
    });

    describe('Task 3', function () {

        let rmap = makeRandomMap("Task 3 Map");
        let rmap_id;

        before(async function () {

            rmap_id = (await api.addMap(rmap))._id;

        });

        it("map list should include the map", function(done) {

            loadiframe("index.html", async function (doc, win) {

                try {
                    //load the map list view
                    await wait(100);

                    let section = doc.querySelector("main.map-index section[data-mapid='"+rmap_id+"']");

                    should(section).not.be.null();

                    done();

                } catch(e) {
                    done(e);
                }

            });

        });

        it("link to view and edit map should exist", function(done) {

            loadiframe("index.html", async function (doc, win) {

                try {
                    //load the map list view
                    await wait(100);

                    let a = doc.querySelector("a[href='/map/"+rmap_id+"/edit' i]");

                    should(a).not.be.null();

                    a = doc.querySelector("a[href='/map/"+rmap_id+"' i]");

                    should(a).not.be.null();

                    done();

                } catch(e) {
                    done(e);
                }

            });

        });

        it("button to fav map should work", function(done) {

            loadiframe("index.html", async function (doc, win) {

                try {
                    //load the map list view
                    await wait(100);

                    let b = doc.querySelector("section[data-mapid='"+rmap_id+"' i] form[action$='PATCH'] button");

                    should(b).not.be.null();

                    let before = await api.getMap(rmap_id);

                    b.click();

                    await wait(100);

                    let after = await api.getMap(rmap_id);

                    if (before.fav === undefined) {
                        should(after.fav).be.true();
                    } else {
                        should(after.fav).be.equal(!before.fav);
                    }

                    b = doc.querySelector("section[data-mapid='"+rmap_id+"' i] form[action$='PATCH'] button");

                    b.click();

                    await wait(100);

                    let again = await api.getMap(rmap_id);

                    if (before.fav === undefined) {
                        should(again.fav).be.false();
                    } else {
                        should(after.fav).be.equal(!again.fav);
                        should(before.fav).be.equal(again.fav);
                    }

                    done();

                } catch(e) {
                    done(e);
                }

            });

        });

        it("button to delete map should work", function(done) {

            loadiframe("index.html", async function (doc, win) {

                try {
                    //load the map list view
                    await wait(100);

                    let b = doc.querySelector("section[data-mapid='"+rmap_id+"' i] form[action$='DELETE'] button");

                    should(b).not.be.null();

                    b.click();

                    await wait(100);

                    let section = doc.querySelector("main.map-index section[data-mapid='"+rmap_id+"']");

                    should(section).be.null();

                    should(api.getMap(rmap_id)).be.rejected();

                    done();

                } catch(e) {
                    done(e);
                }

            });


        });

    });

    describe('Task 4', function () {

        let rmap = makeRandomMap("Task 4 Map");
        let rmap_id;

        before(async function () {

            rmap_id = (await api.addMap(rmap))._id;

        });

        it("link to view map should work", function(done) {

            loadiframe("index.html", async function (doc, win) {

                try {
                    //load the map list view
                    await wait(100);

                    let a = doc.querySelector("a[href='/map/"+rmap_id+"' i]");

                    should(a).not.be.null();

                    a.click();

                    await wait(100);

                    let yes = win.L.maps.some(m=>{
                        let location = m.getCenter();
                        let zoom = m.getZoom();
                        return location.lat == rmap.center.lat && location.lng == rmap.center.lng && zoom == rmap.zoom;
                    })

                    should(yes).be.true("map was displayed after clicking on the link");

                    done();

                } catch(e) {
                    done(e);
                }

            });

        });

        after(async function () {

            api.deleteMap(rmap_id);

        });

    });

    describe('Task 5', function () {

        let rmap = makeRandomMap("Task 5 Map");
        let rmap_id;

        before(async function () {

            rmap_id = (await api.addMap(rmap))._id;

        });

        it("should have a link to the create new map view -- should load the map editor when clicking it", function (done) {

            loadiframe("index.html", async function (doc, win) {

                try {

                    let create_button = doc.querySelector("form button[data-action='create']");

                    should(create_button).be.null();

                    doc.querySelector("a[href$='/map/new' i]").click();

                    create_button = doc.querySelector("form button[data-action='create']");

                    should(create_button).not.be.null();

                    done();

                } catch (e) {
                    done(e);
                }

            });

        });

        it("should have a link to the edit existing map view -- should load the map editor when clicking it", function (done) {

            loadiframe("index.html", async function (doc, win) {

                try {

                    await wait(100);

                    let update_button = doc.querySelector("form button[data-action='update']");

                    should(update_button).be.null();

                    doc.querySelector("a[href$='/map/"+rmap_id+"/edit' i]").click();

                    await wait(100);

                    update_button = doc.querySelector("form button[data-action='update']");

                    should(update_button).not.be.null();

                    done();

                } catch (e) {
                    done(e);
                }

            });

        });

        after(async function () {

            api.deleteMap(rmap_id);

        });

    });

});