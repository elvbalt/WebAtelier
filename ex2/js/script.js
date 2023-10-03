/**
 * Web Atelier 2023 2 - JavaScript
 *
 * Student: __Elvira Baltasar__
 *
 * Write your solution by completing the following functions
 *
 */


//--------------------------------------------------------------------------------------
// Task 1 - ★☆☆
//--------------------------------------------------------------------------------------


/**
 * @param {number} n - A number.
 * @return {string} A string which represents the integer part of the number with the ' character as the thousands separator.
 * If the input value is undefined or NaN, the resulting string should be "???".
 * If the input value is not a number, it should be converted to a number before processing.
 */
function format_thousands(n) {
    if (isNaN(n) || n === undefined){
        return "???";
    }
    if(n < 1000 && n > -1000){
        return String(n);
    } else{

        const num = n.toString();
  
        let parts = num.split('.');

        let integerPart = parts[0];
        let decPart = parts[1];
      
        //https://stackoverflow.com/questions/2254185/regular-expression-for-formatting-numbers-in-javascript
        //https://blog.devgenius.io/how-to-format-a-number-with-commas-as-thousands-digit-separators-in-javascript-ce6ff8475192
        // the /\B(?=(\d{3}) looks for groups of 3 digits before the decimal place
        //the \B hace q no se añada ' al principio
        //?= nos asegura q solo se añade ' si a la izq de los 3 digitos hay otro

        const Integer = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
      
        let formattedn = Integer;
        if (decPart !== undefined) {
          formattedn += '.' + decPart;
        }
      
        return formattedn;

    }
    }





/**
* @param {Number[]} a - The array of numbers.
* @param {Number} c - The scalar multiplier.
* @return {Number[]} An array computed by multiplying each element of the input array `a`
* with the input scalar value `c`.
*/
function scalar_product(a, c) {
    if (isNaN(c) || c === undefined ||! Array.isArray(a)){
        return undefined;
    }
    if (c === 1){
        return a;
    }
    if(c === 0){
        return new Array(a.length).fill(0);
    }
    let i = 0;
    let res = new Array(a.length);
    for (i = 0; i < a.length; i++){
        res[i] = a[i] * c;
    }

    return res;
}


/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number} A value computed by summing the products of each pair
 * of elements of its input arrays `a`, `b` in the same position.
 */
function inner_product(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b) || a.length !== b.length){
        return undefined;
    }

    let i = 0;
    let res = 0;
    for (i = 0; i < a.length; i++){
        res = a[i] * b[i] + res;
    }

    return res;
}




/**
 * @param {String} csv - A string with the CSV-formatted data.
 * @param {Boolean} drop_header - If true, the first line of the CSV is dropped from the result.
 * @param {Boolean} only_header - If true, only the first line of the CSV is returned as plan Array of Strings.
 * @return {String[][]} - the content of the CSV as array of String arrays. The outer array contains an entry for each line.
 *   The inner array contains the values found separated by commas on each line.
 */
function parseCSV(csv, drop_header = true, only_header = false) {
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


    /*if (arr[arr.length-1].length === 0){
        arr.pop();
    }
    if(drop_header){
        for (let i = 0; i < arr.length; i++){
            res.push(arr[i+1].split(","));
        }
    }else if (only_header){
        return arr[0].split(",");
    }else{
        for (let i = 0; i < arr.length; i++){
            res.push(arr[i].split(","));
        }
    }*/
}


/**
 * @param {String[][]} csv_array - the array representation of the CSV-formatted data.
 * @return {String[][]} - the content of the CSV, keeping only the lines which do not include empty entries.
 */
function clean(csv_array) {
    if (csv_array === undefined || !Array.isArray(csv_array)){
        return undefined;
    }

    return csv_array.filter(line => line.every(value => value !== ''));
    //return csv_array.filter(line => !line.includes("")); //some(value => value.trim() === ''));

    //return csv_array.filter(line => !line.contais(" "));

    /*let clean_array = csv_array.filter((arr) => {
        let dejar = true;
        for (let i= 0; i != arr.length; i++){
            if(!arr[i]){
                dejar = false;
            }
        }
        return dejar;
    })*/

    //return clean_array;
}

/**
 *
 * @param {String[][]} csv_array - the array representation of the CSV-formatted data.
 * @param {Integer} column - the column to be extracted
 * @return {Integer[]} - an array with the content of the selected column converted to integer.
 */
function extractIntegers(csv_array, column) {
    /*if (csv_array === undefined || !Array.isArray(csv_array) || csv_array.length === 0){ // || !Array.isArray(csv_array)
        return undefined;
    }
    if (column > csv_array[0].length -1 || column < 0){
        return undefined;
    }

    let integers = [];

    for (let i = 0; i < csv_array.length; i++){
        if (isNaN(csv_array[i][column])){
            integers.push(NaN);
        }else{
            integers.push(parseInt(csv_array[i][column], 10));
        }
    }
    return integers;*/

    if (!Array.isArray(csv_array) || column === undefined || column < 0 || column >= csv_array[0].length) {
        return undefined;
    }

    if (csv_array.length === 0){
        return [];
    }
    let integers = [];

    integers = csv_array.map(line => {
        const value = parseInt(line[column], 10);
        return isNaN(value) ? NaN : value; });

    return integers;
    /*for (let i = 0; i < csv_array.length; i++) {
        
        let value = parseInt(csv_array[i][column]);

        
        if (isNaN(value)) {
            integers.push(NaN);
        } else {
            integers.push(value);
        }
    }

    return integers;*/
}


//--------------------------------------------------------------------------------------
// Task 1 - ★★☆
//--------------------------------------------------------------------------------------


/**
 *
 * @param {Number[]} a - array of numbers
 * @param {Number} max - the maximum value to be used for normalization (default 1)
 * @returns a normalized array of numbers
 */
function normalize(a, max) {
}





/**
 * Converts a floating point number representing a GPS coordinate to a string in DMS format.
 * @param {Float} gps - A floating point number representing a GPS coordinate (latitude or longitude).
 * @returns a string with the DMS representation of the GPS coordinate
 */
function gps2str(gps) {
}


//--------------------------------------------------------------------------------------
// Task 1 - ★★★
//--------------------------------------------------------------------------------------



/**
 * Converts a string representation of a GPS coordinate to the corresponding floating points number.
 * @param {String} dms - a string with the DMS representation of the GPS coordinate (latitude or longitude)
 * @returns A floating point number representing a GPS coordinate.
 */
function str2gps(dms) {
}




//--------------------------------------------------------------------------------------
// Task 2 - ★☆☆
//--------------------------------------------------------------------------------------



/**
 * Define an iterator function that allows iteration over an array or a sequence of numbers,
 * enabling navigation through advancing by a specified number of positions, or replacing the content of the array.
 *
 * @param {number[]} a - The array over which to iterate.
 * @return {function} - call this function to retrieve the next element of the array.
 * The function throws an error if called again after it reaches the last element.
 */
function iterator(a) {
    if (!Array.isArray(a)){
        return undefined;
    }

    let i = 0;

    function next(shift) {
        if (Array.isArray(shift)) {
          a = shift;
          i = 0;
          return next;
        } else if (typeof shift === 'number') {
          i += shift;
          return i;
        } else if (i < a.length) {
          return a[i++];
        } else {
          throw new Error('No more values left in the array');
        }
      }
    

  return next;
}


//--------------------------------------------------------------------------------------
// Task 2 - ★★☆
//--------------------------------------------------------------------------------------



/**
 * Creates a function that delays the execution of a provided callback function
 * by a specified time duration.
 *
 * @param {number} time - The time duration (in milliseconds) by which to delay
 *     the execution of the callback function (default 500).
 * With a negative value, it should throw an exception.
 * @returns {function} A delay function that accepts a callback function to be
 *     executed after the specified time has elapsed. If the function is called
 *     again before the time has elapsed, the previous callback function is
 *     not executed.
 */
function make_delay(time = 500) {
};




//--------------------------------------------------------------------------------------
// Task 2 - ★★★
//--------------------------------------------------------------------------------------



/**
 * Creates a FIFO (First-In-First-Out) pump function that processes incoming data
 * and passes it to the provided callback function every time milliseconds.
 *
 * @param {function} callback - The callback function that will be called with each data item.
 * @param {Integer} time - The time interval between each call to the callback function (default 0).
 * With a negative value, it should throw an exception.
 * @returns {function} A pump function that adds data to the queue and processes it.
 */
function make_fifo_pump(callback, time = 0) {
}



//--------------------------------------------------------------------------------------
// Task 3 - ★☆☆
// Task 4 - ★★☆
// Task 5 - ★★★
//--------------------------------------------------------------------------------------


/**
 * Load the map and the data
 * Called from the HTML page onload event
 */
function initMap() {

    let dom_range = document.querySelector("#range-population");

    createMap([0,0]);

    let cities = parseCSV(cities_csv);
    clean(cities);
    extractIntegers(cities);

    dom_range.min = 0; //TODO replace with the minimum population value
    dom_range.max = 37732000; //TODO replace with the maximum population value
    dom_range.value = (dom_range.min + dom_range.max) / 2;



    dom_range.addEventListener("input", e=>{

        displayCities(e.target.value);

    })

    

    /**
     * Display the cities on the map when the input[type="range"] HTML element changes
     * It should only include the cities with population > minpop
     * @param {Integer} minpop the minimum population of the cities to be displayed
     *
     */
    function displayCities(minpop) {
        removeMarkers();
        //for de population y con el indice q cumpla 
        //la condicion saco de cities la long y lat
        createMarker(lat, long);

    }

}










/**
 * Helper function to print a log message with the function call performed by the tests
 *
 * usage:
 *
 * logFunctionArguments(arguments);
 */
 function logFunctionArguments(a){

   console.log(`${a.callee.name}(${Array.from(a).map(j=>JSON.stringify(j)).join(", ")})`)

}
