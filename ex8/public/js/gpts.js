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
