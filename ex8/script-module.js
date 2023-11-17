/**
 * Web Atelier 2023  Exercise 5 - Web Apps with Express.js
 *
 * Student: __Elvira Baltasar__
 *
 * Script Module
 *
 * Populate with the code from your previous assignments
 *
 */



/**
 * Converts a floating point number representing a GPS coordinate to a string in DMS format.
 * @param {Float} gps - A floating point number representing a GPS coordinate (latitude or longitude).
 * @returns a string with the DMS representation of the GPS coordinate
 */
function gps2str(gps) {
    if (-180 > gps > 180 || isNaN(gps)){
        return undefined;
    }

    let degrees = Math.trunc(gps);
    
    let minutesFloat = (gps - degrees) * 60;
    
    let minutes = Math.trunc(minutesFloat);
    minutes = Math.abs(minutes);
    let secondsFl = (Math.abs(gps) - Math.abs(degrees) - minutes/60) * 3600;
    let seconds = Math.round(secondsFl)
    seconds = Math.abs(seconds);

    if (seconds === 60){
        minutes++;
        seconds = 0;
    }
    if (minutes === 60){
        if (degrees < 0){
            degrees--;
        }else{
            degrees++;
        }

        minutes = 0;
    }
  // Format the result as a string
    return `${degrees}° ${minutes}' ${seconds}"`;
}


/**
 * @param {String} csv - A string with the CSV-formatted data.
 * @param {Boolean} drop_header - If true, the first line of the CSV is dropped from the result.
 * @param {Boolean} only_header - If true, only the first line of the CSV is returned as plan Array of Strings.
 * @return {String[][]} - the content of the CSV as array of String arrays. The outer array contains an entry for each line.
 *   The inner array contains the values found separated by commas on each line.
 */
function parseCSV(csv, drop_header = true, only_header = false) {
    //TODO - copy from ex2
    if (drop_header && only_header){
        return [];
    }
    
    if (typeof csv !== 'string' || Array.isArray(csv)){
        return undefined;
    } 
    let a = csv.split('\n');

    if(a.length > 0 && a[a.length-1] === ''){
        a.pop();
    }

    let res = [];

    if (only_header) { 
        return a[0].split(',');
    }

    for (let i = 0; i<a.length; i++){
        const value = a[i].split(',');
        res.push(value);
    }

    if (drop_header){
        res.shift();
    }
    return res;
}

/**
 * Return an array with the distinct values of a column
 * @param {String[][]} a - an array of string arrays
 * @param {Number} column - the index of the column to extract the values from
 * @returns {String[]} an array of strings with the distinct values of the column
 */
function getDistinctValues(a, column) {
    let result = new Set();

    a.forEach(l => result.add(l[column]));

    return Array.from(result);
}

/**
 * Filter an array of string arrays by a column value
 * @param {String[][]} a - an array of string arrays
 * @param {Number} column - the index of the column to filter on
 * @param {String} value - the value to filter on
 * @return {String[][]} - an array of string arrays containing only the rows
 * where the value of the column matches the value parameter
 */

function filter(a, column, value) {
    return a.filter(l => l[column] == value);
}

/**
 * Generate HTML skeleton for the country index page
 * @param {String[]} countries
 * @param {Object} o - one of the URL formatter objects
 * @returns HTML string with links to the country pages
 */
function renderCountryIndex(countries, o) {
    return countries.map(c => `<a href="${o.country(c)}">${c}</a>`).sort().join(" - \n");
}

/**
 * Generate HTML skeleton for the country page with the city list
 * @param {String} country - name of the country
 * @param {String[]} cities - list of cities in the country
 * @param {Object} o - one of the URL formatter objects
 * @returns HTML string with links to the city pages
 */
function renderCountryPage(country, cities, o) {
    return `<a href='${o.index}'>Switch Country</a> - <h1>${country}</h1>` + cities.map(c => `<a href="${o.city(country, c)}">${c}</a>`).sort().join(" - \n");
}

/**
 * Generate HTML skeleton for the city page
 * @param {String[]} c - one of the city rows from the CSV file
 * @param {Object} o - one of the URL formatter objects
 * @returns HTML string with city details and link back to the country page
 */
function renderCityPage(c, o) {
    return `<h1 class="city">${c[0]}</h1>Longitude: ${c[1]}<br>Latitude: ${c[2]}<br>Country: <a href="${o.country(c[3])}">${c[3]}</a><br>Population: <span class="population">${c[6]}</span>`;
}

//use this object in Task 3 as the o parameter of the render functions
const URL_dynamic_formatter = {
    index: "/geo",
    country: (country) => `/geo?c=${encodeURI(country)}`,
    city: (country, city) => `/geo?c=${encodeURI(country)}&city=${encodeURI(city)}`
}

//use this object in Task 4 as the o parameter of the render functions
const URL_static_formatter = {
    index: "/csv/countries.html",
    country: (country) => `/csv/${encodeURI(country)}.html`,
    city: (country, city) => `/csv/${encodeURI(country)}/${encodeURI(city)}.html`
}

//TODO complete so that the functions and objects can be used outside the module in Tasks 3 or 4
module.exports = {
    gps2str,
    parseCSV,
    getDistinctValues,
    renderCountryIndex,
    renderCountryPage,
    renderCityPage,
    URL_dynamic_formatter,
    URL_static_formatter}