/**
 * Web Atelier 2023 4 - JavaScript on the Server-side
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
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



describe('Task 4: Dynamic Web Server - Country and City Lists', function() {

    it('Web server should be started, listening on port 8989', function(done) {

        request
            .get('/')
            .send()
            .end(done);

    });

    it('GET /csv/countries.html should respond with 200', function(done) {

        request
            .get('/geo')
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Ukraine.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Iraq.html should respond with 200`, function(done) {

        request
            .get(`/csv/Iraq.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Mexico.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/United%20States.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Philippines.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/China.html should respond with 200`, function(done) {

        request
            .get(`/csv/China.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Argentina.html should respond with 200`, function(done) {

        request
            .get(`/csv/Argentina.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Nigeria.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Japan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Angola.html should respond with 200`, function(done) {

        request
            .get(`/csv/Angola.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Myanmar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Myanmar.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/South%20Africa.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Mozambique.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mozambique.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/India.html should respond with 200`, function(done) {

        request
            .get(`/csv/India.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Taiwan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Somalia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Indonesia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Benin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Benin.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Pakistan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Germany.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Turkey.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/United%20Kingdom.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Spain.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Malaysia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Gabon.html should respond with 200`, function(done) {

        request
            .get(`/csv/Gabon.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Colombia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Colombia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Madagascar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Madagascar.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Venezuela.html should respond with 200`, function(done) {

        request
            .get(`/csv/Venezuela.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Morocco.html should respond with 200`, function(done) {

        request
            .get(`/csv/Morocco.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Congo%20(Brazzaville).html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville).html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/South%20Korea.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Algeria.html should respond with 200`, function(done) {

        request
            .get(`/csv/Algeria.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Bolivia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bolivia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Tajikistan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tajikistan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Italy.html should respond with 200`, function(done) {

        request
            .get(`/csv/Italy.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Brazil.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Central%20African%20Republic.html should respond with 200`, function(done) {

        request
            .get(`/csv/Central%20African%20Republic.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Congo%20(Kinshasa).html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa).html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Burkina%20Faso.html should respond with 200`, function(done) {

        request
            .get(`/csv/Burkina%20Faso.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Cuba.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cuba.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Israel.html should respond with 200`, function(done) {

        request
            .get(`/csv/Israel.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Peru.html should respond with 200`, function(done) {

        request
            .get(`/csv/Peru.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Sudan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sudan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Laos.html should respond with 200`, function(done) {

        request
            .get(`/csv/Laos.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Russia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Dominican%20Republic.html should respond with 200`, function(done) {

        request
            .get(`/csv/Dominican%20Republic.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Sierra%20Leone.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sierra%20Leone.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Nepal.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nepal.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Haiti.html should respond with 200`, function(done) {

        request
            .get(`/csv/Haiti.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Malawi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malawi.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Canada.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Ghana.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Liberia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Liberia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Niger.html should respond with 200`, function(done) {

        request
            .get(`/csv/Niger.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Kazakhstan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kazakhstan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Nicaragua.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nicaragua.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Bangladesh.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bangladesh.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Tunisia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tunisia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Norway.html should respond with 200`, function(done) {

        request
            .get(`/csv/Norway.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Kyrgyzstan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kyrgyzstan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Burundi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Burundi.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Armenia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Armenia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Mauritania.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mauritania.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Georgia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Georgia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Cameroon.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cameroon.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Rwanda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Rwanda.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Senegal.html should respond with 200`, function(done) {

        request
            .get(`/csv/Senegal.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Ireland.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ireland.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Thailand.html should respond with 200`, function(done) {

        request
            .get(`/csv/Thailand.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Iran.html should respond with 200`, function(done) {

        request
            .get(`/csv/Iran.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Kenya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kenya.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Finland.html should respond with 200`, function(done) {

        request
            .get(`/csv/Finland.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Portugal.html should respond with 200`, function(done) {

        request
            .get(`/csv/Portugal.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Australia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Czechia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Czechia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/New%20Zealand.html should respond with 200`, function(done) {

        request
            .get(`/csv/New%20Zealand.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Denmark.html should respond with 200`, function(done) {

        request
            .get(`/csv/Denmark.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Serbia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Serbia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Mongolia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mongolia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Netherlands.html should respond with 200`, function(done) {

        request
            .get(`/csv/Netherlands.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Bulgaria.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bulgaria.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Mali.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mali.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Sweden.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sweden.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Guinea.html should respond with 200`, function(done) {

        request
            .get(`/csv/Guinea.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Saudi%20Arabia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Uganda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uganda.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Uruguay.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uruguay.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Belgium.html should respond with 200`, function(done) {

        request
            .get(`/csv/Belgium.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Syria.html should respond with 200`, function(done) {

        request
            .get(`/csv/Syria.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Poland.html should respond with 200`, function(done) {

        request
            .get(`/csv/Poland.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Puerto%20Rico.html should respond with 200`, function(done) {

        request
            .get(`/csv/Puerto%20Rico.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Austria.html should respond with 200`, function(done) {

        request
            .get(`/csv/Austria.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Belarus.html should respond with 200`, function(done) {

        request
            .get(`/csv/Belarus.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Ecuador.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ecuador.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Hong%20Kong.html should respond with 200`, function(done) {

        request
            .get(`/csv/Hong%20Kong.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Cambodia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cambodia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Zimbabwe.html should respond with 200`, function(done) {

        request
            .get(`/csv/Zimbabwe.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Sri%20Lanka.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sri%20Lanka.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Zambia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Zambia.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Uzbekistan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uzbekistan.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Guatemala.html should respond with 200`, function(done) {

        request
            .get(`/csv/Guatemala.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Hungary.html should respond with 200`, function(done) {

        request
            .get(`/csv/Hungary.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/United%20Arab%20Emirates.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Arab%20Emirates.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Singapore.html should respond with 200`, function(done) {

        request
            .get(`/csv/Singapore.html`)
            .send()
            .expect(200)
            .end(done);

    });


    rnd_it(`GET /csv/Tanzania.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tanzania.html`)
            .send()
            .expect(200)
            .end(done);

    });



    rnd_it(`GET /csv/Ukraine/Lviv.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Lviv.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Lviv.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Lviv.html`)
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


    rnd_it(`GET /csv/Ukraine/Zaporizhzhia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Zaporizhzhia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Zaporizhzhia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Zaporizhzhia.html`)
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


    rnd_it(`GET /csv/Ukraine/Donetsk.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Donetsk.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Donetsk.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Donetsk.html`)
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


    rnd_it(`GET /csv/Ukraine/Dnipro.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Dnipro.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Dnipro.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Dnipro.html`)
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


    rnd_it(`GET /csv/Ukraine/Odesa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Odesa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Odesa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Odesa.html`)
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


    rnd_it(`GET /csv/Ukraine/Kharkiv.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ukraine/Kharkiv.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ukraine/Kharkiv.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ukraine/Kharkiv.html`)
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


    rnd_it(`GET /csv/Iraq/An%20Najaf.html should respond with 200`, function(done) {

        request
            .get(`/csv/Iraq/An%20Najaf.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Iraq/An%20Najaf.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Iraq/An%20Najaf.html`)
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


    rnd_it(`GET /csv/Mexico/Reynosa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Reynosa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Reynosa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Reynosa.html`)
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


    rnd_it(`GET /csv/Mexico/Hermosillo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Hermosillo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Hermosillo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Hermosillo.html`)
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


    rnd_it(`GET /csv/Mexico/Saltillo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Saltillo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Saltillo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Saltillo.html`)
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


    rnd_it(`GET /csv/Mexico/Chihuahua.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Chihuahua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Chihuahua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Chihuahua.html`)
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


    rnd_it(`GET /csv/Mexico/Aguascalientes.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Aguascalientes.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Aguascalientes.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Aguascalientes.html`)
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


    rnd_it(`GET /csv/Mexico/Mexicali.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Mexicali.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Mexicali.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Mexicali.html`)
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


    rnd_it(`GET /csv/Mexico/Zapopan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Zapopan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Zapopan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Zapopan.html`)
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


    rnd_it(`GET /csv/Mexico/Puebla.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Puebla.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Puebla.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Puebla.html`)
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


    rnd_it(`GET /csv/Mexico/Tijuana.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Tijuana.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Tijuana.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Tijuana.html`)
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


    rnd_it(`GET /csv/Mexico/Guadalajara.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mexico/Guadalajara.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mexico/Guadalajara.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mexico/Guadalajara.html`)
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


    rnd_it(`GET /csv/United%20States/Sarasota.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Sarasota.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Sarasota.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Sarasota.html`)
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


    rnd_it(`GET /csv/United%20States/Rochester.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Rochester.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Rochester.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Rochester.html`)
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


    rnd_it(`GET /csv/United%20States/Albuquerque.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Albuquerque.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Albuquerque.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Albuquerque.html`)
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


    rnd_it(`GET /csv/United%20States/Hempstead.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Hempstead.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Hempstead.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Hempstead.html`)
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


    rnd_it(`GET /csv/United%20States/El%20Paso.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/El%20Paso.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/El%20Paso.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/El%20Paso.html`)
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


    rnd_it(`GET /csv/United%20States/Omaha.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Omaha.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Omaha.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Omaha.html`)
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


    rnd_it(`GET /csv/United%20States/McAllen.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/McAllen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/McAllen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/McAllen.html`)
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


    rnd_it(`GET /csv/United%20States/Honolulu.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Honolulu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Honolulu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Honolulu.html`)
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


    rnd_it(`GET /csv/United%20States/Tucson.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Tucson.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Tucson.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Tucson.html`)
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


    rnd_it(`GET /csv/United%20States/Hartford.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Hartford.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Hartford.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Hartford.html`)
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


    rnd_it(`GET /csv/United%20States/Fort%20Worth.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Fort%20Worth.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Fort%20Worth.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Fort%20Worth.html`)
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


    rnd_it(`GET /csv/United%20States/New%20Orleans.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/New%20Orleans.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/New%20Orleans.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/New%20Orleans.html`)
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


    rnd_it(`GET /csv/United%20States/Bridgeport.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Bridgeport.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Bridgeport.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Bridgeport.html`)
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


    rnd_it(`GET /csv/United%20States/Oklahoma%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Oklahoma%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Oklahoma%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Oklahoma%20City.html`)
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


    rnd_it(`GET /csv/United%20States/Buffalo.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Buffalo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Buffalo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Buffalo.html`)
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


    rnd_it(`GET /csv/United%20States/Richmond.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Richmond.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Richmond.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Richmond.html`)
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


    rnd_it(`GET /csv/United%20States/Louisville.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Louisville.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Louisville.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Louisville.html`)
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


    rnd_it(`GET /csv/United%20States/Memphis.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Memphis.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Memphis.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Memphis.html`)
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


    rnd_it(`GET /csv/United%20States/Raleigh.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Raleigh.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Raleigh.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Raleigh.html`)
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


    rnd_it(`GET /csv/United%20States/Nashville.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Nashville.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Nashville.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Nashville.html`)
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


    rnd_it(`GET /csv/United%20States/Salt%20Lake%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Salt%20Lake%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Salt%20Lake%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Salt%20Lake%20City.html`)
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


    rnd_it(`GET /csv/United%20States/Jacksonville.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Jacksonville.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Jacksonville.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Jacksonville.html`)
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


    rnd_it(`GET /csv/United%20States/Providence.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Providence.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Providence.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Providence.html`)
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


    rnd_it(`GET /csv/United%20States/Milwaukee.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Milwaukee.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Milwaukee.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Milwaukee.html`)
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


    rnd_it(`GET /csv/United%20States/Bronx.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Bronx.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Bronx.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Bronx.html`)
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


    rnd_it(`GET /csv/United%20States/Virginia%20Beach.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Virginia%20Beach.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Virginia%20Beach.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Virginia%20Beach.html`)
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


    rnd_it(`GET /csv/United%20States/Charlotte.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Charlotte.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Charlotte.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Charlotte.html`)
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


    rnd_it(`GET /csv/United%20States/Columbus.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Columbus.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Columbus.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Columbus.html`)
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


    rnd_it(`GET /csv/United%20States/Kansas%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Kansas%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Kansas%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Kansas%20City.html`)
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


    rnd_it(`GET /csv/United%20States/Austin.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Austin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Austin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Austin.html`)
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


    rnd_it(`GET /csv/United%20States/Indianapolis.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Indianapolis.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Indianapolis.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Indianapolis.html`)
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


    rnd_it(`GET /csv/United%20States/Cleveland.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Cleveland.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Cleveland.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Cleveland.html`)
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


    rnd_it(`GET /csv/United%20States/Manhattan.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Manhattan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Manhattan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Manhattan.html`)
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


    rnd_it(`GET /csv/United%20States/Cincinnati.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Cincinnati.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Cincinnati.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Cincinnati.html`)
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


    rnd_it(`GET /csv/United%20States/Pittsburgh.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Pittsburgh.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Pittsburgh.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Pittsburgh.html`)
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


    rnd_it(`GET /csv/United%20States/San%20Jose.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/San%20Jose.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/San%20Jose.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/San%20Jose.html`)
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


    rnd_it(`GET /csv/United%20States/San%20Antonio.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/San%20Antonio.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/San%20Antonio.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/San%20Antonio.html`)
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


    rnd_it(`GET /csv/United%20States/Sacramento.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Sacramento.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Sacramento.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Sacramento.html`)
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


    rnd_it(`GET /csv/United%20States/Orlando.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Orlando.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Orlando.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Orlando.html`)
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


    rnd_it(`GET /csv/United%20States/Riverside.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Riverside.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Riverside.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Riverside.html`)
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


    rnd_it(`GET /csv/United%20States/Portland.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Portland.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Portland.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Portland.html`)
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


    rnd_it(`GET /csv/United%20States/St.%20Louis.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/St.%20Louis.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/St.%20Louis.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/St.%20Louis.html`)
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


    rnd_it(`GET /csv/United%20States/Las%20Vegas.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Las%20Vegas.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Las%20Vegas.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Las%20Vegas.html`)
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


    rnd_it(`GET /csv/United%20States/Baltimore.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Baltimore.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Baltimore.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Baltimore.html`)
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


    rnd_it(`GET /csv/United%20States/Queens.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Queens.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Queens.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Queens.html`)
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


    rnd_it(`GET /csv/United%20States/Denver.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Denver.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Denver.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Denver.html`)
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


    rnd_it(`GET /csv/United%20States/Tampa.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Tampa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Tampa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Tampa.html`)
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


    rnd_it(`GET /csv/United%20States/Brooklyn.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Brooklyn.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Brooklyn.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Brooklyn.html`)
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


    rnd_it(`GET /csv/United%20States/Minneapolis.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Minneapolis.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Minneapolis.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Minneapolis.html`)
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


    rnd_it(`GET /csv/United%20States/San%20Diego.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/San%20Diego.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/San%20Diego.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/San%20Diego.html`)
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


    rnd_it(`GET /csv/United%20States/San%20Francisco.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/San%20Francisco.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/San%20Francisco.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/San%20Francisco.html`)
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


    rnd_it(`GET /csv/United%20States/Seattle.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Seattle.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Seattle.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Seattle.html`)
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


    rnd_it(`GET /csv/United%20States/Detroit.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Detroit.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Detroit.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Detroit.html`)
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


    rnd_it(`GET /csv/United%20States/Phoenix.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Phoenix.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Phoenix.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Phoenix.html`)
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


    rnd_it(`GET /csv/United%20States/Boston.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Boston.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Boston.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Boston.html`)
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


    rnd_it(`GET /csv/United%20States/Washington.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Washington.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Washington.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Washington.html`)
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


    rnd_it(`GET /csv/United%20States/Atlanta.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Atlanta.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Atlanta.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Atlanta.html`)
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


    rnd_it(`GET /csv/United%20States/Philadelphia.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Philadelphia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Philadelphia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Philadelphia.html`)
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


    rnd_it(`GET /csv/United%20States/Houston.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Houston.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Houston.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Houston.html`)
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


    rnd_it(`GET /csv/United%20States/Dallas.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Dallas.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Dallas.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Dallas.html`)
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


    rnd_it(`GET /csv/United%20States/Miami.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Miami.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Miami.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Miami.html`)
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


    rnd_it(`GET /csv/United%20States/Chicago.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Chicago.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Chicago.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Chicago.html`)
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


    rnd_it(`GET /csv/United%20States/Los%20Angeles.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/Los%20Angeles.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/Los%20Angeles.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/Los%20Angeles.html`)
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


    rnd_it(`GET /csv/United%20States/New%20York.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20States/New%20York.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20States/New%20York.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20States/New%20York.html`)
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


    rnd_it(`GET /csv/Philippines/Cagayan%20de%20Oro.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Cagayan%20de%20Oro.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Cagayan%20de%20Oro.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Cagayan%20de%20Oro.html`)
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


    rnd_it(`GET /csv/Philippines/Pasig%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Pasig%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Pasig%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Pasig%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Taguig%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Taguig%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Taguig%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Taguig%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Antipolo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Antipolo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Antipolo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Antipolo.html`)
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


    rnd_it(`GET /csv/Philippines/Cebu%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Cebu%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Cebu%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Cebu%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Zamboanga%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Zamboanga%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Zamboanga%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Zamboanga%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Canagatan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Canagatan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Canagatan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Canagatan.html`)
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


    rnd_it(`GET /csv/Philippines/Caloocan%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Caloocan%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Caloocan%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Caloocan%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Davao.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Davao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Davao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Davao.html`)
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


    rnd_it(`GET /csv/Philippines/Quezon%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Quezon%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Quezon%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Quezon%20City.html`)
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


    rnd_it(`GET /csv/Philippines/Manila.html should respond with 200`, function(done) {

        request
            .get(`/csv/Philippines/Manila.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Philippines/Manila.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Philippines/Manila.html`)
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


    rnd_it(`GET /csv/China/Langzhong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Langzhong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Langzhong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Langzhong.html`)
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


    rnd_it(`GET /csv/China/Shuangqiao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shuangqiao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shuangqiao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shuangqiao.html`)
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


    rnd_it(`GET /csv/China/Wugang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wugang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wugang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wugang.html`)
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


    rnd_it(`GET /csv/China/Zunhua.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zunhua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zunhua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zunhua.html`)
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


    rnd_it(`GET /csv/China/Nehe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nehe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nehe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nehe.html`)
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


    rnd_it(`GET /csv/China/Chengguan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chengguan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chengguan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chengguan.html`)
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


    rnd_it(`GET /csv/China/Licheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Licheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Licheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Licheng.html`)
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


    rnd_it(`GET /csv/China/Sizhan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Sizhan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Sizhan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Sizhan.html`)
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


    rnd_it(`GET /csv/China/Guangshui.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guangshui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guangshui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guangshui.html`)
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


    rnd_it(`GET /csv/China/Xinhualu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinhualu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinhualu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinhualu.html`)
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


    rnd_it(`GET /csv/China/Qingnian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingnian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingnian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingnian.html`)
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


    rnd_it(`GET /csv/China/Qamdo.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qamdo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qamdo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qamdo.html`)
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


    rnd_it(`GET /csv/China/Zhongba.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhongba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhongba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhongba.html`)
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


    rnd_it(`GET /csv/China/Laixi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Laixi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Laixi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Laixi.html`)
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


    rnd_it(`GET /csv/China/Songzi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Songzi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Songzi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Songzi.html`)
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


    rnd_it(`GET /csv/China/Korla.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Korla.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Korla.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Korla.html`)
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


    rnd_it(`GET /csv/China/Fuyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fuyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fuyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fuyang.html`)
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


    rnd_it(`GET /csv/China/Dali.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dali.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dali.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dali.html`)
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


    rnd_it(`GET /csv/China/Cencheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Cencheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Cencheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Cencheng.html`)
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


    rnd_it(`GET /csv/China/Zouping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zouping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zouping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zouping.html`)
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


    rnd_it(`GET /csv/China/Chaohucun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chaohucun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chaohucun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chaohucun.html`)
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


    rnd_it(`GET /csv/China/Xiangxiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiangxiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiangxiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiangxiang.html`)
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


    rnd_it(`GET /csv/China/Qingping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingping.html`)
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


    rnd_it(`GET /csv/China/Dongyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dongyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dongyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dongyang.html`)
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


    rnd_it(`GET /csv/China/Zijinglu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zijinglu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zijinglu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zijinglu.html`)
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


    rnd_it(`GET /csv/China/Puxi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Puxi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Puxi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Puxi.html`)
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


    rnd_it(`GET /csv/China/Hejian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hejian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hejian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hejian.html`)
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


    rnd_it(`GET /csv/China/Gaoyou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gaoyou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gaoyou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gaoyou.html`)
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


    rnd_it(`GET /csv/China/Xindi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xindi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xindi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xindi.html`)
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


    rnd_it(`GET /csv/China/Renqiu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Renqiu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Renqiu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Renqiu.html`)
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


    rnd_it(`GET /csv/China/Rongjiawan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Rongjiawan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Rongjiawan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Rongjiawan.html`)
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


    rnd_it(`GET /csv/China/Chengxiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chengxiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chengxiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chengxiang.html`)
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


    rnd_it(`GET /csv/China/Tongchuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tongchuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tongchuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tongchuan.html`)
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


    rnd_it(`GET /csv/China/Dehui.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dehui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dehui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dehui.html`)
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


    rnd_it(`GET /csv/China/Yuci.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yuci.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yuci.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yuci.html`)
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


    rnd_it(`GET /csv/China/Macheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Macheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Macheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Macheng.html`)
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


    rnd_it(`GET /csv/China/Hailun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hailun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hailun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hailun.html`)
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


    rnd_it(`GET /csv/China/Shache.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shache.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shache.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shache.html`)
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


    rnd_it(`GET /csv/China/Leping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Leping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Leping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Leping.html`)
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


    rnd_it(`GET /csv/China/Wuxi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuxi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuxi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuxi.html`)
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


    rnd_it(`GET /csv/China/Weichanglu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Weichanglu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Weichanglu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Weichanglu.html`)
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


    rnd_it(`GET /csv/China/Gaomi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gaomi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gaomi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gaomi.html`)
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


    rnd_it(`GET /csv/China/Kaifeng%20Chengguanzhen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Kaifeng%20Chengguanzhen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Kaifeng%20Chengguanzhen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Kaifeng%20Chengguanzhen.html`)
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


    rnd_it(`GET /csv/China/Laiyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Laiyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Laiyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Laiyang.html`)
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


    rnd_it(`GET /csv/China/Zhoushan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhoushan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhoushan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhoushan.html`)
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


    rnd_it(`GET /csv/China/Dengtalu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dengtalu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dengtalu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dengtalu.html`)
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


    rnd_it(`GET /csv/China/Yangchun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yangchun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yangchun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yangchun.html`)
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


    rnd_it(`GET /csv/China/Jiaozhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiaozhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiaozhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiaozhou.html`)
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


    rnd_it(`GET /csv/China/Lhasa.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lhasa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lhasa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lhasa.html`)
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


    rnd_it(`GET /csv/China/Quzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Quzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Quzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Quzhou.html`)
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


    rnd_it(`GET /csv/China/Zhuanghe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhuanghe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhuanghe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhuanghe.html`)
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


    rnd_it(`GET /csv/China/Hengzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hengzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hengzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hengzhou.html`)
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


    rnd_it(`GET /csv/China/Daye.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Daye.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Daye.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Daye.html`)
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


    rnd_it(`GET /csv/China/Lichuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lichuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lichuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lichuan.html`)
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


    rnd_it(`GET /csv/China/Qingzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingzhou.html`)
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


    rnd_it(`GET /csv/China/Kashgar.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Kashgar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Kashgar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Kashgar.html`)
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


    rnd_it(`GET /csv/China/Taihecun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taihecun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taihecun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taihecun.html`)
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


    rnd_it(`GET /csv/China/Taihe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taihe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taihe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taihe.html`)
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


    rnd_it(`GET /csv/China/Meishan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Meishan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Meishan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Meishan.html`)
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


    rnd_it(`GET /csv/China/Feicheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Feicheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Feicheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Feicheng.html`)
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


    rnd_it(`GET /csv/China/Anqiu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Anqiu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Anqiu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Anqiu.html`)
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


    rnd_it(`GET /csv/China/Taishan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taishan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taishan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taishan.html`)
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


    rnd_it(`GET /csv/China/Wuchuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuchuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuchuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuchuan.html`)
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


    rnd_it(`GET /csv/China/Huilong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huilong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huilong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huilong.html`)
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


    rnd_it(`GET /csv/China/Nada.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nada.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nada.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nada.html`)
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


    rnd_it(`GET /csv/China/Danyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Danyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Danyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Danyang.html`)
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


    rnd_it(`GET /csv/China/Luocheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Luocheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Luocheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Luocheng.html`)
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


    rnd_it(`GET /csv/China/Yingcheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yingcheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yingcheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yingcheng.html`)
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


    rnd_it(`GET /csv/China/Dongtai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dongtai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dongtai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dongtai.html`)
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


    rnd_it(`GET /csv/China/Xingcheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xingcheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xingcheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xingcheng.html`)
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


    rnd_it(`GET /csv/China/Shuizhai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shuizhai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shuizhai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shuizhai.html`)
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


    rnd_it(`GET /csv/China/Xingyi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xingyi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xingyi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xingyi.html`)
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


    rnd_it(`GET /csv/China/Zaoyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zaoyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zaoyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zaoyang.html`)
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


    rnd_it(`GET /csv/China/Xinyi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinyi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinyi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinyi.html`)
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


    rnd_it(`GET /csv/China/Zhongxiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhongxiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhongxiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhongxiang.html`)
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


    rnd_it(`GET /csv/China/Wafangdian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wafangdian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wafangdian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wafangdian.html`)
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


    rnd_it(`GET /csv/China/Linhai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Linhai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Linhai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Linhai.html`)
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


    rnd_it(`GET /csv/China/Wutong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wutong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wutong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wutong.html`)
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


    rnd_it(`GET /csv/China/Sanya.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Sanya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Sanya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Sanya.html`)
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


    rnd_it(`GET /csv/China/Shouguang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shouguang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shouguang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shouguang.html`)
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


    rnd_it(`GET /csv/China/Fangchenggang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fangchenggang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fangchenggang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fangchenggang.html`)
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


    rnd_it(`GET /csv/China/Hegang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hegang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hegang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hegang.html`)
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


    rnd_it(`GET /csv/China/Mizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Mizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Mizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Mizhou.html`)
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


    rnd_it(`GET /csv/China/Xishan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xishan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xishan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xishan.html`)
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


    rnd_it(`GET /csv/China/Zhongwei.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhongwei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhongwei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhongwei.html`)
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


    rnd_it(`GET /csv/China/Taixing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taixing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taixing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taixing.html`)
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


    rnd_it(`GET /csv/China/Xiashi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiashi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiashi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiashi.html`)
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


    rnd_it(`GET /csv/China/Ezhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ezhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ezhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ezhou.html`)
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


    rnd_it(`GET /csv/China/Zhufeng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhufeng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhufeng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhufeng.html`)
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


    rnd_it(`GET /csv/China/Gongzhuling.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gongzhuling.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gongzhuling.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gongzhuling.html`)
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


    rnd_it(`GET /csv/China/Hanchuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hanchuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hanchuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hanchuan.html`)
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


    rnd_it(`GET /csv/China/Yuyao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yuyao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yuyao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yuyao.html`)
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


    rnd_it(`GET /csv/China/Xibeijie.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xibeijie.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xibeijie.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xibeijie.html`)
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


    rnd_it(`GET /csv/China/Yingchuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yingchuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yingchuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yingchuan.html`)
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


    rnd_it(`GET /csv/China/Xiantao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiantao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiantao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiantao.html`)
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


    rnd_it(`GET /csv/China/Yichun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yichun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yichun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yichun.html`)
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


    rnd_it(`GET /csv/China/Leiyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Leiyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Leiyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Leiyang.html`)
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


    rnd_it(`GET /csv/China/Zhuji.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhuji.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhuji.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhuji.html`)
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


    rnd_it(`GET /csv/China/Kaiyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Kaiyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Kaiyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Kaiyuan.html`)
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


    rnd_it(`GET /csv/China/Rongcheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Rongcheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Rongcheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Rongcheng.html`)
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


    rnd_it(`GET /csv/China/Lianyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lianyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lianyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lianyuan.html`)
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


    rnd_it(`GET /csv/China/Dingzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dingzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dingzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dingzhou.html`)
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


    rnd_it(`GET /csv/China/Guankou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guankou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guankou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guankou.html`)
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


    rnd_it(`GET /csv/China/Yingtan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yingtan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yingtan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yingtan.html`)
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


    rnd_it(`GET /csv/China/Liaoyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Liaoyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Liaoyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Liaoyuan.html`)
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


    rnd_it(`GET /csv/China/Zhangye.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhangye.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhangye.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhangye.html`)
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


    rnd_it(`GET /csv/China/Xinyu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinyu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinyu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinyu.html`)
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


    rnd_it(`GET /csv/China/Lingcheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lingcheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lingcheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lingcheng.html`)
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


    rnd_it(`GET /csv/China/Dadukou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dadukou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dadukou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dadukou.html`)
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


    rnd_it(`GET /csv/China/Xiangshui.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiangshui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiangshui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiangshui.html`)
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


    rnd_it(`GET /csv/China/Beidao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Beidao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Beidao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Beidao.html`)
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


    rnd_it(`GET /csv/China/Yiwu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yiwu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yiwu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yiwu.html`)
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


    rnd_it(`GET /csv/China/Yongcheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yongcheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yongcheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yongcheng.html`)
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


    rnd_it(`GET /csv/China/Jingling.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jingling.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jingling.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jingling.html`)
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


    rnd_it(`GET /csv/China/Laiwu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Laiwu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Laiwu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Laiwu.html`)
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


    rnd_it(`GET /csv/China/Shaoyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shaoyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shaoyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shaoyang.html`)
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


    rnd_it(`GET /csv/China/Huaiyin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huaiyin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huaiyin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huaiyin.html`)
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


    rnd_it(`GET /csv/China/Rucheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Rucheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Rucheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Rucheng.html`)
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


    rnd_it(`GET /csv/China/Jiangyin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiangyin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiangyin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiangyin.html`)
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


    rnd_it(`GET /csv/China/Yicheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yicheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yicheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yicheng.html`)
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


    rnd_it(`GET /csv/China/Haicheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Haicheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Haicheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Haicheng.html`)
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


    rnd_it(`GET /csv/China/Dayan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dayan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dayan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dayan.html`)
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


    rnd_it(`GET /csv/China/Baishan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baishan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baishan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baishan.html`)
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


    rnd_it(`GET /csv/China/Yushu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yushu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yushu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yushu.html`)
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


    rnd_it(`GET /csv/China/Wusong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wusong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wusong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wusong.html`)
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


    rnd_it(`GET /csv/China/Xintai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xintai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xintai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xintai.html`)
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


    rnd_it(`GET /csv/China/Liangshi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Liangshi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Liangshi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Liangshi.html`)
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


    rnd_it(`GET /csv/China/Huangshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huangshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huangshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huangshan.html`)
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


    rnd_it(`GET /csv/China/Yutan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yutan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yutan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yutan.html`)
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


    rnd_it(`GET /csv/China/Yangquan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yangquan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yangquan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yangquan.html`)
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


    rnd_it(`GET /csv/China/Pingdu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pingdu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pingdu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pingdu.html`)
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


    rnd_it(`GET /csv/China/Wuzhong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuzhong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuzhong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuzhong.html`)
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


    rnd_it(`GET /csv/China/Fuqing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fuqing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fuqing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fuqing.html`)
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


    rnd_it(`GET /csv/China/Chizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chizhou.html`)
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


    rnd_it(`GET /csv/China/Gaozhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gaozhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gaozhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gaozhou.html`)
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


    rnd_it(`GET /csv/China/Wenling.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wenling.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wenling.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wenling.html`)
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


    rnd_it(`GET /csv/China/Guyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guyuan.html`)
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


    rnd_it(`GET /csv/China/Yangshe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yangshe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yangshe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yangshe.html`)
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


    rnd_it(`GET /csv/China/Pizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pizhou.html`)
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


    rnd_it(`GET /csv/China/Shuangyashan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shuangyashan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shuangyashan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shuangyashan.html`)
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


    rnd_it(`GET /csv/China/Jinhua.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jinhua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jinhua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jinhua.html`)
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


    rnd_it(`GET /csv/China/Huazhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huazhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huazhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huazhou.html`)
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


    rnd_it(`GET /csv/China/Leizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Leizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Leizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Leizhou.html`)
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


    rnd_it(`GET /csv/China/Xushan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xushan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xushan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xushan.html`)
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


    rnd_it(`GET /csv/China/Yucheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yucheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yucheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yucheng.html`)
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


    rnd_it(`GET /csv/China/Jianguang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jianguang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jianguang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jianguang.html`)
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


    rnd_it(`GET /csv/China/Ximeicun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ximeicun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ximeicun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ximeicun.html`)
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


    rnd_it(`GET /csv/China/Lianjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lianjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lianjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lianjiang.html`)
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


    rnd_it(`GET /csv/China/Guiping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guiping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guiping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guiping.html`)
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


    rnd_it(`GET /csv/China/Jiaxing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiaxing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiaxing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiaxing.html`)
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


    rnd_it(`GET /csv/China/Zhangjiajie.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhangjiajie.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhangjiajie.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhangjiajie.html`)
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


    rnd_it(`GET /csv/China/Huzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huzhou.html`)
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


    rnd_it(`GET /csv/China/Hebi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hebi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hebi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hebi.html`)
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


    rnd_it(`GET /csv/China/Chengtangcun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chengtangcun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chengtangcun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chengtangcun.html`)
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


    rnd_it(`GET /csv/China/Jingdezhen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jingdezhen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jingdezhen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jingdezhen.html`)
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


    rnd_it(`GET /csv/China/Heihe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Heihe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Heihe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Heihe.html`)
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


    rnd_it(`GET /csv/China/Changshu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changshu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changshu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changshu.html`)
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


    rnd_it(`GET /csv/China/Sanzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Sanzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Sanzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Sanzhou.html`)
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


    rnd_it(`GET /csv/China/Baiyin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baiyin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baiyin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baiyin.html`)
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


    rnd_it(`GET /csv/China/Benxi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Benxi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Benxi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Benxi.html`)
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


    rnd_it(`GET /csv/China/Shuozhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shuozhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shuozhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shuozhou.html`)
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


    rnd_it(`GET /csv/China/Shuyangzha.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shuyangzha.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shuyangzha.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shuyangzha.html`)
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


    rnd_it(`GET /csv/China/Wuwei.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuwei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuwei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuwei.html`)
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


    rnd_it(`GET /csv/China/Fuxin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fuxin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fuxin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fuxin.html`)
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


    rnd_it(`GET /csv/China/Beihai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Beihai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Beihai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Beihai.html`)
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


    rnd_it(`GET /csv/China/Liaoyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Liaoyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Liaoyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Liaoyang.html`)
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


    rnd_it(`GET /csv/China/Jixi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jixi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jixi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jixi.html`)
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


    rnd_it(`GET /csv/China/Xiping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiping.html`)
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


    rnd_it(`GET /csv/China/Yinchuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yinchuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yinchuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yinchuan.html`)
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


    rnd_it(`GET /csv/China/Pingxiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pingxiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pingxiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pingxiang.html`)
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


    rnd_it(`GET /csv/China/Fushun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fushun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fushun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fushun.html`)
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


    rnd_it(`GET /csv/China/Pingliang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pingliang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pingliang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pingliang.html`)
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


    rnd_it(`GET /csv/China/Hezhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hezhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hezhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hezhou.html`)
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


    rnd_it(`GET /csv/China/Yushan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yushan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yushan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yushan.html`)
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


    rnd_it(`GET /csv/China/Chongzuo.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chongzuo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chongzuo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chongzuo.html`)
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


    rnd_it(`GET /csv/China/Qingyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingyang.html`)
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


    rnd_it(`GET /csv/China/Huaibei.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huaibei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huaibei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huaibei.html`)
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


    rnd_it(`GET /csv/China/Puning.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Puning.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Puning.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Puning.html`)
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


    rnd_it(`GET /csv/China/Taizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taizhou.html`)
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


    rnd_it(`GET /csv/China/Gaoping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gaoping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gaoping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gaoping.html`)
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


    rnd_it(`GET /csv/China/Shengli.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shengli.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shengli.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shengli.html`)
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


    rnd_it(`GET /csv/China/Qinbaling.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qinbaling.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qinbaling.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qinbaling.html`)
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


    rnd_it(`GET /csv/China/Laibin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Laibin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Laibin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Laibin.html`)
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


    rnd_it(`GET /csv/China/Sanmenxia.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Sanmenxia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Sanmenxia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Sanmenxia.html`)
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


    rnd_it(`GET /csv/China/Nantong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nantong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nantong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nantong.html`)
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


    rnd_it(`GET /csv/China/Jincheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jincheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jincheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jincheng.html`)
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


    rnd_it(`GET /csv/China/Kuaidamao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Kuaidamao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Kuaidamao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Kuaidamao.html`)
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


    rnd_it(`GET /csv/China/Huainan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huainan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huainan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huainan.html`)
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


    rnd_it(`GET /csv/China/Shangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shangzhou.html`)
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


    rnd_it(`GET /csv/China/Anshun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Anshun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Anshun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Anshun.html`)
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


    rnd_it(`GET /csv/China/Luoyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Luoyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Luoyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Luoyang.html`)
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


    rnd_it(`GET /csv/China/Yuxi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yuxi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yuxi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yuxi.html`)
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


    rnd_it(`GET /csv/China/Jilin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jilin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jilin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jilin.html`)
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


    rnd_it(`GET /csv/China/Lianshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lianshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lianshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lianshan.html`)
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


    rnd_it(`GET /csv/China/Yingkou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yingkou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yingkou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yingkou.html`)
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


    rnd_it(`GET /csv/China/Zhuhai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhuhai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhuhai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhuhai.html`)
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


    rnd_it(`GET /csv/China/Dandong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dandong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dandong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dandong.html`)
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


    rnd_it(`GET /csv/China/Xining.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xining.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xining.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xining.html`)
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


    rnd_it(`GET /csv/China/Huangshi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huangshi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huangshi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huangshi.html`)
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


    rnd_it(`GET /csv/China/Guangyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guangyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guangyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guangyuan.html`)
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


    rnd_it(`GET /csv/China/Lishui.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lishui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lishui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lishui.html`)
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


    rnd_it(`GET /csv/China/Huizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huizhou.html`)
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


    rnd_it(`GET /csv/China/Yantai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yantai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yantai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yantai.html`)
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


    rnd_it(`GET /csv/China/Shaoxing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shaoxing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shaoxing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shaoxing.html`)
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


    rnd_it(`GET /csv/China/Yunfu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yunfu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yunfu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yunfu.html`)
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


    rnd_it(`GET /csv/China/Xuanzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xuanzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xuanzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xuanzhou.html`)
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


    rnd_it(`GET /csv/China/Lincang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lincang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lincang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lincang.html`)
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


    rnd_it(`GET /csv/China/Luohe.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Luohe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Luohe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Luohe.html`)
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


    rnd_it(`GET /csv/China/Jiamusi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiamusi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiamusi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiamusi.html`)
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


    rnd_it(`GET /csv/China/Yangjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yangjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yangjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yangjiang.html`)
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


    rnd_it(`GET /csv/China/Longba.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Longba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Longba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Longba.html`)
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


    rnd_it(`GET /csv/China/Sanming.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Sanming.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Sanming.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Sanming.html`)
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


    rnd_it(`GET /csv/China/Yanjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yanjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yanjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yanjiang.html`)
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


    rnd_it(`GET /csv/China/Gulou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Gulou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Gulou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Gulou.html`)
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


    rnd_it(`GET /csv/China/Huludao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huludao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huludao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huludao.html`)
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


    rnd_it(`GET /csv/China/Baoshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baoshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baoshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baoshan.html`)
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


    rnd_it(`GET /csv/China/Ankang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ankang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ankang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ankang.html`)
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


    rnd_it(`GET /csv/China/Zibo.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zibo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zibo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zibo.html`)
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


    rnd_it(`GET /csv/China/Weifang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Weifang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Weifang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Weifang.html`)
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


    rnd_it(`GET /csv/China/Chaozhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chaozhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chaozhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chaozhou.html`)
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


    rnd_it(`GET /csv/China/Zigong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zigong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zigong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zigong.html`)
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


    rnd_it(`GET /csv/China/Nanping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanping.html`)
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


    rnd_it(`GET /csv/China/Dingxi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dingxi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dingxi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dingxi.html`)
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


    rnd_it(`GET /csv/China/Handan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Handan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Handan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Handan.html`)
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


    rnd_it(`GET /csv/China/Baotou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baotou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baotou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baotou.html`)
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


    rnd_it(`GET /csv/China/Tieling.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tieling.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tieling.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tieling.html`)
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


    rnd_it(`GET /csv/China/Longyan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Longyan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Longyan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Longyan.html`)
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


    rnd_it(`GET /csv/China/Mudanjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Mudanjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Mudanjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Mudanjiang.html`)
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


    rnd_it(`GET /csv/China/Xiangtan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiangtan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiangtan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiangtan.html`)
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


    rnd_it(`GET /csv/China/Haikou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Haikou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Haikou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Haikou.html`)
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


    rnd_it(`GET /csv/China/Daqing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Daqing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Daqing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Daqing.html`)
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


    rnd_it(`GET /csv/China/Weihai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Weihai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Weihai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Weihai.html`)
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


    rnd_it(`GET /csv/China/Zhongshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhongshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhongshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhongshan.html`)
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


    rnd_it(`GET /csv/China/Ningde.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ningde.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ningde.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ningde.html`)
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


    rnd_it(`GET /csv/China/Rizhao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Rizhao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Rizhao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Rizhao.html`)
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


    rnd_it(`GET /csv/China/Shanwei.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shanwei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shanwei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shanwei.html`)
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


    rnd_it(`GET /csv/China/Shaoguan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shaoguan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shaoguan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shaoguan.html`)
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


    rnd_it(`GET /csv/China/Chaoyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chaoyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chaoyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chaoyang.html`)
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


    rnd_it(`GET /csv/China/Wuzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuzhou.html`)
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


    rnd_it(`GET /csv/China/Lanzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Lanzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Lanzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Lanzhou.html`)
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


    rnd_it(`GET /csv/China/Xinzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinzhou.html`)
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


    rnd_it(`GET /csv/China/Heyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Heyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Heyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Heyuan.html`)
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


    rnd_it(`GET /csv/China/Jinzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jinzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jinzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jinzhou.html`)
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


    rnd_it(`GET /csv/China/Tongliao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tongliao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tongliao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tongliao.html`)
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


    rnd_it(`GET /csv/China/Qinhuangdao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qinhuangdao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qinhuangdao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qinhuangdao.html`)
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


    rnd_it(`GET /csv/China/Tongren.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tongren.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tongren.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tongren.html`)
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


    rnd_it(`GET /csv/China/Zhenjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhenjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhenjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhenjiang.html`)
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


    rnd_it(`GET /csv/China/Putian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Putian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Putian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Putian.html`)
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


    rnd_it(`GET /csv/China/Leshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Leshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Leshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Leshan.html`)
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


    rnd_it(`GET /csv/China/Suining.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Suining.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Suining.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Suining.html`)
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


    rnd_it(`GET /csv/China/Qincheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qincheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qincheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qincheng.html`)
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


    rnd_it(`GET /csv/China/Bazhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Bazhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Bazhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Bazhou.html`)
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


    rnd_it(`GET /csv/China/Bengbu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Bengbu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Bengbu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Bengbu.html`)
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


    rnd_it(`GET /csv/China/Guiyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guiyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guiyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guiyang.html`)
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


    rnd_it(`GET /csv/China/Qinzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qinzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qinzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qinzhou.html`)
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


    rnd_it(`GET /csv/China/Changzhi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changzhi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changzhi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changzhi.html`)
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


    rnd_it(`GET /csv/China/Siping.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Siping.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Siping.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Siping.html`)
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


    rnd_it(`GET /csv/China/Shiyan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shiyan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shiyan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shiyan.html`)
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


    rnd_it(`GET /csv/China/Tangshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tangshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tangshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tangshan.html`)
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


    rnd_it(`GET /csv/China/Hanzhong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hanzhong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hanzhong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hanzhong.html`)
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


    rnd_it(`GET /csv/China/Hohhot.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hohhot.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hohhot.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hohhot.html`)
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


    rnd_it(`GET /csv/China/Hechi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hechi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hechi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hechi.html`)
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


    rnd_it(`GET /csv/China/Nanchang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanchang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanchang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanchang.html`)
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


    rnd_it(`GET /csv/China/Jiaozuo.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiaozuo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiaozuo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiaozuo.html`)
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


    rnd_it(`GET /csv/China/Puyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Puyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Puyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Puyang.html`)
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


    rnd_it(`GET /csv/China/Changzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changzhou.html`)
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


    rnd_it(`GET /csv/China/Wenzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wenzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wenzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wenzhou.html`)
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


    rnd_it(`GET /csv/China/Yulinshi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yulinshi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yulinshi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yulinshi.html`)
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


    rnd_it(`GET /csv/China/Anshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Anshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Anshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Anshan.html`)
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


    rnd_it(`GET /csv/China/Baicheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baicheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baicheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baicheng.html`)
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


    rnd_it(`GET /csv/China/Neijiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Neijiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Neijiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Neijiang.html`)
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


    rnd_it(`GET /csv/China/Xiamen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiamen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiamen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiamen.html`)
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


    rnd_it(`GET /csv/China/Zaozhuang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zaozhuang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zaozhuang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zaozhuang.html`)
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


    rnd_it(`GET /csv/China/Baojishi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baojishi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baojishi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baojishi.html`)
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


    rnd_it(`GET /csv/China/Harbin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Harbin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Harbin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Harbin.html`)
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


    rnd_it(`GET /csv/China/Nanning.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanning.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanning.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanning.html`)
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


    rnd_it(`GET /csv/China/Wuhu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuhu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuhu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuhu.html`)
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


    rnd_it(`GET /csv/China/Taiyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Taiyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Taiyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Taiyuan.html`)
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


    rnd_it(`GET /csv/China/Deyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Deyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Deyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Deyang.html`)
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


    rnd_it(`GET /csv/China/Binzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Binzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Binzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Binzhou.html`)
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


    rnd_it(`GET /csv/China/Loudi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Loudi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Loudi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Loudi.html`)
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


    rnd_it(`GET /csv/China/Qingyuan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingyuan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingyuan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingyuan.html`)
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


    rnd_it(`GET /csv/China/Chuzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chuzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chuzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chuzhou.html`)
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


    rnd_it(`GET /csv/China/Zhuzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhuzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhuzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhuzhou.html`)
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


    rnd_it(`GET /csv/China/Fuzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Fuzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Fuzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Fuzhou.html`)
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


    rnd_it(`GET /csv/China/Ningbo.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ningbo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ningbo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ningbo.html`)
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


    rnd_it(`GET /csv/China/Shijiazhuang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shijiazhuang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shijiazhuang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shijiazhuang.html`)
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


    rnd_it(`GET /csv/China/Xiaoxita.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiaoxita.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiaoxita.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiaoxita.html`)
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


    rnd_it(`GET /csv/China/Zhaoqing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhaoqing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhaoqing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhaoqing.html`)
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


    rnd_it(`GET /csv/China/Liuzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Liuzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Liuzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Liuzhou.html`)
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


    rnd_it(`GET /csv/China/Hefei.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hefei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hefei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hefei.html`)
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


    rnd_it(`GET /csv/China/Luzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Luzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Luzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Luzhou.html`)
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


    rnd_it(`GET /csv/China/Shantou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shantou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shantou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shantou.html`)
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


    rnd_it(`GET /csv/China/Linfen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Linfen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Linfen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Linfen.html`)
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


    rnd_it(`GET /csv/China/Chifeng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chifeng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chifeng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chifeng.html`)
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


    rnd_it(`GET /csv/China/Zhangjiakou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhangjiakou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhangjiakou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhangjiakou.html`)
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


    rnd_it(`GET /csv/China/Meizhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Meizhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Meizhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Meizhou.html`)
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


    rnd_it(`GET /csv/China/Jiangguanchi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiangguanchi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiangguanchi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiangguanchi.html`)
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


    rnd_it(`GET /csv/China/Changchun.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changchun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changchun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changchun.html`)
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


    rnd_it(`GET /csv/China/Guigang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guigang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guigang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guigang.html`)
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


    rnd_it(`GET /csv/China/Yiyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yiyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yiyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yiyang.html`)
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


    rnd_it(`GET /csv/China/Kunming.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Kunming.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Kunming.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Kunming.html`)
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


    rnd_it(`GET /csv/China/Hengshui.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hengshui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hengshui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hengshui.html`)
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


    rnd_it(`GET /csv/China/Yangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yangzhou.html`)
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


    rnd_it(`GET /csv/China/Yibin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yibin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yibin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yibin.html`)
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


    rnd_it(`GET /csv/China/Xinpu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinpu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinpu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinpu.html`)
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


    rnd_it(`GET /csv/China/Jiangmen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiangmen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiangmen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiangmen.html`)
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


    rnd_it(`GET /csv/China/Anqing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Anqing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Anqing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Anqing.html`)
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


    rnd_it(`GET /csv/China/Chenzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chenzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chenzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chenzhou.html`)
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


    rnd_it(`GET /csv/China/Changsha.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changsha.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changsha.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changsha.html`)
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


    rnd_it(`GET /csv/China/Huanglongsi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huanglongsi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huanglongsi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huanglongsi.html`)
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


    rnd_it(`GET /csv/China/Mianyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Mianyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Mianyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Mianyang.html`)
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


    rnd_it(`GET /csv/China/Jiujiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jiujiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jiujiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jiujiang.html`)
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


    rnd_it(`GET /csv/China/Pingdingshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pingdingshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pingdingshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pingdingshan.html`)
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


    rnd_it(`GET /csv/China/Xiaoganzhan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiaoganzhan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiaoganzhan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiaoganzhan.html`)
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


    rnd_it(`GET /csv/China/Huaihua.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huaihua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huaihua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huaihua.html`)
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


    rnd_it(`GET /csv/China/Suqian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Suqian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Suqian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Suqian.html`)
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


    rnd_it(`GET /csv/China/Bozhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Bozhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Bozhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Bozhou.html`)
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


    rnd_it(`GET /csv/China/Guilin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guilin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guilin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guilin.html`)
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


    rnd_it(`GET /csv/China/Xianyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xianyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xianyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xianyang.html`)
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


    rnd_it(`GET /csv/China/Yuncheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yuncheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yuncheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yuncheng.html`)
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


    rnd_it(`GET /csv/China/Zhangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhangzhou.html`)
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


    rnd_it(`GET /csv/China/Weinan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Weinan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Weinan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Weinan.html`)
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


    rnd_it(`GET /csv/China/Suzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Suzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Suzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Suzhou.html`)
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


    rnd_it(`GET /csv/China/Qiqihar.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qiqihar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qiqihar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qiqihar.html`)
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


    rnd_it(`GET /csv/China/Suihua.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Suihua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Suihua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Suihua.html`)
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


    rnd_it(`GET /csv/China/Yongzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yongzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yongzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yongzhou.html`)
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


    rnd_it(`GET /csv/China/Langfang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Langfang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Langfang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Langfang.html`)
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


    rnd_it(`GET /csv/China/Dazhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dazhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dazhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dazhou.html`)
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


    rnd_it(`GET /csv/China/Zhaotong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhaotong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhaotong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhaotong.html`)
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


    rnd_it(`GET /csv/China/Jinan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jinan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jinan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jinan.html`)
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


    rnd_it(`GET /csv/China/Dezhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dezhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dezhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dezhou.html`)
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


    rnd_it(`GET /csv/China/Zhengzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhengzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhengzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhengzhou.html`)
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


    rnd_it(`GET /csv/China/Xiangyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xiangyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xiangyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xiangyang.html`)
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


    rnd_it(`GET /csv/China/Pudong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Pudong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Pudong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Pudong.html`)
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


    rnd_it(`GET /csv/China/Nangandao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nangandao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nangandao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nangandao.html`)
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


    rnd_it(`GET /csv/China/Qingdao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qingdao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qingdao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qingdao.html`)
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


    rnd_it(`GET /csv/China/Changde.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Changde.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Changde.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Changde.html`)
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


    rnd_it(`GET /csv/China/Yulin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yulin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yulin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yulin.html`)
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


    rnd_it(`GET /csv/China/Dalian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dalian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dalian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dalian.html`)
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


    rnd_it(`GET /csv/China/Liaocheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Liaocheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Liaocheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Liaocheng.html`)
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


    rnd_it(`GET /csv/China/Jieyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jieyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jieyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jieyang.html`)
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


    rnd_it(`GET /csv/China/Qujing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Qujing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Qujing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Qujing.html`)
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


    rnd_it(`GET /csv/China/Xinyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xinyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xinyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xinyang.html`)
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


    rnd_it(`GET /csv/China/Nanchong.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanchong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanchong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanchong.html`)
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


    rnd_it(`GET /csv/China/Maoming.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Maoming.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Maoming.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Maoming.html`)
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


    rnd_it(`GET /csv/China/Huanggang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Huanggang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Huanggang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Huanggang.html`)
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


    rnd_it(`GET /csv/China/Zunyi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zunyi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zunyi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zunyi.html`)
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


    rnd_it(`GET /csv/China/Shangrao.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shangrao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shangrao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shangrao.html`)
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


    rnd_it(`GET /csv/China/Bijie.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Bijie.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Bijie.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Bijie.html`)
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


    rnd_it(`GET /csv/China/Xingtai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Xingtai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Xingtai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Xingtai.html`)
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


    rnd_it(`GET /csv/China/Zhumadian.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhumadian.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhumadian.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhumadian.html`)
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


    rnd_it(`GET /csv/China/Hengyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hengyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hengyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hengyang.html`)
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


    rnd_it(`GET /csv/China/Yancheng.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Yancheng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Yancheng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Yancheng.html`)
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


    rnd_it(`GET /csv/China/Zhanjiang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhanjiang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhanjiang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhanjiang.html`)
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


    rnd_it(`GET /csv/China/Cangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Cangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Cangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Cangzhou.html`)
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


    rnd_it(`GET /csv/China/Shangqiu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shangqiu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shangqiu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shangqiu.html`)
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


    rnd_it(`GET /csv/China/Shenyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shenyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shenyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shenyang.html`)
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


    rnd_it(`GET /csv/China/Jining.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Jining.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Jining.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Jining.html`)
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


    rnd_it(`GET /csv/China/Nanjing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanjing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanjing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanjing.html`)
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


    rnd_it(`GET /csv/China/Quanzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Quanzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Quanzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Quanzhou.html`)
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


    rnd_it(`GET /csv/China/Heze.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Heze.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Heze.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Heze.html`)
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


    rnd_it(`GET /csv/China/Ganzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Ganzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Ganzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Ganzhou.html`)
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


    rnd_it(`GET /csv/China/Zhoukou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Zhoukou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Zhoukou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Zhoukou.html`)
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


    rnd_it(`GET /csv/China/Tongshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tongshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tongshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tongshan.html`)
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


    rnd_it(`GET /csv/China/Foshan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Foshan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Foshan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Foshan.html`)
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


    rnd_it(`GET /csv/China/Hangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Hangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Hangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Hangzhou.html`)
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


    rnd_it(`GET /csv/China/Nanyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Nanyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Nanyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Nanyang.html`)
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


    rnd_it(`GET /csv/China/Wuhan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Wuhan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Wuhan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Wuhan.html`)
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


    rnd_it(`GET /csv/China/Tianjin.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Tianjin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Tianjin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Tianjin.html`)
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


    rnd_it(`GET /csv/China/Dongguan.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Dongguan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Dongguan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Dongguan.html`)
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


    rnd_it(`GET /csv/China/Linyi.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Linyi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Linyi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Linyi.html`)
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


    rnd_it(`GET /csv/China/Baoding.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Baoding.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Baoding.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Baoding.html`)
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


    rnd_it(`GET /csv/China/Chongqing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chongqing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chongqing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chongqing.html`)
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


    rnd_it(`GET /csv/China/Chengdu.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Chengdu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Chengdu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Chengdu.html`)
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


    rnd_it(`GET /csv/China/Shenzhen.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shenzhen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shenzhen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shenzhen.html`)
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


    rnd_it(`GET /csv/China/Beijing.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Beijing.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Beijing.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Beijing.html`)
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


    rnd_it(`GET /csv/China/Shanghai.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Shanghai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Shanghai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Shanghai.html`)
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


    rnd_it(`GET /csv/China/Guangzhou.html should respond with 200`, function(done) {

        request
            .get(`/csv/China/Guangzhou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/China/Guangzhou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/China/Guangzhou.html`)
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


    rnd_it(`GET /csv/Argentina/Comodoro%20Rivadavia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Argentina/Comodoro%20Rivadavia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Argentina/Comodoro%20Rivadavia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Argentina/Comodoro%20Rivadavia.html`)
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


    rnd_it(`GET /csv/Argentina/Santiago%20del%20Estero.html should respond with 200`, function(done) {

        request
            .get(`/csv/Argentina/Santiago%20del%20Estero.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Argentina/Santiago%20del%20Estero.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Argentina/Santiago%20del%20Estero.html`)
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


    rnd_it(`GET /csv/Argentina/Rosario.html should respond with 200`, function(done) {

        request
            .get(`/csv/Argentina/Rosario.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Argentina/Rosario.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Argentina/Rosario.html`)
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


    rnd_it(`GET /csv/Nigeria/Osogbo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Osogbo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Osogbo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Osogbo.html`)
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


    rnd_it(`GET /csv/Nigeria/Kaduna.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Kaduna.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Kaduna.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Kaduna.html`)
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


    rnd_it(`GET /csv/Nigeria/Warri.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Warri.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Warri.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Warri.html`)
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


    rnd_it(`GET /csv/Nigeria/Ilorin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Ilorin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Ilorin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Ilorin.html`)
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


    rnd_it(`GET /csv/Nigeria/Akure.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Akure.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Akure.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Akure.html`)
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


    rnd_it(`GET /csv/Nigeria/Ikeja.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Ikeja.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Ikeja.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Ikeja.html`)
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


    rnd_it(`GET /csv/Nigeria/Abeokuta.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Abeokuta.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Abeokuta.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Abeokuta.html`)
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


    rnd_it(`GET /csv/Nigeria/Owerri.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Owerri.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Owerri.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Owerri.html`)
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


    rnd_it(`GET /csv/Nigeria/Ogbomoso.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Ogbomoso.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Ogbomoso.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Ogbomoso.html`)
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


    rnd_it(`GET /csv/Nigeria/Ikare.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Ikare.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Ikare.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Ikare.html`)
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


    rnd_it(`GET /csv/Nigeria/Shagamu.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Shagamu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Shagamu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Shagamu.html`)
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


    rnd_it(`GET /csv/Nigeria/Benin%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Benin%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Benin%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Benin%20City.html`)
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


    rnd_it(`GET /csv/Nigeria/Maiduguri.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Maiduguri.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Maiduguri.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Maiduguri.html`)
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


    rnd_it(`GET /csv/Nigeria/Onitsha.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Onitsha.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Onitsha.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Onitsha.html`)
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


    rnd_it(`GET /csv/Nigeria/Aba.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Aba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Aba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Aba.html`)
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


    rnd_it(`GET /csv/Nigeria/Port%20Harcourt.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Port%20Harcourt.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Port%20Harcourt.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Port%20Harcourt.html`)
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


    rnd_it(`GET /csv/Nigeria/Ibadan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Ibadan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Ibadan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Ibadan.html`)
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


    rnd_it(`GET /csv/Nigeria/Abuja.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Abuja.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Abuja.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Abuja.html`)
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


    rnd_it(`GET /csv/Nigeria/Kano.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Kano.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Kano.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Kano.html`)
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


    rnd_it(`GET /csv/Nigeria/Lagos.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nigeria/Lagos.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nigeria/Lagos.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nigeria/Lagos.html`)
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


    rnd_it(`GET /csv/Japan/Kumamoto.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Kumamoto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Kumamoto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Kumamoto.html`)
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


    rnd_it(`GET /csv/Japan/Hamamatsu.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Hamamatsu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Hamamatsu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Hamamatsu.html`)
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


    rnd_it(`GET /csv/Japan/Niigata.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Niigata.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Niigata.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Niigata.html`)
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


    rnd_it(`GET /csv/Japan/Chiba.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Chiba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Chiba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Chiba.html`)
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


    rnd_it(`GET /csv/Japan/Sendai.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Sendai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Sendai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Sendai.html`)
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


    rnd_it(`GET /csv/Japan/Hiroshima.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Hiroshima.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Hiroshima.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Hiroshima.html`)
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


    rnd_it(`GET /csv/Japan/Saitama.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Saitama.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Saitama.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Saitama.html`)
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


    rnd_it(`GET /csv/Japan/Kawasaki.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Kawasaki.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Kawasaki.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Kawasaki.html`)
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


    rnd_it(`GET /csv/Japan/Fukuoka.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Fukuoka.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Fukuoka.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Fukuoka.html`)
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


    rnd_it(`GET /csv/Japan/Yokohama.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Yokohama.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Yokohama.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Yokohama.html`)
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


    rnd_it(`GET /csv/Japan/Nagoya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Japan/Nagoya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Japan/Nagoya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Japan/Nagoya.html`)
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


    rnd_it(`GET /csv/Angola/Cabinda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Angola/Cabinda.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Angola/Cabinda.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Angola/Cabinda.html`)
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


    rnd_it(`GET /csv/Angola/Cacuaco.html should respond with 200`, function(done) {

        request
            .get(`/csv/Angola/Cacuaco.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Angola/Cacuaco.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Angola/Cacuaco.html`)
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


    rnd_it(`GET /csv/Angola/Luanda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Angola/Luanda.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Angola/Luanda.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Angola/Luanda.html`)
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


    rnd_it(`GET /csv/Myanmar/Kyaukse.html should respond with 200`, function(done) {

        request
            .get(`/csv/Myanmar/Kyaukse.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Myanmar/Kyaukse.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Myanmar/Kyaukse.html`)
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


    rnd_it(`GET /csv/Myanmar/Nay%20Pyi%20Taw.html should respond with 200`, function(done) {

        request
            .get(`/csv/Myanmar/Nay%20Pyi%20Taw.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Myanmar/Nay%20Pyi%20Taw.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Myanmar/Nay%20Pyi%20Taw.html`)
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


    rnd_it(`GET /csv/Myanmar/Mandalay.html should respond with 200`, function(done) {

        request
            .get(`/csv/Myanmar/Mandalay.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Myanmar/Mandalay.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Myanmar/Mandalay.html`)
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


    rnd_it(`GET /csv/Myanmar/Rangoon.html should respond with 200`, function(done) {

        request
            .get(`/csv/Myanmar/Rangoon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Myanmar/Rangoon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Myanmar/Rangoon.html`)
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


    rnd_it(`GET /csv/South%20Africa/Pretoria.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa/Pretoria.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Africa/Pretoria.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Africa/Pretoria.html`)
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


    rnd_it(`GET /csv/South%20Africa/Pietermaritzburg.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa/Pietermaritzburg.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Africa/Pietermaritzburg.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Africa/Pietermaritzburg.html`)
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


    rnd_it(`GET /csv/South%20Africa/Vereeniging.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa/Vereeniging.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Africa/Vereeniging.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Africa/Vereeniging.html`)
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


    rnd_it(`GET /csv/South%20Africa/Soweto.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa/Soweto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Africa/Soweto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Africa/Soweto.html`)
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


    rnd_it(`GET /csv/South%20Africa/Johannesburg.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Africa/Johannesburg.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Africa/Johannesburg.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Africa/Johannesburg.html`)
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


    rnd_it(`GET /csv/Mozambique/Nampula.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mozambique/Nampula.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mozambique/Nampula.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mozambique/Nampula.html`)
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


    rnd_it(`GET /csv/Mozambique/Matola.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mozambique/Matola.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mozambique/Matola.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mozambique/Matola.html`)
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


    rnd_it(`GET /csv/Mozambique/Maputo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mozambique/Maputo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mozambique/Maputo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mozambique/Maputo.html`)
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


    rnd_it(`GET /csv/India/Thiruvananthapuram.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Thiruvananthapuram.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Thiruvananthapuram.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Thiruvananthapuram.html`)
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


    rnd_it(`GET /csv/India/Bhubaneshwar.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Bhubaneshwar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Bhubaneshwar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Bhubaneshwar.html`)
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


    rnd_it(`GET /csv/India/Jalandhar.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Jalandhar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Jalandhar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Jalandhar.html`)
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


    rnd_it(`GET /csv/India/Bareilly.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Bareilly.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Bareilly.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Bareilly.html`)
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


    rnd_it(`GET /csv/India/Gwalior.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Gwalior.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Gwalior.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Gwalior.html`)
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


    rnd_it(`GET /csv/India/Amritsar.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Amritsar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Amritsar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Amritsar.html`)
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


    rnd_it(`GET /csv/India/Najafgarh.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Najafgarh.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Najafgarh.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Najafgarh.html`)
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


    rnd_it(`GET /csv/India/Jabalpur.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Jabalpur.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Jabalpur.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Jabalpur.html`)
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


    rnd_it(`GET /csv/India/Meerut.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Meerut.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Meerut.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Meerut.html`)
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


    rnd_it(`GET /csv/India/Indore.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Indore.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Indore.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Indore.html`)
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


    rnd_it(`GET /csv/India/Cawnpore.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Cawnpore.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Cawnpore.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Cawnpore.html`)
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


    rnd_it(`GET /csv/India/Lucknow.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Lucknow.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Lucknow.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Lucknow.html`)
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


    rnd_it(`GET /csv/India/Prayagraj.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Prayagraj.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Prayagraj.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Prayagraj.html`)
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


    rnd_it(`GET /csv/India/Delhi.html should respond with 200`, function(done) {

        request
            .get(`/csv/India/Delhi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/India/Delhi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/India/Delhi.html`)
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


    rnd_it(`GET /csv/Taiwan/Changhua.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Changhua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Changhua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Changhua.html`)
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


    rnd_it(`GET /csv/Taiwan/Zhongli.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Zhongli.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Zhongli.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Zhongli.html`)
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


    rnd_it(`GET /csv/Taiwan/Tainan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Tainan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Tainan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Tainan.html`)
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


    rnd_it(`GET /csv/Taiwan/Kaohsiung.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Kaohsiung.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Kaohsiung.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Kaohsiung.html`)
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


    rnd_it(`GET /csv/Taiwan/Taichung.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Taichung.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Taichung.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Taichung.html`)
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


    rnd_it(`GET /csv/Taiwan/Taipei.html should respond with 200`, function(done) {

        request
            .get(`/csv/Taiwan/Taipei.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Taiwan/Taipei.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Taiwan/Taipei.html`)
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


    rnd_it(`GET /csv/Somalia/Burco.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Burco.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Burco.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Burco.html`)
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


    rnd_it(`GET /csv/Somalia/Baardheere.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Baardheere.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Baardheere.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Baardheere.html`)
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


    rnd_it(`GET /csv/Somalia/Baidoa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Baidoa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Baidoa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Baidoa.html`)
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


    rnd_it(`GET /csv/Somalia/Gaalkacyo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Gaalkacyo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Gaalkacyo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Gaalkacyo.html`)
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


    rnd_it(`GET /csv/Somalia/Hargeysa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Hargeysa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Hargeysa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Hargeysa.html`)
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


    rnd_it(`GET /csv/Somalia/Boosaaso.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Boosaaso.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Boosaaso.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Boosaaso.html`)
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


    rnd_it(`GET /csv/Somalia/Mogadishu.html should respond with 200`, function(done) {

        request
            .get(`/csv/Somalia/Mogadishu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Somalia/Mogadishu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Somalia/Mogadishu.html`)
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


    rnd_it(`GET /csv/Indonesia/Samarinda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Samarinda.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Samarinda.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Samarinda.html`)
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


    rnd_it(`GET /csv/Indonesia/Padang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Padang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Padang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Padang.html`)
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


    rnd_it(`GET /csv/Indonesia/Pekanbaru.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Pekanbaru.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Pekanbaru.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Pekanbaru.html`)
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


    rnd_it(`GET /csv/Indonesia/Bogor.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Bogor.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Bogor.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Bogor.html`)
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


    rnd_it(`GET /csv/Indonesia/Bandar%20Lampung.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Bandar%20Lampung.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Bandar%20Lampung.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Bandar%20Lampung.html`)
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


    rnd_it(`GET /csv/Indonesia/Cilacap.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Cilacap.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Cilacap.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Cilacap.html`)
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


    rnd_it(`GET /csv/Indonesia/Bagam.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Bagam.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Bagam.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Bagam.html`)
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


    rnd_it(`GET /csv/Indonesia/Sumedang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Sumedang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Sumedang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Sumedang.html`)
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


    rnd_it(`GET /csv/Indonesia/Jepara.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Jepara.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Jepara.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Jepara.html`)
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


    rnd_it(`GET /csv/Indonesia/Makassar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Makassar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Makassar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Makassar.html`)
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


    rnd_it(`GET /csv/Indonesia/Palembang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Palembang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Palembang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Palembang.html`)
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


    rnd_it(`GET /csv/Indonesia/Semarang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Semarang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Semarang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Semarang.html`)
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


    rnd_it(`GET /csv/Indonesia/Sangereng.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Sangereng.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Sangereng.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Sangereng.html`)
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


    rnd_it(`GET /csv/Indonesia/Denpasar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Denpasar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Denpasar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Denpasar.html`)
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


    rnd_it(`GET /csv/Indonesia/Tangerang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Tangerang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Tangerang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Tangerang.html`)
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


    rnd_it(`GET /csv/Indonesia/Depok.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Depok.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Depok.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Depok.html`)
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


    rnd_it(`GET /csv/Indonesia/Bekasi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Bekasi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Bekasi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Bekasi.html`)
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


    rnd_it(`GET /csv/Indonesia/Malang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Malang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Malang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Malang.html`)
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


    rnd_it(`GET /csv/Indonesia/Medan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Medan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Medan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Medan.html`)
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


    rnd_it(`GET /csv/Indonesia/Surabaya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Surabaya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Surabaya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Surabaya.html`)
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


    rnd_it(`GET /csv/Indonesia/Jakarta.html should respond with 200`, function(done) {

        request
            .get(`/csv/Indonesia/Jakarta.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Indonesia/Jakarta.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Indonesia/Jakarta.html`)
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


    rnd_it(`GET /csv/Benin/Cotonou.html should respond with 200`, function(done) {

        request
            .get(`/csv/Benin/Cotonou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Benin/Cotonou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Benin/Cotonou.html`)
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


    rnd_it(`GET /csv/Pakistan/Bahawalpur.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Bahawalpur.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Bahawalpur.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Bahawalpur.html`)
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


    rnd_it(`GET /csv/Pakistan/Quetta.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Quetta.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Quetta.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Quetta.html`)
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


    rnd_it(`GET /csv/Pakistan/Islamabad.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Islamabad.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Islamabad.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Islamabad.html`)
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


    rnd_it(`GET /csv/Pakistan/Hyderabad%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Hyderabad%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Hyderabad%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Hyderabad%20City.html`)
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


    rnd_it(`GET /csv/Pakistan/Saidu%20Sharif.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Saidu%20Sharif.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Saidu%20Sharif.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Saidu%20Sharif.html`)
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


    rnd_it(`GET /csv/Pakistan/Multan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Multan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Multan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Multan.html`)
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


    rnd_it(`GET /csv/Pakistan/Peshawar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Peshawar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Peshawar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Peshawar.html`)
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


    rnd_it(`GET /csv/Pakistan/Gujranwala.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Gujranwala.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Gujranwala.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Gujranwala.html`)
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


    rnd_it(`GET /csv/Pakistan/Rawalpindi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Rawalpindi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Rawalpindi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Rawalpindi.html`)
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


    rnd_it(`GET /csv/Pakistan/Faisalabad.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Faisalabad.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Faisalabad.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Faisalabad.html`)
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


    rnd_it(`GET /csv/Pakistan/Lahore.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Lahore.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Lahore.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Lahore.html`)
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


    rnd_it(`GET /csv/Pakistan/Karachi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Pakistan/Karachi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Pakistan/Karachi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Pakistan/Karachi.html`)
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


    rnd_it(`GET /csv/Germany/Frankfurt.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany/Frankfurt.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Germany/Frankfurt.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Germany/Frankfurt.html`)
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


    rnd_it(`GET /csv/Germany/Cologne.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany/Cologne.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Germany/Cologne.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Germany/Cologne.html`)
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


    rnd_it(`GET /csv/Germany/Hamburg.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany/Hamburg.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Germany/Hamburg.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Germany/Hamburg.html`)
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


    rnd_it(`GET /csv/Germany/Munich.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany/Munich.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Germany/Munich.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Germany/Munich.html`)
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


    rnd_it(`GET /csv/Germany/Berlin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Germany/Berlin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Germany/Berlin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Germany/Berlin.html`)
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


    rnd_it(`GET /csv/Turkey/Erzurum.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Erzurum.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Erzurum.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Erzurum.html`)
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


    rnd_it(`GET /csv/Turkey/Seyhan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Seyhan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Seyhan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Seyhan.html`)
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


    rnd_it(`GET /csv/Turkey/Denizli.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Denizli.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Denizli.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Denizli.html`)
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


    rnd_it(`GET /csv/Turkey/Samsun.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Samsun.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Samsun.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Samsun.html`)
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


    rnd_it(`GET /csv/Turkey/Kayseri.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Kayseri.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Kayseri.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Kayseri.html`)
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


    rnd_it(`GET /csv/Turkey/Adana.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Adana.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Adana.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Adana.html`)
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


    rnd_it(`GET /csv/Turkey/Mersin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Mersin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Mersin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Mersin.html`)
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


    rnd_it(`GET /csv/Turkey/Gaziantep.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Gaziantep.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Gaziantep.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Gaziantep.html`)
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


    rnd_it(`GET /csv/Turkey/Konya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Konya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Konya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Konya.html`)
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


    rnd_it(`GET /csv/Turkey/Antalya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Antalya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Antalya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Antalya.html`)
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


    rnd_it(`GET /csv/Turkey/Bursa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Bursa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Bursa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Bursa.html`)
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


    rnd_it(`GET /csv/Turkey/Ankara.html should respond with 200`, function(done) {

        request
            .get(`/csv/Turkey/Ankara.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Turkey/Ankara.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Turkey/Ankara.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Nottingham.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Nottingham.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Nottingham.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Nottingham.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Leeds.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Leeds.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Leeds.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Leeds.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Southampton.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Southampton.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Southampton.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Southampton.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Portsmouth.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Portsmouth.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Portsmouth.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Portsmouth.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Liverpool.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Liverpool.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Liverpool.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Liverpool.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Manchester.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Manchester.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Manchester.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Manchester.html`)
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


    rnd_it(`GET /csv/United%20Kingdom/Birmingham.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Birmingham.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Kingdom/Birmingham.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Kingdom/Birmingham.html`)
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


    rnd_it(`GET /csv/Spain/Bilbao.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain/Bilbao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Spain/Bilbao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Spain/Bilbao.html`)
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


    rnd_it(`GET /csv/Spain/Valencia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain/Valencia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Spain/Valencia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Spain/Valencia.html`)
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


    rnd_it(`GET /csv/Spain/Sevilla.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain/Sevilla.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Spain/Sevilla.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Spain/Sevilla.html`)
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


    rnd_it(`GET /csv/Spain/Barcelona.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain/Barcelona.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Spain/Barcelona.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Spain/Barcelona.html`)
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


    rnd_it(`GET /csv/Spain/Madrid.html should respond with 200`, function(done) {

        request
            .get(`/csv/Spain/Madrid.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Spain/Madrid.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Spain/Madrid.html`)
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


    rnd_it(`GET /csv/Malaysia/George%20Town.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/George%20Town.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/George%20Town.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/George%20Town.html`)
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


    rnd_it(`GET /csv/Malaysia/Butterworth.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/Butterworth.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/Butterworth.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/Butterworth.html`)
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


    rnd_it(`GET /csv/Malaysia/Ipoh.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/Ipoh.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/Ipoh.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/Ipoh.html`)
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


    rnd_it(`GET /csv/Malaysia/Klang.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/Klang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/Klang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/Klang.html`)
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


    rnd_it(`GET /csv/Malaysia/Seberang%20Jaya.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/Seberang%20Jaya.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/Seberang%20Jaya.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/Seberang%20Jaya.html`)
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


    rnd_it(`GET /csv/Malaysia/Kuala%20Lumpur.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malaysia/Kuala%20Lumpur.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malaysia/Kuala%20Lumpur.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malaysia/Kuala%20Lumpur.html`)
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


    rnd_it(`GET /csv/Gabon/Libreville.html should respond with 200`, function(done) {

        request
            .get(`/csv/Gabon/Libreville.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Gabon/Libreville.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Gabon/Libreville.html`)
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


    rnd_it(`GET /csv/Colombia/Palermo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Colombia/Palermo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Colombia/Palermo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Colombia/Palermo.html`)
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


    rnd_it(`GET /csv/Colombia/Bucaramanga.html should respond with 200`, function(done) {

        request
            .get(`/csv/Colombia/Bucaramanga.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Colombia/Bucaramanga.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Colombia/Bucaramanga.html`)
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


    rnd_it(`GET /csv/Colombia/Cali.html should respond with 200`, function(done) {

        request
            .get(`/csv/Colombia/Cali.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Colombia/Cali.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Colombia/Cali.html`)
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


    rnd_it(`GET /csv/Madagascar/Androtsy.html should respond with 200`, function(done) {

        request
            .get(`/csv/Madagascar/Androtsy.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Madagascar/Androtsy.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Madagascar/Androtsy.html`)
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


    rnd_it(`GET /csv/Madagascar/Antananarivo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Madagascar/Antananarivo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Madagascar/Antananarivo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Madagascar/Antananarivo.html`)
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


    rnd_it(`GET /csv/Venezuela/Barinas.html should respond with 200`, function(done) {

        request
            .get(`/csv/Venezuela/Barinas.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Venezuela/Barinas.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Venezuela/Barinas.html`)
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


    rnd_it(`GET /csv/Venezuela/Barquisimeto.html should respond with 200`, function(done) {

        request
            .get(`/csv/Venezuela/Barquisimeto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Venezuela/Barquisimeto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Venezuela/Barquisimeto.html`)
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


    rnd_it(`GET /csv/Venezuela/Caracas.html should respond with 200`, function(done) {

        request
            .get(`/csv/Venezuela/Caracas.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Venezuela/Caracas.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Venezuela/Caracas.html`)
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


    rnd_it(`GET /csv/Venezuela/Maracaibo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Venezuela/Maracaibo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Venezuela/Maracaibo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Venezuela/Maracaibo.html`)
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


    rnd_it(`GET /csv/Morocco/Mediouna.html should respond with 200`, function(done) {

        request
            .get(`/csv/Morocco/Mediouna.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Morocco/Mediouna.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Morocco/Mediouna.html`)
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


    rnd_it(`GET /csv/Morocco/Marrakech.html should respond with 200`, function(done) {

        request
            .get(`/csv/Morocco/Marrakech.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Morocco/Marrakech.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Morocco/Marrakech.html`)
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


    rnd_it(`GET /csv/Morocco/El%20Kelaa%20des%20Srarhna.html should respond with 200`, function(done) {

        request
            .get(`/csv/Morocco/El%20Kelaa%20des%20Srarhna.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Morocco/El%20Kelaa%20des%20Srarhna.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Morocco/El%20Kelaa%20des%20Srarhna.html`)
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


    rnd_it(`GET /csv/Morocco/Casablanca.html should respond with 200`, function(done) {

        request
            .get(`/csv/Morocco/Casablanca.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Morocco/Casablanca.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Morocco/Casablanca.html`)
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


    rnd_it(`GET /csv/Congo%20(Brazzaville)/Pointe-Noire.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville)/Pointe-Noire.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Brazzaville)/Pointe-Noire.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville)/Pointe-Noire.html`)
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


    rnd_it(`GET /csv/Congo%20(Brazzaville)/Brazzaville.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville)/Brazzaville.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Brazzaville)/Brazzaville.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville)/Brazzaville.html`)
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


    rnd_it(`GET /csv/South%20Korea/Cheongju.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Cheongju.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Cheongju.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Cheongju.html`)
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


    rnd_it(`GET /csv/South%20Korea/Bucheon.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Bucheon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Bucheon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Bucheon.html`)
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


    rnd_it(`GET /csv/South%20Korea/Changwon.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Changwon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Changwon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Changwon.html`)
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


    rnd_it(`GET /csv/South%20Korea/Goyang.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Goyang.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Goyang.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Goyang.html`)
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


    rnd_it(`GET /csv/South%20Korea/Tongjin.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Tongjin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Tongjin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Tongjin.html`)
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


    rnd_it(`GET /csv/South%20Korea/Ulsan.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Ulsan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Ulsan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Ulsan.html`)
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


    rnd_it(`GET /csv/South%20Korea/Suwon.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Suwon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Suwon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Suwon.html`)
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


    rnd_it(`GET /csv/South%20Korea/Daejeon.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Daejeon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Daejeon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Daejeon.html`)
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


    rnd_it(`GET /csv/South%20Korea/Gwangju.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Gwangju.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Gwangju.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Gwangju.html`)
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


    rnd_it(`GET /csv/South%20Korea/Daegu.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Daegu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Daegu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Daegu.html`)
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


    rnd_it(`GET /csv/South%20Korea/Incheon.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Incheon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Incheon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Incheon.html`)
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


    rnd_it(`GET /csv/South%20Korea/Busan.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Busan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Busan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Busan.html`)
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


    rnd_it(`GET /csv/South%20Korea/Seoul.html should respond with 200`, function(done) {

        request
            .get(`/csv/South%20Korea/Seoul.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/South%20Korea/Seoul.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/South%20Korea/Seoul.html`)
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


    rnd_it(`GET /csv/Algeria/Oran.html should respond with 200`, function(done) {

        request
            .get(`/csv/Algeria/Oran.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Algeria/Oran.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Algeria/Oran.html`)
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


    rnd_it(`GET /csv/Algeria/Algiers.html should respond with 200`, function(done) {

        request
            .get(`/csv/Algeria/Algiers.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Algeria/Algiers.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Algeria/Algiers.html`)
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


    rnd_it(`GET /csv/Bolivia/Cochabamba.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bolivia/Cochabamba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bolivia/Cochabamba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bolivia/Cochabamba.html`)
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


    rnd_it(`GET /csv/Bolivia/El%20Alto.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bolivia/El%20Alto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bolivia/El%20Alto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bolivia/El%20Alto.html`)
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


    rnd_it(`GET /csv/Bolivia/La%20Paz.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bolivia/La%20Paz.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bolivia/La%20Paz.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bolivia/La%20Paz.html`)
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


    rnd_it(`GET /csv/Bolivia/Santa%20Cruz.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bolivia/Santa%20Cruz.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bolivia/Santa%20Cruz.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bolivia/Santa%20Cruz.html`)
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


    rnd_it(`GET /csv/Tajikistan/Dushanbe.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tajikistan/Dushanbe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Tajikistan/Dushanbe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Tajikistan/Dushanbe.html`)
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


    rnd_it(`GET /csv/Italy/Turin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Italy/Turin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Italy/Turin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Italy/Turin.html`)
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


    rnd_it(`GET /csv/Italy/Naples.html should respond with 200`, function(done) {

        request
            .get(`/csv/Italy/Naples.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Italy/Naples.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Italy/Naples.html`)
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


    rnd_it(`GET /csv/Italy/Milan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Italy/Milan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Italy/Milan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Italy/Milan.html`)
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


    rnd_it(`GET /csv/Italy/Rome.html should respond with 200`, function(done) {

        request
            .get(`/csv/Italy/Rome.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Italy/Rome.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Italy/Rome.html`)
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


    rnd_it(`GET /csv/Brazil/Natal.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Natal.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Natal.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Natal.html`)
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


    rnd_it(`GET /csv/Brazil/Campo%20Grande.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Campo%20Grande.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Campo%20Grande.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Campo%20Grande.html`)
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


    rnd_it(`GET /csv/Brazil/Porto%20Alegre.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Porto%20Alegre.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Porto%20Alegre.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Porto%20Alegre.html`)
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


    rnd_it(`GET /csv/Brazil/Recife.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Recife.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Recife.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Recife.html`)
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


    rnd_it(`GET /csv/Brazil/Manaus.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Manaus.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Manaus.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Manaus.html`)
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


    rnd_it(`GET /csv/Brazil/Salvador.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Salvador.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Salvador.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Salvador.html`)
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


    rnd_it(`GET /csv/Brazil/Belo%20Horizonte.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Belo%20Horizonte.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Belo%20Horizonte.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Belo%20Horizonte.html`)
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


    rnd_it(`GET /csv/Brazil/Rio%20de%20Janeiro.html should respond with 200`, function(done) {

        request
            .get(`/csv/Brazil/Rio%20de%20Janeiro.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Brazil/Rio%20de%20Janeiro.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Brazil/Rio%20de%20Janeiro.html`)
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


    rnd_it(`GET /csv/Central%20African%20Republic/Bangui.html should respond with 200`, function(done) {

        request
            .get(`/csv/Central%20African%20Republic/Bangui.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Central%20African%20Republic/Bangui.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Central%20African%20Republic/Bangui.html`)
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


    rnd_it(`GET /csv/Congo%20(Kinshasa)/Bunia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Bunia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Kinshasa)/Bunia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Bunia.html`)
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


    rnd_it(`GET /csv/Congo%20(Kinshasa)/Kisangani.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Kisangani.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Kinshasa)/Kisangani.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Kisangani.html`)
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


    rnd_it(`GET /csv/Congo%20(Kinshasa)/Bukavu.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Bukavu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Kinshasa)/Bukavu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Bukavu.html`)
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


    rnd_it(`GET /csv/Congo%20(Kinshasa)/Lubumbashi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Lubumbashi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Kinshasa)/Lubumbashi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Lubumbashi.html`)
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


    rnd_it(`GET /csv/Congo%20(Kinshasa)/Kinshasa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Kinshasa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Congo%20(Kinshasa)/Kinshasa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa)/Kinshasa.html`)
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


    rnd_it(`GET /csv/Burkina%20Faso/Bobo-Dioulasso.html should respond with 200`, function(done) {

        request
            .get(`/csv/Burkina%20Faso/Bobo-Dioulasso.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Burkina%20Faso/Bobo-Dioulasso.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Burkina%20Faso/Bobo-Dioulasso.html`)
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


    rnd_it(`GET /csv/Burkina%20Faso/Ouagadougou.html should respond with 200`, function(done) {

        request
            .get(`/csv/Burkina%20Faso/Ouagadougou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Burkina%20Faso/Ouagadougou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Burkina%20Faso/Ouagadougou.html`)
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


    rnd_it(`GET /csv/Cuba/Santiago%20de%20Cuba.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cuba/Santiago%20de%20Cuba.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cuba/Santiago%20de%20Cuba.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cuba/Santiago%20de%20Cuba.html`)
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


    rnd_it(`GET /csv/Cuba/Havana.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cuba/Havana.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cuba/Havana.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cuba/Havana.html`)
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


    rnd_it(`GET /csv/Israel/Jerusalem.html should respond with 200`, function(done) {

        request
            .get(`/csv/Israel/Jerusalem.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Israel/Jerusalem.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Israel/Jerusalem.html`)
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


    rnd_it(`GET /csv/Israel/Tel%20Aviv-Yafo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Israel/Tel%20Aviv-Yafo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Israel/Tel%20Aviv-Yafo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Israel/Tel%20Aviv-Yafo.html`)
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


    rnd_it(`GET /csv/Peru/Trujillo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Peru/Trujillo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Peru/Trujillo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Peru/Trujillo.html`)
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


    rnd_it(`GET /csv/Peru/Arequipa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Peru/Arequipa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Peru/Arequipa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Peru/Arequipa.html`)
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


    rnd_it(`GET /csv/Peru/Callao.html should respond with 200`, function(done) {

        request
            .get(`/csv/Peru/Callao.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Peru/Callao.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Peru/Callao.html`)
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


    rnd_it(`GET /csv/Peru/Lima.html should respond with 200`, function(done) {

        request
            .get(`/csv/Peru/Lima.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Peru/Lima.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Peru/Lima.html`)
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


    rnd_it(`GET /csv/Sudan/Khartoum%20North.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sudan/Khartoum%20North.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sudan/Khartoum%20North.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sudan/Khartoum%20North.html`)
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


    rnd_it(`GET /csv/Sudan/Al%20Mijlad.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sudan/Al%20Mijlad.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sudan/Al%20Mijlad.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sudan/Al%20Mijlad.html`)
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


    rnd_it(`GET /csv/Sudan/Omdurman.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sudan/Omdurman.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sudan/Omdurman.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sudan/Omdurman.html`)
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


    rnd_it(`GET /csv/Sudan/Khartoum.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sudan/Khartoum.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sudan/Khartoum.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sudan/Khartoum.html`)
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


    rnd_it(`GET /csv/Laos/Vientiane.html should respond with 200`, function(done) {

        request
            .get(`/csv/Laos/Vientiane.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Laos/Vientiane.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Laos/Vientiane.html`)
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


    rnd_it(`GET /csv/Russia/Krasnodar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Krasnodar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Krasnodar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Krasnodar.html`)
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


    rnd_it(`GET /csv/Russia/Perm.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Perm.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Perm.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Perm.html`)
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


    rnd_it(`GET /csv/Russia/Krasnoyarsk.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Krasnoyarsk.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Krasnoyarsk.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Krasnoyarsk.html`)
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


    rnd_it(`GET /csv/Russia/Ufa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Ufa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Ufa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Ufa.html`)
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


    rnd_it(`GET /csv/Russia/Kazan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Kazan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Kazan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Kazan.html`)
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


    rnd_it(`GET /csv/Russia/Saint%20Petersburg.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Saint%20Petersburg.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Saint%20Petersburg.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Saint%20Petersburg.html`)
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


    rnd_it(`GET /csv/Russia/Moscow.html should respond with 200`, function(done) {

        request
            .get(`/csv/Russia/Moscow.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Russia/Moscow.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Russia/Moscow.html`)
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


    rnd_it(`GET /csv/Dominican%20Republic/Santo%20Domingo%20Este.html should respond with 200`, function(done) {

        request
            .get(`/csv/Dominican%20Republic/Santo%20Domingo%20Este.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Dominican%20Republic/Santo%20Domingo%20Este.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Dominican%20Republic/Santo%20Domingo%20Este.html`)
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


    rnd_it(`GET /csv/Dominican%20Republic/Santo%20Domingo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Dominican%20Republic/Santo%20Domingo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Dominican%20Republic/Santo%20Domingo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Dominican%20Republic/Santo%20Domingo.html`)
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


    rnd_it(`GET /csv/Sierra%20Leone/Freetown.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sierra%20Leone/Freetown.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sierra%20Leone/Freetown.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sierra%20Leone/Freetown.html`)
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


    rnd_it(`GET /csv/Nepal/Kathmandu.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nepal/Kathmandu.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nepal/Kathmandu.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nepal/Kathmandu.html`)
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


    rnd_it(`GET /csv/Haiti/Port-au-Prince.html should respond with 200`, function(done) {

        request
            .get(`/csv/Haiti/Port-au-Prince.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Haiti/Port-au-Prince.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Haiti/Port-au-Prince.html`)
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


    rnd_it(`GET /csv/Malawi/Lilongwe.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malawi/Lilongwe.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malawi/Lilongwe.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malawi/Lilongwe.html`)
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


    rnd_it(`GET /csv/Malawi/Blantyre.html should respond with 200`, function(done) {

        request
            .get(`/csv/Malawi/Blantyre.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Malawi/Blantyre.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Malawi/Blantyre.html`)
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


    rnd_it(`GET /csv/Canada/Ottawa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada/Ottawa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Canada/Ottawa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Canada/Ottawa.html`)
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


    rnd_it(`GET /csv/Canada/Edmonton.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada/Edmonton.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Canada/Edmonton.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Canada/Edmonton.html`)
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


    rnd_it(`GET /csv/Canada/Calgary.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada/Calgary.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Canada/Calgary.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Canada/Calgary.html`)
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


    rnd_it(`GET /csv/Canada/Vancouver.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada/Vancouver.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Canada/Vancouver.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Canada/Vancouver.html`)
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


    rnd_it(`GET /csv/Canada/Toronto.html should respond with 200`, function(done) {

        request
            .get(`/csv/Canada/Toronto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Canada/Toronto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Canada/Toronto.html`)
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


    rnd_it(`GET /csv/Ghana/Domaa-Ahenkro.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana/Domaa-Ahenkro.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ghana/Domaa-Ahenkro.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ghana/Domaa-Ahenkro.html`)
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


    rnd_it(`GET /csv/Ghana/Tamale.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana/Tamale.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ghana/Tamale.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ghana/Tamale.html`)
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


    rnd_it(`GET /csv/Ghana/Kumasi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana/Kumasi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ghana/Kumasi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ghana/Kumasi.html`)
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


    rnd_it(`GET /csv/Ghana/Accra.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana/Accra.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ghana/Accra.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ghana/Accra.html`)
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


    rnd_it(`GET /csv/Ghana/Boankra.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ghana/Boankra.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ghana/Boankra.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ghana/Boankra.html`)
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


    rnd_it(`GET /csv/Liberia/Monrovia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Liberia/Monrovia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Liberia/Monrovia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Liberia/Monrovia.html`)
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


    rnd_it(`GET /csv/Niger/Niamey.html should respond with 200`, function(done) {

        request
            .get(`/csv/Niger/Niamey.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Niger/Niamey.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Niger/Niamey.html`)
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


    rnd_it(`GET /csv/Kazakhstan/Shymkent.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kazakhstan/Shymkent.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kazakhstan/Shymkent.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kazakhstan/Shymkent.html`)
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


    rnd_it(`GET /csv/Kazakhstan/Nur-Sultan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kazakhstan/Nur-Sultan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kazakhstan/Nur-Sultan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kazakhstan/Nur-Sultan.html`)
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


    rnd_it(`GET /csv/Kazakhstan/Almaty.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kazakhstan/Almaty.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kazakhstan/Almaty.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kazakhstan/Almaty.html`)
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


    rnd_it(`GET /csv/Nicaragua/Managua.html should respond with 200`, function(done) {

        request
            .get(`/csv/Nicaragua/Managua.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Nicaragua/Managua.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Nicaragua/Managua.html`)
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


    rnd_it(`GET /csv/Bangladesh/Rangapukur.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bangladesh/Rangapukur.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bangladesh/Rangapukur.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bangladesh/Rangapukur.html`)
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


    rnd_it(`GET /csv/Bangladesh/Khulna.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bangladesh/Khulna.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bangladesh/Khulna.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bangladesh/Khulna.html`)
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


    rnd_it(`GET /csv/Bangladesh/Chattogram.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bangladesh/Chattogram.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bangladesh/Chattogram.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bangladesh/Chattogram.html`)
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


    rnd_it(`GET /csv/Bangladesh/Dhaka.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bangladesh/Dhaka.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bangladesh/Dhaka.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bangladesh/Dhaka.html`)
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


    rnd_it(`GET /csv/Tunisia/Tunis.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tunisia/Tunis.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Tunisia/Tunis.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Tunisia/Tunis.html`)
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


    rnd_it(`GET /csv/Norway/Oslo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Norway/Oslo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Norway/Oslo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Norway/Oslo.html`)
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


    rnd_it(`GET /csv/Kyrgyzstan/Bishkek.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kyrgyzstan/Bishkek.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kyrgyzstan/Bishkek.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kyrgyzstan/Bishkek.html`)
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


    rnd_it(`GET /csv/Burundi/Bujumbura.html should respond with 200`, function(done) {

        request
            .get(`/csv/Burundi/Bujumbura.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Burundi/Bujumbura.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Burundi/Bujumbura.html`)
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


    rnd_it(`GET /csv/Armenia/Yerevan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Armenia/Yerevan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Armenia/Yerevan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Armenia/Yerevan.html`)
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


    rnd_it(`GET /csv/Mauritania/Nouakchott.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mauritania/Nouakchott.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mauritania/Nouakchott.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mauritania/Nouakchott.html`)
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


    rnd_it(`GET /csv/Georgia/Tbilisi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Georgia/Tbilisi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Georgia/Tbilisi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Georgia/Tbilisi.html`)
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


    rnd_it(`GET /csv/Cameroon/Bafoussam.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cameroon/Bafoussam.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cameroon/Bafoussam.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cameroon/Bafoussam.html`)
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


    rnd_it(`GET /csv/Cameroon/Bamenda.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cameroon/Bamenda.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cameroon/Bamenda.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cameroon/Bamenda.html`)
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


    rnd_it(`GET /csv/Cameroon/Douala.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cameroon/Douala.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cameroon/Douala.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cameroon/Douala.html`)
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


    rnd_it(`GET /csv/Rwanda/Kigali.html should respond with 200`, function(done) {

        request
            .get(`/csv/Rwanda/Kigali.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Rwanda/Kigali.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Rwanda/Kigali.html`)
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


    rnd_it(`GET /csv/Senegal/Pikine.html should respond with 200`, function(done) {

        request
            .get(`/csv/Senegal/Pikine.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Senegal/Pikine.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Senegal/Pikine.html`)
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


    rnd_it(`GET /csv/Senegal/Dakar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Senegal/Dakar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Senegal/Dakar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Senegal/Dakar.html`)
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


    rnd_it(`GET /csv/Ireland/Dublin.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ireland/Dublin.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ireland/Dublin.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ireland/Dublin.html`)
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


    rnd_it(`GET /csv/Thailand/Chiang%20Mai.html should respond with 200`, function(done) {

        request
            .get(`/csv/Thailand/Chiang%20Mai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Thailand/Chiang%20Mai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Thailand/Chiang%20Mai.html`)
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


    rnd_it(`GET /csv/Thailand/Bangkok.html should respond with 200`, function(done) {

        request
            .get(`/csv/Thailand/Bangkok.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Thailand/Bangkok.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Thailand/Bangkok.html`)
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


    rnd_it(`GET /csv/Iran/Qom.html should respond with 200`, function(done) {

        request
            .get(`/csv/Iran/Qom.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Iran/Qom.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Iran/Qom.html`)
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


    rnd_it(`GET /csv/Iran/Karaj.html should respond with 200`, function(done) {

        request
            .get(`/csv/Iran/Karaj.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Iran/Karaj.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Iran/Karaj.html`)
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


    rnd_it(`GET /csv/Kenya/Mombasa.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kenya/Mombasa.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kenya/Mombasa.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kenya/Mombasa.html`)
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


    rnd_it(`GET /csv/Kenya/Meru.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kenya/Meru.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kenya/Meru.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kenya/Meru.html`)
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


    rnd_it(`GET /csv/Kenya/Nairobi.html should respond with 200`, function(done) {

        request
            .get(`/csv/Kenya/Nairobi.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Kenya/Nairobi.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Kenya/Nairobi.html`)
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


    rnd_it(`GET /csv/Finland/Helsinki.html should respond with 200`, function(done) {

        request
            .get(`/csv/Finland/Helsinki.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Finland/Helsinki.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Finland/Helsinki.html`)
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


    rnd_it(`GET /csv/Portugal/Porto.html should respond with 200`, function(done) {

        request
            .get(`/csv/Portugal/Porto.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Portugal/Porto.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Portugal/Porto.html`)
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


    rnd_it(`GET /csv/Portugal/Lisbon.html should respond with 200`, function(done) {

        request
            .get(`/csv/Portugal/Lisbon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Portugal/Lisbon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Portugal/Lisbon.html`)
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


    rnd_it(`GET /csv/Australia/Adelaide.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia/Adelaide.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Australia/Adelaide.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Australia/Adelaide.html`)
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


    rnd_it(`GET /csv/Australia/Perth.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia/Perth.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Australia/Perth.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Australia/Perth.html`)
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


    rnd_it(`GET /csv/Australia/Brisbane.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia/Brisbane.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Australia/Brisbane.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Australia/Brisbane.html`)
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


    rnd_it(`GET /csv/Australia/Melbourne.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia/Melbourne.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Australia/Melbourne.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Australia/Melbourne.html`)
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


    rnd_it(`GET /csv/Australia/Sydney.html should respond with 200`, function(done) {

        request
            .get(`/csv/Australia/Sydney.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Australia/Sydney.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Australia/Sydney.html`)
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


    rnd_it(`GET /csv/Czechia/Prague.html should respond with 200`, function(done) {

        request
            .get(`/csv/Czechia/Prague.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Czechia/Prague.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Czechia/Prague.html`)
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


    rnd_it(`GET /csv/New%20Zealand/Auckland.html should respond with 200`, function(done) {

        request
            .get(`/csv/New%20Zealand/Auckland.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/New%20Zealand/Auckland.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/New%20Zealand/Auckland.html`)
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


    rnd_it(`GET /csv/Denmark/Copenhagen.html should respond with 200`, function(done) {

        request
            .get(`/csv/Denmark/Copenhagen.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Denmark/Copenhagen.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Denmark/Copenhagen.html`)
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


    rnd_it(`GET /csv/Serbia/Belgrade.html should respond with 200`, function(done) {

        request
            .get(`/csv/Serbia/Belgrade.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Serbia/Belgrade.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Serbia/Belgrade.html`)
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


    rnd_it(`GET /csv/Mongolia/Ulaanbaatar.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mongolia/Ulaanbaatar.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mongolia/Ulaanbaatar.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mongolia/Ulaanbaatar.html`)
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


    rnd_it(`GET /csv/Netherlands/Amsterdam.html should respond with 200`, function(done) {

        request
            .get(`/csv/Netherlands/Amsterdam.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Netherlands/Amsterdam.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Netherlands/Amsterdam.html`)
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


    rnd_it(`GET /csv/Bulgaria/Sofia.html should respond with 200`, function(done) {

        request
            .get(`/csv/Bulgaria/Sofia.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Bulgaria/Sofia.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Bulgaria/Sofia.html`)
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


    rnd_it(`GET /csv/Mali/Balandougou.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mali/Balandougou.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mali/Balandougou.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mali/Balandougou.html`)
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


    rnd_it(`GET /csv/Mali/Bamako.html should respond with 200`, function(done) {

        request
            .get(`/csv/Mali/Bamako.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Mali/Bamako.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Mali/Bamako.html`)
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


    rnd_it(`GET /csv/Sweden/Stockholm.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sweden/Stockholm.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sweden/Stockholm.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sweden/Stockholm.html`)
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


    rnd_it(`GET /csv/Guinea/Conakry.html should respond with 200`, function(done) {

        request
            .get(`/csv/Guinea/Conakry.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Guinea/Conakry.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Guinea/Conakry.html`)
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


    rnd_it(`GET /csv/Saudi%20Arabia/Mecca.html should respond with 200`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia/Mecca.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Saudi%20Arabia/Mecca.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia/Mecca.html`)
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


    rnd_it(`GET /csv/Saudi%20Arabia/Jeddah.html should respond with 200`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia/Jeddah.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Saudi%20Arabia/Jeddah.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia/Jeddah.html`)
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


    rnd_it(`GET /csv/Uganda/Kampala.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uganda/Kampala.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Uganda/Kampala.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Uganda/Kampala.html`)
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


    rnd_it(`GET /csv/Uruguay/Montevideo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uruguay/Montevideo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Uruguay/Montevideo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Uruguay/Montevideo.html`)
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


    rnd_it(`GET /csv/Belgium/Brussels.html should respond with 200`, function(done) {

        request
            .get(`/csv/Belgium/Brussels.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Belgium/Brussels.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Belgium/Brussels.html`)
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


    rnd_it(`GET /csv/Syria/Damascus.html should respond with 200`, function(done) {

        request
            .get(`/csv/Syria/Damascus.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Syria/Damascus.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Syria/Damascus.html`)
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


    rnd_it(`GET /csv/Poland/Warsaw.html should respond with 200`, function(done) {

        request
            .get(`/csv/Poland/Warsaw.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Poland/Warsaw.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Poland/Warsaw.html`)
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


    rnd_it(`GET /csv/Puerto%20Rico/San%20Juan.html should respond with 200`, function(done) {

        request
            .get(`/csv/Puerto%20Rico/San%20Juan.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Puerto%20Rico/San%20Juan.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Puerto%20Rico/San%20Juan.html`)
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


    rnd_it(`GET /csv/Austria/Vienna.html should respond with 200`, function(done) {

        request
            .get(`/csv/Austria/Vienna.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Austria/Vienna.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Austria/Vienna.html`)
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


    rnd_it(`GET /csv/Belarus/Minsk.html should respond with 200`, function(done) {

        request
            .get(`/csv/Belarus/Minsk.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Belarus/Minsk.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Belarus/Minsk.html`)
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


    rnd_it(`GET /csv/Ecuador/Quito.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ecuador/Quito.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ecuador/Quito.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ecuador/Quito.html`)
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


    rnd_it(`GET /csv/Ecuador/Guayaquil.html should respond with 200`, function(done) {

        request
            .get(`/csv/Ecuador/Guayaquil.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Ecuador/Guayaquil.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Ecuador/Guayaquil.html`)
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


    rnd_it(`GET /csv/Hong%20Kong/Kowloon.html should respond with 200`, function(done) {

        request
            .get(`/csv/Hong%20Kong/Kowloon.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Hong%20Kong/Kowloon.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Hong%20Kong/Kowloon.html`)
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


    rnd_it(`GET /csv/Hong%20Kong/Hong%20Kong.html should respond with 200`, function(done) {

        request
            .get(`/csv/Hong%20Kong/Hong%20Kong.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Hong%20Kong/Hong%20Kong.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Hong%20Kong/Hong%20Kong.html`)
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


    rnd_it(`GET /csv/Cambodia/Phnom%20Penh.html should respond with 200`, function(done) {

        request
            .get(`/csv/Cambodia/Phnom%20Penh.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Cambodia/Phnom%20Penh.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Cambodia/Phnom%20Penh.html`)
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


    rnd_it(`GET /csv/Zimbabwe/Harare.html should respond with 200`, function(done) {

        request
            .get(`/csv/Zimbabwe/Harare.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Zimbabwe/Harare.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Zimbabwe/Harare.html`)
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


    rnd_it(`GET /csv/Sri%20Lanka/Colombo.html should respond with 200`, function(done) {

        request
            .get(`/csv/Sri%20Lanka/Colombo.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Sri%20Lanka/Colombo.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Sri%20Lanka/Colombo.html`)
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


    rnd_it(`GET /csv/Zambia/Lusaka.html should respond with 200`, function(done) {

        request
            .get(`/csv/Zambia/Lusaka.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Zambia/Lusaka.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Zambia/Lusaka.html`)
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


    rnd_it(`GET /csv/Uzbekistan/Tashkent.html should respond with 200`, function(done) {

        request
            .get(`/csv/Uzbekistan/Tashkent.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Uzbekistan/Tashkent.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Uzbekistan/Tashkent.html`)
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


    rnd_it(`GET /csv/Guatemala/Guatemala%20City.html should respond with 200`, function(done) {

        request
            .get(`/csv/Guatemala/Guatemala%20City.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Guatemala/Guatemala%20City.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Guatemala/Guatemala%20City.html`)
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


    rnd_it(`GET /csv/Hungary/Budapest.html should respond with 200`, function(done) {

        request
            .get(`/csv/Hungary/Budapest.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Hungary/Budapest.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Hungary/Budapest.html`)
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


    rnd_it(`GET /csv/United%20Arab%20Emirates/Dubai.html should respond with 200`, function(done) {

        request
            .get(`/csv/United%20Arab%20Emirates/Dubai.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/United%20Arab%20Emirates/Dubai.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/United%20Arab%20Emirates/Dubai.html`)
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


    rnd_it(`GET /csv/Singapore/Singapore.html should respond with 200`, function(done) {

        request
            .get(`/csv/Singapore/Singapore.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Singapore/Singapore.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Singapore/Singapore.html`)
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


    rnd_it(`GET /csv/Tanzania/Dar%20es%20Salaam.html should respond with 200`, function(done) {

        request
            .get(`/csv/Tanzania/Dar%20es%20Salaam.html`)
            .send()
            .expect(200)
            .end(done);

    });

    rnd_it(`GET /csv/Tanzania/Dar%20es%20Salaam.html should include city name and population in response`, function(done) {

        request
            .get(`/csv/Tanzania/Dar%20es%20Salaam.html`)
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




    rnd_it(`GET /csv/Ukraine.html should include links to 6 cities`, function(done) {

        request
            .get(`/csv/Ukraine.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Ukraine/Lviv.html","/csv/Ukraine/Zaporizhzhia.html","/csv/Ukraine/Donetsk.html","/csv/Ukraine/Dnipro.html","/csv/Ukraine/Odesa.html","/csv/Ukraine/Kharkiv.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Iraq.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Iraq.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Iraq/An%20Najaf.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Mexico.html should include links to 10 cities`, function(done) {

        request
            .get(`/csv/Mexico.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Mexico/Reynosa.html","/csv/Mexico/Hermosillo.html","/csv/Mexico/Saltillo.html","/csv/Mexico/Chihuahua.html","/csv/Mexico/Aguascalientes.html","/csv/Mexico/Mexicali.html","/csv/Mexico/Zapopan.html","/csv/Mexico/Puebla.html","/csv/Mexico/Tijuana.html","/csv/Mexico/Guadalajara.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/United%20States.html should include links to 64 cities`, function(done) {

        request
            .get(`/csv/United%20States.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/United%20States/Sarasota.html","/csv/United%20States/Rochester.html","/csv/United%20States/Albuquerque.html","/csv/United%20States/Hempstead.html","/csv/United%20States/El%20Paso.html","/csv/United%20States/Omaha.html","/csv/United%20States/McAllen.html","/csv/United%20States/Honolulu.html","/csv/United%20States/Tucson.html","/csv/United%20States/Hartford.html","/csv/United%20States/Fort%20Worth.html","/csv/United%20States/New%20Orleans.html","/csv/United%20States/Bridgeport.html","/csv/United%20States/Oklahoma%20City.html","/csv/United%20States/Buffalo.html","/csv/United%20States/Richmond.html","/csv/United%20States/Louisville.html","/csv/United%20States/Memphis.html","/csv/United%20States/Raleigh.html","/csv/United%20States/Nashville.html","/csv/United%20States/Salt%20Lake%20City.html","/csv/United%20States/Jacksonville.html","/csv/United%20States/Providence.html","/csv/United%20States/Milwaukee.html","/csv/United%20States/Bronx.html","/csv/United%20States/Virginia%20Beach.html","/csv/United%20States/Charlotte.html","/csv/United%20States/Columbus.html","/csv/United%20States/Kansas%20City.html","/csv/United%20States/Austin.html","/csv/United%20States/Indianapolis.html","/csv/United%20States/Cleveland.html","/csv/United%20States/Manhattan.html","/csv/United%20States/Cincinnati.html","/csv/United%20States/Pittsburgh.html","/csv/United%20States/San%20Jose.html","/csv/United%20States/San%20Antonio.html","/csv/United%20States/Sacramento.html","/csv/United%20States/Orlando.html","/csv/United%20States/Riverside.html","/csv/United%20States/Portland.html","/csv/United%20States/St.%20Louis.html","/csv/United%20States/Las%20Vegas.html","/csv/United%20States/Baltimore.html","/csv/United%20States/Queens.html","/csv/United%20States/Denver.html","/csv/United%20States/Tampa.html","/csv/United%20States/Brooklyn.html","/csv/United%20States/Minneapolis.html","/csv/United%20States/San%20Diego.html","/csv/United%20States/San%20Francisco.html","/csv/United%20States/Seattle.html","/csv/United%20States/Detroit.html","/csv/United%20States/Phoenix.html","/csv/United%20States/Boston.html","/csv/United%20States/Washington.html","/csv/United%20States/Atlanta.html","/csv/United%20States/Philadelphia.html","/csv/United%20States/Houston.html","/csv/United%20States/Dallas.html","/csv/United%20States/Miami.html","/csv/United%20States/Chicago.html","/csv/United%20States/Los%20Angeles.html","/csv/United%20States/New%20York.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Philippines.html should include links to 11 cities`, function(done) {

        request
            .get(`/csv/Philippines.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Philippines/Cagayan%20de%20Oro.html","/csv/Philippines/Pasig%20City.html","/csv/Philippines/Taguig%20City.html","/csv/Philippines/Antipolo.html","/csv/Philippines/Cebu%20City.html","/csv/Philippines/Zamboanga%20City.html","/csv/Philippines/Canagatan.html","/csv/Philippines/Caloocan%20City.html","/csv/Philippines/Davao.html","/csv/Philippines/Quezon%20City.html","/csv/Philippines/Manila.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/China.html should include links to 379 cities`, function(done) {

        request
            .get(`/csv/China.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/China/Langzhong.html","/csv/China/Shuangqiao.html","/csv/China/Wugang.html","/csv/China/Zunhua.html","/csv/China/Nehe.html","/csv/China/Chengguan.html","/csv/China/Licheng.html","/csv/China/Sizhan.html","/csv/China/Guangshui.html","/csv/China/Xinhualu.html","/csv/China/Qingnian.html","/csv/China/Qamdo.html","/csv/China/Zhongba.html","/csv/China/Laixi.html","/csv/China/Songzi.html","/csv/China/Korla.html","/csv/China/Fuyang.html","/csv/China/Dali.html","/csv/China/Cencheng.html","/csv/China/Zouping.html","/csv/China/Chaohucun.html","/csv/China/Xiangxiang.html","/csv/China/Qingping.html","/csv/China/Dongyang.html","/csv/China/Zijinglu.html","/csv/China/Puxi.html","/csv/China/Hejian.html","/csv/China/Gaoyou.html","/csv/China/Xindi.html","/csv/China/Renqiu.html","/csv/China/Rongjiawan.html","/csv/China/Chengxiang.html","/csv/China/Tongchuan.html","/csv/China/Dehui.html","/csv/China/Yuci.html","/csv/China/Macheng.html","/csv/China/Hailun.html","/csv/China/Shache.html","/csv/China/Leping.html","/csv/China/Wuxi.html","/csv/China/Weichanglu.html","/csv/China/Gaomi.html","/csv/China/Kaifeng%20Chengguanzhen.html","/csv/China/Laiyang.html","/csv/China/Zhoushan.html","/csv/China/Dengtalu.html","/csv/China/Yangchun.html","/csv/China/Jiaozhou.html","/csv/China/Lhasa.html","/csv/China/Quzhou.html","/csv/China/Zhuanghe.html","/csv/China/Hengzhou.html","/csv/China/Daye.html","/csv/China/Lichuan.html","/csv/China/Qingzhou.html","/csv/China/Kashgar.html","/csv/China/Taihecun.html","/csv/China/Taihe.html","/csv/China/Meishan.html","/csv/China/Feicheng.html","/csv/China/Anqiu.html","/csv/China/Taishan.html","/csv/China/Wuchuan.html","/csv/China/Huilong.html","/csv/China/Nada.html","/csv/China/Danyang.html","/csv/China/Luocheng.html","/csv/China/Yingcheng.html","/csv/China/Dongtai.html","/csv/China/Xingcheng.html","/csv/China/Shuizhai.html","/csv/China/Xingyi.html","/csv/China/Zaoyang.html","/csv/China/Xinyi.html","/csv/China/Zhongxiang.html","/csv/China/Wafangdian.html","/csv/China/Linhai.html","/csv/China/Wutong.html","/csv/China/Sanya.html","/csv/China/Shouguang.html","/csv/China/Fangchenggang.html","/csv/China/Hegang.html","/csv/China/Mizhou.html","/csv/China/Xishan.html","/csv/China/Zhongwei.html","/csv/China/Taixing.html","/csv/China/Xiashi.html","/csv/China/Ezhou.html","/csv/China/Zhufeng.html","/csv/China/Gongzhuling.html","/csv/China/Hanchuan.html","/csv/China/Yuyao.html","/csv/China/Xibeijie.html","/csv/China/Yingchuan.html","/csv/China/Xiantao.html","/csv/China/Yichun.html","/csv/China/Leiyang.html","/csv/China/Zhuji.html","/csv/China/Kaiyuan.html","/csv/China/Rongcheng.html","/csv/China/Lianyuan.html","/csv/China/Dingzhou.html","/csv/China/Guankou.html","/csv/China/Yingtan.html","/csv/China/Liaoyuan.html","/csv/China/Zhangye.html","/csv/China/Xinyu.html","/csv/China/Lingcheng.html","/csv/China/Dadukou.html","/csv/China/Xiangshui.html","/csv/China/Beidao.html","/csv/China/Yiwu.html","/csv/China/Yongcheng.html","/csv/China/Jingling.html","/csv/China/Laiwu.html","/csv/China/Shaoyang.html","/csv/China/Huaiyin.html","/csv/China/Rucheng.html","/csv/China/Jiangyin.html","/csv/China/Yicheng.html","/csv/China/Haicheng.html","/csv/China/Dayan.html","/csv/China/Baishan.html","/csv/China/Yushu.html","/csv/China/Wusong.html","/csv/China/Xintai.html","/csv/China/Liangshi.html","/csv/China/Huangshan.html","/csv/China/Yutan.html","/csv/China/Yangquan.html","/csv/China/Pingdu.html","/csv/China/Wuzhong.html","/csv/China/Fuqing.html","/csv/China/Chizhou.html","/csv/China/Gaozhou.html","/csv/China/Wenling.html","/csv/China/Guyuan.html","/csv/China/Yangshe.html","/csv/China/Pizhou.html","/csv/China/Shuangyashan.html","/csv/China/Jinhua.html","/csv/China/Huazhou.html","/csv/China/Leizhou.html","/csv/China/Xushan.html","/csv/China/Yucheng.html","/csv/China/Jianguang.html","/csv/China/Ximeicun.html","/csv/China/Lianjiang.html","/csv/China/Guiping.html","/csv/China/Jiaxing.html","/csv/China/Zhangjiajie.html","/csv/China/Huzhou.html","/csv/China/Hebi.html","/csv/China/Chengtangcun.html","/csv/China/Jingdezhen.html","/csv/China/Heihe.html","/csv/China/Changshu.html","/csv/China/Sanzhou.html","/csv/China/Baiyin.html","/csv/China/Benxi.html","/csv/China/Shuozhou.html","/csv/China/Shuyangzha.html","/csv/China/Wuwei.html","/csv/China/Fuxin.html","/csv/China/Beihai.html","/csv/China/Liaoyang.html","/csv/China/Jixi.html","/csv/China/Xiping.html","/csv/China/Yinchuan.html","/csv/China/Pingxiang.html","/csv/China/Fushun.html","/csv/China/Pingliang.html","/csv/China/Hezhou.html","/csv/China/Yushan.html","/csv/China/Chongzuo.html","/csv/China/Qingyang.html","/csv/China/Huaibei.html","/csv/China/Puning.html","/csv/China/Taizhou.html","/csv/China/Gaoping.html","/csv/China/Shengli.html","/csv/China/Qinbaling.html","/csv/China/Laibin.html","/csv/China/Sanmenxia.html","/csv/China/Nantong.html","/csv/China/Jincheng.html","/csv/China/Kuaidamao.html","/csv/China/Huainan.html","/csv/China/Shangzhou.html","/csv/China/Anshun.html","/csv/China/Luoyang.html","/csv/China/Yuxi.html","/csv/China/Jilin.html","/csv/China/Lianshan.html","/csv/China/Yingkou.html","/csv/China/Zhuhai.html","/csv/China/Dandong.html","/csv/China/Xining.html","/csv/China/Huangshi.html","/csv/China/Guangyuan.html","/csv/China/Lishui.html","/csv/China/Huizhou.html","/csv/China/Yantai.html","/csv/China/Shaoxing.html","/csv/China/Yunfu.html","/csv/China/Xuanzhou.html","/csv/China/Lincang.html","/csv/China/Luohe.html","/csv/China/Jiamusi.html","/csv/China/Yangjiang.html","/csv/China/Longba.html","/csv/China/Sanming.html","/csv/China/Yanjiang.html","/csv/China/Gulou.html","/csv/China/Huludao.html","/csv/China/Baoshan.html","/csv/China/Ankang.html","/csv/China/Zibo.html","/csv/China/Weifang.html","/csv/China/Chaozhou.html","/csv/China/Zigong.html","/csv/China/Nanping.html","/csv/China/Dingxi.html","/csv/China/Handan.html","/csv/China/Baotou.html","/csv/China/Tieling.html","/csv/China/Longyan.html","/csv/China/Mudanjiang.html","/csv/China/Xiangtan.html","/csv/China/Haikou.html","/csv/China/Daqing.html","/csv/China/Weihai.html","/csv/China/Zhongshan.html","/csv/China/Ningde.html","/csv/China/Rizhao.html","/csv/China/Shanwei.html","/csv/China/Shaoguan.html","/csv/China/Chaoyang.html","/csv/China/Wuzhou.html","/csv/China/Lanzhou.html","/csv/China/Xinzhou.html","/csv/China/Heyuan.html","/csv/China/Jinzhou.html","/csv/China/Tongliao.html","/csv/China/Qinhuangdao.html","/csv/China/Tongren.html","/csv/China/Zhenjiang.html","/csv/China/Putian.html","/csv/China/Leshan.html","/csv/China/Suining.html","/csv/China/Qincheng.html","/csv/China/Bazhou.html","/csv/China/Bengbu.html","/csv/China/Guiyang.html","/csv/China/Qinzhou.html","/csv/China/Changzhi.html","/csv/China/Siping.html","/csv/China/Shiyan.html","/csv/China/Tangshan.html","/csv/China/Hanzhong.html","/csv/China/Hohhot.html","/csv/China/Hechi.html","/csv/China/Nanchang.html","/csv/China/Jiaozuo.html","/csv/China/Puyang.html","/csv/China/Changzhou.html","/csv/China/Wenzhou.html","/csv/China/Yulinshi.html","/csv/China/Anshan.html","/csv/China/Baicheng.html","/csv/China/Neijiang.html","/csv/China/Xiamen.html","/csv/China/Zaozhuang.html","/csv/China/Baojishi.html","/csv/China/Harbin.html","/csv/China/Nanning.html","/csv/China/Wuhu.html","/csv/China/Taiyuan.html","/csv/China/Deyang.html","/csv/China/Binzhou.html","/csv/China/Loudi.html","/csv/China/Qingyuan.html","/csv/China/Chuzhou.html","/csv/China/Zhuzhou.html","/csv/China/Fuzhou.html","/csv/China/Ningbo.html","/csv/China/Shijiazhuang.html","/csv/China/Xiaoxita.html","/csv/China/Zhaoqing.html","/csv/China/Liuzhou.html","/csv/China/Hefei.html","/csv/China/Luzhou.html","/csv/China/Shantou.html","/csv/China/Linfen.html","/csv/China/Chifeng.html","/csv/China/Zhangjiakou.html","/csv/China/Meizhou.html","/csv/China/Jiangguanchi.html","/csv/China/Changchun.html","/csv/China/Guigang.html","/csv/China/Yiyang.html","/csv/China/Kunming.html","/csv/China/Hengshui.html","/csv/China/Yangzhou.html","/csv/China/Yibin.html","/csv/China/Xinpu.html","/csv/China/Jiangmen.html","/csv/China/Anqing.html","/csv/China/Chenzhou.html","/csv/China/Changsha.html","/csv/China/Huanglongsi.html","/csv/China/Mianyang.html","/csv/China/Jiujiang.html","/csv/China/Pingdingshan.html","/csv/China/Xiaoganzhan.html","/csv/China/Huaihua.html","/csv/China/Suqian.html","/csv/China/Bozhou.html","/csv/China/Guilin.html","/csv/China/Xianyang.html","/csv/China/Yuncheng.html","/csv/China/Zhangzhou.html","/csv/China/Weinan.html","/csv/China/Suzhou.html","/csv/China/Qiqihar.html","/csv/China/Suihua.html","/csv/China/Yongzhou.html","/csv/China/Langfang.html","/csv/China/Dazhou.html","/csv/China/Zhaotong.html","/csv/China/Jinan.html","/csv/China/Dezhou.html","/csv/China/Zhengzhou.html","/csv/China/Xiangyang.html","/csv/China/Pudong.html","/csv/China/Nangandao.html","/csv/China/Qingdao.html","/csv/China/Changde.html","/csv/China/Yulin.html","/csv/China/Dalian.html","/csv/China/Liaocheng.html","/csv/China/Jieyang.html","/csv/China/Qujing.html","/csv/China/Xinyang.html","/csv/China/Nanchong.html","/csv/China/Maoming.html","/csv/China/Huanggang.html","/csv/China/Zunyi.html","/csv/China/Shangrao.html","/csv/China/Bijie.html","/csv/China/Xingtai.html","/csv/China/Zhumadian.html","/csv/China/Hengyang.html","/csv/China/Yancheng.html","/csv/China/Zhanjiang.html","/csv/China/Cangzhou.html","/csv/China/Shangqiu.html","/csv/China/Shenyang.html","/csv/China/Jining.html","/csv/China/Nanjing.html","/csv/China/Quanzhou.html","/csv/China/Heze.html","/csv/China/Ganzhou.html","/csv/China/Zhoukou.html","/csv/China/Tongshan.html","/csv/China/Foshan.html","/csv/China/Hangzhou.html","/csv/China/Nanyang.html","/csv/China/Wuhan.html","/csv/China/Tianjin.html","/csv/China/Dongguan.html","/csv/China/Linyi.html","/csv/China/Baoding.html","/csv/China/Chongqing.html","/csv/China/Chengdu.html","/csv/China/Shenzhen.html","/csv/China/Beijing.html","/csv/China/Shanghai.html","/csv/China/Guangzhou.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Argentina.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Argentina.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Argentina/Comodoro%20Rivadavia.html","/csv/Argentina/Santiago%20del%20Estero.html","/csv/Argentina/Rosario.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Nigeria.html should include links to 20 cities`, function(done) {

        request
            .get(`/csv/Nigeria.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Nigeria/Osogbo.html","/csv/Nigeria/Kaduna.html","/csv/Nigeria/Warri.html","/csv/Nigeria/Ilorin.html","/csv/Nigeria/Akure.html","/csv/Nigeria/Ikeja.html","/csv/Nigeria/Abeokuta.html","/csv/Nigeria/Owerri.html","/csv/Nigeria/Ogbomoso.html","/csv/Nigeria/Ikare.html","/csv/Nigeria/Shagamu.html","/csv/Nigeria/Benin%20City.html","/csv/Nigeria/Maiduguri.html","/csv/Nigeria/Onitsha.html","/csv/Nigeria/Aba.html","/csv/Nigeria/Port%20Harcourt.html","/csv/Nigeria/Ibadan.html","/csv/Nigeria/Abuja.html","/csv/Nigeria/Kano.html","/csv/Nigeria/Lagos.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Japan.html should include links to 11 cities`, function(done) {

        request
            .get(`/csv/Japan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Japan/Kumamoto.html","/csv/Japan/Hamamatsu.html","/csv/Japan/Niigata.html","/csv/Japan/Chiba.html","/csv/Japan/Sendai.html","/csv/Japan/Hiroshima.html","/csv/Japan/Saitama.html","/csv/Japan/Kawasaki.html","/csv/Japan/Fukuoka.html","/csv/Japan/Yokohama.html","/csv/Japan/Nagoya.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Angola.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Angola.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Angola/Cabinda.html","/csv/Angola/Cacuaco.html","/csv/Angola/Luanda.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Myanmar.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Myanmar.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Myanmar/Kyaukse.html","/csv/Myanmar/Nay%20Pyi%20Taw.html","/csv/Myanmar/Mandalay.html","/csv/Myanmar/Rangoon.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/South%20Africa.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/South%20Africa.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/South%20Africa/Pretoria.html","/csv/South%20Africa/Pietermaritzburg.html","/csv/South%20Africa/Vereeniging.html","/csv/South%20Africa/Soweto.html","/csv/South%20Africa/Johannesburg.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Mozambique.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Mozambique.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Mozambique/Nampula.html","/csv/Mozambique/Matola.html","/csv/Mozambique/Maputo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/India.html should include links to 14 cities`, function(done) {

        request
            .get(`/csv/India.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/India/Thiruvananthapuram.html","/csv/India/Bhubaneshwar.html","/csv/India/Jalandhar.html","/csv/India/Bareilly.html","/csv/India/Gwalior.html","/csv/India/Amritsar.html","/csv/India/Najafgarh.html","/csv/India/Jabalpur.html","/csv/India/Meerut.html","/csv/India/Indore.html","/csv/India/Cawnpore.html","/csv/India/Lucknow.html","/csv/India/Prayagraj.html","/csv/India/Delhi.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Taiwan.html should include links to 6 cities`, function(done) {

        request
            .get(`/csv/Taiwan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Taiwan/Changhua.html","/csv/Taiwan/Zhongli.html","/csv/Taiwan/Tainan.html","/csv/Taiwan/Kaohsiung.html","/csv/Taiwan/Taichung.html","/csv/Taiwan/Taipei.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Somalia.html should include links to 7 cities`, function(done) {

        request
            .get(`/csv/Somalia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Somalia/Burco.html","/csv/Somalia/Baardheere.html","/csv/Somalia/Baidoa.html","/csv/Somalia/Gaalkacyo.html","/csv/Somalia/Hargeysa.html","/csv/Somalia/Boosaaso.html","/csv/Somalia/Mogadishu.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Indonesia.html should include links to 21 cities`, function(done) {

        request
            .get(`/csv/Indonesia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Indonesia/Samarinda.html","/csv/Indonesia/Padang.html","/csv/Indonesia/Pekanbaru.html","/csv/Indonesia/Bogor.html","/csv/Indonesia/Bandar%20Lampung.html","/csv/Indonesia/Cilacap.html","/csv/Indonesia/Bagam.html","/csv/Indonesia/Sumedang.html","/csv/Indonesia/Jepara.html","/csv/Indonesia/Makassar.html","/csv/Indonesia/Palembang.html","/csv/Indonesia/Semarang.html","/csv/Indonesia/Sangereng.html","/csv/Indonesia/Denpasar.html","/csv/Indonesia/Tangerang.html","/csv/Indonesia/Depok.html","/csv/Indonesia/Bekasi.html","/csv/Indonesia/Malang.html","/csv/Indonesia/Medan.html","/csv/Indonesia/Surabaya.html","/csv/Indonesia/Jakarta.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Benin.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Benin.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Benin/Cotonou.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Pakistan.html should include links to 12 cities`, function(done) {

        request
            .get(`/csv/Pakistan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Pakistan/Bahawalpur.html","/csv/Pakistan/Quetta.html","/csv/Pakistan/Islamabad.html","/csv/Pakistan/Hyderabad%20City.html","/csv/Pakistan/Saidu%20Sharif.html","/csv/Pakistan/Multan.html","/csv/Pakistan/Peshawar.html","/csv/Pakistan/Gujranwala.html","/csv/Pakistan/Rawalpindi.html","/csv/Pakistan/Faisalabad.html","/csv/Pakistan/Lahore.html","/csv/Pakistan/Karachi.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Germany.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Germany.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Germany/Frankfurt.html","/csv/Germany/Cologne.html","/csv/Germany/Hamburg.html","/csv/Germany/Munich.html","/csv/Germany/Berlin.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Turkey.html should include links to 12 cities`, function(done) {

        request
            .get(`/csv/Turkey.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Turkey/Erzurum.html","/csv/Turkey/Seyhan.html","/csv/Turkey/Denizli.html","/csv/Turkey/Samsun.html","/csv/Turkey/Kayseri.html","/csv/Turkey/Adana.html","/csv/Turkey/Mersin.html","/csv/Turkey/Gaziantep.html","/csv/Turkey/Konya.html","/csv/Turkey/Antalya.html","/csv/Turkey/Bursa.html","/csv/Turkey/Ankara.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/United%20Kingdom.html should include links to 7 cities`, function(done) {

        request
            .get(`/csv/United%20Kingdom.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/United%20Kingdom/Nottingham.html","/csv/United%20Kingdom/Leeds.html","/csv/United%20Kingdom/Southampton.html","/csv/United%20Kingdom/Portsmouth.html","/csv/United%20Kingdom/Liverpool.html","/csv/United%20Kingdom/Manchester.html","/csv/United%20Kingdom/Birmingham.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Spain.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Spain.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Spain/Bilbao.html","/csv/Spain/Valencia.html","/csv/Spain/Sevilla.html","/csv/Spain/Barcelona.html","/csv/Spain/Madrid.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Malaysia.html should include links to 6 cities`, function(done) {

        request
            .get(`/csv/Malaysia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Malaysia/George%20Town.html","/csv/Malaysia/Butterworth.html","/csv/Malaysia/Ipoh.html","/csv/Malaysia/Klang.html","/csv/Malaysia/Seberang%20Jaya.html","/csv/Malaysia/Kuala%20Lumpur.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Gabon.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Gabon.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Gabon/Libreville.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Colombia.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Colombia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Colombia/Palermo.html","/csv/Colombia/Bucaramanga.html","/csv/Colombia/Cali.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Madagascar.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Madagascar.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Madagascar/Androtsy.html","/csv/Madagascar/Antananarivo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Venezuela.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Venezuela.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Venezuela/Barinas.html","/csv/Venezuela/Barquisimeto.html","/csv/Venezuela/Caracas.html","/csv/Venezuela/Maracaibo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Morocco.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Morocco.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Morocco/Mediouna.html","/csv/Morocco/Marrakech.html","/csv/Morocco/El%20Kelaa%20des%20Srarhna.html","/csv/Morocco/Casablanca.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Congo%20(Brazzaville).html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Congo%20(Brazzaville).html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Congo%20(Brazzaville)/Pointe-Noire.html","/csv/Congo%20(Brazzaville)/Brazzaville.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/South%20Korea.html should include links to 13 cities`, function(done) {

        request
            .get(`/csv/South%20Korea.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/South%20Korea/Cheongju.html","/csv/South%20Korea/Bucheon.html","/csv/South%20Korea/Changwon.html","/csv/South%20Korea/Goyang.html","/csv/South%20Korea/Tongjin.html","/csv/South%20Korea/Ulsan.html","/csv/South%20Korea/Suwon.html","/csv/South%20Korea/Daejeon.html","/csv/South%20Korea/Gwangju.html","/csv/South%20Korea/Daegu.html","/csv/South%20Korea/Incheon.html","/csv/South%20Korea/Busan.html","/csv/South%20Korea/Seoul.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Algeria.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Algeria.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Algeria/Oran.html","/csv/Algeria/Algiers.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Bolivia.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Bolivia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Bolivia/Cochabamba.html","/csv/Bolivia/El%20Alto.html","/csv/Bolivia/La%20Paz.html","/csv/Bolivia/Santa%20Cruz.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Tajikistan.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Tajikistan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Tajikistan/Dushanbe.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Italy.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Italy.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Italy/Turin.html","/csv/Italy/Naples.html","/csv/Italy/Milan.html","/csv/Italy/Rome.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Brazil.html should include links to 8 cities`, function(done) {

        request
            .get(`/csv/Brazil.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Brazil/Natal.html","/csv/Brazil/Campo%20Grande.html","/csv/Brazil/Porto%20Alegre.html","/csv/Brazil/Recife.html","/csv/Brazil/Manaus.html","/csv/Brazil/Salvador.html","/csv/Brazil/Belo%20Horizonte.html","/csv/Brazil/Rio%20de%20Janeiro.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Central%20African%20Republic.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Central%20African%20Republic.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Central%20African%20Republic/Bangui.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Congo%20(Kinshasa).html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Congo%20(Kinshasa).html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Congo%20(Kinshasa)/Bunia.html","/csv/Congo%20(Kinshasa)/Kisangani.html","/csv/Congo%20(Kinshasa)/Bukavu.html","/csv/Congo%20(Kinshasa)/Lubumbashi.html","/csv/Congo%20(Kinshasa)/Kinshasa.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Burkina%20Faso.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Burkina%20Faso.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Burkina%20Faso/Bobo-Dioulasso.html","/csv/Burkina%20Faso/Ouagadougou.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Cuba.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Cuba.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Cuba/Santiago%20de%20Cuba.html","/csv/Cuba/Havana.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Israel.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Israel.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Israel/Jerusalem.html","/csv/Israel/Tel%20Aviv-Yafo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Peru.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Peru.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Peru/Trujillo.html","/csv/Peru/Arequipa.html","/csv/Peru/Callao.html","/csv/Peru/Lima.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Sudan.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Sudan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Sudan/Khartoum%20North.html","/csv/Sudan/Al%20Mijlad.html","/csv/Sudan/Omdurman.html","/csv/Sudan/Khartoum.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Laos.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Laos.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Laos/Vientiane.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Russia.html should include links to 7 cities`, function(done) {

        request
            .get(`/csv/Russia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Russia/Krasnodar.html","/csv/Russia/Perm.html","/csv/Russia/Krasnoyarsk.html","/csv/Russia/Ufa.html","/csv/Russia/Kazan.html","/csv/Russia/Saint%20Petersburg.html","/csv/Russia/Moscow.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Dominican%20Republic.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Dominican%20Republic.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Dominican%20Republic/Santo%20Domingo%20Este.html","/csv/Dominican%20Republic/Santo%20Domingo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Sierra%20Leone.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Sierra%20Leone.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Sierra%20Leone/Freetown.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Nepal.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Nepal.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Nepal/Kathmandu.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Haiti.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Haiti.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Haiti/Port-au-Prince.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Malawi.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Malawi.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Malawi/Lilongwe.html","/csv/Malawi/Blantyre.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Canada.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Canada.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Canada/Ottawa.html","/csv/Canada/Edmonton.html","/csv/Canada/Calgary.html","/csv/Canada/Vancouver.html","/csv/Canada/Toronto.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Ghana.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Ghana.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Ghana/Domaa-Ahenkro.html","/csv/Ghana/Tamale.html","/csv/Ghana/Kumasi.html","/csv/Ghana/Accra.html","/csv/Ghana/Boankra.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Liberia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Liberia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Liberia/Monrovia.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Niger.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Niger.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Niger/Niamey.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Kazakhstan.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Kazakhstan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Kazakhstan/Shymkent.html","/csv/Kazakhstan/Nur-Sultan.html","/csv/Kazakhstan/Almaty.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Nicaragua.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Nicaragua.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Nicaragua/Managua.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Bangladesh.html should include links to 4 cities`, function(done) {

        request
            .get(`/csv/Bangladesh.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Bangladesh/Rangapukur.html","/csv/Bangladesh/Khulna.html","/csv/Bangladesh/Chattogram.html","/csv/Bangladesh/Dhaka.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Tunisia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Tunisia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Tunisia/Tunis.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Norway.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Norway.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Norway/Oslo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Kyrgyzstan.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Kyrgyzstan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Kyrgyzstan/Bishkek.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Burundi.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Burundi.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Burundi/Bujumbura.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Armenia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Armenia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Armenia/Yerevan.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Mauritania.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Mauritania.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Mauritania/Nouakchott.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Georgia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Georgia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Georgia/Tbilisi.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Cameroon.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Cameroon.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Cameroon/Bafoussam.html","/csv/Cameroon/Bamenda.html","/csv/Cameroon/Douala.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Rwanda.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Rwanda.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Rwanda/Kigali.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Senegal.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Senegal.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Senegal/Pikine.html","/csv/Senegal/Dakar.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Ireland.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Ireland.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Ireland/Dublin.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Thailand.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Thailand.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Thailand/Chiang%20Mai.html","/csv/Thailand/Bangkok.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Iran.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Iran.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Iran/Qom.html","/csv/Iran/Karaj.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Kenya.html should include links to 3 cities`, function(done) {

        request
            .get(`/csv/Kenya.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Kenya/Mombasa.html","/csv/Kenya/Meru.html","/csv/Kenya/Nairobi.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Finland.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Finland.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Finland/Helsinki.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Portugal.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Portugal.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Portugal/Porto.html","/csv/Portugal/Lisbon.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Australia.html should include links to 5 cities`, function(done) {

        request
            .get(`/csv/Australia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Australia/Adelaide.html","/csv/Australia/Perth.html","/csv/Australia/Brisbane.html","/csv/Australia/Melbourne.html","/csv/Australia/Sydney.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Czechia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Czechia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Czechia/Prague.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/New%20Zealand.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/New%20Zealand.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/New%20Zealand/Auckland.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Denmark.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Denmark.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Denmark/Copenhagen.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Serbia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Serbia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Serbia/Belgrade.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Mongolia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Mongolia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Mongolia/Ulaanbaatar.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Netherlands.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Netherlands.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Netherlands/Amsterdam.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Bulgaria.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Bulgaria.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Bulgaria/Sofia.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Mali.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Mali.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Mali/Balandougou.html","/csv/Mali/Bamako.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Sweden.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Sweden.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Sweden/Stockholm.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Guinea.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Guinea.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Guinea/Conakry.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Saudi%20Arabia.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Saudi%20Arabia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Saudi%20Arabia/Mecca.html","/csv/Saudi%20Arabia/Jeddah.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Uganda.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Uganda.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Uganda/Kampala.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Uruguay.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Uruguay.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Uruguay/Montevideo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Belgium.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Belgium.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Belgium/Brussels.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Syria.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Syria.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Syria/Damascus.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Poland.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Poland.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Poland/Warsaw.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Puerto%20Rico.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Puerto%20Rico.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Puerto%20Rico/San%20Juan.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Austria.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Austria.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Austria/Vienna.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Belarus.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Belarus.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Belarus/Minsk.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Ecuador.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Ecuador.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Ecuador/Quito.html","/csv/Ecuador/Guayaquil.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Hong%20Kong.html should include links to 2 cities`, function(done) {

        request
            .get(`/csv/Hong%20Kong.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Hong%20Kong/Kowloon.html","/csv/Hong%20Kong/Hong%20Kong.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Cambodia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Cambodia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Cambodia/Phnom%20Penh.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Zimbabwe.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Zimbabwe.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Zimbabwe/Harare.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Sri%20Lanka.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Sri%20Lanka.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Sri%20Lanka/Colombo.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Zambia.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Zambia.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Zambia/Lusaka.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Uzbekistan.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Uzbekistan.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Uzbekistan/Tashkent.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Guatemala.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Guatemala.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Guatemala/Guatemala%20City.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Hungary.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Hungary.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Hungary/Budapest.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/United%20Arab%20Emirates.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/United%20Arab%20Emirates.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/United%20Arab%20Emirates/Dubai.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Singapore.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Singapore.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Singapore/Singapore.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


    rnd_it(`GET /csv/Tanzania.html should include links to 1 cities`, function(done) {

        request
            .get(`/csv/Tanzania.html`)
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
                        let url = new URL(l, "http://localhost:8989");
                        return url.pathname;
                    });

                    let target = new Set(["/csv/Tanzania/Dar%20es%20Salaam.html"]);

                    target.forEach(l => {
                        should(href).containEql(l);
                    });

                    done();

                }
            });

    });


});