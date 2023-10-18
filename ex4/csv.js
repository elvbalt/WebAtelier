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

    const cities = script.filter(csv, 3, country); //pillo toda la informacion de las ciudades de este pais
    const cityNames = cities.map(cityData => cityData[0]); //me quedo solo con los nombres

    const countryHTML = script.renderCountryPage(country, cityNames, script.URL_static_formatter); //lo pongo en la pagina

    // Create the folder for the country
    const countryPath = path.join(root, encodeURIComponent(country)); //creo el camino a la carpeta del pais
    fs.ensureDirSync(countryPath); //creo carpeta

    // Write the country page to the country folder

    fs.writeFile(path.join(root, `${encodeURIComponent(country)}.html`), countryHTML); //en la carpeta general pongo el html del pais


    // Generate the HTML files for the city pages of each country
    cities.forEach(cityData => {
        const cityName = cityData[0]; //pillo los datos de la ciudad
        const cityHTML = script.renderCityPage(cityData, script.URL_static_formatter); //creo la pagina

        // Write the city page to the country folder
        fs.writeFile(path.join(countryPath, `${encodeURIComponent(cityName)}.html`), cityHTML); //escribo el archivo 
    });
});
