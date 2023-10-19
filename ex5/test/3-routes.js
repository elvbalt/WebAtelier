/**
 * Web Atelier 2023 5 - Web Apps with Express.js
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Task 3-8: Map List Model Module
 *
 */

const should = require('should');
const cheerio = require('cheerio');
const request = require('supertest')("http://localhost:8989");


function anyStatus(a) {
    return (res) => {
        if (a.indexOf(res.status) == -1) throw new Error(`Received ${res.status}; Expected ${a.join(" or ")}`);
    }
}
const crypto = require('crypto').webcrypto;

function randomText() {
    return Array.from(crypto.getRandomValues(new Uint8Array(10)), (x) => x.toString(16).padStart(2, "0")).join("");
}

function randomInteger(max = 10000) {
    return Math.round(Math.random() * max);
}

let initial_count;
let created_count;

describe('Task 3.', function () {

    describe(`GET /map`, function () {

        it('should list the maps', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    initial_count = Array.from($("main section")).length;

                    done();

                });

        });

    });

});

let put_href;

let new_url;
let new_id;


let title = "Title " + randomText();
let zoom = randomInteger(10);
let lat = Math.ceil(Math.random() * 180) - 90;
let lng = Math.ceil(Math.random() * 360) - 180;


let new_title = "New Title " + randomText();
let new_zoom = randomInteger(10);
let new_lat = Math.ceil(Math.random() * 180) - 90;
let new_lng = Math.ceil(Math.random() * 360) - 180;


describe('Task 5.', function () {

    describe('GET /map/new', function () {

        it('should render a form to create a new map with the title, tiles, zoom and lat/lng fields', (done) => {

            request
                .get(`/map/new`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("form[action='/map'][method='post'] input[name='title']").html());
                    should.exist($("form[action='/map'][method='post'] input[name='zoom']").html());
                    should.exist($("form[action='/map'][method='post'] input[name='lng']").html());
                    should.exist($("form[action='/map'][method='post'] input[name='lat']").html());
                    should.exist($("form[action='/map'][method='post'] select[name='tiles']").html());

                    done();

                });

        });

    });



    describe(`POST /map`, function () {

        it('should create a new map when submitting the form', (done) => {

            request
                .post(`/map`)
                .set('Accept', 'text/html')
                .field("title", title)
                .field("tiles", "natgeo")
                .field("zoom", zoom)
                .field("lng", lng)
                .field("lat", lat)
                .expect(302)
                .expect('Location', /\/map\/.*/)
                .end(function (err, res) {
                    if (err) return done(err);

                    new_url = res.headers.location;
                    should(new_url).be.not.undefined();

                    new_id = new_url.split("/").pop();
                    should(new_id).be.not.undefined();

                    done();

                });

        });
    });

    describe(`GET /map`, function () {

        it('should list the newly added map', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    created_count = Array.from($("main section")).length;

                    should(created_count).be.equal(initial_count + 1);

                    const list = Array.from($("main section").map((i, a) => $(a).text()));

                    should(true).be.equal(list.some(t => t.indexOf(title) >= 0));

                    done();

                });

        });
    });

    describe(`GET /map/:id`, function () {

        it('newly added map location should exist and include new map title', (done) => {

            request
                .get(new_url)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    should(res.text.indexOf(title) >= 0).be.true();

                    done();

                });

        });

    });

    describe(`GET /map/:id/map.js`, function () {

        it('new map object should be assigned to map variable', (done) => {

            request
                .get(new_url+"/map.js")
                .send()
                .expect(200)
                .end((err, res) => {
                    if (err) done(err);
                    else {

                        // console.log(res.text);

                        map = Function(`${res.text}; return map;`)()

                        // console.log(map);

                        should.exist(map);
                        should.exist(map.title);
                        should.exist(map.tiles);
                        should.exist(map.center);
                        should.exist(map.center.lat);
                        should.exist(map.center.lng);
                        should.exist(map.zoom);
                        title.should.be.equal(map.title);
                        zoom.should.be.equal(map.zoom);
                        lat.should.be.equal(map.center.lat);
                        lng.should.be.equal(map.center.lng);

                        done();

                    }
                });

        });

    });

    let edit_href;

    describe(`GET /map`, function () {

        it('map list should include edit link', (done) => {

            request
            .get(`/map`)
            .set('Accept', 'text/html')
            .send()
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                if (err) return done(err);

                const $ = cheerio.load(res.text);

                const list = Array.from($("main section a").map((i, a) => $(a).attr('href')));

                should(true).be.equal(list.length > 0);
                should(true).be.equal(list.some(l => l.endsWith("/edit")));

                //assumes that the newly added entry is the last link
                edit_href = list.filter(l => l.endsWith("/edit")).pop();

                done();

            });

        });

    });

    describe(`GET /map/:id/edit`, function () {

        it('edit form should include the same fields as the create form', (done) => {

            //assumes /map/${id}/edit

            put_href = edit_href.replace("/edit", "");

            request
                .get(edit_href)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post']`).html());
                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post'] input[name='zoom']`).html());
                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post'] input[name='lat']`).html());
                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post'] input[name='lng']`).html());
                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post'] input[name='title']`).html());
                    should.exist($(`form[action='${put_href}?_method=PUT' i][method='post'] select[name='tiles']`).html());

                    done();

                });

        });


    });

    describe(`PUT /map/:id`, function () {

        it('should redirect to the map list when submitting the edit form', (done) => {

            request
                .put(put_href)
                .set('Accept', 'text/html')
                .field("title", new_title)
                .field("tiles", "osm")
                .field("zoom", new_zoom)
                .field("lng", new_lng)
                .field("lat", new_lat)
                .expect(302)
                .expect('Location', /\/map\/.*/)
                .end(done);

        });


    });

    describe(`GET /map`, function () {

        it('should list the updated map text', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    should(res.text.indexOf(new_title) >= 0).be.true();
                    should(res.text.indexOf(title) == -1).be.true();

                    done();

                });

        });
    });

});


describe('Task 4.', function () {

    describe(`GET /map/:id`, function () {

        it('map page should exist for the newly created map', (done) => {

            request
                .get(new_url)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(done);

        });

    });


    describe(`GET /map/:id/map.js`, function () {

        it('map object should be assigned to map variable', (done) => {

            request
                .get(new_url+"/map.js")
                .send()
                .expect(200)
                .end((err, res) => {
                    if (err) done(err);
                    else {

                        // console.log(res.text);

                        map = Function(`${res.text}; return map;`)()

                        // console.log(map);

                        should.exist(map);
                        should.exist(map.title);
                        should.exist(map.tiles);
                        should.exist(map.center);
                        should.exist(map.center.lat);
                        should.exist(map.center.lng);
                        should.exist(map.zoom);
                        new_title.should.be.equal(map.title);
                        new_zoom.should.be.equal(map.zoom);
                        new_lat.should.be.equal(map.center.lat);
                        new_lng.should.be.equal(map.center.lng);

                        done();

                    }
                });

        });

    });


});

let before_clone_count;
let after_clone_count;
let cloned_url;
let cloned_id;

describe('Task 7.', function () {

    describe("GET /map", function () {

        it('map list should contain item to be cloned', (done) => {

            request
                .get("/map")
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())

                    before_clone_count = Array.from($(`main section`)).length;

                    should(Array.from($(`main section[id='map-${new_id}']`)).length).be.equal(1);

                    done();

                });

        });

    });

    describe("POST /map/:id/clone", function () {

        it('clone should redirect to the cloned map URL', (done) => {

            request
                .post(new_url+"/clone")
                .set('Accept', 'text/html')
                .send()
                .expect(302)
                .expect('Location', /\/map.*/)
                .end(function (err, res) {
                    if (err) return done(err);

                    cloned_url = res.headers.location;
                    should(cloned_url).be.not.undefined();

                    cloned_id = new_url.split("/").pop();
                    should(cloned_id).be.not.undefined();

                    done();

                });

        });

    });

    describe("GET /map/:id", function () {

        it('cloned map should exist', (done) => {

            request
                .get(cloned_url)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-type', /html/)
                .end(done);

        });

    });

    describe("GET /map", function () {

        it('map list should contain cloned items', (done) => {

            request
                .get("/map")
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())

                    after_clone_count = Array.from($(`main section`)).length;

                    should(before_clone_count + 1).be.equal(after_clone_count);

                    should(Array.from($(`main section[id='map-${cloned_id}']`)).length).be.equal(1);
                    should(Array.from($(`main section[id='map-${new_id}']`)).length).be.equal(1);

                    done();

                });

        });

    });

});

describe('Task 8.', function () {

    let fav_true_count;
    let fav_false_count;

    describe("GET /map", function () {

        it('map list should display favourite status as hidden field', (done) => {

            request
                .get("/map")
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    fav_true_count = Array.from($("main section form input[type='hidden'][name='fav'][value='true']")).length;
                    fav_false_count = Array.from($("main section form input[type='hidden'][name='fav'][value='false']")).length;

                    done();

                });

        });

    });

    describe(`PATCH /map/:id/fav`, function () {

        it('patch should toggle the favourite bit of the newly added map and redirect to the map list', (done) => {

            request
                .patch(new_url + "/fav")
                .set('Accept', 'text/html')
                .send()
                .expect(302)
                .expect('Location', /\/map.*/)
                .end(done);

        });

    });

    describe("GET /map", function () {

        it('map list should change favourite accordingly', (done) => {

            request
                .get("/map")
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    let new_fav_true_count = Array.from($("main section form input[type='hidden'][name='fav'][value='true']")).length;
                    let new_fav_false_count = Array.from($("main section form input[type='hidden'][name='fav'][value='false']")).length;

                    should((new_fav_true_count == fav_true_count + 1 && new_fav_false_count == fav_false_count - 1)
                        || (new_fav_true_count == fav_true_count - 1 && new_fav_false_count == fav_false_count + 1)).be.true();

                    done();

                });

        });

    });

    describe(`PATCH /map/:id/fav`, function () {

        it('patch should toggle again the favourite bit of the newly added map and redirect to the map list', (done) => {

            request
                .patch(new_url + "/fav")
                .set('Accept', 'text/html')
                .send()
                .expect(302)
                .expect('Location', /\/map.*/)
                .end(done);

        });

    });

    describe("GET /map", function () {

        it('map list should change favourite again accordingly', (done) => {

            request
                .get("/map")
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    let new_fav_true_count = Array.from($("main section form input[type='hidden'][name='fav'][value='true']")).length;
                    let new_fav_false_count = Array.from($("main section form input[type='hidden'][name='fav'][value='false']")).length;

                    should((new_fav_true_count == fav_true_count && new_fav_false_count == fav_false_count)).be.true();

                    done();

                });

        });

    });

});

describe('Task 6.', function () {

    let before_count;

    describe("GET /map", function () {

        it('should list the available maps', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    before_count = Array.from($("main section")).length;

                    done();

                });

        });

        it('should include a delete form for each map', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    let items_count = Array.from($("main section")).length;

                    // let form_count = Array.from($("main section form[method='post'][action^='/map/']")).length;

                    // should(form_count).be.equal(items_count);

                    let delete_count = Array.from($("main section form[method='post'][action$='_method=delete' i]")).length;

                    should(items_count).be.equal(delete_count);

                    done();

                });

        });

    });

    describe(`GET /map/:id`, function () {

        it('map page should exist before deleting it', (done) => {

            request
                .get(put_href)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .end(done);

        });

    });


    describe(`DELETE /map/:id`, function () {

        it('should redirect to the map list after deleting item and display a message', (done) => {

            request
                .delete(put_href)
                .set('Accept', 'text/html')
                .send()
                .expect(302)
                .expect('Location', '/map?msg=Map+deleted')
                .end(done);

        });

        it('should redirect to the map list after deleting cloned item and display a message', (done) => {

            request
                .delete(cloned_url)
                .set('Accept', 'text/html')
                .send()
                .expect(302)
                .expect('Location', '/map?msg=Map+deleted')
                .end(done);

        });

    });

    describe(`GET /map/:id`, function () {

        it('map page should not be found after deleting it', (done) => {

            request
                .get(put_href)
                .set('Accept', 'text/html')
                .send()
                .expect(404)
                .end(done);

        });

        it('cloned map page should not be found after deleting it', (done) => {

            request
                .get(cloned_url)
                .set('Accept', 'text/html')
                .send()
                .expect(404)
                .end(done);

        });

    });

    describe(`GET /map`, function () {

        it('deleted map should disappear from the list', (done) => {

            request
                .get(`/map`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    const $ = cheerio.load(res.text);

                    should.exist($("main").html())
                    let after_count = Array.from($("main section")).length;

                    should(after_count).be.equal(before_count - 2);
                    should(initial_count).be.equal(after_count);

                    done();

                });

        });


    });


    describe(`GET /map?msg`, function () {

        let msg = "Map deleted " + randomText();

        it('should display message anywhere in the response', (done) => {

            request
                .get(`/map?msg=${msg}`)
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(function (err, res) {
                    if (err) return done(err);

                    should(res.text.indexOf(msg) >= 0).be.true();

                    done();

                });



        });

    });


});