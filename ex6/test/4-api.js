/**
 * Web Atelier 2023  Exercise 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Read-only code (do not edit)
 *
 * Task 2. API Tests
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


describe('Task 2. - API', function () {

    let initial_length;

    let _id;

    describe("GET /map", function () {

        it('should accept and respond with application/json', (done) => {

            request
                .get('/map')
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);

        });

        it('should accept and respond with text/html', (done) => {

            request
                .get('/map')
                .set('Accept', 'text/html')
                .send()
                .expect(200)
                .expect('Content-Type', /html/)
                .end(done);

        });

        it('should not accept to be represented as image/png', (done) => {

            request
                .get('/map')
                .set('Accept', 'image/png')
                .send()
                .expect(406, done);

        });


        it('JSON response should be an array', (done) => {

            request
                .get('/map')
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let a = JSON.parse(res.text);

                    should(Array.isArray(a)).be.equal(true);

                    initial_length = a.length;

                    done();
                });

        });

    });

    let newMap = makeRandomMap("Create New Map");

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

                    _id = c._id;

                    done();
                });

        });

        it('map list should be bigger', function(done) {

            request
                .get('/map')
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

    describe("GET /map/:id", function () {

        it('should accept and respond with application/json', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(done);

        });

        it('newly created map should match', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMap.title);
                    should(c.tiles).be.equal(newMap.tiles);
                    should(c.zoom).be.equal(newMap.zoom);
                    should(c.center).be.deepEqual(newMap.center);
                    should(c._id).be.equal(_id);

                    done();
                });

        });

        it('a random map should be not found ', function (done) {

            request
                .get('/map/' + randomName(24))
                .send()
                .expect(404, done);
        });

        it('an even more random map should be not found ', function (done) {

            request
                .get('/map/' + randomName(5 + 33 * Math.random()))
                .send()
                .expect(404, done);
        });

    });

    let newID = randomName(24); //'5f428bb8fa5445f1c9ee013b';

    let updatedMap = makeRandomMap("Updated Map");

    let otherMap = makeRandomMap("Create Other Map");

    describe("PUT /map/:id", function () {

        it('should accept and respond with application/json', (done) => {

            request
                .put('/map/' + _id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(newMap)
                .expect(anyStatus([200, 201]))
                .expect('Content-Type', /json/)
                .end(done);

        });

        it('original map should exist', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(newMap.title);
                    should(c.tiles).be.equal(newMap.tiles);
                    should(c.zoom).be.equal(newMap.zoom);
                    should(c.center).be.deepEqual(newMap.center);
                    should(c._id).be.equal(_id);

                    done();
                });

        });

        it('updated map should match', (done) => {

            request
                .put('/map/' + _id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(updatedMap)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    done();
                });

        });

        it('id should not exist before put', function (done) {

            request
                .get('/map/' + newID)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it('should create a new map with a given id ', function (done) {

            request
                .put('/map/' + newID)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(otherMap)
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(otherMap.title);
                    should(c.tiles).be.equal(otherMap.tiles);
                    should(c.zoom).be.equal(otherMap.zoom);
                    should(c.center).be.deepEqual(otherMap.center);
                    should(c._id).be.not.equal(_id);
                    should(c._id).be.equal(newID);

                    done();
                });
        });


    });

    describe("PATCH /map/:id/fav", function () {

        let original_fav;
        let changed_fav;

        it('original map should exist', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    original_fav = c.fav;

                    done();
                });

        });

        it('should toggle fav bit', (done) => {

            request
                .patch('/map/' + _id + "/fav")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    if (original_fav === true) {
                        should(c.fav).be.equal(false);
                    } else if (original_fav === false) {
                        should(c.fav).be.equal(true);
                    } else { //undefined
                        should(c.fav).be.equal(true);
                    }

                    changed_fav = c.fav;

                    done();
                });

        });

        it('should toggle fav bit', (done) => {

            request
                .patch('/map/' + _id + "/fav")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    should(c.fav).be.equal(!changed_fav);

                    if (original_fav === true) {
                        should(c.fav).be.equal(true);
                    } else if (original_fav === false) {
                        should(c.fav).be.equal(false);
                    } else { //undefined
                        should(c.fav).be.equal(true);
                    }

                    changed_fav = c.fav;

                    done();
                });

        });

    });

    let cloned_id;

    let clonedMap = makeRandomMap("Cloned Map");

    describe("POST /map/:id/clone", function () {

        it('original map should exist', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    done();
                });

        });

        it('should clone a map', (done) => {

            request
                .post('/map/' + _id + "/clone")
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).not.be.equal(_id);

                    cloned_id = c._id;

                    done();
                });

        });

        it('cloned map should exist', (done) => {

            request
                .get('/map/' + cloned_id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(cloned_id);

                    done();
                });

        });

        it('should update the cloned map with a given id ', function (done) {

            request
                .put('/map/' + cloned_id)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(clonedMap)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(clonedMap.title);
                    should(c.tiles).be.equal(clonedMap.tiles);
                    should(c.zoom).be.equal(clonedMap.zoom);
                    should(c.center).be.deepEqual(clonedMap.center);
                    should(c._id).be.equal(cloned_id);

                    done();
                });
        });

        it('original map should not be affected', (done) => {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);

                    let c = JSON.parse(res.text);

                    should(c.title).be.equal(updatedMap.title);
                    should(c.tiles).be.equal(updatedMap.tiles);
                    should(c.zoom).be.equal(updatedMap.zoom);
                    should(c.center).be.deepEqual(updatedMap.center);
                    should(c._id).be.equal(_id);

                    done();
                });

        });
    });

    describe("DELETE /map/:id", function () {

        it(`should be found before deleting it`, function (done) {

            request
                .get('/map/' + newID)
                .set('Accept', 'application/json')
                .send()
                .expect(200, done);

        });

        it(`should be found before deleting it`, function (done) {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(200, done);

        });

        it(`should be found before deleting it`, function (done) {

            request
                .get('/map/' + cloned_id)
                .set('Accept', 'application/json')
                .send()
                .expect(200, done);

        });

        it('maps should be listed before being deleted', function (done) {

            request
                .get('/map/')
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/, 'it should respond with Content-Type: application/json')
                .end((err, res) => {
                    if (err) return done(err);

                    const a = JSON.parse(res.text);

                    a.map((o) => o._id).should.containEql(_id);
                    a.map((o) => o._id).should.containEql(newID);
                    a.map((o) => o._id).should.containEql(cloned_id);

                    should.exist(a.find((o) => o._id == _id));
                    should.exist(a.find((o) => o._id == newID));
                    should.exist(a.find((o) => o._id == cloned_id));

                    initial_length.should.be.equal(a.length - 3);

                    done();
                });
        });

        it(`cleanup posted map`, function (done) {

            request
                .delete('/map/' + newID)
                .set('Accept', 'application/json')
                .send()
                .expect(204, done);

        });

        it(`cleanup newly put map`, function (done) {

            request
                .delete('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(204, done);

        });

        it(`cleanup cloned map`, function (done) {

            request
                .delete('/map/' + cloned_id)
                .set('Accept', 'application/json')
                .send()
                .expect(204, done);

        });

        it(`should not be found after deleting it`, function (done) {

            request
                .get('/map/' + newID)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it(`should not be found after deleting it`, function (done) {

            request
                .get('/map/' + _id)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it(`should not be found after deleting it`, function (done) {

            request
                .get('/map/' + cloned_id)
                .set('Accept', 'application/json')
                .send()
                .expect(404, done);

        });

        it('deleted maps should no longer be listed', function (done) {

            request
                .get('/map/')
                .set('Accept', 'application/json')
                .send()
                .expect(200)
                .expect('Content-Type', /json/, 'it should respond with Content-Type: application/json')
                .end((err, res) => {
                    if (err) return done(err);

                    const a = JSON.parse(res.text);

                    a.map((o) => o._id).should.not.containEql(_id);
                    a.map((o) => o._id).should.not.containEql(newID);
                    a.map((o) => o._id).should.not.containEql(cloned_id);

                    should.not.exist(a.find((o) => o._id == _id));
                    should.not.exist(a.find((o) => o._id == newID));
                    should.not.exist(a.find((o) => o._id == cloned_id));

                    initial_length.should.be.equal(a.length, 'the collection size should shrink back to the original one');

                    done();
                });
        });

    });

});