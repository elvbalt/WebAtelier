/**
 * Web Atelier 2023 4 - JavaScript on the Server-side
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Task 1: Web Server Homepage Redirect
 *
 */

const request = require('supertest')("http://localhost:8989");
const cheerio = require('cheerio');
const should = require('should');



describe('Task 1: Web Server Homepage Redirect', function() {

    it('Web server should be started, listening on port 8989', function(done) {

        request
            .get('/')
            .send()
            .end(done);

    });

    it('GET / should redirect to Location: /index.html', function(done) {

        request
            .get('/')
            .send()
            .expect(302)
            .expect('Location', "/index.html")
            .end(done);

    });

});