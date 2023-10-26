/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Read-only code (do not edit)
 *
 * API Tests for Marker routes
 *
 * These tests assume that POST /map works correctly
 *
 */
const fc = require('fast-check');
const should = require('should');
const request = require('supertest')("http://localhost:8989");

function anyStatus(a) {
    return (res) => {
        if (a.indexOf(res.status) == -1) throw new Error(`Received ${res.status}; Expected ${a.join(" or ")}`);
    }
}

const crypto = require('crypto').webcrypto;

function randomName(len = 24) {
    return Array.from(crypto.getRandomValues(new Uint8Array(len)), (x) => x.toString(16).padStart(2, "0")).join("").substring(0, len);
}


function makeRandomMap(title = "Random Map") {
    return {
        zoom: Math.floor(Math.random() * 20) + 1,
        title: title + " " + randomName(),
        tiles: Math.random() < 0.5 ? "natgeo" : "osm",
        center: {
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
        }
    }
}


function makeRandomMarker(title = "Random Marker") {
    return {
        title: title + " " + randomName(),
        hue: Math.floor(Math.random() * 360),
        type: Math.random() < 0.5 ? "school" : "shop",
        location: {
            lat: Math.random() * 180 - 90,
            lng: Math.random() * 360 - 180
        }
    }
}


describe('Markers API', function () {

    let initial_length;

    let _mid; //map id

    let newMap = makeRandomMap("Create New Map for testing markers");

    describe("POST /map", function () {

        it('should create a new map', function(done) {

            request
                .post('/map')
                .set('Accept', 'application/json')
                .send(newMap)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMap.title);
                    should(c.tiles).be.equal(newMap.tiles);
                    should(c.zoom).be.equal(newMap.zoom);
                    should(c.center).be.deepEqual(newMap.center);

                    //check that there is the mongodb key
                    should.exist(c._id);

                    _mid = c._id;

                    done();
                });

        });

    });

    describe("GET /map/:mid/marker", function () {

        it('should accept and respond with application/json', (done) => {

            request
                .get('/map/' + _mid + "/marker")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);

        });

        it('should not accept text/html', (done) => {

            request
                .get('/map/' + _mid + "/marker")
                .set('Accept', 'text/html')
                .send()
                .expect(406, done)

        });

        it('JSON response should be an empty array', (done) => {

            request
                .get('/map/' + _mid + "/marker")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let a = JSON.parse(res.text);

                    should(Array.isArray(a)).be.equal(true);

                    initial_length = a.length;

                    should(initial_length).be.equal(0);

                    done();
                });

        });

    });

    let newMarker = makeRandomMarker("Create New Marker");

    let _id_marker;

    describe("POST /map/:mid/marker", function () {

        it('should create a new marker', function(done) {

            request
                .post('/map/'+_mid+'/marker')
                .set('Accept', 'application/json')
                .send(newMarker)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMarker.title);
                    should(c.type).be.equal(newMarker.type);
                    should(c.hue).be.equal(newMarker.hue);
                    should(c.location).be.deepEqual(newMarker.location);

                    //check that there is the mongodb key
                    should.exist(c._id);

                    _id_marker = c._id;

                    // console.log("POST ",_id_marker);

                    done();
                });

        });

        it('marker list should be bigger', function(done) {

            request
                .get('/map/' + _mid + "/marker")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let a = JSON.parse(res.text);

                    should(Array.isArray(a)).be.equal(true);

                    should(initial_length + 1).be.equal(a.length);

                    done();
                });

        });

    });

    describe("GET /map/:mid/marker/:id", function () {

        it('newly created map should match', (done) => {

            request
                .get('/map/' + _mid + "/marker/" + _id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMarker.title);
                    should(c.type).be.equal(newMarker.type);
                    should(c.hue).be.equal(newMarker.hue);
                    should(c.location).be.deepEqual(newMarker.location);
                    should(c._id).be.equal(_id_marker);
                    should(c.map_id).be.equal(_mid);

                    done();
                });

        });

    });

    let new_id_marker = randomName(24);

    describe("PUT /map/:mid/marker/:id", function () {

        let updatedMarker = makeRandomMarker("Updated Marker");

        let otherMarker = makeRandomMarker("Create Other Marker");

        it('should accept and respond with application/json', (done) => {

            request
                .put('/map/' + _mid + "/marker/" + _id_marker)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(newMarker)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);

        });

        it('original marker should exist', (done) => {

            request
                .get('/map/' + _mid + "/marker/" + _id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMarker.title);
                    should(c.type).be.equal(newMarker.type);
                    should(c.hue).be.equal(newMarker.hue);
                    should(c.location).be.deepEqual(newMarker.location);
                    should(c._id).be.equal(_id_marker);
                    should(c.map_id).be.equal(_mid);

                    done();
                });

        });

        it('should update the previously created marker', (done) => {

            request
                .put('/map/' + _mid + "/marker/" + _id_marker)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(updatedMarker)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMarker.title);
                    should(c.type).be.equal(updatedMarker.type);
                    should(c.hue).be.equal(updatedMarker.hue);
                    should(c.location).be.deepEqual(updatedMarker.location);
                    should(c._id).be.equal(_id_marker);
                    should(c.map_id).be.equal(_mid);

                    done();
                });

        });

        it('id should not exist before put', function (done) {

            request
                .get('/map/' + _mid + "/marker/" + new_id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it('should created a new marker with the given id', (done) => {

            request
                .put('/map/' + _mid + "/marker/" + new_id_marker)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(otherMarker)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(otherMarker.title);
                    should(c.type).be.equal(otherMarker.type);
                    should(c.hue).be.equal(otherMarker.hue);
                    should(c.location).be.deepEqual(otherMarker.location);
                    should(c._id).be.equal(new_id_marker);
                    should(c.map_id).be.equal(_mid);

                    // console.log("PUT ",new_id_marker);

                    done();
                });

        });

        it('marker list should be bigger', function(done) {

            request
                .get('/map/' + _mid + "/marker")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let a = JSON.parse(res.text);

                    should(Array.isArray(a)).be.equal(true);

                    should(initial_length + 2).be.equal(a.length);

                    done();
                });

        });

    });

    describe("DELETE /map/:mid/marker/:id", function () {

        it(`should be found before deleting it`, function (done) {

            request
                .get('/map/' + _mid + "/marker/" + new_id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(200, done);

        });

        it(`should be found before deleting it`, function (done) {

            request
                .get('/map/' + _mid + "/marker/" + _id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(200, done);

        });

        it(`cleanup posted marker`, function (done) {

            request
                .delete('/map/' + _mid + "/marker/" + _id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(204, done);

        });

        it(`cleanup newly put marker`, function (done) {

            request
                .delete('/map/' + _mid + "/marker/" + new_id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(204, done);

        });

        it(`should not be found before deleting it`, function (done) {

            request
                .get('/map/' + _mid + "/marker/" + new_id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it(`should not be found before deleting it`, function (done) {

            request
                .get('/map/' + _mid + "/marker/" + _id_marker)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

    });

});