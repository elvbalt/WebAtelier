/**
 * Web Atelier 2023 4 - JavaScript on the Server-side
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 * Task 3: Dynamic Web Server - Country and City Lists
 *
 */

const request = require('supertest')("http://localhost:8989");
const cheerio = require('cheerio');
const should = require('should');
const fs = require('fs-extra');


let PROB = 0.1;
if (process.argv.indexOf("--all") >= 0) PROB = 1.1;

function rnd_it(s, f) {
    //speed up the test
    if (Math.random()<PROB) {
        it(s,f);
    }
}



describe('Task 3: Dynamic Web Server - Country and City Lists', function() {

    it('Web server should be started, listening on port 8989', function(done) {

        request
            .get('/')
            .send()
            .end(done);

    });

    it('GET /geo should respond with 200', function(done) {

        request
            .get('/geo')
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Ukraine should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Iraq should respond with 200`, function(done) {

        request
            .get(`/geo?c=Iraq`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Mexico should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=United%20States should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Philippines should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=China should respond with 200`, function(done) {

        request
            .get(`/geo?c=China`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Argentina should respond with 200`, function(done) {

        request
            .get(`/geo?c=Argentina`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Nigeria should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Japan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Angola should respond with 200`, function(done) {

        request
            .get(`/geo?c=Angola`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Myanmar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Myanmar`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=South%20Africa should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Mozambique should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mozambique`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=India should respond with 200`, function(done) {

        request
            .get(`/geo?c=India`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Taiwan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Somalia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Indonesia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Benin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Benin`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Pakistan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Germany should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Turkey should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=United%20Kingdom should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Spain should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Malaysia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Gabon should respond with 200`, function(done) {

        request
            .get(`/geo?c=Gabon`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Colombia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Colombia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Madagascar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Madagascar`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Venezuela should respond with 200`, function(done) {

        request
            .get(`/geo?c=Venezuela`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Morocco should respond with 200`, function(done) {

        request
            .get(`/geo?c=Morocco`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Congo%20(Brazzaville) should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=South%20Korea should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Algeria should respond with 200`, function(done) {

        request
            .get(`/geo?c=Algeria`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Bolivia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bolivia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Tajikistan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tajikistan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Italy should respond with 200`, function(done) {

        request
            .get(`/geo?c=Italy`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Brazil should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Central%20African%20Republic should respond with 200`, function(done) {

        request
            .get(`/geo?c=Central%20African%20Republic`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa) should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Burkina%20Faso should respond with 200`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Cuba should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cuba`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Israel should respond with 200`, function(done) {

        request
            .get(`/geo?c=Israel`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Peru should respond with 200`, function(done) {

        request
            .get(`/geo?c=Peru`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Sudan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sudan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Laos should respond with 200`, function(done) {

        request
            .get(`/geo?c=Laos`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Russia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Dominican%20Republic should respond with 200`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Sierra%20Leone should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sierra%20Leone`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Nepal should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nepal`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Haiti should respond with 200`, function(done) {

        request
            .get(`/geo?c=Haiti`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Malawi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malawi`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Canada should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Ghana should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Liberia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Liberia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Niger should respond with 200`, function(done) {

        request
            .get(`/geo?c=Niger`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Kazakhstan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kazakhstan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Nicaragua should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nicaragua`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Bangladesh should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bangladesh`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Tunisia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tunisia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Norway should respond with 200`, function(done) {

        request
            .get(`/geo?c=Norway`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Kyrgyzstan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kyrgyzstan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Burundi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Burundi`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Armenia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Armenia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Mauritania should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mauritania`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Georgia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Georgia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Cameroon should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cameroon`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Rwanda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Rwanda`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Senegal should respond with 200`, function(done) {

        request
            .get(`/geo?c=Senegal`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Ireland should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ireland`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Thailand should respond with 200`, function(done) {

        request
            .get(`/geo?c=Thailand`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Iran should respond with 200`, function(done) {

        request
            .get(`/geo?c=Iran`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Kenya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kenya`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Finland should respond with 200`, function(done) {

        request
            .get(`/geo?c=Finland`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Portugal should respond with 200`, function(done) {

        request
            .get(`/geo?c=Portugal`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Australia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Czechia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Czechia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=New%20Zealand should respond with 200`, function(done) {

        request
            .get(`/geo?c=New%20Zealand`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Denmark should respond with 200`, function(done) {

        request
            .get(`/geo?c=Denmark`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Serbia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Serbia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Mongolia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mongolia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Netherlands should respond with 200`, function(done) {

        request
            .get(`/geo?c=Netherlands`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Bulgaria should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bulgaria`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Mali should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mali`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Sweden should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sweden`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Guinea should respond with 200`, function(done) {

        request
            .get(`/geo?c=Guinea`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Saudi%20Arabia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Uganda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uganda`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Uruguay should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uruguay`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Belgium should respond with 200`, function(done) {

        request
            .get(`/geo?c=Belgium`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Syria should respond with 200`, function(done) {

        request
            .get(`/geo?c=Syria`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Poland should respond with 200`, function(done) {

        request
            .get(`/geo?c=Poland`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Puerto%20Rico should respond with 200`, function(done) {

        request
            .get(`/geo?c=Puerto%20Rico`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Austria should respond with 200`, function(done) {

        request
            .get(`/geo?c=Austria`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Belarus should respond with 200`, function(done) {

        request
            .get(`/geo?c=Belarus`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Ecuador should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ecuador`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Hong%20Kong should respond with 200`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Cambodia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cambodia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Zimbabwe should respond with 200`, function(done) {

        request
            .get(`/geo?c=Zimbabwe`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Sri%20Lanka should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sri%20Lanka`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Zambia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Zambia`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Uzbekistan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uzbekistan`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Guatemala should respond with 200`, function(done) {

        request
            .get(`/geo?c=Guatemala`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Hungary should respond with 200`, function(done) {

        request
            .get(`/geo?c=Hungary`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=United%20Arab%20Emirates should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Arab%20Emirates`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Singapore should respond with 200`, function(done) {

        request
            .get(`/geo?c=Singapore`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /geo?c=Tanzania should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tanzania`)
            .send()
            .expect(200)
            .end(done);

    });



    rnd_it(`GET /geo?c=Ukraine&city=Lviv should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Lviv`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Lviv should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Lviv`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lviv/);
                    should($("span.population").text().trim()).match(/724314/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ukraine&city=Zaporizhzhia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Zaporizhzhia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Zaporizhzhia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Zaporizhzhia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zaporizhzhia/);
                    should($("span.population").text().trim()).match(/741717/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ukraine&city=Donetsk should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Donetsk`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Donetsk should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Donetsk`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Donetsk/);
                    should($("span.population").text().trim()).match(/929063/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ukraine&city=Dnipro should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Dnipro`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Dnipro should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Dnipro`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dnipro/);
                    should($("span.population").text().trim()).match(/980948/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ukraine&city=Odesa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Odesa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Odesa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Odesa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Odesa/);
                    should($("span.population").text().trim()).match(/1017699/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ukraine&city=Kharkiv should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Kharkiv`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ukraine&city=Kharkiv should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ukraine&city=Kharkiv`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kharkiv/);
                    should($("span.population").text().trim()).match(/1446107/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Iraq&city=An%20Najaf should respond with 200`, function(done) {

        request
            .get(`/geo?c=Iraq&city=An%20Najaf`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Iraq&city=An%20Najaf should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Iraq&city=An%20Najaf`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/An Najaf/);
                    should($("span.population").text().trim()).match(/724700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Reynosa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Reynosa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Reynosa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Reynosa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Reynosa/);
                    should($("span.population").text().trim()).match(/725793/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Hermosillo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Hermosillo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Hermosillo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Hermosillo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hermosillo/);
                    should($("span.population").text().trim()).match(/855563/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Saltillo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Saltillo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Saltillo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Saltillo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Saltillo/);
                    should($("span.population").text().trim()).match(/864431/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Chihuahua should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Chihuahua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Chihuahua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Chihuahua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chihuahua/);
                    should($("span.population").text().trim()).match(/878062/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Aguascalientes should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Aguascalientes`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Aguascalientes should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Aguascalientes`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Aguascalientes/);
                    should($("span.population").text().trim()).match(/934424/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Mexicali should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Mexicali`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Mexicali should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Mexicali`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mexicali/);
                    should($("span.population").text().trim()).match(/1102342/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Zapopan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Zapopan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Zapopan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Zapopan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zapopan/);
                    should($("span.population").text().trim()).match(/1476491/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Puebla should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Puebla`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Puebla should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Puebla`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Puebla/);
                    should($("span.population").text().trim()).match(/1576259/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Tijuana should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Tijuana`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Tijuana should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Tijuana`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tijuana/);
                    should($("span.population").text().trim()).match(/2002000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mexico&city=Guadalajara should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Guadalajara`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mexico&city=Guadalajara should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mexico&city=Guadalajara`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guadalajara/);
                    should($("span.population").text().trim()).match(/5525000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Sarasota should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Sarasota`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Sarasota should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Sarasota`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sarasota/);
                    should($("span.population").text().trim()).match(/727388/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Rochester should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Rochester`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Rochester should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Rochester`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rochester/);
                    should($("span.population").text().trim()).match(/737309/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Albuquerque should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Albuquerque`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Albuquerque should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Albuquerque`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Albuquerque/);
                    should($("span.population").text().trim()).match(/765693/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Hempstead should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Hempstead`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Hempstead should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Hempstead`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hempstead/);
                    should($("span.population").text().trim()).match(/791018/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=El%20Paso should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=El%20Paso`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=El%20Paso should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=El%20Paso`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/El Paso/);
                    should($("span.population").text().trim()).match(/794344/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Omaha should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Omaha`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Omaha should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Omaha`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Omaha/);
                    should($("span.population").text().trim()).match(/806485/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=McAllen should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=McAllen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=McAllen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=McAllen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/McAllen/);
                    should($("span.population").text().trim()).match(/809002/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Honolulu should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Honolulu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Honolulu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Honolulu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Honolulu/);
                    should($("span.population").text().trim()).match(/835291/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Tucson should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Tucson`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Tucson should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Tucson`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tucson/);
                    should($("span.population").text().trim()).match(/875284/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Hartford should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Hartford`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Hartford should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Hartford`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hartford/);
                    should($("span.population").text().trim()).match(/907046/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Fort%20Worth should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Fort%20Worth`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Fort%20Worth should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Fort%20Worth`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fort Worth/);
                    should($("span.population").text().trim()).match(/908469/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=New%20Orleans should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=New%20Orleans`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=New%20Orleans should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=New%20Orleans`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/New Orleans/);
                    should($("span.population").text().trim()).match(/925443/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Bridgeport should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Bridgeport`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Bridgeport should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Bridgeport`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bridgeport/);
                    should($("span.population").text().trim()).match(/975078/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Oklahoma%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Oklahoma%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Oklahoma%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Oklahoma%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Oklahoma City/);
                    should($("span.population").text().trim()).match(/994284/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Buffalo should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Buffalo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Buffalo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Buffalo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Buffalo/);
                    should($("span.population").text().trim()).match(/1004655/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Richmond should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Richmond`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Richmond should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Richmond`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Richmond/);
                    should($("span.population").text().trim()).match(/1008069/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Louisville should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Louisville`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Louisville should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Louisville`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Louisville/);
                    should($("span.population").text().trim()).match(/1022630/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Memphis should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Memphis`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Memphis should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Memphis`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Memphis/);
                    should($("span.population").text().trim()).match(/1034498/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Raleigh should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Raleigh`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Raleigh should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Raleigh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Raleigh/);
                    should($("span.population").text().trim()).match(/1062018/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Nashville should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Nashville`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Nashville should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Nashville`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nashville/);
                    should($("span.population").text().trim()).match(/1098486/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Salt%20Lake%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Salt%20Lake%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Salt%20Lake%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Salt%20Lake%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Salt Lake City/);
                    should($("span.population").text().trim()).match(/1135344/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Jacksonville should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Jacksonville`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Jacksonville should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Jacksonville`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jacksonville/);
                    should($("span.population").text().trim()).match(/1220191/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Providence should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Providence`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Providence should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Providence`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Providence/);
                    should($("span.population").text().trim()).match(/1270149/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Milwaukee should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Milwaukee`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Milwaukee should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Milwaukee`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Milwaukee/);
                    should($("span.population").text().trim()).match(/1340981/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Bronx should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Bronx`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Bronx should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Bronx`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bronx/);
                    should($("span.population").text().trim()).match(/1472654/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Virginia%20Beach should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Virginia%20Beach`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Virginia%20Beach should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Virginia%20Beach`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Virginia Beach/);
                    should($("span.population").text().trim()).match(/1500764/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Charlotte should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Charlotte`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Charlotte should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Charlotte`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Charlotte/);
                    should($("span.population").text().trim()).match(/1516107/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Columbus should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Columbus`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Columbus should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Columbus`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Columbus/);
                    should($("span.population").text().trim()).match(/1556848/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Kansas%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Kansas%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Kansas%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Kansas%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kansas City/);
                    should($("span.population").text().trim()).match(/1644497/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Austin should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Austin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Austin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Austin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Austin/);
                    should($("span.population").text().trim()).match(/1659251/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Indianapolis should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Indianapolis`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Indianapolis should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Indianapolis`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Indianapolis/);
                    should($("span.population").text().trim()).match(/1659305/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Cleveland should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Cleveland`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Cleveland should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Cleveland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cleveland/);
                    should($("span.population").text().trim()).match(/1683059/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Manhattan should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Manhattan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Manhattan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Manhattan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Manhattan/);
                    should($("span.population").text().trim()).match(/1694263/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Cincinnati should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Cincinnati`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Cincinnati should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Cincinnati`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cincinnati/);
                    should($("span.population").text().trim()).match(/1712287/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Pittsburgh should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Pittsburgh`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Pittsburgh should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Pittsburgh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pittsburgh/);
                    should($("span.population").text().trim()).match(/1720279/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=San%20Jose should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Jose`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=San%20Jose should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Jose`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/San Jose/);
                    should($("span.population").text().trim()).match(/1729879/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=San%20Antonio should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Antonio`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=San%20Antonio should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Antonio`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/San Antonio/);
                    should($("span.population").text().trim()).match(/1910785/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Sacramento should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Sacramento`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Sacramento should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Sacramento`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sacramento/);
                    should($("span.population").text().trim()).match(/1924167/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Orlando should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Orlando`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Orlando should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Orlando`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Orlando/);
                    should($("span.population").text().trim()).match(/1927699/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Riverside should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Riverside`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Riverside should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Riverside`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Riverside/);
                    should($("span.population").text().trim()).match(/2022285/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Portland should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Portland`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Portland should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Portland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Portland/);
                    should($("span.population").text().trim()).match(/2036875/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=St.%20Louis should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=St.%20Louis`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=St.%20Louis should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=St.%20Louis`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/St. Louis/);
                    should($("span.population").text().trim()).match(/2092481/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Las%20Vegas should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Las%20Vegas`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Las%20Vegas should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Las%20Vegas`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Las Vegas/);
                    should($("span.population").text().trim()).match(/2150373/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Baltimore should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Baltimore`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Baltimore should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Baltimore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baltimore/);
                    should($("span.population").text().trim()).match(/2205092/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Queens should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Queens`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Queens should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Queens`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Queens/);
                    should($("span.population").text().trim()).match(/2405464/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Denver should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Denver`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Denver should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Denver`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Denver/);
                    should($("span.population").text().trim()).match(/2650725/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Tampa should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Tampa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Tampa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Tampa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tampa/);
                    should($("span.population").text().trim()).match(/2683956/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Brooklyn should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Brooklyn`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Brooklyn should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Brooklyn`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Brooklyn/);
                    should($("span.population").text().trim()).match(/2736074/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Minneapolis should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Minneapolis`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Minneapolis should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Minneapolis`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Minneapolis/);
                    should($("span.population").text().trim()).match(/2856952/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=San%20Diego should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Diego`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=San%20Diego should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Diego`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/San Diego/);
                    should($("span.population").text().trim()).match(/3084174/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=San%20Francisco should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Francisco`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=San%20Francisco should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=San%20Francisco`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/San Francisco/);
                    should($("span.population").text().trim()).match(/3290197/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Seattle should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Seattle`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Seattle should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Seattle`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Seattle/);
                    should($("span.population").text().trim()).match(/3438221/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Detroit should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Detroit`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Detroit should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Detroit`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Detroit/);
                    should($("span.population").text().trim()).match(/3522856/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Phoenix should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Phoenix`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Phoenix should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Phoenix`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Phoenix/);
                    should($("span.population").text().trim()).match(/4047095/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Boston should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Boston`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Boston should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Boston`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Boston/);
                    should($("span.population").text().trim()).match(/4208580/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Washington should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Washington`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Washington should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Washington`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Washington/);
                    should($("span.population").text().trim()).match(/4810669/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Atlanta should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Atlanta`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Atlanta should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Atlanta`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Atlanta/);
                    should($("span.population").text().trim()).match(/5046555/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Philadelphia should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Philadelphia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Philadelphia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Philadelphia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Philadelphia/);
                    should($("span.population").text().trim()).match(/5512873/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Houston should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Houston`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Houston should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Houston`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Houston/);
                    should($("span.population").text().trim()).match(/5650910/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Dallas should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Dallas`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Dallas should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Dallas`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dallas/);
                    should($("span.population").text().trim()).match(/5668165/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Miami should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Miami`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Miami should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Miami`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Miami/);
                    should($("span.population").text().trim()).match(/5711945/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Chicago should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Chicago`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Chicago should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Chicago`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chicago/);
                    should($("span.population").text().trim()).match(/8595181/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=Los%20Angeles should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Los%20Angeles`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=Los%20Angeles should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=Los%20Angeles`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Los Angeles/);
                    should($("span.population").text().trim()).match(/12121244/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20States&city=New%20York should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20States&city=New%20York`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20States&city=New%20York should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20States&city=New%20York`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/New York/);
                    should($("span.population").text().trim()).match(/18972871/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Cagayan%20de%20Oro should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Cagayan%20de%20Oro`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Cagayan%20de%20Oro should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Cagayan%20de%20Oro`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cagayan de Oro/);
                    should($("span.population").text().trim()).match(/728402/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Pasig%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Pasig%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Pasig%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Pasig%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pasig City/);
                    should($("span.population").text().trim()).match(/803159/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Taguig%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Taguig%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Taguig%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Taguig%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taguig City/);
                    should($("span.population").text().trim()).match(/886722/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Antipolo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Antipolo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Antipolo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Antipolo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Antipolo/);
                    should($("span.population").text().trim()).match(/887399/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Cebu%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Cebu%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Cebu%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Cebu%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cebu City/);
                    should($("span.population").text().trim()).match(/964169/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Zamboanga%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Zamboanga%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Zamboanga%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Zamboanga%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zamboanga City/);
                    should($("span.population").text().trim()).match(/977234/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Canagatan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Canagatan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Canagatan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Canagatan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Canagatan/);
                    should($("span.population").text().trim()).match(/1273219/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Caloocan%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Caloocan%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Caloocan%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Caloocan%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Caloocan City/);
                    should($("span.population").text().trim()).match(/1661584/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Davao should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Davao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Davao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Davao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Davao/);
                    should($("span.population").text().trim()).match(/1776949/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Quezon%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Quezon%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Quezon%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Quezon%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Quezon City/);
                    should($("span.population").text().trim()).match(/2960048/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Philippines&city=Manila should respond with 200`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Manila`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Philippines&city=Manila should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Philippines&city=Manila`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Manila/);
                    should($("span.population").text().trim()).match(/24922000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Langzhong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Langzhong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Langzhong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Langzhong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Langzhong/);
                    should($("span.population").text().trim()).match(/728935/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shuangqiao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shuangqiao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shuangqiao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shuangqiao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shuangqiao/);
                    should($("span.population").text().trim()).match(/733000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wugang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wugang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wugang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wugang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wugang/);
                    should($("span.population").text().trim()).match(/734870/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zunhua should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zunhua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zunhua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zunhua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zunhua/);
                    should($("span.population").text().trim()).match(/737011/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nehe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nehe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nehe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nehe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nehe/);
                    should($("span.population").text().trim()).match(/740000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chengguan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chengguan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chengguan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chengguan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chengguan/);
                    should($("span.population").text().trim()).match(/740435/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Licheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Licheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Licheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Licheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Licheng/);
                    should($("span.population").text().trim()).match(/749522/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Sizhan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Sizhan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Sizhan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Sizhan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sizhan/);
                    should($("span.population").text().trim()).match(/751389/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guangshui should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guangshui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guangshui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guangshui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guangshui/);
                    should($("span.population").text().trim()).match(/755910/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinhualu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinhualu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinhualu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinhualu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinhualu/);
                    should($("span.population").text().trim()).match(/758079/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingnian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingnian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingnian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingnian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingnian/);
                    should($("span.population").text().trim()).match(/760781/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qamdo should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qamdo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qamdo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qamdo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qamdo/);
                    should($("span.population").text().trim()).match(/760966/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhongba should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhongba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhongba/);
                    should($("span.population").text().trim()).match(/762140/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Laixi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Laixi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Laixi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Laixi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Laixi/);
                    should($("span.population").text().trim()).match(/762900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Songzi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Songzi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Songzi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Songzi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Songzi/);
                    should($("span.population").text().trim()).match(/765911/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Korla should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Korla`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Korla should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Korla`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Korla/);
                    should($("span.population").text().trim()).match(/770000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fuyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fuyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fuyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fuyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fuyang/);
                    should($("span.population").text().trim()).match(/771000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dali should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dali`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dali should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dali`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dali/);
                    should($("span.population").text().trim()).match(/771128/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Cencheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Cencheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Cencheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Cencheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cencheng/);
                    should($("span.population").text().trim()).match(/772113/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zouping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zouping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zouping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zouping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zouping/);
                    should($("span.population").text().trim()).match(/774517/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chaohucun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chaohucun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chaohucun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chaohucun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chaohucun/);
                    should($("span.population").text().trim()).match(/782000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiangxiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangxiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiangxiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangxiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiangxiang/);
                    should($("span.population").text().trim()).match(/787216/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingping/);
                    should($("span.population").text().trim()).match(/797200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dongyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dongyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dongyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dongyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dongyang/);
                    should($("span.population").text().trim()).match(/804398/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zijinglu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zijinglu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zijinglu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zijinglu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zijinglu/);
                    should($("span.population").text().trim()).match(/807857/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Puxi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Puxi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Puxi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Puxi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Puxi/);
                    should($("span.population").text().trim()).match(/809535/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hejian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hejian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hejian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hejian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hejian/);
                    should($("span.population").text().trim()).match(/810306/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gaoyou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gaoyou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gaoyou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gaoyou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaoyou/);
                    should($("span.population").text().trim()).match(/811800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xindi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xindi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xindi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xindi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xindi/);
                    should($("span.population").text().trim()).match(/819446/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Renqiu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Renqiu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Renqiu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Renqiu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Renqiu/);
                    should($("span.population").text().trim()).match(/822455/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Rongjiawan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Rongjiawan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Rongjiawan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Rongjiawan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rongjiawan/);
                    should($("span.population").text().trim()).match(/826000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chengxiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chengxiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chengxiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chengxiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chengxiang/);
                    should($("span.population").text().trim()).match(/831113/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tongchuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tongchuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tongchuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tongchuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tongchuan/);
                    should($("span.population").text().trim()).match(/834437/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dehui should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dehui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dehui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dehui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dehui/);
                    should($("span.population").text().trim()).match(/839786/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yuci should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yuci`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yuci should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yuci`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yuci/);
                    should($("span.population").text().trim()).match(/840000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Macheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Macheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Macheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Macheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Macheng/);
                    should($("span.population").text().trim()).match(/849090/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hailun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hailun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hailun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hailun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hailun/);
                    should($("span.population").text().trim()).match(/850000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shache should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shache`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shache should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shache`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shache/);
                    should($("span.population").text().trim()).match(/851374/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Leping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Leping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Leping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Leping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Leping/);
                    should($("span.population").text().trim()).match(/852800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuxi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuxi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuxi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuxi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuxi/);
                    should($("span.population").text().trim()).match(/853197/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Weichanglu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Weichanglu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Weichanglu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Weichanglu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Weichanglu/);
                    should($("span.population").text().trim()).match(/859424/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gaomi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gaomi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gaomi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gaomi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaomi/);
                    should($("span.population").text().trim()).match(/868715/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Kaifeng%20Chengguanzhen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Kaifeng%20Chengguanzhen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Kaifeng%20Chengguanzhen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Kaifeng%20Chengguanzhen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kaifeng Chengguanzhen/);
                    should($("span.population").text().trim()).match(/872000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Laiyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Laiyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Laiyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Laiyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Laiyang/);
                    should($("span.population").text().trim()).match(/874127/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhoushan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhoushan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhoushan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhoushan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhoushan/);
                    should($("span.population").text().trim()).match(/882932/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dengtalu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dengtalu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dengtalu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dengtalu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dengtalu/);
                    should($("span.population").text().trim()).match(/887000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yangchun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yangchun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yangchun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yangchun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yangchun/);
                    should($("span.population").text().trim()).match(/891800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiaozhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaozhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiaozhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaozhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiaozhou/);
                    should($("span.population").text().trim()).match(/900500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lhasa should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lhasa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lhasa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lhasa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lhasa/);
                    should($("span.population").text().trim()).match(/902500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Quzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Quzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Quzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Quzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Quzhou/);
                    should($("span.population").text().trim()).match(/902767/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhuanghe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuanghe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhuanghe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuanghe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhuanghe/);
                    should($("span.population").text().trim()).match(/905852/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hengzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hengzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hengzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hengzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hengzhou/);
                    should($("span.population").text().trim()).match(/908400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Daye should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Daye`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Daye should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Daye`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Daye/);
                    should($("span.population").text().trim()).match(/909724/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lichuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lichuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lichuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lichuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lichuan/);
                    should($("span.population").text().trim()).match(/913700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingzhou/);
                    should($("span.population").text().trim()).match(/914047/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Kashgar should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Kashgar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Kashgar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Kashgar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kashgar/);
                    should($("span.population").text().trim()).match(/920000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taihecun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taihecun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taihecun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taihecun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taihecun/);
                    should($("span.population").text().trim()).match(/920471/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taihe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taihe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taihe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taihe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taihe/);
                    should($("span.population").text().trim()).match(/924531/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Meishan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Meishan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Meishan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Meishan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Meishan/);
                    should($("span.population").text().trim()).match(/936000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Feicheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Feicheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Feicheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Feicheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Feicheng/);
                    should($("span.population").text().trim()).match(/946627/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Anqiu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Anqiu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Anqiu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Anqiu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Anqiu/);
                    should($("span.population").text().trim()).match(/947723/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taishan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taishan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taishan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taishan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taishan/);
                    should($("span.population").text().trim()).match(/953900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuchuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuchuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuchuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuchuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuchuan/);
                    should($("span.population").text().trim()).match(/972400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huilong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huilong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huilong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huilong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huilong/);
                    should($("span.population").text().trim()).match(/972525/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nada should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nada`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nada should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nada`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nada/);
                    should($("span.population").text().trim()).match(/977700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Danyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Danyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Danyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Danyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Danyang/);
                    should($("span.population").text().trim()).match(/980662/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Luocheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Luocheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Luocheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Luocheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Luocheng/);
                    should($("span.population").text().trim()).match(/984100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yingcheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yingcheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yingcheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yingcheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yingcheng/);
                    should($("span.population").text().trim()).match(/986400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dongtai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dongtai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dongtai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dongtai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dongtai/);
                    should($("span.population").text().trim()).match(/990306/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xingcheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xingcheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xingcheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xingcheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xingcheng/);
                    should($("span.population").text().trim()).match(/993000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shuizhai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shuizhai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shuizhai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shuizhai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shuizhai/);
                    should($("span.population").text().trim()).match(/1003698/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xingyi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xingyi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xingyi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xingyi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xingyi/);
                    should($("span.population").text().trim()).match(/1004132/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zaoyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zaoyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zaoyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zaoyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zaoyang/);
                    should($("span.population").text().trim()).match(/1004741/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinyi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinyi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinyi/);
                    should($("span.population").text().trim()).match(/1013900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhongxiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongxiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhongxiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongxiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhongxiang/);
                    should($("span.population").text().trim()).match(/1022514/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wafangdian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wafangdian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wafangdian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wafangdian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wafangdian/);
                    should($("span.population").text().trim()).match(/1024876/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Linhai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Linhai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Linhai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Linhai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Linhai/);
                    should($("span.population").text().trim()).match(/1028813/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wutong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wutong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wutong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wutong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wutong/);
                    should($("span.population").text().trim()).match(/1029754/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Sanya should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Sanya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Sanya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Sanya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sanya/);
                    should($("span.population").text().trim()).match(/1031396/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shouguang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shouguang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shouguang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shouguang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shouguang/);
                    should($("span.population").text().trim()).match(/1039205/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fangchenggang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fangchenggang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fangchenggang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fangchenggang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fangchenggang/);
                    should($("span.population").text().trim()).match(/1046068/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hegang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hegang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hegang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hegang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hegang/);
                    should($("span.population").text().trim()).match(/1058665/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Mizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Mizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Mizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Mizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mizhou/);
                    should($("span.population").text().trim()).match(/1060000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xishan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xishan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xishan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xishan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xishan/);
                    should($("span.population").text().trim()).match(/1060000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhongwei should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongwei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhongwei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongwei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhongwei/);
                    should($("span.population").text().trim()).match(/1067336/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taixing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taixing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taixing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taixing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taixing/);
                    should($("span.population").text().trim()).match(/1073921/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiashi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiashi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiashi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiashi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiashi/);
                    should($("span.population").text().trim()).match(/1076199/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ezhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ezhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ezhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ezhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ezhou/);
                    should($("span.population").text().trim()).match(/1079353/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhufeng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhufeng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhufeng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhufeng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhufeng/);
                    should($("span.population").text().trim()).match(/1081960/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gongzhuling should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gongzhuling`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gongzhuling should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gongzhuling`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gongzhuling/);
                    should($("span.population").text().trim()).match(/1092692/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hanchuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hanchuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hanchuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hanchuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hanchuan/);
                    should($("span.population").text().trim()).match(/1092700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yuyao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yuyao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yuyao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yuyao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yuyao/);
                    should($("span.population").text().trim()).match(/1095000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xibeijie should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xibeijie`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xibeijie should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xibeijie`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xibeijie/);
                    should($("span.population").text().trim()).match(/1095947/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yingchuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yingchuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yingchuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yingchuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yingchuan/);
                    should($("span.population").text().trim()).match(/1131896/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiantao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiantao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiantao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiantao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiantao/);
                    should($("span.population").text().trim()).match(/1140100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yichun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yichun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yichun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yichun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yichun/);
                    should($("span.population").text().trim()).match(/1148126/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Leiyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Leiyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Leiyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Leiyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Leiyang/);
                    should($("span.population").text().trim()).match(/1151554/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhuji should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuji`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhuji should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuji`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhuji/);
                    should($("span.population").text().trim()).match(/1157938/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Kaiyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Kaiyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Kaiyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Kaiyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kaiyuan/);
                    should($("span.population").text().trim()).match(/1160000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Rongcheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Rongcheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Rongcheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Rongcheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rongcheng/);
                    should($("span.population").text().trim()).match(/1162770/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lianyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lianyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lianyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lianyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lianyuan/);
                    should($("span.population").text().trim()).match(/1162928/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dingzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dingzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dingzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dingzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dingzhou/);
                    should($("span.population").text().trim()).match(/1165182/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guankou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guankou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guankou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guankou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guankou/);
                    should($("span.population").text().trim()).match(/1168056/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yingtan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yingtan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yingtan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yingtan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yingtan/);
                    should($("span.population").text().trim()).match(/1175000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Liaoyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Liaoyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Liaoyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Liaoyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liaoyuan/);
                    should($("span.population").text().trim()).match(/1176239/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhangye should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangye`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhangye should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangye`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhangye/);
                    should($("span.population").text().trim()).match(/1199515/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinyu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinyu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinyu/);
                    should($("span.population").text().trim()).match(/1202499/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lingcheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lingcheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lingcheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lingcheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lingcheng/);
                    should($("span.population").text().trim()).match(/1211637/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dadukou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dadukou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dadukou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dadukou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dadukou/);
                    should($("span.population").text().trim()).match(/1214121/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiangshui should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangshui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiangshui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangshui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiangshui/);
                    should($("span.population").text().trim()).match(/1221000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Beidao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Beidao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Beidao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Beidao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Beidao/);
                    should($("span.population").text().trim()).match(/1225000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yiwu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yiwu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yiwu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yiwu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yiwu/);
                    should($("span.population").text().trim()).match(/1234015/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yongcheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yongcheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yongcheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yongcheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yongcheng/);
                    should($("span.population").text().trim()).match(/1240382/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jingling should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jingling`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jingling should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jingling`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jingling/);
                    should($("span.population").text().trim()).match(/1247400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Laiwu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Laiwu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Laiwu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Laiwu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Laiwu/);
                    should($("span.population").text().trim()).match(/1248636/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shaoyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shaoyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shaoyang/);
                    should($("span.population").text().trim()).match(/1253548/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huaiyin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huaiyin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huaiyin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huaiyin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huaiyin/);
                    should($("span.population").text().trim()).match(/1264000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Rucheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Rucheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Rucheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Rucheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rucheng/);
                    should($("span.population").text().trim()).match(/1267066/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiangyin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangyin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiangyin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangyin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiangyin/);
                    should($("span.population").text().trim()).match(/1285785/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yicheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yicheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yicheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yicheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yicheng/);
                    should($("span.population").text().trim()).match(/1285785/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Haicheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Haicheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Haicheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Haicheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Haicheng/);
                    should($("span.population").text().trim()).match(/1293877/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dayan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dayan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dayan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dayan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dayan/);
                    should($("span.population").text().trim()).match(/1296000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baishan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baishan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baishan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baishan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baishan/);
                    should($("span.population").text().trim()).match(/1296127/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yushu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yushu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yushu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yushu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yushu/);
                    should($("span.population").text().trim()).match(/1304436/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wusong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wusong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wusong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wusong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wusong/);
                    should($("span.population").text().trim()).match(/1311726/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xintai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xintai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xintai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xintai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xintai/);
                    should($("span.population").text().trim()).match(/1315942/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Liangshi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Liangshi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Liangshi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Liangshi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liangshi/);
                    should($("span.population").text().trim()).match(/1335900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huangshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huangshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huangshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huangshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huangshan/);
                    should($("span.population").text().trim()).match(/1358980/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yutan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yutan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yutan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yutan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yutan/);
                    should($("span.population").text().trim()).match(/1368117/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yangquan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yangquan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yangquan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yangquan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yangquan/);
                    should($("span.population").text().trim()).match(/1368502/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pingdu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pingdu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pingdu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pingdu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pingdu/);
                    should($("span.population").text().trim()).match(/1378900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuzhong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuzhong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuzhong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuzhong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuzhong/);
                    should($("span.population").text().trim()).match(/1382713/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fuqing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fuqing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fuqing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fuqing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fuqing/);
                    should($("span.population").text().trim()).match(/1390487/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chizhou/);
                    should($("span.population").text().trim()).match(/1402518/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gaozhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gaozhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gaozhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gaozhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaozhou/);
                    should($("span.population").text().trim()).match(/1414100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wenling should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wenling`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wenling should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wenling`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wenling/);
                    should($("span.population").text().trim()).match(/1416199/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guyuan/);
                    should($("span.population").text().trim()).match(/1426000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yangshe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yangshe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yangshe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yangshe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yangshe/);
                    should($("span.population").text().trim()).match(/1432044/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pizhou/);
                    should($("span.population").text().trim()).match(/1458038/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shuangyashan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shuangyashan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shuangyashan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shuangyashan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shuangyashan/);
                    should($("span.population").text().trim()).match(/1462626/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jinhua should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jinhua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jinhua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jinhua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jinhua/);
                    should($("span.population").text().trim()).match(/1463990/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huazhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huazhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huazhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huazhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huazhou/);
                    should($("span.population").text().trim()).match(/1468061/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Leizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Leizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Leizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Leizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Leizhou/);
                    should($("span.population").text().trim()).match(/1494700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xushan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xushan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xushan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xushan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xushan/);
                    should($("span.population").text().trim()).match(/1502000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yucheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yucheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yucheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yucheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yucheng/);
                    should($("span.population").text().trim()).match(/1507258/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jianguang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jianguang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jianguang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jianguang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jianguang/);
                    should($("span.population").text().trim()).match(/1507402/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ximeicun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ximeicun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ximeicun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ximeicun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ximeicun/);
                    should($("span.population").text().trim()).match(/1508000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lianjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lianjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lianjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lianjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lianjiang/);
                    should($("span.population").text().trim()).match(/1509400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guiping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guiping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guiping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guiping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guiping/);
                    should($("span.population").text().trim()).match(/1511011/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiaxing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaxing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiaxing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaxing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiaxing/);
                    should($("span.population").text().trim()).match(/1518654/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhangjiajie should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangjiajie`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhangjiajie should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangjiajie`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhangjiajie/);
                    should($("span.population").text().trim()).match(/1537900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huzhou/);
                    should($("span.population").text().trim()).match(/1558826/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hebi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hebi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hebi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hebi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hebi/);
                    should($("span.population").text().trim()).match(/1569208/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chengtangcun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chengtangcun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chengtangcun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chengtangcun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chengtangcun/);
                    should($("span.population").text().trim()).match(/1603659/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jingdezhen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jingdezhen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jingdezhen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jingdezhen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jingdezhen/);
                    should($("span.population").text().trim()).match(/1673200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Heihe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Heihe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Heihe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Heihe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Heihe/);
                    should($("span.population").text().trim()).match(/1673899/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changshu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changshu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changshu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changshu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changshu/);
                    should($("span.population").text().trim()).match(/1677050/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Sanzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Sanzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Sanzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Sanzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sanzhou/);
                    should($("span.population").text().trim()).match(/1680000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baiyin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baiyin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baiyin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baiyin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baiyin/);
                    should($("span.population").text().trim()).match(/1708751/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Benxi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Benxi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Benxi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Benxi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Benxi/);
                    should($("span.population").text().trim()).match(/1709538/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shuozhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shuozhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shuozhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shuozhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shuozhou/);
                    should($("span.population").text().trim()).match(/1714857/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shuyangzha should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shuyangzha`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shuyangzha should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shuyangzha`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shuyangzha/);
                    should($("span.population").text().trim()).match(/1770000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuwei should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuwei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuwei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuwei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuwei/);
                    should($("span.population").text().trim()).match(/1815059/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fuxin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fuxin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fuxin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fuxin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fuxin/);
                    should($("span.population").text().trim()).match(/1819339/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Beihai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Beihai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Beihai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Beihai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Beihai/);
                    should($("span.population").text().trim()).match(/1853227/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Liaoyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Liaoyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Liaoyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Liaoyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liaoyang/);
                    should($("span.population").text().trim()).match(/1858768/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jixi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jixi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jixi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jixi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jixi/);
                    should($("span.population").text().trim()).match(/1862165/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiping/);
                    should($("span.population").text().trim()).match(/1873000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yinchuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yinchuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yinchuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yinchuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yinchuan/);
                    should($("span.population").text().trim()).match(/1901793/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pingxiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pingxiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pingxiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pingxiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pingxiang/);
                    should($("span.population").text().trim()).match(/1933200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fushun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fushun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fushun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fushun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fushun/);
                    should($("span.population").text().trim()).match(/2024000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pingliang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pingliang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pingliang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pingliang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pingliang/);
                    should($("span.population").text().trim()).match(/2068033/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hezhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hezhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hezhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hezhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hezhou/);
                    should($("span.population").text().trim()).match(/2072600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yushan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yushan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yushan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yushan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yushan/);
                    should($("span.population").text().trim()).match(/2092496/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chongzuo should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chongzuo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chongzuo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chongzuo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chongzuo/);
                    should($("span.population").text().trim()).match(/2099400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingyang/);
                    should($("span.population").text().trim()).match(/2111000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huaibei should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huaibei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huaibei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huaibei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huaibei/);
                    should($("span.population").text().trim()).match(/2114276/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Puning should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Puning`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Puning should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Puning`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Puning/);
                    should($("span.population").text().trim()).match(/2118200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taizhou/);
                    should($("span.population").text().trim()).match(/2162461/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gaoping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gaoping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gaoping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gaoping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaoping/);
                    should($("span.population").text().trim()).match(/2174000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shengli should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shengli`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shengli should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shengli`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shengli/);
                    should($("span.population").text().trim()).match(/2193518/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qinbaling should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qinbaling`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qinbaling should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qinbaling`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qinbaling/);
                    should($("span.population").text().trim()).match(/2211191/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Laibin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Laibin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Laibin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Laibin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Laibin/);
                    should($("span.population").text().trim()).match(/2233900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Sanmenxia should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Sanmenxia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Sanmenxia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Sanmenxia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sanmenxia/);
                    should($("span.population").text().trim()).match(/2234018/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nantong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nantong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nantong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nantong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nantong/);
                    should($("span.population").text().trim()).match(/2261382/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jincheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jincheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jincheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jincheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jincheng/);
                    should($("span.population").text().trim()).match(/2279146/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Kuaidamao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Kuaidamao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Kuaidamao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Kuaidamao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kuaidamao/);
                    should($("span.population").text().trim()).match(/2324439/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huainan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huainan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huainan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huainan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huainan/);
                    should($("span.population").text().trim()).match(/2333896/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shangzhou/);
                    should($("span.population").text().trim()).match(/2341742/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Anshun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Anshun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Anshun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Anshun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Anshun/);
                    should($("span.population").text().trim()).match(/2353100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Luoyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Luoyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Luoyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Luoyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Luoyang/);
                    should($("span.population").text().trim()).match(/2372571/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yuxi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yuxi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yuxi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yuxi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yuxi/);
                    should($("span.population").text().trim()).match(/2386000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jilin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jilin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jilin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jilin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jilin/);
                    should($("span.population").text().trim()).match(/2396000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lianshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lianshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lianshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lianshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lianshan/);
                    should($("span.population").text().trim()).match(/2426000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yingkou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yingkou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yingkou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yingkou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yingkou/);
                    should($("span.population").text().trim()).match(/2428534/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhuhai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuhai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhuhai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuhai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhuhai/);
                    should($("span.population").text().trim()).match(/2439585/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dandong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dandong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dandong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dandong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dandong/);
                    should($("span.population").text().trim()).match(/2444697/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xining should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xining`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xining should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xining`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xining/);
                    should($("span.population").text().trim()).match(/2467965/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huangshi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huangshi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huangshi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huangshi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huangshi/);
                    should($("span.population").text().trim()).match(/2471700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guangyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guangyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guangyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guangyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guangyuan/);
                    should($("span.population").text().trim()).match(/2484122/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lishui should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lishui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lishui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lishui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lishui/);
                    should($("span.population").text().trim()).match(/2507396/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huizhou/);
                    should($("span.population").text().trim()).match(/2509243/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yantai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yantai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yantai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yantai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yantai/);
                    should($("span.population").text().trim()).match(/2511053/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shaoxing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoxing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shaoxing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoxing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shaoxing/);
                    should($("span.population").text().trim()).match(/2521964/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yunfu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yunfu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yunfu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yunfu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yunfu/);
                    should($("span.population").text().trim()).match(/2526900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xuanzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xuanzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xuanzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xuanzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xuanzhou/);
                    should($("span.population").text().trim()).match(/2532938/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lincang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lincang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lincang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lincang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lincang/);
                    should($("span.population").text().trim()).match(/2536000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Luohe should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Luohe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Luohe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Luohe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Luohe/);
                    should($("span.population").text().trim()).match(/2544266/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiamusi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiamusi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiamusi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiamusi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiamusi/);
                    should($("span.population").text().trim()).match(/2552097/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yangjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yangjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yangjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yangjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yangjiang/);
                    should($("span.population").text().trim()).match(/2555600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Longba should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Longba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Longba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Longba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Longba/);
                    should($("span.population").text().trim()).match(/2567718/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Sanming should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Sanming`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Sanming should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Sanming`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sanming/);
                    should($("span.population").text().trim()).match(/2580000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yanjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yanjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yanjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yanjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yanjiang/);
                    should($("span.population").text().trim()).match(/2593843/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Gulou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Gulou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Gulou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Gulou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gulou/);
                    should($("span.population").text().trim()).match(/2606000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huludao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huludao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huludao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huludao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huludao/);
                    should($("span.population").text().trim()).match(/2623541/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baoshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baoshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baoshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baoshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baoshan/);
                    should($("span.population").text().trim()).match(/2627000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ankang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ankang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ankang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ankang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ankang/);
                    should($("span.population").text().trim()).match(/2629906/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zibo should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zibo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zibo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zibo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zibo/);
                    should($("span.population").text().trim()).match(/2631647/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Weifang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Weifang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Weifang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Weifang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Weifang/);
                    should($("span.population").text().trim()).match(/2636154/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chaozhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chaozhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chaozhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chaozhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chaozhou/);
                    should($("span.population").text().trim()).match(/2656600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zigong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zigong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zigong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zigong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zigong/);
                    should($("span.population").text().trim()).match(/2678899/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanping/);
                    should($("span.population").text().trim()).match(/2690000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dingxi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dingxi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dingxi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dingxi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dingxi/);
                    should($("span.population").text().trim()).match(/2698624/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Handan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Handan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Handan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Handan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Handan/);
                    should($("span.population").text().trim()).match(/2708015/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baotou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baotou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baotou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baotou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baotou/);
                    should($("span.population").text().trim()).match(/2709378/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tieling should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tieling`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tieling should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tieling`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tieling/);
                    should($("span.population").text().trim()).match(/2717732/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Longyan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Longyan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Longyan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Longyan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Longyan/);
                    should($("span.population").text().trim()).match(/2723637/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Mudanjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Mudanjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Mudanjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Mudanjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mudanjiang/);
                    should($("span.population").text().trim()).match(/2798723/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiangtan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangtan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiangtan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangtan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiangtan/);
                    should($("span.population").text().trim()).match(/2864800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Haikou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Haikou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Haikou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Haikou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Haikou/);
                    should($("span.population").text().trim()).match(/2873358/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Daqing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Daqing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Daqing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Daqing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Daqing/);
                    should($("span.population").text().trim()).match(/2904532/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Weihai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Weihai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Weihai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Weihai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Weihai/);
                    should($("span.population").text().trim()).match(/2906548/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhongshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhongshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhongshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhongshan/);
                    should($("span.population").text().trim()).match(/2909633/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ningde should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ningde`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ningde should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ningde`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ningde/);
                    should($("span.population").text().trim()).match(/2910000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Rizhao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Rizhao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Rizhao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Rizhao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rizhao/);
                    should($("span.population").text().trim()).match(/2968365/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shanwei should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shanwei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shanwei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shanwei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shanwei/);
                    should($("span.population").text().trim()).match(/2993600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shaoguan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoguan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shaoguan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shaoguan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shaoguan/);
                    should($("span.population").text().trim()).match(/2997600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chaoyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chaoyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chaoyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chaoyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chaoyang/);
                    should($("span.population").text().trim()).match(/3044641/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuzhou/);
                    should($("span.population").text().trim()).match(/3061100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Lanzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Lanzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Lanzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Lanzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lanzhou/);
                    should($("span.population").text().trim()).match(/3067141/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinzhou/);
                    should($("span.population").text().trim()).match(/3067501/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Heyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Heyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Heyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Heyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Heyuan/);
                    should($("span.population").text().trim()).match(/3093900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jinzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jinzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jinzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jinzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jinzhou/);
                    should($("span.population").text().trim()).match(/3126463/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tongliao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tongliao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tongliao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tongliao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tongliao/);
                    should($("span.population").text().trim()).match(/3139153/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qinhuangdao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qinhuangdao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qinhuangdao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qinhuangdao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qinhuangdao/);
                    should($("span.population").text().trim()).match(/3146300/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tongren should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tongren`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tongren should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tongren`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tongren/);
                    should($("span.population").text().trim()).match(/3168800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhenjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhenjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhenjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhenjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhenjiang/);
                    should($("span.population").text().trim()).match(/3210418/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Putian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Putian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Putian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Putian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Putian/);
                    should($("span.population").text().trim()).match(/3210714/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Leshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Leshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Leshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Leshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Leshan/);
                    should($("span.population").text().trim()).match(/3235759/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Suining should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Suining`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Suining should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Suining`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Suining/);
                    should($("span.population").text().trim()).match(/3252619/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qincheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qincheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qincheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qincheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qincheng/);
                    should($("span.population").text().trim()).match(/3262549/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Bazhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Bazhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Bazhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Bazhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bazhou/);
                    should($("span.population").text().trim()).match(/3283148/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Bengbu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Bengbu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Bengbu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Bengbu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bengbu/);
                    should($("span.population").text().trim()).match(/3296408/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guiyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guiyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guiyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guiyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guiyang/);
                    should($("span.population").text().trim()).match(/3299724/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qinzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qinzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qinzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qinzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qinzhou/);
                    should($("span.population").text().trim()).match(/3304400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changzhi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changzhi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changzhi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changzhi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changzhi/);
                    should($("span.population").text().trim()).match(/3334565/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Siping should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Siping`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Siping should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Siping`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Siping/);
                    should($("span.population").text().trim()).match(/3385156/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shiyan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shiyan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shiyan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shiyan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shiyan/);
                    should($("span.population").text().trim()).match(/3398000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tangshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tangshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tangshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tangshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tangshan/);
                    should($("span.population").text().trim()).match(/3399231/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hanzhong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hanzhong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hanzhong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hanzhong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hanzhong/);
                    should($("span.population").text().trim()).match(/3416196/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hohhot should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hohhot`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hohhot should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hohhot`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hohhot/);
                    should($("span.population").text().trim()).match(/3446100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hechi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hechi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hechi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hechi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hechi/);
                    should($("span.population").text().trim()).match(/3545700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanchang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanchang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanchang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanchang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanchang/);
                    should($("span.population").text().trim()).match(/3576547/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiaozuo should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaozuo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiaozuo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiaozuo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiaozuo/);
                    should($("span.population").text().trim()).match(/3590700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Puyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Puyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Puyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Puyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Puyang/);
                    should($("span.population").text().trim()).match(/3598740/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changzhou/);
                    should($("span.population").text().trim()).match(/3601079/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wenzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wenzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wenzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wenzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wenzhou/);
                    should($("span.population").text().trim()).match(/3604446/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yulinshi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yulinshi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yulinshi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yulinshi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yulinshi/);
                    should($("span.population").text().trim()).match(/3634750/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Anshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Anshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Anshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Anshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Anshan/);
                    should($("span.population").text().trim()).match(/3645884/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baicheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baicheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baicheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baicheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baicheng/);
                    should($("span.population").text().trim()).match(/3669400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Neijiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Neijiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Neijiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Neijiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Neijiang/);
                    should($("span.population").text().trim()).match(/3702847/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiamen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiamen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiamen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiamen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiamen/);
                    should($("span.population").text().trim()).match(/3707090/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zaozhuang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zaozhuang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zaozhuang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zaozhuang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zaozhuang/);
                    should($("span.population").text().trim()).match(/3729140/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baojishi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baojishi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baojishi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baojishi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baojishi/);
                    should($("span.population").text().trim()).match(/3738700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Harbin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Harbin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Harbin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Harbin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Harbin/);
                    should($("span.population").text().trim()).match(/3830000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanning should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanning`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanning should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanning`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanning/);
                    should($("span.population").text().trim()).match(/3837978/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuhu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuhu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuhu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuhu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuhu/);
                    should($("span.population").text().trim()).match(/3842100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Taiyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Taiyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Taiyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Taiyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taiyuan/);
                    should($("span.population").text().trim()).match(/3875053/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Deyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Deyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Deyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Deyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Deyang/);
                    should($("span.population").text().trim()).match(/3877000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Binzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Binzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Binzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Binzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Binzhou/);
                    should($("span.population").text().trim()).match(/3928568/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Loudi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Loudi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Loudi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Loudi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Loudi/);
                    should($("span.population").text().trim()).match(/3931800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingyuan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingyuan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingyuan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingyuan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingyuan/);
                    should($("span.population").text().trim()).match(/3969473/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chuzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chuzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chuzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chuzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chuzhou/);
                    should($("span.population").text().trim()).match(/3987054/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhuzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhuzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhuzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhuzhou/);
                    should($("span.population").text().trim()).match(/4020800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Fuzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Fuzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Fuzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Fuzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fuzhou/);
                    should($("span.population").text().trim()).match(/4047200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ningbo should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ningbo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ningbo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ningbo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ningbo/);
                    should($("span.population").text().trim()).match(/4087523/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shijiazhuang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shijiazhuang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shijiazhuang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shijiazhuang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shijiazhuang/);
                    should($("span.population").text().trim()).match(/4098243/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiaoxita should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiaoxita`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiaoxita should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiaoxita`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiaoxita/);
                    should($("span.population").text().trim()).match(/4137900/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhaoqing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhaoqing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhaoqing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhaoqing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhaoqing/);
                    should($("span.population").text().trim()).match(/4151700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Liuzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Liuzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Liuzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Liuzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liuzhou/);
                    should($("span.population").text().trim()).match(/4157934/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hefei should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hefei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hefei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hefei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hefei/);
                    should($("span.population").text().trim()).match(/4216940/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Luzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Luzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Luzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Luzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Luzhou/);
                    should($("span.population").text().trim()).match(/4218427/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shantou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shantou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shantou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shantou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shantou/);
                    should($("span.population").text().trim()).match(/4312192/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Linfen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Linfen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Linfen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Linfen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Linfen/);
                    should($("span.population").text().trim()).match(/4316610/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chifeng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chifeng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chifeng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chifeng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chifeng/);
                    should($("span.population").text().trim()).match(/4341245/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhangjiakou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangjiakou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhangjiakou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangjiakou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhangjiakou/);
                    should($("span.population").text().trim()).match(/4345485/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Meizhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Meizhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Meizhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Meizhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Meizhou/);
                    should($("span.population").text().trim()).match(/4378800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiangguanchi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangguanchi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiangguanchi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangguanchi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiangguanchi/);
                    should($("span.population").text().trim()).match(/4379998/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changchun should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changchun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changchun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changchun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changchun/);
                    should($("span.population").text().trim()).match(/4408154/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guigang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guigang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guigang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guigang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guigang/);
                    should($("span.population").text().trim()).match(/4409200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yiyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yiyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yiyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yiyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yiyang/);
                    should($("span.population").text().trim()).match(/4413800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Kunming should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Kunming`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Kunming should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Kunming`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kunming/);
                    should($("span.population").text().trim()).match(/4422686/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hengshui should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hengshui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hengshui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hengshui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hengshui/);
                    should($("span.population").text().trim()).match(/4472000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yangzhou/);
                    should($("span.population").text().trim()).match(/4559797/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yibin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yibin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yibin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yibin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yibin/);
                    should($("span.population").text().trim()).match(/4588804/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinpu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinpu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinpu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinpu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinpu/);
                    should($("span.population").text().trim()).match(/4599360/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiangmen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangmen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiangmen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiangmen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiangmen/);
                    should($("span.population").text().trim()).match(/4630300/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Anqing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Anqing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Anqing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Anqing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Anqing/);
                    should($("span.population").text().trim()).match(/4723000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chenzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chenzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chenzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chenzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chenzhou/);
                    should($("span.population").text().trim()).match(/4744500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changsha should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changsha`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changsha should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changsha`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changsha/);
                    should($("span.population").text().trim()).match(/4766296/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huanglongsi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huanglongsi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huanglongsi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huanglongsi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huanglongsi/);
                    should($("span.population").text().trim()).match(/4824016/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Mianyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Mianyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Mianyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Mianyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mianyang/);
                    should($("span.population").text().trim()).match(/4868243/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jiujiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jiujiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jiujiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jiujiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jiujiang/);
                    should($("span.population").text().trim()).match(/4896800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pingdingshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pingdingshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pingdingshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pingdingshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pingdingshan/);
                    should($("span.population").text().trim()).match(/4904701/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiaoganzhan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiaoganzhan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiaoganzhan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiaoganzhan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiaoganzhan/);
                    should($("span.population").text().trim()).match(/4921000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huaihua should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huaihua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huaihua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huaihua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huaihua/);
                    should($("span.population").text().trim()).match(/4979600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Suqian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Suqian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Suqian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Suqian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Suqian/);
                    should($("span.population").text().trim()).match(/4986192/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Bozhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Bozhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Bozhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Bozhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bozhou/);
                    should($("span.population").text().trim()).match(/4996844/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guilin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guilin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guilin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guilin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guilin/);
                    should($("span.population").text().trim()).match(/5085500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xianyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xianyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xianyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xianyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xianyang/);
                    should($("span.population").text().trim()).match(/5096001/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yuncheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yuncheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yuncheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yuncheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yuncheng/);
                    should($("span.population").text().trim()).match(/5134779/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhangzhou/);
                    should($("span.population").text().trim()).match(/5140000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Weinan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Weinan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Weinan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Weinan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Weinan/);
                    should($("span.population").text().trim()).match(/5286077/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Suzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Suzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Suzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Suzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Suzhou/);
                    should($("span.population").text().trim()).match(/5352924/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qiqihar should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qiqihar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qiqihar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qiqihar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qiqihar/);
                    should($("span.population").text().trim()).match(/5367003/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Suihua should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Suihua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Suihua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Suihua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Suihua/);
                    should($("span.population").text().trim()).match(/5418153/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yongzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yongzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yongzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yongzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yongzhou/);
                    should($("span.population").text().trim()).match(/5452100/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Langfang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Langfang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Langfang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Langfang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Langfang/);
                    should($("span.population").text().trim()).match(/5464087/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dazhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dazhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dazhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dazhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dazhou/);
                    should($("span.population").text().trim()).match(/5468097/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhaotong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhaotong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhaotong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhaotong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhaotong/);
                    should($("span.population").text().trim()).match(/5591000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jinan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jinan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jinan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jinan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jinan/);
                    should($("span.population").text().trim()).match(/5606374/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dezhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dezhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dezhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dezhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dezhou/);
                    should($("span.population").text().trim()).match(/5611194/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhengzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhengzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhengzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhengzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhengzhou/);
                    should($("span.population").text().trim()).match(/5621593/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xiangyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xiangyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xiangyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xiangyang/);
                    should($("span.population").text().trim()).match(/5680000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Pudong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Pudong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Pudong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Pudong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pudong/);
                    should($("span.population").text().trim()).match(/5681512/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nangandao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nangandao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nangandao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nangandao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nangandao/);
                    should($("span.population").text().trim()).match(/5708191/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qingdao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qingdao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qingdao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qingdao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qingdao/);
                    should($("span.population").text().trim()).match(/5818255/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Changde should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Changde`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Changde should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Changde`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changde/);
                    should($("span.population").text().trim()).match(/5827200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yulin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yulin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yulin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yulin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yulin/);
                    should($("span.population").text().trim()).match(/5849700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dalian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dalian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dalian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dalian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dalian/);
                    should($("span.population").text().trim()).match(/5871474/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Liaocheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Liaocheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Liaocheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Liaocheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liaocheng/);
                    should($("span.population").text().trim()).match(/5952128/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jieyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jieyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jieyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jieyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jieyang/);
                    should($("span.population").text().trim()).match(/6089400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Qujing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Qujing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Qujing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Qujing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qujing/);
                    should($("span.population").text().trim()).match(/6155400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xinyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xinyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xinyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xinyang/);
                    should($("span.population").text().trim()).match(/6234401/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanchong should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanchong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanchong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanchong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanchong/);
                    should($("span.population").text().trim()).match(/6278614/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Maoming should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Maoming`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Maoming should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Maoming`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Maoming/);
                    should($("span.population").text().trim()).match(/6313200/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Huanggang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Huanggang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Huanggang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Huanggang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Huanggang/);
                    should($("span.population").text().trim()).match(/6333000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zunyi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zunyi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zunyi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zunyi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zunyi/);
                    should($("span.population").text().trim()).match(/6606675/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shangrao should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shangrao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shangrao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shangrao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shangrao/);
                    should($("span.population").text().trim()).match(/6810700/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Bijie should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Bijie`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Bijie should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Bijie`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bijie/);
                    should($("span.population").text().trim()).match(/6899636/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Xingtai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Xingtai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Xingtai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Xingtai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Xingtai/);
                    should($("span.population").text().trim()).match(/7111106/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhumadian should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhumadian`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhumadian should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhumadian`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhumadian/);
                    should($("span.population").text().trim()).match(/7231234/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hengyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hengyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hengyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hengyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hengyang/);
                    should($("span.population").text().trim()).match(/7243400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Yancheng should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Yancheng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Yancheng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Yancheng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yancheng/);
                    should($("span.population").text().trim()).match(/7260240/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhanjiang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhanjiang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhanjiang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhanjiang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhanjiang/);
                    should($("span.population").text().trim()).match(/7332000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Cangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Cangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Cangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Cangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cangzhou/);
                    should($("span.population").text().trim()).match(/7544300/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shangqiu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shangqiu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shangqiu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shangqiu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shangqiu/);
                    should($("span.population").text().trim()).match(/7816831/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shenyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shenyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shenyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shenyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shenyang/);
                    should($("span.population").text().trim()).match(/7964000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Jining should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Jining`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Jining should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Jining`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jining/);
                    should($("span.population").text().trim()).match(/8357897/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanjing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanjing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanjing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanjing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanjing/);
                    should($("span.population").text().trim()).match(/8422000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Quanzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Quanzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Quanzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Quanzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Quanzhou/);
                    should($("span.population").text().trim()).match(/8782285/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Heze should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Heze`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Heze should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Heze`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Heze/);
                    should($("span.population").text().trim()).match(/8795939/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Ganzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Ganzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Ganzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Ganzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ganzhou/);
                    should($("span.population").text().trim()).match(/8970014/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Zhoukou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Zhoukou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Zhoukou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Zhoukou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhoukou/);
                    should($("span.population").text().trim()).match(/9026015/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tongshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tongshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tongshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tongshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tongshan/);
                    should($("span.population").text().trim()).match(/9083790/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Foshan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Foshan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Foshan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Foshan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Foshan/);
                    should($("span.population").text().trim()).match(/9498863/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Hangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Hangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Hangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Hangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hangzhou/);
                    should($("span.population").text().trim()).match(/9523000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Nanyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Nanyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Nanyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Nanyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nanyang/);
                    should($("span.population").text().trim()).match(/10013600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Wuhan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Wuhan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Wuhan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Wuhan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Wuhan/);
                    should($("span.population").text().trim()).match(/10251000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Tianjin should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Tianjin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Tianjin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Tianjin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tianjin/);
                    should($("span.population").text().trim()).match(/10368000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Dongguan should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Dongguan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Dongguan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Dongguan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dongguan/);
                    should($("span.population").text().trim()).match(/10646000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Linyi should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Linyi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Linyi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Linyi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Linyi/);
                    should($("span.population").text().trim()).match(/11018365/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Baoding should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Baoding`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Baoding should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Baoding`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baoding/);
                    should($("span.population").text().trim()).match(/11860000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chongqing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chongqing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chongqing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chongqing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chongqing/);
                    should($("span.population").text().trim()).match(/12135000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Chengdu should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Chengdu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Chengdu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Chengdu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chengdu/);
                    should($("span.population").text().trim()).match(/14645000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shenzhen should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shenzhen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shenzhen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shenzhen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shenzhen/);
                    should($("span.population").text().trim()).match(/17619000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Beijing should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Beijing`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Beijing should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Beijing`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Beijing/);
                    should($("span.population").text().trim()).match(/18522000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Shanghai should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Shanghai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Shanghai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Shanghai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shanghai/);
                    should($("span.population").text().trim()).match(/24073000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=China&city=Guangzhou should respond with 200`, function(done) {

        request
            .get(`/geo?c=China&city=Guangzhou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=China&city=Guangzhou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=China&city=Guangzhou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guangzhou/);
                    should($("span.population").text().trim()).match(/26940000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Argentina&city=Comodoro%20Rivadavia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Comodoro%20Rivadavia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Argentina&city=Comodoro%20Rivadavia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Comodoro%20Rivadavia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Comodoro Rivadavia/);
                    should($("span.population").text().trim()).match(/730266/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Argentina&city=Santiago%20del%20Estero should respond with 200`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Santiago%20del%20Estero`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Argentina&city=Santiago%20del%20Estero should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Santiago%20del%20Estero`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Santiago del Estero/);
                    should($("span.population").text().trim()).match(/911506/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Argentina&city=Rosario should respond with 200`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Rosario`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Argentina&city=Rosario should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Argentina&city=Rosario`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rosario/);
                    should($("span.population").text().trim()).match(/1276000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Osogbo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Osogbo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Osogbo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Osogbo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Osogbo/);
                    should($("span.population").text().trim()).match(/731000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Kaduna should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Kaduna`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Kaduna should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Kaduna`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kaduna/);
                    should($("span.population").text().trim()).match(/760084/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Warri should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Warri`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Warri should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Warri`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Warri/);
                    should($("span.population").text().trim()).match(/830106/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Ilorin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ilorin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Ilorin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ilorin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ilorin/);
                    should($("span.population").text().trim()).match(/847582/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Akure should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Akure`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Akure should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Akure`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Akure/);
                    should($("span.population").text().trim()).match(/847903/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Ikeja should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ikeja`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Ikeja should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ikeja`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ikeja/);
                    should($("span.population").text().trim()).match(/861300/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Abeokuta should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Abeokuta`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Abeokuta should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Abeokuta`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Abeokuta/);
                    should($("span.population").text().trim()).match(/888924/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Owerri should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Owerri`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Owerri should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Owerri`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Owerri/);
                    should($("span.population").text().trim()).match(/908109/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Ogbomoso should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ogbomoso`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Ogbomoso should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ogbomoso`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ogbomoso/);
                    should($("span.population").text().trim()).match(/1032000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Ikare should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ikare`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Ikare should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ikare`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ikare/);
                    should($("span.population").text().trim()).match(/1099931/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Shagamu should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Shagamu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Shagamu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Shagamu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shagamu/);
                    should($("span.population").text().trim()).match(/1132270/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Benin%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Benin%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Benin%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Benin%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Benin City/);
                    should($("span.population").text().trim()).match(/1147188/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Maiduguri should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Maiduguri`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Maiduguri should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Maiduguri`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Maiduguri/);
                    should($("span.population").text().trim()).match(/1197497/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Onitsha should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Onitsha`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Onitsha should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Onitsha`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Onitsha/);
                    should($("span.population").text().trim()).match(/1483000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Aba should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Aba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Aba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Aba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Aba/);
                    should($("span.population").text().trim()).match(/1530000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Port%20Harcourt should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Port%20Harcourt`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Port%20Harcourt should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Port%20Harcourt`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Port Harcourt/);
                    should($("span.population").text().trim()).match(/1865000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Ibadan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ibadan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Ibadan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Ibadan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ibadan/);
                    should($("span.population").text().trim()).match(/3552000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Abuja should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Abuja`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Abuja should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Abuja`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Abuja/);
                    should($("span.population").text().trim()).match(/3770000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Kano should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Kano`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Kano should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Kano`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kano/);
                    should($("span.population").text().trim()).match(/3848885/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria&city=Lagos should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Lagos`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nigeria&city=Lagos should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nigeria&city=Lagos`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lagos/);
                    should($("span.population").text().trim()).match(/16637000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Kumamoto should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Kumamoto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Kumamoto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Kumamoto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kumamoto/);
                    should($("span.population").text().trim()).match(/738385/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Hamamatsu should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Hamamatsu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Hamamatsu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Hamamatsu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hamamatsu/);
                    should($("span.population").text().trim()).match(/788211/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Niigata should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Niigata`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Niigata should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Niigata`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Niigata/);
                    should($("span.population").text().trim()).match(/790646/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Chiba should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Chiba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Chiba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Chiba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chiba/);
                    should($("span.population").text().trim()).match(/981738/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Sendai should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Sendai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Sendai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Sendai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sendai/);
                    should($("span.population").text().trim()).match(/1061177/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Hiroshima should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Hiroshima`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Hiroshima should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Hiroshima`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hiroshima/);
                    should($("span.population").text().trim()).match(/1198021/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Saitama should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Saitama`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Saitama should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Saitama`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Saitama/);
                    should($("span.population").text().trim()).match(/1325843/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Kawasaki should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Kawasaki`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Kawasaki should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Kawasaki`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kawasaki/);
                    should($("span.population").text().trim()).match(/1539522/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Fukuoka should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Fukuoka`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Fukuoka should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Fukuoka`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Fukuoka/);
                    should($("span.population").text().trim()).match(/2286000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Yokohama should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Yokohama`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Yokohama should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Yokohama`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yokohama/);
                    should($("span.population").text().trim()).match(/3757630/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Japan&city=Nagoya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Japan&city=Nagoya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Japan&city=Nagoya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Japan&city=Nagoya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nagoya/);
                    should($("span.population").text().trim()).match(/9197000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Angola&city=Cabinda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Angola&city=Cabinda`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Angola&city=Cabinda should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Angola&city=Cabinda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cabinda/);
                    should($("span.population").text().trim()).match(/739182/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Angola&city=Cacuaco should respond with 200`, function(done) {

        request
            .get(`/geo?c=Angola&city=Cacuaco`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Angola&city=Cacuaco should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Angola&city=Cacuaco`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cacuaco/);
                    should($("span.population").text().trim()).match(/1279488/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Angola&city=Luanda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Angola&city=Luanda`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Angola&city=Luanda should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Angola&city=Luanda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Luanda/);
                    should($("span.population").text().trim()).match(/9051000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Myanmar&city=Kyaukse should respond with 200`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Kyaukse`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Myanmar&city=Kyaukse should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Kyaukse`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kyaukse/);
                    should($("span.population").text().trim()).match(/741071/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Myanmar&city=Nay%20Pyi%20Taw should respond with 200`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Nay%20Pyi%20Taw`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Myanmar&city=Nay%20Pyi%20Taw should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Nay%20Pyi%20Taw`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nay Pyi Taw/);
                    should($("span.population").text().trim()).match(/1160242/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Myanmar&city=Mandalay should respond with 200`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Mandalay`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Myanmar&city=Mandalay should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Mandalay`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mandalay/);
                    should($("span.population").text().trim()).match(/1319452/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Myanmar&city=Rangoon should respond with 200`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Rangoon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Myanmar&city=Rangoon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Myanmar&city=Rangoon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rangoon/);
                    should($("span.population").text().trim()).match(/5209541/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa&city=Pretoria should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Pretoria`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Africa&city=Pretoria should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Pretoria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pretoria/);
                    should($("span.population").text().trim()).match(/741651/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa&city=Pietermaritzburg should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Pietermaritzburg`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Africa&city=Pietermaritzburg should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Pietermaritzburg`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pietermaritzburg/);
                    should($("span.population").text().trim()).match(/750845/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa&city=Vereeniging should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Vereeniging`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Africa&city=Vereeniging should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Vereeniging`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Vereeniging/);
                    should($("span.population").text().trim()).match(/1074000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa&city=Soweto should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Soweto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Africa&city=Soweto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Soweto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Soweto/);
                    should($("span.population").text().trim()).match(/1271628/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa&city=Johannesburg should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Johannesburg`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Africa&city=Johannesburg should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Africa&city=Johannesburg`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Johannesburg/);
                    should($("span.population").text().trim()).match(/8000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mozambique&city=Nampula should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Nampula`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mozambique&city=Nampula should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Nampula`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nampula/);
                    should($("span.population").text().trim()).match(/743000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mozambique&city=Matola should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Matola`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mozambique&city=Matola should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Matola`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Matola/);
                    should($("span.population").text().trim()).match(/1032197/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mozambique&city=Maputo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Maputo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mozambique&city=Maputo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mozambique&city=Maputo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Maputo/);
                    should($("span.population").text().trim()).match(/1191613/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Thiruvananthapuram should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Thiruvananthapuram`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Thiruvananthapuram should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Thiruvananthapuram`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Thiruvananthapuram/);
                    should($("span.population").text().trim()).match(/743691/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Bhubaneshwar should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Bhubaneshwar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Bhubaneshwar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Bhubaneshwar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bhubaneshwar/);
                    should($("span.population").text().trim()).match(/837737/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Jalandhar should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Jalandhar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Jalandhar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Jalandhar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jalandhar/);
                    should($("span.population").text().trim()).match(/873725/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Bareilly should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Bareilly`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Bareilly should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Bareilly`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bareilly/);
                    should($("span.population").text().trim()).match(/1000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Gwalior should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Gwalior`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Gwalior should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Gwalior`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gwalior/);
                    should($("span.population").text().trim()).match(/1069276/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Amritsar should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Amritsar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Amritsar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Amritsar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Amritsar/);
                    should($("span.population").text().trim()).match(/1132383/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Najafgarh should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Najafgarh`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Najafgarh should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Najafgarh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Najafgarh/);
                    should($("span.population").text().trim()).match(/1203180/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Jabalpur should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Jabalpur`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Jabalpur should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Jabalpur`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jabalpur/);
                    should($("span.population").text().trim()).match(/1267564/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Meerut should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Meerut`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Meerut should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Meerut`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Meerut/);
                    should($("span.population").text().trim()).match(/1305429/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Indore should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Indore`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Indore should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Indore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Indore/);
                    should($("span.population").text().trim()).match(/1994397/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Cawnpore should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Cawnpore`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Cawnpore should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Cawnpore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cawnpore/);
                    should($("span.population").text().trim()).match(/2701324/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Lucknow should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Lucknow`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Lucknow should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Lucknow`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lucknow/);
                    should($("span.population").text().trim()).match(/3382000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Prayagraj should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Prayagraj`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Prayagraj should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Prayagraj`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Prayagraj/);
                    should($("span.population").text().trim()).match(/5954391/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=India&city=Delhi should respond with 200`, function(done) {

        request
            .get(`/geo?c=India&city=Delhi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=India&city=Delhi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=India&city=Delhi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Delhi/);
                    should($("span.population").text().trim()).match(/32226000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Changhua should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Changhua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Changhua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Changhua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changhua/);
                    should($("span.population").text().trim()).match(/750000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Zhongli should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Zhongli`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Zhongli should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Zhongli`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Zhongli/);
                    should($("span.population").text().trim()).match(/1632616/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Tainan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Tainan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Tainan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Tainan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tainan/);
                    should($("span.population").text().trim()).match(/1874686/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Kaohsiung should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Kaohsiung`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Kaohsiung should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Kaohsiung`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kaohsiung/);
                    should($("span.population").text().trim()).match(/2733566/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Taichung should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Taichung`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Taichung should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Taichung`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taichung/);
                    should($("span.population").text().trim()).match(/3033885/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan&city=Taipei should respond with 200`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Taipei`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Taiwan&city=Taipei should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Taiwan&city=Taipei`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Taipei/);
                    should($("span.population").text().trim()).match(/9078000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Burco should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Burco`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Burco should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Burco`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Burco/);
                    should($("span.population").text().trim()).match(/750211/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Baardheere should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Baardheere`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Baardheere should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Baardheere`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baardheere/);
                    should($("span.population").text().trim()).match(/755500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Baidoa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Baidoa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Baidoa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Baidoa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Baidoa/);
                    should($("span.population").text().trim()).match(/950000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Gaalkacyo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Gaalkacyo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Gaalkacyo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Gaalkacyo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaalkacyo/);
                    should($("span.population").text().trim()).match(/950000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Hargeysa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Hargeysa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Hargeysa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Hargeysa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hargeysa/);
                    should($("span.population").text().trim()).match(/1200000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Boosaaso should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Boosaaso`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Boosaaso should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Boosaaso`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Boosaaso/);
                    should($("span.population").text().trim()).match(/2000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Somalia&city=Mogadishu should respond with 200`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Mogadishu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Somalia&city=Mogadishu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Somalia&city=Mogadishu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mogadishu/);
                    should($("span.population").text().trim()).match(/4249083/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Samarinda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Samarinda`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Samarinda should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Samarinda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Samarinda/);
                    should($("span.population").text().trim()).match(/753370/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Padang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Padang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Padang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Padang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Padang/);
                    should($("span.population").text().trim()).match(/914970/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Pekanbaru should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Pekanbaru`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Pekanbaru should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Pekanbaru`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pekanbaru/);
                    should($("span.population").text().trim()).match(/983356/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Bogor should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bogor`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Bogor should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bogor`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bogor/);
                    should($("span.population").text().trim()).match(/1030720/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Bandar%20Lampung should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bandar%20Lampung`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Bandar%20Lampung should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bandar%20Lampung`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bandar Lampung/);
                    should($("span.population").text().trim()).match(/1166761/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Cilacap should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Cilacap`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Cilacap should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Cilacap`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cilacap/);
                    should($("span.population").text().trim()).match(/1174964/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Bagam should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bagam`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Bagam should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bagam`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bagam/);
                    should($("span.population").text().trim()).match(/1230097/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Sumedang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Sumedang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Sumedang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Sumedang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sumedang/);
                    should($("span.population").text().trim()).match(/1240000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Jepara should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Jepara`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Jepara should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Jepara`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jepara/);
                    should($("span.population").text().trim()).match(/1257912/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Makassar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Makassar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Makassar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Makassar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Makassar/);
                    should($("span.population").text().trim()).match(/1338663/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Palembang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Palembang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Palembang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Palembang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Palembang/);
                    should($("span.population").text().trim()).match(/1535952/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Semarang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Semarang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Semarang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Semarang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Semarang/);
                    should($("span.population").text().trim()).match(/1621384/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Sangereng should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Sangereng`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Sangereng should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Sangereng`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sangereng/);
                    should($("span.population").text().trim()).match(/1644899/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Denpasar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Denpasar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Denpasar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Denpasar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Denpasar/);
                    should($("span.population").text().trim()).match(/1779122/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Tangerang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Tangerang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Tangerang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Tangerang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tangerang/);
                    should($("span.population").text().trim()).match(/2237006/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Depok should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Depok`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Depok should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Depok`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Depok/);
                    should($("span.population").text().trim()).match(/2330333/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Bekasi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bekasi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Bekasi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Bekasi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bekasi/);
                    should($("span.population").text().trim()).match(/2381053/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Malang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Malang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Malang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Malang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Malang/);
                    should($("span.population").text().trim()).match(/2795209/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Medan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Medan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Medan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Medan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Medan/);
                    should($("span.population").text().trim()).match(/3632000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Surabaya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Surabaya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Surabaya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Surabaya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Surabaya/);
                    should($("span.population").text().trim()).match(/6499000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia&city=Jakarta should respond with 200`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Jakarta`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Indonesia&city=Jakarta should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Indonesia&city=Jakarta`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jakarta/);
                    should($("span.population").text().trim()).match(/33756000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Benin&city=Cotonou should respond with 200`, function(done) {

        request
            .get(`/geo?c=Benin&city=Cotonou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Benin&city=Cotonou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Benin&city=Cotonou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cotonou/);
                    should($("span.population").text().trim()).match(/762000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Bahawalpur should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Bahawalpur`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Bahawalpur should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Bahawalpur`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bahawalpur/);
                    should($("span.population").text().trim()).match(/762111/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Quetta should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Quetta`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Quetta should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Quetta`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Quetta/);
                    should($("span.population").text().trim()).match(/1001205/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Islamabad should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Islamabad`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Islamabad should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Islamabad`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Islamabad/);
                    should($("span.population").text().trim()).match(/1014825/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Hyderabad%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Hyderabad%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Hyderabad%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Hyderabad%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hyderabad City/);
                    should($("span.population").text().trim()).match(/1732693/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Saidu%20Sharif should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Saidu%20Sharif`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Saidu%20Sharif should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Saidu%20Sharif`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Saidu Sharif/);
                    should($("span.population").text().trim()).match(/1860310/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Multan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Multan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Multan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Multan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Multan/);
                    should($("span.population").text().trim()).match(/1871843/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Peshawar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Peshawar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Peshawar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Peshawar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Peshawar/);
                    should($("span.population").text().trim()).match(/1970042/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Gujranwala should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Gujranwala`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Gujranwala should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Gujranwala`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gujranwala/);
                    should($("span.population").text().trim()).match(/2027001/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Rawalpindi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Rawalpindi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Rawalpindi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Rawalpindi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rawalpindi/);
                    should($("span.population").text().trim()).match(/2098231/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Faisalabad should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Faisalabad`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Faisalabad should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Faisalabad`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Faisalabad/);
                    should($("span.population").text().trim()).match(/3203846/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Lahore should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Lahore`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Lahore should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Lahore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lahore/);
                    should($("span.population").text().trim()).match(/12306000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan&city=Karachi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Karachi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Pakistan&city=Karachi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Pakistan&city=Karachi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Karachi/);
                    should($("span.population").text().trim()).match(/15738000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Germany&city=Frankfurt should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany&city=Frankfurt`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Germany&city=Frankfurt should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Germany&city=Frankfurt`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Frankfurt/);
                    should($("span.population").text().trim()).match(/764104/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Germany&city=Cologne should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany&city=Cologne`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Germany&city=Cologne should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Germany&city=Cologne`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cologne/);
                    should($("span.population").text().trim()).match(/1083498/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Germany&city=Hamburg should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany&city=Hamburg`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Germany&city=Hamburg should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Germany&city=Hamburg`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hamburg/);
                    should($("span.population").text().trim()).match(/2484800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Germany&city=Munich should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany&city=Munich`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Germany&city=Munich should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Germany&city=Munich`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Munich/);
                    should($("span.population").text().trim()).match(/2606021/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Germany&city=Berlin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Germany&city=Berlin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Germany&city=Berlin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Germany&city=Berlin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Berlin/);
                    should($("span.population").text().trim()).match(/4473101/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Erzurum should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Erzurum`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Erzurum should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Erzurum`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Erzurum/);
                    should($("span.population").text().trim()).match(/767848/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Seyhan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Seyhan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Seyhan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Seyhan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Seyhan/);
                    should($("span.population").text().trim()).match(/792536/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Denizli should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Denizli`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Denizli should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Denizli`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Denizli/);
                    should($("span.population").text().trim()).match(/1027782/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Samsun should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Samsun`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Samsun should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Samsun`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Samsun/);
                    should($("span.population").text().trim()).match(/1335716/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Kayseri should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Kayseri`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Kayseri should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Kayseri`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kayseri/);
                    should($("span.population").text().trim()).match(/1389680/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Adana should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Adana`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Adana should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Adana`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Adana/);
                    should($("span.population").text().trim()).match(/1765981/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Mersin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Mersin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Mersin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Mersin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mersin/);
                    should($("span.population").text().trim()).match(/1814468/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Gaziantep should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Gaziantep`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Gaziantep should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Gaziantep`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gaziantep/);
                    should($("span.population").text().trim()).match(/2028563/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Konya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Konya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Konya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Konya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Konya/);
                    should($("span.population").text().trim()).match(/2232374/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Antalya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Antalya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Antalya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Antalya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Antalya/);
                    should($("span.population").text().trim()).match(/2426356/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Bursa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Bursa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Bursa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Bursa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bursa/);
                    should($("span.population").text().trim()).match(/2901396/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Turkey&city=Ankara should respond with 200`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Ankara`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Turkey&city=Ankara should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Turkey&city=Ankara`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ankara/);
                    should($("span.population").text().trim()).match(/5503985/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Nottingham should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Nottingham`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Nottingham should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Nottingham`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nottingham/);
                    should($("span.population").text().trim()).match(/768638/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Leeds should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Leeds`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Leeds should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Leeds`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Leeds/);
                    should($("span.population").text().trim()).match(/789194/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Southampton should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Southampton`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Southampton should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Southampton`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Southampton/);
                    should($("span.population").text().trim()).match(/855569/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Portsmouth should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Portsmouth`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Portsmouth should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Portsmouth`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Portsmouth/);
                    should($("span.population").text().trim()).match(/855679/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Liverpool should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Liverpool`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Liverpool should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Liverpool`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Liverpool/);
                    should($("span.population").text().trim()).match(/864122/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Manchester should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Manchester`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Manchester should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Manchester`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Manchester/);
                    should($("span.population").text().trim()).match(/2705000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom&city=Birmingham should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Birmingham`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Kingdom&city=Birmingham should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom&city=Birmingham`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Birmingham/);
                    should($("span.population").text().trim()).match(/2919600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Spain&city=Bilbao should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain&city=Bilbao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Spain&city=Bilbao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Spain&city=Bilbao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bilbao/);
                    should($("span.population").text().trim()).match(/775000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Spain&city=Valencia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain&city=Valencia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Spain&city=Valencia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Spain&city=Valencia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Valencia/);
                    should($("span.population").text().trim()).match(/792492/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Spain&city=Sevilla should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain&city=Sevilla`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Spain&city=Sevilla should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Spain&city=Sevilla`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sevilla/);
                    should($("span.population").text().trim()).match(/1100000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Spain&city=Barcelona should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain&city=Barcelona`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Spain&city=Barcelona should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Spain&city=Barcelona`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Barcelona/);
                    should($("span.population").text().trim()).match(/4800000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Spain&city=Madrid should respond with 200`, function(done) {

        request
            .get(`/geo?c=Spain&city=Madrid`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Spain&city=Madrid should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Spain&city=Madrid`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Madrid/);
                    should($("span.population").text().trim()).match(/6211000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=George%20Town should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=George%20Town`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=George%20Town should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=George%20Town`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/George Town/);
                    should($("span.population").text().trim()).match(/794313/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=Butterworth should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Butterworth`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=Butterworth should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Butterworth`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Butterworth/);
                    should($("span.population").text().trim()).match(/821652/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=Ipoh should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Ipoh`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=Ipoh should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Ipoh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ipoh/);
                    should($("span.population").text().trim()).match(/866772/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=Klang should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Klang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=Klang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Klang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Klang/);
                    should($("span.population").text().trim()).match(/878000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=Seberang%20Jaya should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Seberang%20Jaya`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=Seberang%20Jaya should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Seberang%20Jaya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Seberang Jaya/);
                    should($("span.population").text().trim()).match(/946092/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia&city=Kuala%20Lumpur should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Kuala%20Lumpur`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malaysia&city=Kuala%20Lumpur should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malaysia&city=Kuala%20Lumpur`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kuala Lumpur/);
                    should($("span.population").text().trim()).match(/8911000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Gabon&city=Libreville should respond with 200`, function(done) {

        request
            .get(`/geo?c=Gabon&city=Libreville`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Gabon&city=Libreville should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Gabon&city=Libreville`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Libreville/);
                    should($("span.population").text().trim()).match(/797003/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Colombia&city=Palermo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Palermo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Colombia&city=Palermo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Palermo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Palermo/);
                    should($("span.population").text().trim()).match(/800000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Colombia&city=Bucaramanga should respond with 200`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Bucaramanga`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Colombia&city=Bucaramanga should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Bucaramanga`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bucaramanga/);
                    should($("span.population").text().trim()).match(/870752/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Colombia&city=Cali should respond with 200`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Cali`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Colombia&city=Cali should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Colombia&city=Cali`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cali/);
                    should($("span.population").text().trim()).match(/2471474/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Madagascar&city=Androtsy should respond with 200`, function(done) {

        request
            .get(`/geo?c=Madagascar&city=Androtsy`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Madagascar&city=Androtsy should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Madagascar&city=Androtsy`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Androtsy/);
                    should($("span.population").text().trim()).match(/809313/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Madagascar&city=Antananarivo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Madagascar&city=Antananarivo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Madagascar&city=Antananarivo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Madagascar&city=Antananarivo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Antananarivo/);
                    should($("span.population").text().trim()).match(/2610000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Venezuela&city=Barinas should respond with 200`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Barinas`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Venezuela&city=Barinas should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Barinas`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Barinas/);
                    should($("span.population").text().trim()).match(/816264/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Venezuela&city=Barquisimeto should respond with 200`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Barquisimeto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Venezuela&city=Barquisimeto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Barquisimeto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Barquisimeto/);
                    should($("span.population").text().trim()).match(/1059092/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Venezuela&city=Caracas should respond with 200`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Caracas`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Venezuela&city=Caracas should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Caracas`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Caracas/);
                    should($("span.population").text().trim()).match(/2245744/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Venezuela&city=Maracaibo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Maracaibo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Venezuela&city=Maracaibo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Venezuela&city=Maracaibo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Maracaibo/);
                    should($("span.population").text().trim()).match(/2658355/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Morocco&city=Mediouna should respond with 200`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Mediouna`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Morocco&city=Mediouna should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Mediouna`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mediouna/);
                    should($("span.population").text().trim()).match(/822851/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Morocco&city=Marrakech should respond with 200`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Marrakech`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Morocco&city=Marrakech should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Marrakech`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Marrakech/);
                    should($("span.population").text().trim()).match(/928850/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Morocco&city=El%20Kelaa%20des%20Srarhna should respond with 200`, function(done) {

        request
            .get(`/geo?c=Morocco&city=El%20Kelaa%20des%20Srarhna`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Morocco&city=El%20Kelaa%20des%20Srarhna should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Morocco&city=El%20Kelaa%20des%20Srarhna`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/El Kelaa des Srarhna/);
                    should($("span.population").text().trim()).match(/1450021/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Morocco&city=Casablanca should respond with 200`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Casablanca`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Morocco&city=Casablanca should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Morocco&city=Casablanca`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Casablanca/);
                    should($("span.population").text().trim()).match(/4370000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Brazzaville)&city=Pointe-Noire should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)&city=Pointe-Noire`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Brazzaville)&city=Pointe-Noire should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)&city=Pointe-Noire`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pointe-Noire/);
                    should($("span.population").text().trim()).match(/829134/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Brazzaville)&city=Brazzaville should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)&city=Brazzaville`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Brazzaville)&city=Brazzaville should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)&city=Brazzaville`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Brazzaville/);
                    should($("span.population").text().trim()).match(/1827000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Cheongju should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Cheongju`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Cheongju should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Cheongju`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cheongju/);
                    should($("span.population").text().trim()).match(/833276/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Bucheon should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Bucheon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Bucheon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Bucheon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bucheon/);
                    should($("span.population").text().trim()).match(/867678/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Changwon should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Changwon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Changwon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Changwon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Changwon/);
                    should($("span.population").text().trim()).match(/1046054/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Goyang should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Goyang`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Goyang should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Goyang`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Goyang/);
                    should($("span.population").text().trim()).match(/1061929/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Tongjin should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Tongjin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Tongjin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Tongjin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tongjin/);
                    should($("span.population").text().trim()).match(/1076369/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Ulsan should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Ulsan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Ulsan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Ulsan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ulsan/);
                    should($("span.population").text().trim()).match(/1166033/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Suwon should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Suwon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Suwon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Suwon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Suwon/);
                    should($("span.population").text().trim()).match(/1234300/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Daejeon should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Daejeon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Daejeon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Daejeon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Daejeon/);
                    should($("span.population").text().trim()).match(/1475221/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Gwangju should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Gwangju`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Gwangju should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Gwangju`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Gwangju/);
                    should($("span.population").text().trim()).match(/1490092/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Daegu should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Daegu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Daegu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Daegu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Daegu/);
                    should($("span.population").text().trim()).match(/2461002/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Incheon should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Incheon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Incheon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Incheon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Incheon/);
                    should($("span.population").text().trim()).match(/2936117/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Busan should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Busan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Busan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Busan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Busan/);
                    should($("span.population").text().trim()).match(/3453198/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea&city=Seoul should respond with 200`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Seoul`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=South%20Korea&city=Seoul should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=South%20Korea&city=Seoul`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Seoul/);
                    should($("span.population").text().trim()).match(/23016000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Algeria&city=Oran should respond with 200`, function(done) {

        request
            .get(`/geo?c=Algeria&city=Oran`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Algeria&city=Oran should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Algeria&city=Oran`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Oran/);
                    should($("span.population").text().trim()).match(/852000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Algeria&city=Algiers should respond with 200`, function(done) {

        request
            .get(`/geo?c=Algeria&city=Algiers`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Algeria&city=Algiers should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Algeria&city=Algiers`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Algiers/);
                    should($("span.population").text().trim()).match(/3415811/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bolivia&city=Cochabamba should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=Cochabamba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bolivia&city=Cochabamba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=Cochabamba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Cochabamba/);
                    should($("span.population").text().trim()).match(/856198/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bolivia&city=El%20Alto should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=El%20Alto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bolivia&city=El%20Alto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=El%20Alto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/El Alto/);
                    should($("span.population").text().trim()).match(/943000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bolivia&city=La%20Paz should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=La%20Paz`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bolivia&city=La%20Paz should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=La%20Paz`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/La Paz/);
                    should($("span.population").text().trim()).match(/2867504/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bolivia&city=Santa%20Cruz should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=Santa%20Cruz`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bolivia&city=Santa%20Cruz should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bolivia&city=Santa%20Cruz`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Santa Cruz/);
                    should($("span.population").text().trim()).match(/3151676/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Tajikistan&city=Dushanbe should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tajikistan&city=Dushanbe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Tajikistan&city=Dushanbe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Tajikistan&city=Dushanbe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dushanbe/);
                    should($("span.population").text().trim()).match(/863400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Italy&city=Turin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Italy&city=Turin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Italy&city=Turin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Italy&city=Turin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Turin/);
                    should($("span.population").text().trim()).match(/870952/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Italy&city=Naples should respond with 200`, function(done) {

        request
            .get(`/geo?c=Italy&city=Naples`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Italy&city=Naples should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Italy&city=Naples`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Naples/);
                    should($("span.population").text().trim()).match(/966144/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Italy&city=Milan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Italy&city=Milan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Italy&city=Milan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Italy&city=Milan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Milan/);
                    should($("span.population").text().trim()).match(/1366180/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Italy&city=Rome should respond with 200`, function(done) {

        request
            .get(`/geo?c=Italy&city=Rome`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Italy&city=Rome should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Italy&city=Rome`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rome/);
                    should($("span.population").text().trim()).match(/2872800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Natal should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Natal`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Natal should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Natal`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Natal/);
                    should($("span.population").text().trim()).match(/877662/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Campo%20Grande should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Campo%20Grande`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Campo%20Grande should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Campo%20Grande`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Campo Grande/);
                    should($("span.population").text().trim()).match(/906092/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Porto%20Alegre should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Porto%20Alegre`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Porto%20Alegre should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Porto%20Alegre`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Porto Alegre/);
                    should($("span.population").text().trim()).match(/1484941/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Recife should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Recife`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Recife should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Recife`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Recife/);
                    should($("span.population").text().trim()).match(/1653461/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Manaus should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Manaus`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Manaus should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Manaus`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Manaus/);
                    should($("span.population").text().trim()).match(/2219580/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Salvador should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Salvador`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Salvador should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Salvador`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Salvador/);
                    should($("span.population").text().trim()).match(/2886698/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Belo%20Horizonte should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Belo%20Horizonte`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Belo%20Horizonte should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Belo%20Horizonte`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Belo Horizonte/);
                    should($("span.population").text().trim()).match(/5328000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Brazil&city=Rio%20de%20Janeiro should respond with 200`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Rio%20de%20Janeiro`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Brazil&city=Rio%20de%20Janeiro should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Brazil&city=Rio%20de%20Janeiro`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rio de Janeiro/);
                    should($("span.population").text().trim()).match(/12592000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Central%20African%20Republic&city=Bangui should respond with 200`, function(done) {

        request
            .get(`/geo?c=Central%20African%20Republic&city=Bangui`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Central%20African%20Republic&city=Bangui should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Central%20African%20Republic&city=Bangui`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bangui/);
                    should($("span.population").text().trim()).match(/889231/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Bunia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Bunia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Bunia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Bunia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bunia/);
                    should($("span.population").text().trim()).match(/900666/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Kisangani should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Kisangani`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Kisangani should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Kisangani`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kisangani/);
                    should($("span.population").text().trim()).match(/935977/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Bukavu should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Bukavu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Bukavu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Bukavu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bukavu/);
                    should($("span.population").text().trim()).match(/1133000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Lubumbashi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Lubumbashi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Lubumbashi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Lubumbashi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lubumbashi/);
                    should($("span.population").text().trim()).match(/1786397/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Kinshasa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Kinshasa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Congo%20(Kinshasa)&city=Kinshasa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)&city=Kinshasa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kinshasa/);
                    should($("span.population").text().trim()).match(/12836000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Burkina%20Faso&city=Bobo-Dioulasso should respond with 200`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso&city=Bobo-Dioulasso`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Burkina%20Faso&city=Bobo-Dioulasso should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso&city=Bobo-Dioulasso`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bobo-Dioulasso/);
                    should($("span.population").text().trim()).match(/903887/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Burkina%20Faso&city=Ouagadougou should respond with 200`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso&city=Ouagadougou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Burkina%20Faso&city=Ouagadougou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso&city=Ouagadougou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ouagadougou/);
                    should($("span.population").text().trim()).match(/2453496/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cuba&city=Santiago%20de%20Cuba should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cuba&city=Santiago%20de%20Cuba`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cuba&city=Santiago%20de%20Cuba should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cuba&city=Santiago%20de%20Cuba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Santiago de Cuba/);
                    should($("span.population").text().trim()).match(/917340/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cuba&city=Havana should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cuba&city=Havana`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cuba&city=Havana should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cuba&city=Havana`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Havana/);
                    should($("span.population").text().trim()).match(/2141652/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Israel&city=Jerusalem should respond with 200`, function(done) {

        request
            .get(`/geo?c=Israel&city=Jerusalem`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Israel&city=Jerusalem should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Israel&city=Jerusalem`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jerusalem/);
                    should($("span.population").text().trim()).match(/919438/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Israel&city=Tel%20Aviv-Yafo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Israel&city=Tel%20Aviv-Yafo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Israel&city=Tel%20Aviv-Yafo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Israel&city=Tel%20Aviv-Yafo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tel Aviv-Yafo/);
                    should($("span.population").text().trim()).match(/1388400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Peru&city=Trujillo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Peru&city=Trujillo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Peru&city=Trujillo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Peru&city=Trujillo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Trujillo/);
                    should($("span.population").text().trim()).match(/919899/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Peru&city=Arequipa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Peru&city=Arequipa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Peru&city=Arequipa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Peru&city=Arequipa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Arequipa/);
                    should($("span.population").text().trim()).match(/1008290/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Peru&city=Callao should respond with 200`, function(done) {

        request
            .get(`/geo?c=Peru&city=Callao`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Peru&city=Callao should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Peru&city=Callao`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Callao/);
                    should($("span.population").text().trim()).match(/1129854/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Peru&city=Lima should respond with 200`, function(done) {

        request
            .get(`/geo?c=Peru&city=Lima`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Peru&city=Lima should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Peru&city=Lima`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lima/);
                    should($("span.population").text().trim()).match(/10320000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sudan&city=Khartoum%20North should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Khartoum%20North`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sudan&city=Khartoum%20North should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Khartoum%20North`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Khartoum North/);
                    should($("span.population").text().trim()).match(/936349/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sudan&city=Al%20Mijlad should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Al%20Mijlad`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sudan&city=Al%20Mijlad should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Al%20Mijlad`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Al Mijlad/);
                    should($("span.population").text().trim()).match(/985000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sudan&city=Omdurman should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Omdurman`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sudan&city=Omdurman should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Omdurman`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Omdurman/);
                    should($("span.population").text().trim()).match(/2805396/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sudan&city=Khartoum should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Khartoum`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sudan&city=Khartoum should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sudan&city=Khartoum`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Khartoum/);
                    should($("span.population").text().trim()).match(/7869000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Laos&city=Vientiane should respond with 200`, function(done) {

        request
            .get(`/geo?c=Laos&city=Vientiane`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Laos&city=Vientiane should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Laos&city=Vientiane`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Vientiane/);
                    should($("span.population").text().trim()).match(/948487/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Krasnodar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Krasnodar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Krasnodar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Krasnodar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Krasnodar/);
                    should($("span.population").text().trim()).match(/948827/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Perm should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Perm`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Perm should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Perm`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Perm/);
                    should($("span.population").text().trim()).match(/1048005/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Krasnoyarsk should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Krasnoyarsk`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Krasnoyarsk should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Krasnoyarsk`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Krasnoyarsk/);
                    should($("span.population").text().trim()).match(/1083865/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Ufa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Ufa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Ufa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Ufa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ufa/);
                    should($("span.population").text().trim()).match(/1115560/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Kazan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Kazan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Kazan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Kazan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kazan/);
                    should($("span.population").text().trim()).match(/1243500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Saint%20Petersburg should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Saint%20Petersburg`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Saint%20Petersburg should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Saint%20Petersburg`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Saint Petersburg/);
                    should($("span.population").text().trim()).match(/5384342/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Russia&city=Moscow should respond with 200`, function(done) {

        request
            .get(`/geo?c=Russia&city=Moscow`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Russia&city=Moscow should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Russia&city=Moscow`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Moscow/);
                    should($("span.population").text().trim()).match(/17332000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Dominican%20Republic&city=Santo%20Domingo%20Este should respond with 200`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic&city=Santo%20Domingo%20Este`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Dominican%20Republic&city=Santo%20Domingo%20Este should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic&city=Santo%20Domingo%20Este`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Santo Domingo Este/);
                    should($("span.population").text().trim()).match(/948855/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Dominican%20Republic&city=Santo%20Domingo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic&city=Santo%20Domingo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Dominican%20Republic&city=Santo%20Domingo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic&city=Santo%20Domingo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Santo Domingo/);
                    should($("span.population").text().trim()).match(/2581827/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sierra%20Leone&city=Freetown should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sierra%20Leone&city=Freetown`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sierra%20Leone&city=Freetown should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sierra%20Leone&city=Freetown`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Freetown/);
                    should($("span.population").text().trim()).match(/951000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nepal&city=Kathmandu should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nepal&city=Kathmandu`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nepal&city=Kathmandu should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nepal&city=Kathmandu`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kathmandu/);
                    should($("span.population").text().trim()).match(/975453/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Haiti&city=Port-au-Prince should respond with 200`, function(done) {

        request
            .get(`/geo?c=Haiti&city=Port-au-Prince`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Haiti&city=Port-au-Prince should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Haiti&city=Port-au-Prince`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Port-au-Prince/);
                    should($("span.population").text().trim()).match(/987310/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malawi&city=Lilongwe should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malawi&city=Lilongwe`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malawi&city=Lilongwe should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malawi&city=Lilongwe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lilongwe/);
                    should($("span.population").text().trim()).match(/989318/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Malawi&city=Blantyre should respond with 200`, function(done) {

        request
            .get(`/geo?c=Malawi&city=Blantyre`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Malawi&city=Blantyre should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Malawi&city=Blantyre`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Blantyre/);
                    should($("span.population").text().trim()).match(/1895973/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Canada&city=Ottawa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada&city=Ottawa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Canada&city=Ottawa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Canada&city=Ottawa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ottawa/);
                    should($("span.population").text().trim()).match(/989567/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Canada&city=Edmonton should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada&city=Edmonton`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Canada&city=Edmonton should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Canada&city=Edmonton`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Edmonton/);
                    should($("span.population").text().trim()).match(/1062643/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Canada&city=Calgary should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada&city=Calgary`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Canada&city=Calgary should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Canada&city=Calgary`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Calgary/);
                    should($("span.population").text().trim()).match(/1239220/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Canada&city=Vancouver should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada&city=Vancouver`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Canada&city=Vancouver should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Canada&city=Vancouver`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Vancouver/);
                    should($("span.population").text().trim()).match(/2264823/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Canada&city=Toronto should respond with 200`, function(done) {

        request
            .get(`/geo?c=Canada&city=Toronto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Canada&city=Toronto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Canada&city=Toronto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Toronto/);
                    should($("span.population").text().trim()).match(/5429524/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ghana&city=Domaa-Ahenkro should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Domaa-Ahenkro`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ghana&city=Domaa-Ahenkro should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Domaa-Ahenkro`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Domaa-Ahenkro/);
                    should($("span.population").text().trim()).match(/1000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ghana&city=Tamale should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Tamale`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ghana&city=Tamale should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Tamale`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tamale/);
                    should($("span.population").text().trim()).match(/1095808/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ghana&city=Kumasi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Kumasi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ghana&city=Kumasi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Kumasi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kumasi/);
                    should($("span.population").text().trim()).match(/2069350/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ghana&city=Accra should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Accra`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ghana&city=Accra should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Accra`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Accra/);
                    should($("span.population").text().trim()).match(/2388000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ghana&city=Boankra should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Boankra`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ghana&city=Boankra should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ghana&city=Boankra`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Boankra/);
                    should($("span.population").text().trim()).match(/3348000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Liberia&city=Monrovia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Liberia&city=Monrovia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Liberia&city=Monrovia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Liberia&city=Monrovia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Monrovia/);
                    should($("span.population").text().trim()).match(/1021762/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Niger&city=Niamey should respond with 200`, function(done) {

        request
            .get(`/geo?c=Niger&city=Niamey`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Niger&city=Niamey should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Niger&city=Niamey`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Niamey/);
                    should($("span.population").text().trim()).match(/1026848/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kazakhstan&city=Shymkent should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Shymkent`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kazakhstan&city=Shymkent should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Shymkent`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Shymkent/);
                    should($("span.population").text().trim()).match(/1028673/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kazakhstan&city=Nur-Sultan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Nur-Sultan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kazakhstan&city=Nur-Sultan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Nur-Sultan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nur-Sultan/);
                    should($("span.population").text().trim()).match(/1078362/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kazakhstan&city=Almaty should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Almaty`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kazakhstan&city=Almaty should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kazakhstan&city=Almaty`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Almaty/);
                    should($("span.population").text().trim()).match(/1916822/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Nicaragua&city=Managua should respond with 200`, function(done) {

        request
            .get(`/geo?c=Nicaragua&city=Managua`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Nicaragua&city=Managua should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Nicaragua&city=Managua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Managua/);
                    should($("span.population").text().trim()).match(/1028808/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bangladesh&city=Rangapukur should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Rangapukur`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bangladesh&city=Rangapukur should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Rangapukur`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Rangapukur/);
                    should($("span.population").text().trim()).match(/1031388/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bangladesh&city=Khulna should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Khulna`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bangladesh&city=Khulna should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Khulna`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Khulna/);
                    should($("span.population").text().trim()).match(/1400689/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bangladesh&city=Chattogram should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Chattogram`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bangladesh&city=Chattogram should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Chattogram`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chattogram/);
                    should($("span.population").text().trim()).match(/7000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bangladesh&city=Dhaka should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Dhaka`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bangladesh&city=Dhaka should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bangladesh&city=Dhaka`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dhaka/);
                    should($("span.population").text().trim()).match(/18627000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Tunisia&city=Tunis should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tunisia&city=Tunis`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Tunisia&city=Tunis should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Tunisia&city=Tunis`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tunis/);
                    should($("span.population").text().trim()).match(/1056247/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Norway&city=Oslo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Norway&city=Oslo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Norway&city=Oslo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Norway&city=Oslo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Oslo/);
                    should($("span.population").text().trim()).match(/1064235/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kyrgyzstan&city=Bishkek should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kyrgyzstan&city=Bishkek`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kyrgyzstan&city=Bishkek should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kyrgyzstan&city=Bishkek`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bishkek/);
                    should($("span.population").text().trim()).match(/1074075/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Burundi&city=Bujumbura should respond with 200`, function(done) {

        request
            .get(`/geo?c=Burundi&city=Bujumbura`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Burundi&city=Bujumbura should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Burundi&city=Bujumbura`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bujumbura/);
                    should($("span.population").text().trim()).match(/1075000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Armenia&city=Yerevan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Armenia&city=Yerevan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Armenia&city=Yerevan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Armenia&city=Yerevan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Yerevan/);
                    should($("span.population").text().trim()).match(/1075800/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mauritania&city=Nouakchott should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mauritania&city=Nouakchott`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mauritania&city=Nouakchott should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mauritania&city=Nouakchott`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nouakchott/);
                    should($("span.population").text().trim()).match(/1077169/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Georgia&city=Tbilisi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Georgia&city=Tbilisi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Georgia&city=Tbilisi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Georgia&city=Tbilisi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tbilisi/);
                    should($("span.population").text().trim()).match(/1118035/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cameroon&city=Bafoussam should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Bafoussam`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cameroon&city=Bafoussam should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Bafoussam`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bafoussam/);
                    should($("span.population").text().trim()).match(/1146000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cameroon&city=Bamenda should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Bamenda`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cameroon&city=Bamenda should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Bamenda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bamenda/);
                    should($("span.population").text().trim()).match(/2000000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cameroon&city=Douala should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Douala`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cameroon&city=Douala should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cameroon&city=Douala`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Douala/);
                    should($("span.population").text().trim()).match(/5768400/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Rwanda&city=Kigali should respond with 200`, function(done) {

        request
            .get(`/geo?c=Rwanda&city=Kigali`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Rwanda&city=Kigali should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Rwanda&city=Kigali`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kigali/);
                    should($("span.population").text().trim()).match(/1156663/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Senegal&city=Pikine should respond with 200`, function(done) {

        request
            .get(`/geo?c=Senegal&city=Pikine`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Senegal&city=Pikine should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Senegal&city=Pikine`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Pikine/);
                    should($("span.population").text().trim()).match(/1170791/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Senegal&city=Dakar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Senegal&city=Dakar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Senegal&city=Dakar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Senegal&city=Dakar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dakar/);
                    should($("span.population").text().trim()).match(/1438725/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ireland&city=Dublin should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ireland&city=Dublin`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ireland&city=Dublin should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ireland&city=Dublin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dublin/);
                    should($("span.population").text().trim()).match(/1173179/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Thailand&city=Chiang%20Mai should respond with 200`, function(done) {

        request
            .get(`/geo?c=Thailand&city=Chiang%20Mai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Thailand&city=Chiang%20Mai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Thailand&city=Chiang%20Mai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Chiang Mai/);
                    should($("span.population").text().trim()).match(/1198000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Thailand&city=Bangkok should respond with 200`, function(done) {

        request
            .get(`/geo?c=Thailand&city=Bangkok`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Thailand&city=Bangkok should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Thailand&city=Bangkok`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bangkok/);
                    should($("span.population").text().trim()).match(/18007000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Iran&city=Qom should respond with 200`, function(done) {

        request
            .get(`/geo?c=Iran&city=Qom`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Iran&city=Qom should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Iran&city=Qom`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Qom/);
                    should($("span.population").text().trim()).match(/1201158/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Iran&city=Karaj should respond with 200`, function(done) {

        request
            .get(`/geo?c=Iran&city=Karaj`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Iran&city=Karaj should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Iran&city=Karaj`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Karaj/);
                    should($("span.population").text().trim()).match(/1973470/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kenya&city=Mombasa should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Mombasa`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kenya&city=Mombasa should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Mombasa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mombasa/);
                    should($("span.population").text().trim()).match(/1208333/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kenya&city=Meru should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Meru`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kenya&city=Meru should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Meru`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Meru/);
                    should($("span.population").text().trim()).match(/1833000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Kenya&city=Nairobi should respond with 200`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Nairobi`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Kenya&city=Nairobi should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Kenya&city=Nairobi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Nairobi/);
                    should($("span.population").text().trim()).match(/5545000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Finland&city=Helsinki should respond with 200`, function(done) {

        request
            .get(`/geo?c=Finland&city=Helsinki`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Finland&city=Helsinki should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Finland&city=Helsinki`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Helsinki/);
                    should($("span.population").text().trim()).match(/1268296/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Portugal&city=Porto should respond with 200`, function(done) {

        request
            .get(`/geo?c=Portugal&city=Porto`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Portugal&city=Porto should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Portugal&city=Porto`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Porto/);
                    should($("span.population").text().trim()).match(/1278210/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Portugal&city=Lisbon should respond with 200`, function(done) {

        request
            .get(`/geo?c=Portugal&city=Lisbon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Portugal&city=Lisbon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Portugal&city=Lisbon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lisbon/);
                    should($("span.population").text().trim()).match(/2719000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Australia&city=Adelaide should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia&city=Adelaide`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Australia&city=Adelaide should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Australia&city=Adelaide`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Adelaide/);
                    should($("span.population").text().trim()).match(/1295714/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Australia&city=Perth should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia&city=Perth`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Australia&city=Perth should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Australia&city=Perth`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Perth/);
                    should($("span.population").text().trim()).match(/2141834/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Australia&city=Brisbane should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia&city=Brisbane`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Australia&city=Brisbane should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Australia&city=Brisbane`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Brisbane/);
                    should($("span.population").text().trim()).match(/2360241/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Australia&city=Melbourne should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia&city=Melbourne`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Australia&city=Melbourne should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Australia&city=Melbourne`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Melbourne/);
                    should($("span.population").text().trim()).match(/4529500/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Australia&city=Sydney should respond with 200`, function(done) {

        request
            .get(`/geo?c=Australia&city=Sydney`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Australia&city=Sydney should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Australia&city=Sydney`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sydney/);
                    should($("span.population").text().trim()).match(/4840600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Czechia&city=Prague should respond with 200`, function(done) {

        request
            .get(`/geo?c=Czechia&city=Prague`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Czechia&city=Prague should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Czechia&city=Prague`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Prague/);
                    should($("span.population").text().trim()).match(/1335084/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=New%20Zealand&city=Auckland should respond with 200`, function(done) {

        request
            .get(`/geo?c=New%20Zealand&city=Auckland`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=New%20Zealand&city=Auckland should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=New%20Zealand&city=Auckland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Auckland/);
                    should($("span.population").text().trim()).match(/1346091/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Denmark&city=Copenhagen should respond with 200`, function(done) {

        request
            .get(`/geo?c=Denmark&city=Copenhagen`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Denmark&city=Copenhagen should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Denmark&city=Copenhagen`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Copenhagen/);
                    should($("span.population").text().trim()).match(/1366301/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Serbia&city=Belgrade should respond with 200`, function(done) {

        request
            .get(`/geo?c=Serbia&city=Belgrade`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Serbia&city=Belgrade should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Serbia&city=Belgrade`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Belgrade/);
                    should($("span.population").text().trim()).match(/1378682/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mongolia&city=Ulaanbaatar should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mongolia&city=Ulaanbaatar`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mongolia&city=Ulaanbaatar should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mongolia&city=Ulaanbaatar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Ulaanbaatar/);
                    should($("span.population").text().trim()).match(/1396288/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Netherlands&city=Amsterdam should respond with 200`, function(done) {

        request
            .get(`/geo?c=Netherlands&city=Amsterdam`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Netherlands&city=Amsterdam should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Netherlands&city=Amsterdam`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Amsterdam/);
                    should($("span.population").text().trim()).match(/1459402/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Bulgaria&city=Sofia should respond with 200`, function(done) {

        request
            .get(`/geo?c=Bulgaria&city=Sofia`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Bulgaria&city=Sofia should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Bulgaria&city=Sofia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Sofia/);
                    should($("span.population").text().trim()).match(/1547779/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mali&city=Balandougou should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mali&city=Balandougou`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mali&city=Balandougou should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mali&city=Balandougou`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Balandougou/);
                    should($("span.population").text().trim()).match(/1596882/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Mali&city=Bamako should respond with 200`, function(done) {

        request
            .get(`/geo?c=Mali&city=Bamako`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Mali&city=Bamako should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Mali&city=Bamako`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Bamako/);
                    should($("span.population").text().trim()).match(/2009109/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sweden&city=Stockholm should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sweden&city=Stockholm`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sweden&city=Stockholm should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sweden&city=Stockholm`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Stockholm/);
                    should($("span.population").text().trim()).match(/1611776/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Guinea&city=Conakry should respond with 200`, function(done) {

        request
            .get(`/geo?c=Guinea&city=Conakry`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Guinea&city=Conakry should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Guinea&city=Conakry`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Conakry/);
                    should($("span.population").text().trim()).match(/1667864/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Saudi%20Arabia&city=Mecca should respond with 200`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia&city=Mecca`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Saudi%20Arabia&city=Mecca should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia&city=Mecca`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Mecca/);
                    should($("span.population").text().trim()).match(/1675368/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Saudi%20Arabia&city=Jeddah should respond with 200`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia&city=Jeddah`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Saudi%20Arabia&city=Jeddah should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia&city=Jeddah`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Jeddah/);
                    should($("span.population").text().trim()).match(/3976000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Uganda&city=Kampala should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uganda&city=Kampala`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Uganda&city=Kampala should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Uganda&city=Kampala`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kampala/);
                    should($("span.population").text().trim()).match(/1680600/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Uruguay&city=Montevideo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uruguay&city=Montevideo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Uruguay&city=Montevideo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Uruguay&city=Montevideo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Montevideo/);
                    should($("span.population").text().trim()).match(/1719453/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Belgium&city=Brussels should respond with 200`, function(done) {

        request
            .get(`/geo?c=Belgium&city=Brussels`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Belgium&city=Brussels should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Belgium&city=Brussels`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Brussels/);
                    should($("span.population").text().trim()).match(/1743000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Syria&city=Damascus should respond with 200`, function(done) {

        request
            .get(`/geo?c=Syria&city=Damascus`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Syria&city=Damascus should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Syria&city=Damascus`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Damascus/);
                    should($("span.population").text().trim()).match(/1754000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Poland&city=Warsaw should respond with 200`, function(done) {

        request
            .get(`/geo?c=Poland&city=Warsaw`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Poland&city=Warsaw should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Poland&city=Warsaw`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Warsaw/);
                    should($("span.population").text().trim()).match(/1860281/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Puerto%20Rico&city=San%20Juan should respond with 200`, function(done) {

        request
            .get(`/geo?c=Puerto%20Rico&city=San%20Juan`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Puerto%20Rico&city=San%20Juan should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Puerto%20Rico&city=San%20Juan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/San Juan/);
                    should($("span.population").text().trim()).match(/1915105/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Austria&city=Vienna should respond with 200`, function(done) {

        request
            .get(`/geo?c=Austria&city=Vienna`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Austria&city=Vienna should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Austria&city=Vienna`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Vienna/);
                    should($("span.population").text().trim()).match(/1973403/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Belarus&city=Minsk should respond with 200`, function(done) {

        request
            .get(`/geo?c=Belarus&city=Minsk`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Belarus&city=Minsk should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Belarus&city=Minsk`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Minsk/);
                    should($("span.population").text().trim()).match(/2009786/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ecuador&city=Quito should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ecuador&city=Quito`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ecuador&city=Quito should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ecuador&city=Quito`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Quito/);
                    should($("span.population").text().trim()).match(/2011388/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Ecuador&city=Guayaquil should respond with 200`, function(done) {

        request
            .get(`/geo?c=Ecuador&city=Guayaquil`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Ecuador&city=Guayaquil should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Ecuador&city=Guayaquil`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guayaquil/);
                    should($("span.population").text().trim()).match(/2723665/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Hong%20Kong&city=Kowloon should respond with 200`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong&city=Kowloon`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Hong%20Kong&city=Kowloon should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong&city=Kowloon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Kowloon/);
                    should($("span.population").text().trim()).match(/2108419/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Hong%20Kong&city=Hong%20Kong should respond with 200`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong&city=Hong%20Kong`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Hong%20Kong&city=Hong%20Kong should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong&city=Hong%20Kong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Hong Kong/);
                    should($("span.population").text().trim()).match(/7450000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Cambodia&city=Phnom%20Penh should respond with 200`, function(done) {

        request
            .get(`/geo?c=Cambodia&city=Phnom%20Penh`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Cambodia&city=Phnom%20Penh should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Cambodia&city=Phnom%20Penh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Phnom Penh/);
                    should($("span.population").text().trim()).match(/2129371/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Zimbabwe&city=Harare should respond with 200`, function(done) {

        request
            .get(`/geo?c=Zimbabwe&city=Harare`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Zimbabwe&city=Harare should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Zimbabwe&city=Harare`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Harare/);
                    should($("span.population").text().trim()).match(/2150000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Sri%20Lanka&city=Colombo should respond with 200`, function(done) {

        request
            .get(`/geo?c=Sri%20Lanka&city=Colombo`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Sri%20Lanka&city=Colombo should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Sri%20Lanka&city=Colombo`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Colombo/);
                    should($("span.population").text().trim()).match(/2323826/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Zambia&city=Lusaka should respond with 200`, function(done) {

        request
            .get(`/geo?c=Zambia&city=Lusaka`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Zambia&city=Lusaka should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Zambia&city=Lusaka`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Lusaka/);
                    should($("span.population").text().trim()).match(/2467563/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Uzbekistan&city=Tashkent should respond with 200`, function(done) {

        request
            .get(`/geo?c=Uzbekistan&city=Tashkent`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Uzbekistan&city=Tashkent should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Uzbekistan&city=Tashkent`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Tashkent/);
                    should($("span.population").text().trim()).match(/2571668/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Guatemala&city=Guatemala%20City should respond with 200`, function(done) {

        request
            .get(`/geo?c=Guatemala&city=Guatemala%20City`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Guatemala&city=Guatemala%20City should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Guatemala&city=Guatemala%20City`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Guatemala City/);
                    should($("span.population").text().trim()).match(/2934841/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Hungary&city=Budapest should respond with 200`, function(done) {

        request
            .get(`/geo?c=Hungary&city=Budapest`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Hungary&city=Budapest should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Hungary&city=Budapest`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Budapest/);
                    should($("span.population").text().trim()).match(/2997958/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=United%20Arab%20Emirates&city=Dubai should respond with 200`, function(done) {

        request
            .get(`/geo?c=United%20Arab%20Emirates&city=Dubai`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=United%20Arab%20Emirates&city=Dubai should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=United%20Arab%20Emirates&city=Dubai`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dubai/);
                    should($("span.population").text().trim()).match(/3331420/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Singapore&city=Singapore should respond with 200`, function(done) {

        request
            .get(`/geo?c=Singapore&city=Singapore`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Singapore&city=Singapore should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Singapore&city=Singapore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Singapore/);
                    should($("span.population").text().trim()).match(/5983000/);

                    done();
                }
            });

    });


    rnd_it(`GET /geo?c=Tanzania&city=Dar%20es%20Salaam should respond with 200`, function(done) {

        request
            .get(`/geo?c=Tanzania&city=Dar%20es%20Salaam`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /geo?c=Tanzania&city=Dar%20es%20Salaam should include city name and population in response`, function(done) {

        request
            .get(`/geo?c=Tanzania&city=Dar%20es%20Salaam`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {
                    const $ = cheerio.load(res.text);

                    should($("h1.city").text().trim()).match(/Dar es Salaam/);
                    should($("span.population").text().trim()).match(/7962000/);

                    done();
                }
            });

    });




    rnd_it(`GET /geo?c=Ukraine should include links to 6 cities`, function(done) {

        request
            .get(`/geo?c=Ukraine`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Lviv/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zaporizhzhia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Donetsk/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dnipro/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Odesa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kharkiv/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Ukraine&city=Lviv","/geo?c=Ukraine&city=Zaporizhzhia","/geo?c=Ukraine&city=Donetsk","/geo?c=Ukraine&city=Dnipro","/geo?c=Ukraine&city=Odesa","/geo?c=Ukraine&city=Kharkiv"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Iraq should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Iraq`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/An Najaf/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Iraq&city=An%20Najaf"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Mexico should include links to 10 cities`, function(done) {

        request
            .get(`/geo?c=Mexico`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Reynosa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hermosillo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Saltillo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chihuahua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Aguascalientes/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mexicali/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zapopan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Puebla/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tijuana/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guadalajara/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Mexico&city=Reynosa","/geo?c=Mexico&city=Hermosillo","/geo?c=Mexico&city=Saltillo","/geo?c=Mexico&city=Chihuahua","/geo?c=Mexico&city=Aguascalientes","/geo?c=Mexico&city=Mexicali","/geo?c=Mexico&city=Zapopan","/geo?c=Mexico&city=Puebla","/geo?c=Mexico&city=Tijuana","/geo?c=Mexico&city=Guadalajara"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=United%20States should include links to 64 cities`, function(done) {

        request
            .get(`/geo?c=United%20States`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Sarasota/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rochester/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Albuquerque/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hempstead/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/El Paso/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Omaha/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/McAllen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Honolulu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tucson/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hartford/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fort Worth/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/New Orleans/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bridgeport/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Oklahoma City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Buffalo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Richmond/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Louisville/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Memphis/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Raleigh/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nashville/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Salt Lake City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jacksonville/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Providence/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Milwaukee/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bronx/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Virginia Beach/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Charlotte/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Columbus/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kansas City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Austin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Indianapolis/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cleveland/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Manhattan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cincinnati/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pittsburgh/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/San Jose/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/San Antonio/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sacramento/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Orlando/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Riverside/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Portland/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/St. Louis/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Las Vegas/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baltimore/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Queens/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Denver/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tampa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Brooklyn/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Minneapolis/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/San Diego/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/San Francisco/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Seattle/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Detroit/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Phoenix/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Boston/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Washington/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Atlanta/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Philadelphia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Houston/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dallas/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Miami/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chicago/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Los Angeles/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/New York/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=United%20States&city=Sarasota","/geo?c=United%20States&city=Rochester","/geo?c=United%20States&city=Albuquerque","/geo?c=United%20States&city=Hempstead","/geo?c=United%20States&city=El%20Paso","/geo?c=United%20States&city=Omaha","/geo?c=United%20States&city=McAllen","/geo?c=United%20States&city=Honolulu","/geo?c=United%20States&city=Tucson","/geo?c=United%20States&city=Hartford","/geo?c=United%20States&city=Fort%20Worth","/geo?c=United%20States&city=New%20Orleans","/geo?c=United%20States&city=Bridgeport","/geo?c=United%20States&city=Oklahoma%20City","/geo?c=United%20States&city=Buffalo","/geo?c=United%20States&city=Richmond","/geo?c=United%20States&city=Louisville","/geo?c=United%20States&city=Memphis","/geo?c=United%20States&city=Raleigh","/geo?c=United%20States&city=Nashville","/geo?c=United%20States&city=Salt%20Lake%20City","/geo?c=United%20States&city=Jacksonville","/geo?c=United%20States&city=Providence","/geo?c=United%20States&city=Milwaukee","/geo?c=United%20States&city=Bronx","/geo?c=United%20States&city=Virginia%20Beach","/geo?c=United%20States&city=Charlotte","/geo?c=United%20States&city=Columbus","/geo?c=United%20States&city=Kansas%20City","/geo?c=United%20States&city=Austin","/geo?c=United%20States&city=Indianapolis","/geo?c=United%20States&city=Cleveland","/geo?c=United%20States&city=Manhattan","/geo?c=United%20States&city=Cincinnati","/geo?c=United%20States&city=Pittsburgh","/geo?c=United%20States&city=San%20Jose","/geo?c=United%20States&city=San%20Antonio","/geo?c=United%20States&city=Sacramento","/geo?c=United%20States&city=Orlando","/geo?c=United%20States&city=Riverside","/geo?c=United%20States&city=Portland","/geo?c=United%20States&city=St.%20Louis","/geo?c=United%20States&city=Las%20Vegas","/geo?c=United%20States&city=Baltimore","/geo?c=United%20States&city=Queens","/geo?c=United%20States&city=Denver","/geo?c=United%20States&city=Tampa","/geo?c=United%20States&city=Brooklyn","/geo?c=United%20States&city=Minneapolis","/geo?c=United%20States&city=San%20Diego","/geo?c=United%20States&city=San%20Francisco","/geo?c=United%20States&city=Seattle","/geo?c=United%20States&city=Detroit","/geo?c=United%20States&city=Phoenix","/geo?c=United%20States&city=Boston","/geo?c=United%20States&city=Washington","/geo?c=United%20States&city=Atlanta","/geo?c=United%20States&city=Philadelphia","/geo?c=United%20States&city=Houston","/geo?c=United%20States&city=Dallas","/geo?c=United%20States&city=Miami","/geo?c=United%20States&city=Chicago","/geo?c=United%20States&city=Los%20Angeles","/geo?c=United%20States&city=New%20York"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Philippines should include links to 11 cities`, function(done) {

        request
            .get(`/geo?c=Philippines`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Cagayan de Oro/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pasig City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taguig City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Antipolo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cebu City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zamboanga City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Canagatan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Caloocan City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Davao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Quezon City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Manila/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Philippines&city=Cagayan%20de%20Oro","/geo?c=Philippines&city=Pasig%20City","/geo?c=Philippines&city=Taguig%20City","/geo?c=Philippines&city=Antipolo","/geo?c=Philippines&city=Cebu%20City","/geo?c=Philippines&city=Zamboanga%20City","/geo?c=Philippines&city=Canagatan","/geo?c=Philippines&city=Caloocan%20City","/geo?c=Philippines&city=Davao","/geo?c=Philippines&city=Quezon%20City","/geo?c=Philippines&city=Manila"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=China should include links to 379 cities`, function(done) {

        request
            .get(`/geo?c=China`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Langzhong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shuangqiao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wugang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zunhua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nehe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chengguan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Licheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sizhan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guangshui/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinhualu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingnian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qamdo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhongba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Laixi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Songzi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Korla/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fuyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dali/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cencheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zouping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chaohucun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiangxiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dongyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zijinglu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Puxi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hejian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaoyou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xindi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Renqiu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rongjiawan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chengxiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tongchuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dehui/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yuci/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Macheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hailun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shache/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Leping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuxi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Weichanglu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaomi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kaifeng Chengguanzhen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Laiyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhoushan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dengtalu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yangchun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiaozhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lhasa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Quzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhuanghe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hengzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Daye/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lichuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kashgar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taihecun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taihe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Meishan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Feicheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Anqiu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taishan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuchuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huilong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nada/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Danyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Luocheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yingcheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dongtai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xingcheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shuizhai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xingyi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zaoyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinyi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhongxiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wafangdian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Linhai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wutong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sanya/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shouguang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fangchenggang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hegang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xishan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhongwei/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taixing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiashi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ezhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhufeng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gongzhuling/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hanchuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yuyao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xibeijie/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yingchuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiantao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yichun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Leiyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhuji/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kaiyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rongcheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lianyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dingzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guankou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yingtan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liaoyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhangye/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinyu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lingcheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dadukou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiangshui/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Beidao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yiwu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yongcheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jingling/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Laiwu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shaoyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huaiyin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rucheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiangyin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yicheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Haicheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dayan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baishan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yushu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wusong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xintai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liangshi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huangshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yutan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yangquan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pingdu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuzhong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fuqing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaozhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wenling/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yangshe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shuangyashan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jinhua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huazhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Leizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xushan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yucheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jianguang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ximeicun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lianjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guiping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiaxing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhangjiajie/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hebi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chengtangcun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jingdezhen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Heihe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changshu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sanzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baiyin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Benxi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shuozhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shuyangzha/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuwei/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fuxin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Beihai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liaoyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jixi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yinchuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pingxiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fushun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pingliang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hezhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yushan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chongzuo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huaibei/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Puning/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaoping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shengli/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qinbaling/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Laibin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sanmenxia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nantong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jincheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kuaidamao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huainan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shangzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Anshun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Luoyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yuxi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jilin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lianshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yingkou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhuhai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dandong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xining/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huangshi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guangyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lishui/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yantai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shaoxing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yunfu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xuanzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lincang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Luohe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiamusi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yangjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Longba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sanming/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yanjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gulou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huludao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baoshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ankang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zibo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Weifang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chaozhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zigong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dingxi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Handan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baotou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tieling/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Longyan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mudanjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiangtan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Haikou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Daqing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Weihai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhongshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ningde/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rizhao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shanwei/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shaoguan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chaoyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lanzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Heyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jinzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tongliao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qinhuangdao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tongren/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhenjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Putian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Leshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Suining/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qincheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bazhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bengbu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guiyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qinzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changzhi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Siping/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shiyan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tangshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hanzhong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hohhot/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hechi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanchang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiaozuo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Puyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wenzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yulinshi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Anshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baicheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Neijiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiamen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zaozhuang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baojishi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Harbin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanning/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuhu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taiyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Deyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Binzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Loudi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingyuan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chuzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhuzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fuzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ningbo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shijiazhuang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiaoxita/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhaoqing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liuzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hefei/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Luzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shantou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Linfen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chifeng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhangjiakou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Meizhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiangguanchi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changchun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guigang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yiyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kunming/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hengshui/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yangzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yibin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinpu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiangmen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Anqing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chenzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changsha/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huanglongsi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mianyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jiujiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pingdingshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiaoganzhan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huaihua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Suqian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bozhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guilin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xianyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yuncheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhangzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Weinan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Suzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qiqihar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Suihua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yongzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Langfang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dazhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhaotong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jinan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dezhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhengzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xiangyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pudong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nangandao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qingdao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changde/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yulin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dalian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liaocheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jieyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Qujing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xinyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanchong/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Maoming/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Huanggang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zunyi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shangrao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bijie/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Xingtai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhumadian/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hengyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yancheng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhanjiang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cangzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shangqiu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shenyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jining/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanjing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Quanzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Heze/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ganzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhoukou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tongshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Foshan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hangzhou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nanyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Wuhan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tianjin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dongguan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Linyi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baoding/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chongqing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chengdu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shenzhen/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Beijing/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shanghai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guangzhou/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=China&city=Langzhong","/geo?c=China&city=Shuangqiao","/geo?c=China&city=Wugang","/geo?c=China&city=Zunhua","/geo?c=China&city=Nehe","/geo?c=China&city=Chengguan","/geo?c=China&city=Licheng","/geo?c=China&city=Sizhan","/geo?c=China&city=Guangshui","/geo?c=China&city=Xinhualu","/geo?c=China&city=Qingnian","/geo?c=China&city=Qamdo","/geo?c=China&city=Zhongba","/geo?c=China&city=Laixi","/geo?c=China&city=Songzi","/geo?c=China&city=Korla","/geo?c=China&city=Fuyang","/geo?c=China&city=Dali","/geo?c=China&city=Cencheng","/geo?c=China&city=Zouping","/geo?c=China&city=Chaohucun","/geo?c=China&city=Xiangxiang","/geo?c=China&city=Qingping","/geo?c=China&city=Dongyang","/geo?c=China&city=Zijinglu","/geo?c=China&city=Puxi","/geo?c=China&city=Hejian","/geo?c=China&city=Gaoyou","/geo?c=China&city=Xindi","/geo?c=China&city=Renqiu","/geo?c=China&city=Rongjiawan","/geo?c=China&city=Chengxiang","/geo?c=China&city=Tongchuan","/geo?c=China&city=Dehui","/geo?c=China&city=Yuci","/geo?c=China&city=Macheng","/geo?c=China&city=Hailun","/geo?c=China&city=Shache","/geo?c=China&city=Leping","/geo?c=China&city=Wuxi","/geo?c=China&city=Weichanglu","/geo?c=China&city=Gaomi","/geo?c=China&city=Kaifeng%20Chengguanzhen","/geo?c=China&city=Laiyang","/geo?c=China&city=Zhoushan","/geo?c=China&city=Dengtalu","/geo?c=China&city=Yangchun","/geo?c=China&city=Jiaozhou","/geo?c=China&city=Lhasa","/geo?c=China&city=Quzhou","/geo?c=China&city=Zhuanghe","/geo?c=China&city=Hengzhou","/geo?c=China&city=Daye","/geo?c=China&city=Lichuan","/geo?c=China&city=Qingzhou","/geo?c=China&city=Kashgar","/geo?c=China&city=Taihecun","/geo?c=China&city=Taihe","/geo?c=China&city=Meishan","/geo?c=China&city=Feicheng","/geo?c=China&city=Anqiu","/geo?c=China&city=Taishan","/geo?c=China&city=Wuchuan","/geo?c=China&city=Huilong","/geo?c=China&city=Nada","/geo?c=China&city=Danyang","/geo?c=China&city=Luocheng","/geo?c=China&city=Yingcheng","/geo?c=China&city=Dongtai","/geo?c=China&city=Xingcheng","/geo?c=China&city=Shuizhai","/geo?c=China&city=Xingyi","/geo?c=China&city=Zaoyang","/geo?c=China&city=Xinyi","/geo?c=China&city=Zhongxiang","/geo?c=China&city=Wafangdian","/geo?c=China&city=Linhai","/geo?c=China&city=Wutong","/geo?c=China&city=Sanya","/geo?c=China&city=Shouguang","/geo?c=China&city=Fangchenggang","/geo?c=China&city=Hegang","/geo?c=China&city=Mizhou","/geo?c=China&city=Xishan","/geo?c=China&city=Zhongwei","/geo?c=China&city=Taixing","/geo?c=China&city=Xiashi","/geo?c=China&city=Ezhou","/geo?c=China&city=Zhufeng","/geo?c=China&city=Gongzhuling","/geo?c=China&city=Hanchuan","/geo?c=China&city=Yuyao","/geo?c=China&city=Xibeijie","/geo?c=China&city=Yingchuan","/geo?c=China&city=Xiantao","/geo?c=China&city=Yichun","/geo?c=China&city=Leiyang","/geo?c=China&city=Zhuji","/geo?c=China&city=Kaiyuan","/geo?c=China&city=Rongcheng","/geo?c=China&city=Lianyuan","/geo?c=China&city=Dingzhou","/geo?c=China&city=Guankou","/geo?c=China&city=Yingtan","/geo?c=China&city=Liaoyuan","/geo?c=China&city=Zhangye","/geo?c=China&city=Xinyu","/geo?c=China&city=Lingcheng","/geo?c=China&city=Dadukou","/geo?c=China&city=Xiangshui","/geo?c=China&city=Beidao","/geo?c=China&city=Yiwu","/geo?c=China&city=Yongcheng","/geo?c=China&city=Jingling","/geo?c=China&city=Laiwu","/geo?c=China&city=Shaoyang","/geo?c=China&city=Huaiyin","/geo?c=China&city=Rucheng","/geo?c=China&city=Jiangyin","/geo?c=China&city=Yicheng","/geo?c=China&city=Haicheng","/geo?c=China&city=Dayan","/geo?c=China&city=Baishan","/geo?c=China&city=Yushu","/geo?c=China&city=Wusong","/geo?c=China&city=Xintai","/geo?c=China&city=Liangshi","/geo?c=China&city=Huangshan","/geo?c=China&city=Yutan","/geo?c=China&city=Yangquan","/geo?c=China&city=Pingdu","/geo?c=China&city=Wuzhong","/geo?c=China&city=Fuqing","/geo?c=China&city=Chizhou","/geo?c=China&city=Gaozhou","/geo?c=China&city=Wenling","/geo?c=China&city=Guyuan","/geo?c=China&city=Yangshe","/geo?c=China&city=Pizhou","/geo?c=China&city=Shuangyashan","/geo?c=China&city=Jinhua","/geo?c=China&city=Huazhou","/geo?c=China&city=Leizhou","/geo?c=China&city=Xushan","/geo?c=China&city=Yucheng","/geo?c=China&city=Jianguang","/geo?c=China&city=Ximeicun","/geo?c=China&city=Lianjiang","/geo?c=China&city=Guiping","/geo?c=China&city=Jiaxing","/geo?c=China&city=Zhangjiajie","/geo?c=China&city=Huzhou","/geo?c=China&city=Hebi","/geo?c=China&city=Chengtangcun","/geo?c=China&city=Jingdezhen","/geo?c=China&city=Heihe","/geo?c=China&city=Changshu","/geo?c=China&city=Sanzhou","/geo?c=China&city=Baiyin","/geo?c=China&city=Benxi","/geo?c=China&city=Shuozhou","/geo?c=China&city=Shuyangzha","/geo?c=China&city=Wuwei","/geo?c=China&city=Fuxin","/geo?c=China&city=Beihai","/geo?c=China&city=Liaoyang","/geo?c=China&city=Jixi","/geo?c=China&city=Xiping","/geo?c=China&city=Yinchuan","/geo?c=China&city=Pingxiang","/geo?c=China&city=Fushun","/geo?c=China&city=Pingliang","/geo?c=China&city=Hezhou","/geo?c=China&city=Yushan","/geo?c=China&city=Chongzuo","/geo?c=China&city=Qingyang","/geo?c=China&city=Huaibei","/geo?c=China&city=Puning","/geo?c=China&city=Taizhou","/geo?c=China&city=Gaoping","/geo?c=China&city=Shengli","/geo?c=China&city=Qinbaling","/geo?c=China&city=Laibin","/geo?c=China&city=Sanmenxia","/geo?c=China&city=Nantong","/geo?c=China&city=Jincheng","/geo?c=China&city=Kuaidamao","/geo?c=China&city=Huainan","/geo?c=China&city=Shangzhou","/geo?c=China&city=Anshun","/geo?c=China&city=Luoyang","/geo?c=China&city=Yuxi","/geo?c=China&city=Jilin","/geo?c=China&city=Lianshan","/geo?c=China&city=Yingkou","/geo?c=China&city=Zhuhai","/geo?c=China&city=Dandong","/geo?c=China&city=Xining","/geo?c=China&city=Huangshi","/geo?c=China&city=Guangyuan","/geo?c=China&city=Lishui","/geo?c=China&city=Huizhou","/geo?c=China&city=Yantai","/geo?c=China&city=Shaoxing","/geo?c=China&city=Yunfu","/geo?c=China&city=Xuanzhou","/geo?c=China&city=Lincang","/geo?c=China&city=Luohe","/geo?c=China&city=Jiamusi","/geo?c=China&city=Yangjiang","/geo?c=China&city=Longba","/geo?c=China&city=Sanming","/geo?c=China&city=Yanjiang","/geo?c=China&city=Gulou","/geo?c=China&city=Huludao","/geo?c=China&city=Baoshan","/geo?c=China&city=Ankang","/geo?c=China&city=Zibo","/geo?c=China&city=Weifang","/geo?c=China&city=Chaozhou","/geo?c=China&city=Zigong","/geo?c=China&city=Nanping","/geo?c=China&city=Dingxi","/geo?c=China&city=Handan","/geo?c=China&city=Baotou","/geo?c=China&city=Tieling","/geo?c=China&city=Longyan","/geo?c=China&city=Mudanjiang","/geo?c=China&city=Xiangtan","/geo?c=China&city=Haikou","/geo?c=China&city=Daqing","/geo?c=China&city=Weihai","/geo?c=China&city=Zhongshan","/geo?c=China&city=Ningde","/geo?c=China&city=Rizhao","/geo?c=China&city=Shanwei","/geo?c=China&city=Shaoguan","/geo?c=China&city=Chaoyang","/geo?c=China&city=Wuzhou","/geo?c=China&city=Lanzhou","/geo?c=China&city=Xinzhou","/geo?c=China&city=Heyuan","/geo?c=China&city=Jinzhou","/geo?c=China&city=Tongliao","/geo?c=China&city=Qinhuangdao","/geo?c=China&city=Tongren","/geo?c=China&city=Zhenjiang","/geo?c=China&city=Putian","/geo?c=China&city=Leshan","/geo?c=China&city=Suining","/geo?c=China&city=Qincheng","/geo?c=China&city=Bazhou","/geo?c=China&city=Bengbu","/geo?c=China&city=Guiyang","/geo?c=China&city=Qinzhou","/geo?c=China&city=Changzhi","/geo?c=China&city=Siping","/geo?c=China&city=Shiyan","/geo?c=China&city=Tangshan","/geo?c=China&city=Hanzhong","/geo?c=China&city=Hohhot","/geo?c=China&city=Hechi","/geo?c=China&city=Nanchang","/geo?c=China&city=Jiaozuo","/geo?c=China&city=Puyang","/geo?c=China&city=Changzhou","/geo?c=China&city=Wenzhou","/geo?c=China&city=Yulinshi","/geo?c=China&city=Anshan","/geo?c=China&city=Baicheng","/geo?c=China&city=Neijiang","/geo?c=China&city=Xiamen","/geo?c=China&city=Zaozhuang","/geo?c=China&city=Baojishi","/geo?c=China&city=Harbin","/geo?c=China&city=Nanning","/geo?c=China&city=Wuhu","/geo?c=China&city=Taiyuan","/geo?c=China&city=Deyang","/geo?c=China&city=Binzhou","/geo?c=China&city=Loudi","/geo?c=China&city=Qingyuan","/geo?c=China&city=Chuzhou","/geo?c=China&city=Zhuzhou","/geo?c=China&city=Fuzhou","/geo?c=China&city=Ningbo","/geo?c=China&city=Shijiazhuang","/geo?c=China&city=Xiaoxita","/geo?c=China&city=Zhaoqing","/geo?c=China&city=Liuzhou","/geo?c=China&city=Hefei","/geo?c=China&city=Luzhou","/geo?c=China&city=Shantou","/geo?c=China&city=Linfen","/geo?c=China&city=Chifeng","/geo?c=China&city=Zhangjiakou","/geo?c=China&city=Meizhou","/geo?c=China&city=Jiangguanchi","/geo?c=China&city=Changchun","/geo?c=China&city=Guigang","/geo?c=China&city=Yiyang","/geo?c=China&city=Kunming","/geo?c=China&city=Hengshui","/geo?c=China&city=Yangzhou","/geo?c=China&city=Yibin","/geo?c=China&city=Xinpu","/geo?c=China&city=Jiangmen","/geo?c=China&city=Anqing","/geo?c=China&city=Chenzhou","/geo?c=China&city=Changsha","/geo?c=China&city=Huanglongsi","/geo?c=China&city=Mianyang","/geo?c=China&city=Jiujiang","/geo?c=China&city=Pingdingshan","/geo?c=China&city=Xiaoganzhan","/geo?c=China&city=Huaihua","/geo?c=China&city=Suqian","/geo?c=China&city=Bozhou","/geo?c=China&city=Guilin","/geo?c=China&city=Xianyang","/geo?c=China&city=Yuncheng","/geo?c=China&city=Zhangzhou","/geo?c=China&city=Weinan","/geo?c=China&city=Suzhou","/geo?c=China&city=Qiqihar","/geo?c=China&city=Suihua","/geo?c=China&city=Yongzhou","/geo?c=China&city=Langfang","/geo?c=China&city=Dazhou","/geo?c=China&city=Zhaotong","/geo?c=China&city=Jinan","/geo?c=China&city=Dezhou","/geo?c=China&city=Zhengzhou","/geo?c=China&city=Xiangyang","/geo?c=China&city=Pudong","/geo?c=China&city=Nangandao","/geo?c=China&city=Qingdao","/geo?c=China&city=Changde","/geo?c=China&city=Yulin","/geo?c=China&city=Dalian","/geo?c=China&city=Liaocheng","/geo?c=China&city=Jieyang","/geo?c=China&city=Qujing","/geo?c=China&city=Xinyang","/geo?c=China&city=Nanchong","/geo?c=China&city=Maoming","/geo?c=China&city=Huanggang","/geo?c=China&city=Zunyi","/geo?c=China&city=Shangrao","/geo?c=China&city=Bijie","/geo?c=China&city=Xingtai","/geo?c=China&city=Zhumadian","/geo?c=China&city=Hengyang","/geo?c=China&city=Yancheng","/geo?c=China&city=Zhanjiang","/geo?c=China&city=Cangzhou","/geo?c=China&city=Shangqiu","/geo?c=China&city=Shenyang","/geo?c=China&city=Jining","/geo?c=China&city=Nanjing","/geo?c=China&city=Quanzhou","/geo?c=China&city=Heze","/geo?c=China&city=Ganzhou","/geo?c=China&city=Zhoukou","/geo?c=China&city=Tongshan","/geo?c=China&city=Foshan","/geo?c=China&city=Hangzhou","/geo?c=China&city=Nanyang","/geo?c=China&city=Wuhan","/geo?c=China&city=Tianjin","/geo?c=China&city=Dongguan","/geo?c=China&city=Linyi","/geo?c=China&city=Baoding","/geo?c=China&city=Chongqing","/geo?c=China&city=Chengdu","/geo?c=China&city=Shenzhen","/geo?c=China&city=Beijing","/geo?c=China&city=Shanghai","/geo?c=China&city=Guangzhou"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Argentina should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Argentina`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Comodoro Rivadavia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Santiago del Estero/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rosario/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Argentina&city=Comodoro%20Rivadavia","/geo?c=Argentina&city=Santiago%20del%20Estero","/geo?c=Argentina&city=Rosario"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Nigeria should include links to 20 cities`, function(done) {

        request
            .get(`/geo?c=Nigeria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Osogbo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kaduna/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Warri/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ilorin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Akure/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ikeja/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Abeokuta/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Owerri/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ogbomoso/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ikare/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Shagamu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Benin City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Maiduguri/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Onitsha/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Aba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Port Harcourt/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ibadan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Abuja/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kano/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lagos/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Nigeria&city=Osogbo","/geo?c=Nigeria&city=Kaduna","/geo?c=Nigeria&city=Warri","/geo?c=Nigeria&city=Ilorin","/geo?c=Nigeria&city=Akure","/geo?c=Nigeria&city=Ikeja","/geo?c=Nigeria&city=Abeokuta","/geo?c=Nigeria&city=Owerri","/geo?c=Nigeria&city=Ogbomoso","/geo?c=Nigeria&city=Ikare","/geo?c=Nigeria&city=Shagamu","/geo?c=Nigeria&city=Benin%20City","/geo?c=Nigeria&city=Maiduguri","/geo?c=Nigeria&city=Onitsha","/geo?c=Nigeria&city=Aba","/geo?c=Nigeria&city=Port%20Harcourt","/geo?c=Nigeria&city=Ibadan","/geo?c=Nigeria&city=Abuja","/geo?c=Nigeria&city=Kano","/geo?c=Nigeria&city=Lagos"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Japan should include links to 11 cities`, function(done) {

        request
            .get(`/geo?c=Japan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kumamoto/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hamamatsu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Niigata/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chiba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sendai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hiroshima/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Saitama/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kawasaki/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Fukuoka/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Yokohama/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nagoya/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Japan&city=Kumamoto","/geo?c=Japan&city=Hamamatsu","/geo?c=Japan&city=Niigata","/geo?c=Japan&city=Chiba","/geo?c=Japan&city=Sendai","/geo?c=Japan&city=Hiroshima","/geo?c=Japan&city=Saitama","/geo?c=Japan&city=Kawasaki","/geo?c=Japan&city=Fukuoka","/geo?c=Japan&city=Yokohama","/geo?c=Japan&city=Nagoya"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Angola should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Angola`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Cabinda/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cacuaco/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Luanda/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Angola&city=Cabinda","/geo?c=Angola&city=Cacuaco","/geo?c=Angola&city=Luanda"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Myanmar should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Myanmar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kyaukse/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nay Pyi Taw/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mandalay/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rangoon/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Myanmar&city=Kyaukse","/geo?c=Myanmar&city=Nay%20Pyi%20Taw","/geo?c=Myanmar&city=Mandalay","/geo?c=Myanmar&city=Rangoon"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=South%20Africa should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=South%20Africa`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Pretoria/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pietermaritzburg/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Vereeniging/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Soweto/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Johannesburg/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=South%20Africa&city=Pretoria","/geo?c=South%20Africa&city=Pietermaritzburg","/geo?c=South%20Africa&city=Vereeniging","/geo?c=South%20Africa&city=Soweto","/geo?c=South%20Africa&city=Johannesburg"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Mozambique should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Mozambique`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Nampula/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Matola/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Maputo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Mozambique&city=Nampula","/geo?c=Mozambique&city=Matola","/geo?c=Mozambique&city=Maputo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=India should include links to 14 cities`, function(done) {

        request
            .get(`/geo?c=India`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Thiruvananthapuram/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bhubaneshwar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jalandhar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bareilly/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gwalior/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Amritsar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Najafgarh/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jabalpur/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Meerut/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Indore/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cawnpore/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lucknow/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Prayagraj/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Delhi/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=India&city=Thiruvananthapuram","/geo?c=India&city=Bhubaneshwar","/geo?c=India&city=Jalandhar","/geo?c=India&city=Bareilly","/geo?c=India&city=Gwalior","/geo?c=India&city=Amritsar","/geo?c=India&city=Najafgarh","/geo?c=India&city=Jabalpur","/geo?c=India&city=Meerut","/geo?c=India&city=Indore","/geo?c=India&city=Cawnpore","/geo?c=India&city=Lucknow","/geo?c=India&city=Prayagraj","/geo?c=India&city=Delhi"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Taiwan should include links to 6 cities`, function(done) {

        request
            .get(`/geo?c=Taiwan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Changhua/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Zhongli/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tainan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kaohsiung/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taichung/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Taipei/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Taiwan&city=Changhua","/geo?c=Taiwan&city=Zhongli","/geo?c=Taiwan&city=Tainan","/geo?c=Taiwan&city=Kaohsiung","/geo?c=Taiwan&city=Taichung","/geo?c=Taiwan&city=Taipei"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Somalia should include links to 7 cities`, function(done) {

        request
            .get(`/geo?c=Somalia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Burco/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baardheere/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Baidoa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaalkacyo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hargeysa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Boosaaso/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mogadishu/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Somalia&city=Burco","/geo?c=Somalia&city=Baardheere","/geo?c=Somalia&city=Baidoa","/geo?c=Somalia&city=Gaalkacyo","/geo?c=Somalia&city=Hargeysa","/geo?c=Somalia&city=Boosaaso","/geo?c=Somalia&city=Mogadishu"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Indonesia should include links to 21 cities`, function(done) {

        request
            .get(`/geo?c=Indonesia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Samarinda/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Padang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Pekanbaru/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bogor/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bandar Lampung/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cilacap/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bagam/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sumedang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jepara/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Makassar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Palembang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Semarang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sangereng/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Denpasar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tangerang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Depok/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bekasi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Malang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Medan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Surabaya/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jakarta/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Indonesia&city=Samarinda","/geo?c=Indonesia&city=Padang","/geo?c=Indonesia&city=Pekanbaru","/geo?c=Indonesia&city=Bogor","/geo?c=Indonesia&city=Bandar%20Lampung","/geo?c=Indonesia&city=Cilacap","/geo?c=Indonesia&city=Bagam","/geo?c=Indonesia&city=Sumedang","/geo?c=Indonesia&city=Jepara","/geo?c=Indonesia&city=Makassar","/geo?c=Indonesia&city=Palembang","/geo?c=Indonesia&city=Semarang","/geo?c=Indonesia&city=Sangereng","/geo?c=Indonesia&city=Denpasar","/geo?c=Indonesia&city=Tangerang","/geo?c=Indonesia&city=Depok","/geo?c=Indonesia&city=Bekasi","/geo?c=Indonesia&city=Malang","/geo?c=Indonesia&city=Medan","/geo?c=Indonesia&city=Surabaya","/geo?c=Indonesia&city=Jakarta"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Benin should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Benin`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Cotonou/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Benin&city=Cotonou"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Pakistan should include links to 12 cities`, function(done) {

        request
            .get(`/geo?c=Pakistan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bahawalpur/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Quetta/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Islamabad/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hyderabad City/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Saidu Sharif/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Multan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Peshawar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gujranwala/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rawalpindi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Faisalabad/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lahore/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Karachi/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Pakistan&city=Bahawalpur","/geo?c=Pakistan&city=Quetta","/geo?c=Pakistan&city=Islamabad","/geo?c=Pakistan&city=Hyderabad%20City","/geo?c=Pakistan&city=Saidu%20Sharif","/geo?c=Pakistan&city=Multan","/geo?c=Pakistan&city=Peshawar","/geo?c=Pakistan&city=Gujranwala","/geo?c=Pakistan&city=Rawalpindi","/geo?c=Pakistan&city=Faisalabad","/geo?c=Pakistan&city=Lahore","/geo?c=Pakistan&city=Karachi"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Germany should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Germany`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Frankfurt/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cologne/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hamburg/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Munich/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Berlin/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Germany&city=Frankfurt","/geo?c=Germany&city=Cologne","/geo?c=Germany&city=Hamburg","/geo?c=Germany&city=Munich","/geo?c=Germany&city=Berlin"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Turkey should include links to 12 cities`, function(done) {

        request
            .get(`/geo?c=Turkey`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Erzurum/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Seyhan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Denizli/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Samsun/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kayseri/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Adana/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Mersin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gaziantep/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Konya/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Antalya/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bursa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ankara/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Turkey&city=Erzurum","/geo?c=Turkey&city=Seyhan","/geo?c=Turkey&city=Denizli","/geo?c=Turkey&city=Samsun","/geo?c=Turkey&city=Kayseri","/geo?c=Turkey&city=Adana","/geo?c=Turkey&city=Mersin","/geo?c=Turkey&city=Gaziantep","/geo?c=Turkey&city=Konya","/geo?c=Turkey&city=Antalya","/geo?c=Turkey&city=Bursa","/geo?c=Turkey&city=Ankara"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=United%20Kingdom should include links to 7 cities`, function(done) {

        request
            .get(`/geo?c=United%20Kingdom`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Nottingham/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Leeds/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Southampton/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Portsmouth/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Liverpool/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Manchester/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Birmingham/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=United%20Kingdom&city=Nottingham","/geo?c=United%20Kingdom&city=Leeds","/geo?c=United%20Kingdom&city=Southampton","/geo?c=United%20Kingdom&city=Portsmouth","/geo?c=United%20Kingdom&city=Liverpool","/geo?c=United%20Kingdom&city=Manchester","/geo?c=United%20Kingdom&city=Birmingham"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Spain should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Spain`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bilbao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Valencia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sevilla/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Barcelona/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Madrid/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Spain&city=Bilbao","/geo?c=Spain&city=Valencia","/geo?c=Spain&city=Sevilla","/geo?c=Spain&city=Barcelona","/geo?c=Spain&city=Madrid"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Malaysia should include links to 6 cities`, function(done) {

        request
            .get(`/geo?c=Malaysia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/George Town/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Butterworth/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ipoh/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Klang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Seberang Jaya/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kuala Lumpur/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Malaysia&city=George%20Town","/geo?c=Malaysia&city=Butterworth","/geo?c=Malaysia&city=Ipoh","/geo?c=Malaysia&city=Klang","/geo?c=Malaysia&city=Seberang%20Jaya","/geo?c=Malaysia&city=Kuala%20Lumpur"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Gabon should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Gabon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Libreville/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Gabon&city=Libreville"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Colombia should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Colombia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Palermo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bucaramanga/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Cali/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Colombia&city=Palermo","/geo?c=Colombia&city=Bucaramanga","/geo?c=Colombia&city=Cali"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Madagascar should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Madagascar`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Androtsy/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Antananarivo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Madagascar&city=Androtsy","/geo?c=Madagascar&city=Antananarivo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Venezuela should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Venezuela`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Barinas/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Barquisimeto/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Caracas/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Maracaibo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Venezuela&city=Barinas","/geo?c=Venezuela&city=Barquisimeto","/geo?c=Venezuela&city=Caracas","/geo?c=Venezuela&city=Maracaibo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Morocco should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Morocco`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Mediouna/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Marrakech/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/El Kelaa des Srarhna/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Casablanca/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Morocco&city=Mediouna","/geo?c=Morocco&city=Marrakech","/geo?c=Morocco&city=El%20Kelaa%20des%20Srarhna","/geo?c=Morocco&city=Casablanca"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Brazzaville) should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Congo%20(Brazzaville)`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Pointe-Noire/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Brazzaville/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Congo%20(Brazzaville)&city=Pointe-Noire","/geo?c=Congo%20(Brazzaville)&city=Brazzaville"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=South%20Korea should include links to 13 cities`, function(done) {

        request
            .get(`/geo?c=South%20Korea`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Cheongju/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bucheon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Changwon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Goyang/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tongjin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ulsan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Suwon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Daejeon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Gwangju/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Daegu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Incheon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Busan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Seoul/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=South%20Korea&city=Cheongju","/geo?c=South%20Korea&city=Bucheon","/geo?c=South%20Korea&city=Changwon","/geo?c=South%20Korea&city=Goyang","/geo?c=South%20Korea&city=Tongjin","/geo?c=South%20Korea&city=Ulsan","/geo?c=South%20Korea&city=Suwon","/geo?c=South%20Korea&city=Daejeon","/geo?c=South%20Korea&city=Gwangju","/geo?c=South%20Korea&city=Daegu","/geo?c=South%20Korea&city=Incheon","/geo?c=South%20Korea&city=Busan","/geo?c=South%20Korea&city=Seoul"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Algeria should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Algeria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Oran/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Algiers/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Algeria&city=Oran","/geo?c=Algeria&city=Algiers"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Bolivia should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Bolivia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Cochabamba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/El Alto/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/La Paz/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Santa Cruz/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Bolivia&city=Cochabamba","/geo?c=Bolivia&city=El%20Alto","/geo?c=Bolivia&city=La%20Paz","/geo?c=Bolivia&city=Santa%20Cruz"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Tajikistan should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Tajikistan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Dushanbe/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Tajikistan&city=Dushanbe"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Italy should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Italy`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Turin/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Naples/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Milan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rome/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Italy&city=Turin","/geo?c=Italy&city=Naples","/geo?c=Italy&city=Milan","/geo?c=Italy&city=Rome"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Brazil should include links to 8 cities`, function(done) {

        request
            .get(`/geo?c=Brazil`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Natal/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Campo Grande/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Porto Alegre/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Recife/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Manaus/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Salvador/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Belo Horizonte/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Rio de Janeiro/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Brazil&city=Natal","/geo?c=Brazil&city=Campo%20Grande","/geo?c=Brazil&city=Porto%20Alegre","/geo?c=Brazil&city=Recife","/geo?c=Brazil&city=Manaus","/geo?c=Brazil&city=Salvador","/geo?c=Brazil&city=Belo%20Horizonte","/geo?c=Brazil&city=Rio%20de%20Janeiro"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Central%20African%20Republic should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Central%20African%20Republic`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bangui/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Central%20African%20Republic&city=Bangui"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Congo%20(Kinshasa) should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Congo%20(Kinshasa)`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bunia/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kisangani/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bukavu/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lubumbashi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kinshasa/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Congo%20(Kinshasa)&city=Bunia","/geo?c=Congo%20(Kinshasa)&city=Kisangani","/geo?c=Congo%20(Kinshasa)&city=Bukavu","/geo?c=Congo%20(Kinshasa)&city=Lubumbashi","/geo?c=Congo%20(Kinshasa)&city=Kinshasa"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Burkina%20Faso should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Burkina%20Faso`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bobo-Dioulasso/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ouagadougou/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Burkina%20Faso&city=Bobo-Dioulasso","/geo?c=Burkina%20Faso&city=Ouagadougou"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Cuba should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Cuba`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Santiago de Cuba/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Havana/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Cuba&city=Santiago%20de%20Cuba","/geo?c=Cuba&city=Havana"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Israel should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Israel`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Jerusalem/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tel Aviv-Yafo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Israel&city=Jerusalem","/geo?c=Israel&city=Tel%20Aviv-Yafo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Peru should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Peru`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Trujillo/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Arequipa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Callao/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lima/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Peru&city=Trujillo","/geo?c=Peru&city=Arequipa","/geo?c=Peru&city=Callao","/geo?c=Peru&city=Lima"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Sudan should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Sudan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Khartoum North/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Al Mijlad/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Omdurman/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Khartoum/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Sudan&city=Khartoum%20North","/geo?c=Sudan&city=Al%20Mijlad","/geo?c=Sudan&city=Omdurman","/geo?c=Sudan&city=Khartoum"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Laos should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Laos`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Vientiane/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Laos&city=Vientiane"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Russia should include links to 7 cities`, function(done) {

        request
            .get(`/geo?c=Russia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Krasnodar/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Perm/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Krasnoyarsk/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Ufa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kazan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Saint Petersburg/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Moscow/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Russia&city=Krasnodar","/geo?c=Russia&city=Perm","/geo?c=Russia&city=Krasnoyarsk","/geo?c=Russia&city=Ufa","/geo?c=Russia&city=Kazan","/geo?c=Russia&city=Saint%20Petersburg","/geo?c=Russia&city=Moscow"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Dominican%20Republic should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Dominican%20Republic`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Santo Domingo Este/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Santo Domingo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Dominican%20Republic&city=Santo%20Domingo%20Este","/geo?c=Dominican%20Republic&city=Santo%20Domingo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Sierra%20Leone should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Sierra%20Leone`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Freetown/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Sierra%20Leone&city=Freetown"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Nepal should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Nepal`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kathmandu/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Nepal&city=Kathmandu"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Haiti should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Haiti`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Port-au-Prince/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Haiti&city=Port-au-Prince"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Malawi should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Malawi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Lilongwe/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Blantyre/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Malawi&city=Lilongwe","/geo?c=Malawi&city=Blantyre"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Canada should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Canada`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Ottawa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Edmonton/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Calgary/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Vancouver/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Toronto/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Canada&city=Ottawa","/geo?c=Canada&city=Edmonton","/geo?c=Canada&city=Calgary","/geo?c=Canada&city=Vancouver","/geo?c=Canada&city=Toronto"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Ghana should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Ghana`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Domaa-Ahenkro/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Tamale/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Kumasi/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Accra/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Boankra/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Ghana&city=Domaa-Ahenkro","/geo?c=Ghana&city=Tamale","/geo?c=Ghana&city=Kumasi","/geo?c=Ghana&city=Accra","/geo?c=Ghana&city=Boankra"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Liberia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Liberia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Monrovia/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Liberia&city=Monrovia"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Niger should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Niger`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Niamey/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Niger&city=Niamey"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Kazakhstan should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Kazakhstan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Shymkent/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nur-Sultan/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Almaty/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Kazakhstan&city=Shymkent","/geo?c=Kazakhstan&city=Nur-Sultan","/geo?c=Kazakhstan&city=Almaty"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Nicaragua should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Nicaragua`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Managua/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Nicaragua&city=Managua"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Bangladesh should include links to 4 cities`, function(done) {

        request
            .get(`/geo?c=Bangladesh`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Rangapukur/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Khulna/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Chattogram/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dhaka/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Bangladesh&city=Rangapukur","/geo?c=Bangladesh&city=Khulna","/geo?c=Bangladesh&city=Chattogram","/geo?c=Bangladesh&city=Dhaka"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Tunisia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Tunisia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Tunis/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Tunisia&city=Tunis"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Norway should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Norway`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Oslo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Norway&city=Oslo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Kyrgyzstan should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Kyrgyzstan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bishkek/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Kyrgyzstan&city=Bishkek"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Burundi should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Burundi`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bujumbura/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Burundi&city=Bujumbura"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Armenia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Armenia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Yerevan/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Armenia&city=Yerevan"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Mauritania should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Mauritania`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Nouakchott/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Mauritania&city=Nouakchott"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Georgia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Georgia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Tbilisi/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Georgia&city=Tbilisi"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Cameroon should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Cameroon`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Bafoussam/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bamenda/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Douala/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Cameroon&city=Bafoussam","/geo?c=Cameroon&city=Bamenda","/geo?c=Cameroon&city=Douala"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Rwanda should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Rwanda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kigali/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Rwanda&city=Kigali"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Senegal should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Senegal`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Pikine/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Dakar/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Senegal&city=Pikine","/geo?c=Senegal&city=Dakar"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Ireland should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Ireland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Dublin/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Ireland&city=Dublin"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Thailand should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Thailand`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Chiang Mai/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bangkok/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Thailand&city=Chiang%20Mai","/geo?c=Thailand&city=Bangkok"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Iran should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Iran`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Qom/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Karaj/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Iran&city=Qom","/geo?c=Iran&city=Karaj"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Kenya should include links to 3 cities`, function(done) {

        request
            .get(`/geo?c=Kenya`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Mombasa/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Meru/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Nairobi/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Kenya&city=Mombasa","/geo?c=Kenya&city=Meru","/geo?c=Kenya&city=Nairobi"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Finland should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Finland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Helsinki/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Finland&city=Helsinki"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Portugal should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Portugal`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Porto/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Lisbon/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Portugal&city=Porto","/geo?c=Portugal&city=Lisbon"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Australia should include links to 5 cities`, function(done) {

        request
            .get(`/geo?c=Australia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Adelaide/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Perth/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Brisbane/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Melbourne/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Sydney/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Australia&city=Adelaide","/geo?c=Australia&city=Perth","/geo?c=Australia&city=Brisbane","/geo?c=Australia&city=Melbourne","/geo?c=Australia&city=Sydney"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Czechia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Czechia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Prague/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Czechia&city=Prague"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=New%20Zealand should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=New%20Zealand`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Auckland/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=New%20Zealand&city=Auckland"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Denmark should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Denmark`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Copenhagen/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Denmark&city=Copenhagen"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Serbia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Serbia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Belgrade/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Serbia&city=Belgrade"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Mongolia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Mongolia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Ulaanbaatar/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Mongolia&city=Ulaanbaatar"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Netherlands should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Netherlands`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Amsterdam/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Netherlands&city=Amsterdam"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Bulgaria should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Bulgaria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Sofia/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Bulgaria&city=Sofia"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Mali should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Mali`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Balandougou/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Bamako/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Mali&city=Balandougou","/geo?c=Mali&city=Bamako"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Sweden should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Sweden`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Stockholm/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Sweden&city=Stockholm"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Guinea should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Guinea`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Conakry/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Guinea&city=Conakry"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Saudi%20Arabia should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Saudi%20Arabia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Mecca/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Jeddah/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Saudi%20Arabia&city=Mecca","/geo?c=Saudi%20Arabia&city=Jeddah"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Uganda should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Uganda`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kampala/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Uganda&city=Kampala"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Uruguay should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Uruguay`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Montevideo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Uruguay&city=Montevideo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Belgium should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Belgium`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Brussels/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Belgium&city=Brussels"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Syria should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Syria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Damascus/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Syria&city=Damascus"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Poland should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Poland`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Warsaw/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Poland&city=Warsaw"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Puerto%20Rico should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Puerto%20Rico`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/San Juan/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Puerto%20Rico&city=San%20Juan"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Austria should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Austria`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Vienna/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Austria&city=Vienna"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Belarus should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Belarus`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Minsk/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Belarus&city=Minsk"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Ecuador should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Ecuador`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Quito/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Guayaquil/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Ecuador&city=Quito","/geo?c=Ecuador&city=Guayaquil"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Hong%20Kong should include links to 2 cities`, function(done) {

        request
            .get(`/geo?c=Hong%20Kong`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Kowloon/)).should.not.be.equal(-1);
                    links_text.findIndex(l => l.match(/Hong Kong/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Hong%20Kong&city=Kowloon","/geo?c=Hong%20Kong&city=Hong%20Kong"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Cambodia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Cambodia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Phnom Penh/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Cambodia&city=Phnom%20Penh"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Zimbabwe should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Zimbabwe`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Harare/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Zimbabwe&city=Harare"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Sri%20Lanka should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Sri%20Lanka`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Colombo/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Sri%20Lanka&city=Colombo"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Zambia should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Zambia`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Lusaka/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Zambia&city=Lusaka"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Uzbekistan should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Uzbekistan`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Tashkent/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Uzbekistan&city=Tashkent"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Guatemala should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Guatemala`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Guatemala City/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Guatemala&city=Guatemala%20City"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Hungary should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Hungary`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Budapest/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Hungary&city=Budapest"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=United%20Arab%20Emirates should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=United%20Arab%20Emirates`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Dubai/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=United%20Arab%20Emirates&city=Dubai"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Singapore should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Singapore`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Singapore/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Singapore&city=Singapore"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /geo?c=Tanzania should include links to 1 cities`, function(done) {

        request
            .get(`/geo?c=Tanzania`)
            .send()
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                else {

                    const $ = cheerio.load(res.text);

                    const links_text = Array.from($("a").map((i, a) => $(a).text()));

                    links_text.findIndex(l => l.match(/Dar es Salaam/)).should.not.be.equal(-1);

                    let href = Array.from($("a").map((i, a) => $(a).attr('href')));

                    //make links relative
                    href = href.map(l => {
                        let a = l.split("/");
                        return a.slice(a.length-2).join("/");
                    });

                    let target = new Set(["/geo?c=Tanzania&city=Dar%20es%20Salaam"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


});