/**
 * Web Atelier 2023 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Task 2: Static Web Server
 *
 */

const request = require('supertest')("http://localhost:8989");
const cheerio = require('cheerio');
const should = require('should');
const fs = require('fs-extra');

function rndStr() {
    return Math.random().toString(36).substring(7);
}


describe('Task 2: Static Web Server', function() {

    let rndURL = rndStr();
    let rndURL2 = rndStr() + "/" + rndStr();

    it('Web server should be started, listening on port 8989', function(done) {

        request
            .get('/')
            .send()
            .end(done);

    });


    it('GET /index.html should respond with 200, Content-Type: text\/html', function(done) {

        request
            .get('/index.html')
            .send()
            .expect(200)
            .expect('Content-Type', /text\/html.*/)
            .end(done);

    });

    it('GET /index.html should deliver the content of the corresponding file "public/index.html"', function(done) {

        request
            .get('/index.html')
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    fs.readFile(__dirname+"/../public/index.html", (err, data) => {

                        if (err) done(err);
                        else {

                            should(res.text).be.equal(data.toString());

                            done();

                        }
                    });
                }
            });
    });


    it('GET /css/style.css should respond with 200, Content-Type: text\/css', function(done) {

        request
            .get('/css/style.css')
            .send()
            .expect(200)
            .expect('Content-Type', /text\/css.*/)
            .end(done);

    });

    it('GET /css/style.css should deliver the content of the corresponding file "public/css/style.css"', function(done) {

        request
            .get('/css/style.css')
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    fs.readFile(__dirname+"/../public/css/style.css", (err, data) => {

                        if (err) done(err);
                        else {

                            should(res.text).be.equal(data.toString());

                            done();

                        }
                    });
                }
            });
    });


    it('GET /js/script.js should respond with 200, Content-Type: application\/javascript', function(done) {

        request
            .get('/js/script.js')
            .send()
            .expect(200)
            .expect('Content-Type', /application\/javascript.*/)
            .end(done);

    });

    it('GET /js/script.js should deliver the content of the corresponding file "public/js/script.js"', function(done) {

        request
            .get('/js/script.js')
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    fs.readFile(__dirname+"/../public/js/script.js", (err, data) => {

                        if (err) done(err);
                        else {

                            should(res.text).be.equal(data.toString());

                            done();

                        }
                    });
                }
            });
    });


    it('GET /'+rndURL+'.html should respond with 404', function(done) {

        request
            .get('/'+rndURL+".html")
            .send()
            .expect(404)
            .end(done);

    });

    it('GET /'+rndURL2+'.jpg should respond with 404', function(done) {

        request
            .get('/'+rndURL2+".jpg")
            .send()
            .expect(404)
            .end(done);

    });

});