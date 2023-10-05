/**
 * Web Atelier 2023 2 - JavaScript
 *
 * Automated Tests Cases
 *
 * Read-only file (do not edit)
 *
 */
let log = [];

function _countErrors(a, b, expected) {
    let result = countErrors(a, b);
    log.push({ a, b, result, expected });
    should.equal(result, expected);
    return result == expected;
}

function reporter(f) {
    return {
        reporter(out) {
            if (out.failed) {
                console.log(out);
                let l = log.pop();
                throw new Error(`${f}("${l.a}", "${l.b}") returned ${l.result}, expected ${l.expected}`);
            }
        }
    }
}

let fc_double = fc.double({ noDefaultInfinity: true, noNaN: true });




//generate a random CSV string
function generateCSV(rows, columns) {

    let result = "";
    let resulta = [[]];
    let cleana = [[]];

    let inta = [];

    let intCol = Math.max(Math.min(columns - 1, Math.floor(Math.random() * columns)), 0)

    for (let j = 0; j < columns; j++) {

        let value = Math.random().toString(36).substring(2, 5).toUpperCase();

        if (j == intCol) {
            value = "INT"
        }

        result += value;

        resulta[0].push(value);
        cleana[0].push(value);

        if (j < columns - 1) {

            result += ",";

        }

    }

    for (let i = 0; i < rows; i++) {

        result += "\n";

        let rowa = [];

        let full = Math.random() > 0.25;

        let clean = true;

        for (let j = 0; j < columns; j++) {

            let value = Math.random().toString(36).substring(2, 15);

            if (j == intCol) {

                value = Math.floor(1000000 * Math.random());
                inta.push(value);

                value = "" + value;

            } else {

                if (Math.random() > 0.75) {
                    value = "" + (1000 * Math.random()).toFixed(2);
                }

                if (Math.random() > 0.75) {
                    value = "" + gps2str(Math.random() * 360);
                }

                if (Math.random() > 0.75) {
                    value = "" + format_thousands(Math.floor(100000000 * Math.random()));
                }

                if (Math.random() > 0.75 && !full) {
                    value = "";
                    clean = false;
                }

            }

            result += value;
            rowa.push(value);

            if (j < columns - 1) {

                result += ",";

            }

        }

        if (clean) {
            cleana.push(rowa);
        }

        resulta.push(rowa);

    }

    return { txt: result, arr: resulta, clean: cleana, int: inta, intCol };
}



describe('★☆☆', function () {

    describe('Task 1', function () {

        describe('format_thousands', function () {

            let undef_str = "???";

            it('should return ' + undef_str, function () {

                should(format_thousands()).be.equal(undef_str);
                should(format_thousands(NaN)).be.equal(undef_str);
                // should(format_thousands({})).be.equal(undef_str);
                // should(format_thousands([])).be.equal(undef_str);
                // should(format_thousands(NaN)).be.equal(undef_str);

            });

            it('should return the same integer when less than 1000', function () {

                fc.assert(fc.property(fc.integer({ min: -999, max: 999 }), (n) => {

                    should(format_thousands(n)).equal(String(n));

                }));

            });

            it('should return the same float when less than 1000', function () {

                fc.assert(fc.property(fc.float({ min: -999, max: 999, noNaN: true }), (n) => {

                    should(format_thousands(n)).equal(String(n));

                }));

            });


            it('should include the right number of thousand separators \' with integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true }), (n) => {

                    let result = format_thousands(n);
                    let separators = Array.from(result).filter(c => c == "'").length;
                    let digits = ("" + n).replace("-", "").length;

                    // console.log(result, separators, digits, Math.floor(digits / 3));

                    should(separators).equal(Math.floor((digits - 1) / 3));

                }));

            });

            it('should include the right number of thousand separators \' with float values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true }), (n) => {

                    let result = format_thousands(n);
                    let separators = Array.from(result).filter(c => c == "'").length;
                    let digits = ("" + n).split(".")[0].replace("-", "").length;

                    // console.log(result, separators, digits, Math.floor(digits / 3));

                    should(separators).equal(Math.floor((digits - 1) / 3));

                }));

            });

        });


        describe('scalar_product', function () {
            it('should return undefined', function () {

                should.not.exist(scalar_product());

            });

            it('should return undefined', function () {

                let a = [1, 2, 3];

                should.not.exist(scalar_product(a));

                fc.assert(fc.property(fc.array(fc_double), (arr) => {

                    should.not.exist(scalar_product(arr));

                }));
            });

            it("preserves the length of the array", function () {

                fc.assert(fc.property(fc.array(fc_double), fc_double, (arr, num) => {

                    let len = arr.length;
                    should(len).equal(scalar_product(arr, num).length);

                }));
            });

            it("returns zero array if the factor is zero", function () {

                fc.assert(fc.property(fc.array(fc_double, { minLength: 1 }), (arr) => {

                    let zero = new Array(arr.length).fill(0);
                    should(zero).deepEqual(scalar_product(arr, 0));

                }));
            });

            it("preserves the array if the factor is one", function () {

                fc.assert(fc.property(fc.array(fc_double, { minLength: 1 }), (arr) => {

                    should(arr).deepEqual(scalar_product(arr, 1));

                }));
            });

            it("allows factors to be combined", function () {

                fc.assert(fc.property(fc.array(fc.float()), fc.float(), fc.float(), (arr, n1, n2) => {

                    should(scalar_product(scalar_product(arr, n1), n2)).deepEqual(scalar_product(arr, n1 * n2));

                }));
            });

            it("returns undefined if first argument is not an array", function () {

                fc.assert(fc.property(fc.anything().filter(x => !Array.isArray(x)), fc.float(), (x, n) => {

                    should.not.exist(scalar_product(x, n));

                }));
            });
        });

        describe('inner_product', function () {

            it("is undefined with undefined parameters", function () {

                should.not.exist(inner_product());

                fc.assert(fc.property(fc.array(fc.integer()), (a) => {

                    should.not.exist(inner_product(a));

                }));

            });

            it("is undefined with non-Array parameters", function () {

                should.not.exist(inner_product());

                fc.assert(fc.property(fc.anything(), fc.anything().filter(x => !Array.isArray(x)), (a, x) => {

                    should.not.exist(inner_product(a, x));

                }));

            });

            it("is symmetric", function () {

                fc.assert(fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (a1, a2) => {

                    let len = Math.min(a1.length, a2.length);

                    a1 = a1.slice(0, len);
                    a2 = a2.slice(0, len);

                    (inner_product(a1, a2)).should.equal(inner_product(a2, a1));

                }));

            });

            it("returns non-negative number when multiplying vector to itself", function () {

                fc.assert(fc.property(fc.array(fc.integer()), (a) => {

                    return inner_product(a, a) >= 0;

                }));

            });


            it("returns zero when multiplying to a zero-filled array", function () {

                fc.assert(fc.property(fc.array(fc.integer()), (a) => {

                    let zero = new Array(a.length).fill(0);

                    (0).should.equal(inner_product(a, zero));

                }));

            });

            it("returns undefined with arrays of different lengths", function () {

                fc.assert(fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (a1, a2) => {

                    if (a1.length != a2.length) {

                        should.not.exist(inner_product(a1, a2));

                    }

                }));

            });

        });



        describe('parseCSV', function () {

            it("returns undefined with undefined input", function () {

                should.equal(parseCSV(), undefined);

            });

            it("returns undefined with undefined input", function () {

                should.deepEqual(parseCSV(generateCSV(2, 2), true, true), []);

            });

            it("returns array of same length as the input CSV rows", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        should().not.equal(CSV.txt[CSV.txt.length - 1], "\n");

                        let result = parseCSV(CSV.txt, false, false);

                        should.equal(result.length, rows + 1);

                    }));

            });

            it("returns array of same length as the input CSV rows ignoring the last '\\n' empty line", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        should().not.equal(CSV.txt[CSV.txt.length - 1], "\n");

                        let result = parseCSV(CSV.txt + "\n", false, false);

                        should.equal(result.length, rows + 1);

                    }));

            });

            it("returns array of arrays, all with the same length as the input CSV columns", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = parseCSV(CSV.txt, false, false);

                        result.forEach(r => should.equal(r.length, cols));


                    }));

            });

            it("returns array of arrays with the same content as the input CSV text", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = parseCSV(CSV.txt, false, false);

                        should.deepEqual(result, CSV.arr);

                    }));

            });

            it("returns array of headings", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = parseCSV(CSV.txt, false, true);

                        should.deepEqual(result, CSV.arr[0]);

                    }));

            });

            it("returns array of arrays without the header entry", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 50 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = parseCSV(CSV.txt, true, false);

                        should.equal(result.length, rows);

                        should.deepEqual(result, CSV.arr.slice(1, rows + 1));


                    }));

            });

        });


        describe('clean', function () {

            it("returns undefined with undefined input", function () {

                should.equal(clean(), undefined);

            });

            it("returns array of arrays which do not have empty elements", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 10 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = clean(CSV.arr);

                        result.forEach((a, i) => {

                            a.forEach((e, j) => {
                                should(e).not.equal("");
                            });

                        });

                    }));

            });

            it("returns array of arrays which contain non-empty rows from the input", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 10 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let result = clean(CSV.arr);

                        should.deepEqual(result, CSV.clean);

                    }));

            });

            it("should not modify the input array", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 100 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let original = JSON.parse(JSON.stringify(CSV.arr));

                        let result = clean(CSV.arr);

                        should.deepEqual(original, CSV.arr);

                        should.deepEqual(result, CSV.clean);

                        should().not.deepEqual(original, result);

                    }));

            });

        });



        describe('extractIntegers', function () {

            it("returns undefined with undefined input", function () {

                should.equal(extractIntegers(), undefined);
                should.equal(extractIntegers([]), undefined);

                fc.assert(fc.property(fc.integer({ min: 5, max: 100 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let a = parseCSV(CSV.txt, true, false);

                        let result = extractIntegers(a); //missing column

                        should.equal(result, undefined);

                    }));

            });


            it("should extract an array of integers", function () {

                fc.assert(fc.property(fc.integer({ min: 5, max: 100 }), fc.integer({ min: 5, max: 10 }),
                    (rows, cols) => {

                        let CSV = generateCSV(rows, cols);

                        let a = parseCSV(CSV.txt, true, false);

                        let result = extractIntegers(a, CSV.intCol);

                        should.deepEqual(result, CSV.int);

                    }));
            });


        });

    });


    describe('Task 2', function () {

        describe('iterator', function () {
            it("iterator without array is undefined", function () {

                fc.assert(fc.property(fc.anything().filter(x => !Array.isArray(x)), (x) => {
                    let y = iterator(x);
                    should.not.exist(y);
                }));

            });
            it("iterator with array returns function", function () {

                fc.assert(fc.property(fc.array(fc.anything()), (arr) => {
                    ("function").should.equal(typeof iterator(arr));
                }));

            });

        });
        describe('next', function () {

            it("calling next() once returns the first element of the array", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 1 }), (arr) => {

                    let next = iterator(arr);
                    let result = next();

                    should(result).equal(arr[0]);

                }));

            });

            it("calling next() twice returns the second element of the array", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 2 }), (arr) => {

                    let next = iterator(arr);
                    let result = next();
                    let result2 = next();

                    should(result).equal(arr[0]);
                    should(result2).equal(arr[1]);

                }));

            });

            it("calling next() multiple times returns every element of the array one by one", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 3 }), (arr) => {

                    let next = iterator(arr);

                    let check = [];

                    arr.forEach((e, i) => {
                        check.push(next());
                    })

                    should(arr).deepEqual(check);

                }));

            });

            it("calling next() beyond the end of the array throws an Error", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 3 }), (arr) => {

                    let next = iterator(arr);

                    (function scan() {
                        for (let i = 0; i < arr.length; i++) next();
                    }).should.not.throw();

                    (next).should.throw();

                }));

            });

        });
        describe('next (advanced)', function () {

            it("calling next(0) returns the initial position", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 3 }), (arr) => {

                    let next = iterator(arr);

                    (0).should.equal(next(0));

                }));

            });

            it("calling next(0) returns the current position", function () {

                fc.assert(fc.property(fc.array(fc.anything(), { minLength: 3 }), fc.nat(), (arr, num) => {

                    let next = iterator(arr);

                    num = Math.min(arr.length - 1, num);

                    for (let i = 0; i < num; i++) next();

                    (num).should.equal(next(0));

                }));

            });

            it("calling next(-1) and next() again should go back to the previous element", function () {

                fc.assert(fc.property(fc.array(fc.string(), { minLength: 3 }), fc.nat(), (arr, num) => {

                    let next = iterator(arr);

                    let prev = next();

                    next(-1);

                    let again = next();

                    (prev).should.equal(again);

                }));

            });

            it("calling next([]) returns next itself", function () {

                fc.assert(fc.property(fc.array(fc.string(), { minLength: 3 }), fc.nat(), (arr, num) => {

                    let next = iterator(arr);

                    let beyond = next(arr);

                    ("function").should.equal(typeof beyond);
                    (next).should.equal(beyond);

                }));

            });

            it("calling next([]) resets the iterator to the initial position", function () {

                fc.assert(fc.property(fc.array(fc.string(), { minLength: 3 }), fc.nat(), (arr, num) => {

                    let next = iterator(arr);

                    let x = next();

                    (1).should.equal(next(0));

                    let beyond = next(arr);

                    (0).should.equal(beyond(0));

                    let y = beyond();

                    (x).should.equal(y);

                }));

            });

        });

    });


    describe('Task 3', function () {

        function loadMap(check) {
            let x = document.querySelector("iframe");
            x.src = "map.html";
            x.onload = function () {
                var y = (x.contentWindow || x.contentDocument);

                check(y.document, y._leaflet("map"));
            }
        }

        function rangeMove(doc, value) {
            let range = doc.querySelector("input[type='range']#range-population");
            range.value = value;
            let inputEvent = new Event('input');
            range.dispatchEvent(inputEvent);
        }

        describe('range input', function () {

            it("should be initialized with the right min/max attribute values", function (done) {

                loadMap(function (doc) {

                    let range = doc.querySelector("input[type='range']#range-population");

                    should(range.min).equal('0');
                    should(range.max).equal('37732000');

                    done();

                });

            })

            it("should be initialized with the value set to the center of the range", function (done) {

                loadMap(function (doc) {

                    let range = doc.querySelector("input[type='range']#range-population");

                    should(range.value).equal(''+(37732000/2));

                    done();

                });

            })

        });

        describe('display city counter', function () {

            it("should be initialized when the map is loaded", function (done) {

                loadMap(function (doc) {

                    let span = doc.querySelector("#cities-count");

                    should(span.innerText).equal('12');

                    done();

                });

            });

            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc) {

                    rangeMove(doc, 37732000-1);

                    setTimeout(()=>{

                        let span = doc.querySelector("#cities-count");

                        should(span.innerText).equal('1');

                        done();

                    });

                });

            });

        });

        describe('display population level', function () {

            it("should be initialized when the map is loaded", function (done) {

                loadMap(function (doc) {

                    let span = doc.querySelector("#cities-population");

                    should(span.innerText).equal(format_thousands(37732000/2));

                    done();

                });

            });

            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc) {

                    let value = Math.trunc(Math.min(37732000/10 + Math.random() * 10000, Math.max(37732000-1, 37732000/10 + (37732000 - 37732000/10) * Math.random() )));

                    rangeMove(doc, value);

                    setTimeout(()=>{

                        let span = doc.querySelector("#cities-population");

                        should(span.innerText).equal(format_thousands(value));

                        done();

                    });

                });

            });

        });


        describe('display markers on the map', function () {

            it("should be initialized when the map is loaded", function (done) {

                loadMap(function (doc, _leaflet) {

                    should(_leaflet.map._loaded).be.equal(true);

                    setTimeout(()=>{

                        should(_leaflet.marker_layer.getLayers().length).be.equal(12);

                        done();

                    }, 200);

                });

            });


            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc, _leaflet) {

                    rangeMove(doc, 18495097);

                    setTimeout(()=>{

                        should(_leaflet.marker_layer.getLayers().length).be.equal(15);

                        done();

                    }, 100);

                });

            });

            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc, _leaflet) {

                    rangeMove(doc, 25530454);

                    setTimeout(()=>{

                        should(_leaflet.marker_layer.getLayers().length).be.equal(4);

                        done();

                    }, 100);

                });

            });

            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc, _leaflet) {

                    rangeMove(doc, 20288905);

                    setTimeout(()=>{

                        should(_leaflet.marker_layer.getLayers().length).be.equal(11);

                        done();

                    }, 100);

                });

            });

            it("should reflect changes to the range input", function (done) {

                loadMap(function (doc, _leaflet) {

                    rangeMove(doc, 29260417);

                    setTimeout(()=>{

                        should(_leaflet.marker_layer.getLayers().length).be.equal(3);

                        done();

                    }, 100);

                });

            });

        });


    });

}); //★★☆

describe('★★☆', function () {

    describe('Task 1', function () {




        describe('normalize', function () {

            it("returns undefined with undefined input", function () {

                should.equal(normalize(), undefined);

            });


            it("returns an array with same length as the original", function () {

                fc.assert(fc.property(fc.array(fc.nat(), { minLength: 3, maxLength: 100 }),
                    (a) => {

                        let result = normalize(a, 1);

                        result.should.be.an.Array();

                        result.should.have.length(a.length);

                    }));

            });


            it("returns an array with values between 0 and 1", function () {

                fc.assert(fc.property(fc.array(fc.nat(), { minLength: 3, maxLength: 100 }),
                    (a) => {

                        let result = normalize(a, 1);

                        result.forEach((e, i) => {
                            should(e).be.within(0, 1);
                        });

                    }));

            });


            it("returns an array with values between 0 and 1 (default)", function () {

                fc.assert(fc.property(fc.array(fc.nat(), { minLength: 3, maxLength: 100 }),
                    (a) => {

                        let result = normalize(a);  //max defaults to 1

                        result.forEach((e, i) => {
                            should(e).be.within(0, 1);
                        });

                    }));

            });


            it("returns an array with values between 0 and max", function () {

                fc.assert(fc.property(fc.integer({ min: 2 }), fc.array(fc.nat(), { minLength: 3, maxLength: 100 }),
                    (max, a) => {

                        let result = normalize(a, max);

                        result.forEach((e, i) => {
                            should(e).be.within(0, max);
                        });

                    }));

            });

            it("extreme values should be scaled to 0 and 1", function () {

                fc.assert(fc.property(fc.array(fc.integer(), { minLength: 2, maxLength: 100 }),
                    (a) => {

                        let min = Math.min(...a);
                        let max = Math.max(...a);

                        if (min != max) {

                            let result = normalize(a, 1);

                            a.forEach((e, i) => {

                                if (e == min) {
                                    should(result[i]).equal(0);
                                }
                                if (e == max) {
                                    should(result[i]).equal(1);
                                }


                            });

                        }

                    }));

            });

        });


        describe('gps2str', function () {

            it('should return undefined with undefined input', function () {

                should.not.exist(gps2str());

            });

            it('should use the degree ° minute \' and seconds " separators', function () {

                fc.assert(fc.property(fc.float({ noNaN: true, min: -180, max: 180 }), (gps) => {

                    let result = gps2str(gps);

                    should(result).match(/°/);
                    should(result).match(/'/);
                    should(result).match(/"/);

                }));

            });

            it('should use the degree ° and minute \' separators followed by one space', function () {

                fc.assert(fc.property(fc.float({ noNaN: true, min: -180, max: 180 }), (gps) => {

                    let result = gps2str(gps);

                    should(result).match(/° /);
                    should(result).match(/' /);

                }));

            });

            it('should use the degree ° minute \' and seconds " separators in the correct sequence', function () {

                fc.assert(fc.property(fc.float({ noNaN: true, min: -180, max: 180 }), (gps) => {

                    let result = gps2str(gps);

                    should(result.indexOf("°")).be.lessThan(result.indexOf("'"));
                    should(result.indexOf("'")).be.lessThan(result.indexOf('"'));
                    should(result.indexOf('"')).be.lessThan(result.length);

                }));

            });

            it('should encode the right positive integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true, min: 0, max: 179 }), fc.nat({ max: 59 }), fc.nat({ max: 59 }),
                    (deg, min, sec) => {

                        let gps = deg + min / 60 + sec / 3600;

                        let result = gps2str(gps);

                        should(result).match(new RegExp(deg + "°"));
                        should(result).match(new RegExp(min + "'"));
                        should(result).match(new RegExp(sec + '"'));

                    }));

            });


            it('should encode the right negative integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true, min: -179, max: -1 }), fc.nat({ max: 59 }), fc.nat({ max: 59 }),
                    (deg, min, sec) => {

                        let gps = deg - min / 60 - sec / 3600;

                        let result = gps2str(gps);


                        should(result).match(new RegExp(deg + "°"));
                        should(result).match(new RegExp(min + "'"));
                        should(result).match(new RegExp(sec + '"'));

                    }));

            });

        });

    });

    describe('Task 2', function () {


        describe("makeDelay", function () {

            it("should return a function with undefined input", function () {

                let result = make_delay();

                should.exist(result);
                should(result).be.a.Function();

            });

            it("should throw with negative integer input", function () {

                fc.assert(fc.property(fc.integer({ max: -1 }),
                    (ms) => {

                        (() => make_delay(ms)).should.throw();

                    })
                );

            });

            it("should return a function with non-negative integer input", function () {

                fc.assert(fc.property(fc.nat(),
                    (ms) => {

                        let result = make_delay(ms);

                        should.exist(result);
                        should(result).be.a.Function();

                    })
                );
            });

        });


        describe("delay", function () {

            it("should eventually call the callback", function (done) {

                let test = [];

                fc.assert(fc.property(fc.nat({ max: 50 }),
                    (ms) => {

                        let result = make_delay(ms);
                        let i = test.push(false);
                        result(() => {
                            test[i - 1] = true;
                        });

                    })
                );

                setTimeout(() => {
                    test.forEach(x => should(x).equal(true));
                    done();
                }, 100);

            });

            it("should eventually call the callback once, even when called multiple times", function (done) {

                let test = [];

                fc.assert(fc.property(fc.integer({ min: 1, max: 10 }), fc.integer({ min: 1, max: 25 }),
                    (ms, rep) => {

                        let result = make_delay(ms);

                        let i = test.push(0);

                        for (let j = 0; j < rep; j++) {
                            result(() => {
                                test[i - 1]++;
                            });
                        }

                    })
                );

                setTimeout(() => {
                    //if the callback is called more than once, the test will fail
                    //the test array counts how many times the callback was called

                    // console.log(test);

                    test.forEach(x => should(x).equal(1));
                    done();
                }, 100);

            });

        });



    });

});
describe('★★★', function () {

    describe('Task 1', function () {

        describe('str2gps', function () {

            it('should return undefined with undefined input', function () {

                should.not.exist(str2gps());

            });

            it('should decode positive integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true, min: 0, max: 179 }), fc.nat({ max: 59 }), fc.nat({ max: 59 }),
                    (deg, min, sec) => {

                        let gps = deg + min / 60 + sec / 3600;

                        let result = gps2str(gps);

                        let gps2 = str2gps(result);

                        //console.log(result, gps, gps2);

                        should(gps).match(gps2);

                    }));

            });

            it('should decode negative integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true, min: -179, max: -1 }), fc.nat({ max: 59 }), fc.nat({ max: 59 }),
                    (deg, min, sec) => {

                        let gps = deg - min / 60 - sec / 3600;

                        let result = gps2str(gps);
                        let gps2 = str2gps(result);

                        console.log(result, gps, gps2);

                        should(gps).match(gps2);

                    }));

            });

            it('should decode explicitly positive integer values', function () {

                fc.assert(fc.property(fc.integer({ noNaN: true, min: 0, max: 179 }), fc.nat({ max: 59 }), fc.nat({ max: 59 }),
                    (deg, min, sec) => {

                        let gps = deg + min / 60 + sec / 3600;

                        let result = "+" + gps2str(gps);
                        let gps2 = str2gps(result);

                        // console.log(result, gps, gps2);

                        should(gps).match(gps2);

                    }));

            });

        });

    });

    describe('Task 2', function () {


        describe("make_fifo_pump", function () {

            it("returns undefined with undefined parameters", function () {

                should.equal(make_fifo_pump(), undefined);

            });

            it("should return a function with undefined time", function () {

                let result = make_fifo_pump(() => { });

                should.exist(result);
                should(result).be.a.Function();

            });

            it("should throw with negative time", function () {

                fc.assert(fc.property(fc.integer({ max: -1 }),
                    (ms) => {

                        (() => make_fifo_pump(() => { }, ms)).should.throw();

                    })
                );

            });

            it("should return a function with non-negative integer input", function () {

                fc.assert(fc.property(fc.nat(),
                    (ms) => {

                        let result = make_fifo_pump(() => { }, ms);

                        should.exist(result);
                        should(result).be.a.Function();

                    })
                );
            });

        });


        describe("pump", function () {

            it("data should eventually flow through the pump in FIFO order", function (done) {

                let test = [];

                fc.assert(fc.asyncProperty(fc.array(fc_double), (arr) => {

                    let i = test.push({arr: arr, result: []});

                    let pump = make_fifo_pump((data) => {
                        test[i-1].result.push(data);
                    }, 1);

                    arr.forEach(pump);

                })
                );

                setTimeout(() => {

                    test.forEach(t => should(t.arr).deepEqual(t.result));
                    done();

                }, 100);

            });

            it("pump should stop when receiving undefined input", function (done) {

                let test = [];

                fc.assert(fc.asyncProperty(fc.array(fc.hexaString({ minLength: 4, maxLength: 6 }), {minLength: 10}), (arr) => {

                    let i = test.push({arr: arr, result: []});

                    let pump = make_fifo_pump((data) => {
                        test[i-1].result.push(data);
                    }, 1);

                    arr.forEach(pump);
                    setTimeout(()=>pump(),0);

                })
                );

                setTimeout(() => {
                    test.forEach(t => should(t.result.length).be.below(t.arr.length));
                    done();

                }, 100);

            });

            it("pump should never start when receiving undefined input", function (done) {

                let test = [];

                fc.assert(fc.asyncProperty(fc.array(fc.hexaString({ minLength: 4, maxLength: 6 }), {minLength: 10}), (arr) => {

                    let i = test.push({arr: arr, result: []});

                    let pump = make_fifo_pump((data) => {
                        test[i-1].result.push(data);
                    }, 1);

                    arr.forEach(pump);
                    pump(); //this should empty the buffer and the timer should never find the previous elements

                })
                );

                setTimeout(() => {
                    test.forEach(t => should(t.result.length).be.equal(0));
                    done();

                }, 100);

            });

        });

    });

});