/**
 * Web Atelier 2023  Exercise 4 - JavaScript on the Server-side
 *
 * Student: __ELVIRA BALTASAR__
 *
 * CSV to HTML script
 *
 * Task 4
 *
 */

//Useful modules to work with the file system
let fs = require("fs-extra");
let path = require("path");

//output folder
let root = path.join(__dirname, "public", "csv");

//input CSV file string
let _csv = ""+fs.readFileSync("geo.csv");

//load the script module
let script = require('./script-module');

//parse the CSV file string into the String[][]
let csv = script.parseCSV(_csv);

// extract the list of countries from the CSV
// Hint: make sure this method is exported by the script-module
let countries = script.getDistinctValues(csv, 3);

//create the output folder
fs.ensureDirSync(root);

//generate the HTML file for the index page
let html = script.renderCountryIndex(countries, script.URL_static_formatter);

//write the index page to the output folder
fs.writeFile(path.join(root, "countries.html"), html);

//for each country...
countries.forEach(country=>{
    //TODO complete the script to generate the HTML files for the country pages
    //TODO complete the script to generate the HTML files for the city pages of each country
    const citiesInCountry = script.filter(csv, 3, country);
    const countryPage = script.renderCountryPage(country, citiesInCountry.map(city => city[0]), script.URL_static_formatter);
    const countryFolderPath = path.join(root, encodeURIComponent(country));

    // Create the folder for the country
    fs.ensureDirSync(countryFolderPath);

    // Write the country page to the country folder
    fs.writeFileSync(path.join(countryFolderPath, `${encodeURIComponent(country)}.html`), countryPage);

    // Generate the HTML files for the city pages of each country
    citiesInCountry.forEach(cityData => {
        const city = cityData[0];
        const cityPage = script.renderCityPage(cityData, script.URL_static_formatter);
        fs.writeFileSync(path.join(countryFolderPath, `${encodeURIComponent(city)}.html`), cityPage);
    });
});
