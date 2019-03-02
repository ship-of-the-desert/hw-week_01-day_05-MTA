//Name: Khuzam Shubbar
/*
    array for every subway line
    input start line, start stop, finish line, finish stop
    --single line
        1. get index of start stop
        2. get index of finish stop
        3. calculate number of elements (number of stops) between and print
    --double lines
        1. get index of start stop
        2. print through union square
        4. start new line at union until indexof second stop
*/

//each line array
var N= ['Times Square', '34th', 'N- 28th', 'N- 23rd', 'Union Square', 'N- 8th'];
var L= ['L- 8th', '6th', 'Union Square', '3rd', '1st'];
var six= ['Grand Central', '33rd', '6- 28th', '6- 23rd', 'Union Square', 'Astor Place'];
var oneLine= true;

/*
    function that returns the journey and number of stops for user in an array
*/
function planTrip (startLine, startStop, endLine, endStop) {
    var journey= []; //store stops 
    //var numOfStops= 0; 
    
    
    
    var startIndex= startLine.indexOf(startStop);
    var endIndex= endLine.indexOf(endStop);

    /*
        assuming one line
    */
    if (startLine == endLine) {
        //check if user is going forwards of backwords (left to right or right to left through the array)
        if (startIndex < endIndex) {
            //traverse through the stops between the start stop and end stop + add to journey/count
            for (var i= startIndex+1 ; i <= endIndex; i++) {
                journey.push(startLine[i]);
                //numOfStops++;
            }
        } else {
            for (var i= startIndex-1 ; i >= endIndex; i--) {
                journey.push(startLine[i]);
                //numOfStops++;
            }
        }
    } else {
    /*
        assuming two lines
    */
        oneLine= false;
        var dropStop= startLine.indexOf('Union Square'); //where to change line

        //check if user is going forwards of backwords (left to right or right to left through the array)
        if (dropStop >= startIndex) {
            //add stops from startLine
            for (var x= startIndex; x <= dropStop; x++) {
                journey.push(startLine[x]);
                //numOfStops++;
            }
    
            //add stops from endLine
            if (endLine.indexOf('Union Square') < endIndex) {
                //add stops from endLine
                for (var z= endLine.indexOf('Union Square')+1; z <= endIndex; z++) {
                    journey.push(endLine[z]);
                    //numOfStops++;
                }
            } else {
                for (var z= endLine.indexOf('Union Square')-1; z > endIndex; z--) {
                    journey.push(endLine[z]);
                    //numOfStops++;
                }
            }
        } else {
            //add stops from startLine
            for (var i= startIndex-1 ; i >= dropStop; i--) {
                journey.push(startLine[i]);
                //numOfStops++;
            }
    
            //add stops from endLine
            if (endLine.indexOf('Union Square') < endIndex) {
                //add stops from endLine
                for (var z= endLine.indexOf('Union Square')+1; z <= endIndex; z++) {
                    journey.push(endLine[z]);
                    //numOfStops++;
                }
            } else {
                for (var z= endLine.indexOf('Union Square')-1; z > endIndex; z--) {
                    journey.push(endLine[z]);
                    //numOfStops++;
                }
            }
        }
    }
    
    //journey.push(numOfStops);
    return journey;

}

/*
    function that prints the journey+details
    input: array from planTrip
*/
function printTrip (trip) {

    var journeyPartOne= '';
    var journeyPartTwo= '';

    if (oneLine==false) {

        for (var i= 1; i <= trip.indexOf('Union Square'); i++) {
            journeyPartOne += trip[i];

            if (i != trip.indexOf('Union Square')) {
                journeyPartOne +=  ', ';
            }
        }
        console.log('You must travel through the following stops on the line: ' + journeyPartOne + '.');
        console.log('Change at Union Square.');

        for (var x= trip.indexOf('Union Square')+1; x < trip.length; x++) {
            journeyPartTwo += trip[x];

            if (x != trip.length-1) {
                journeyPartTwo +=  ', ';
            }
        }
        
        console.log('Your journey continues through the following stops: '+ journeyPartTwo + '.');
        console.log(`${trip.length} stops in total.`);
        
    } else {
        for (var i= 0; i < trip.length; i++) {
            journeyPartOne += trip[i];

            if (i != trip.length-1) {
                journeyPartOne +=  ', ';
            }
        }
        console.log('You must travel through the following stops on the line: ' + journeyPartOne + '.');
        console.log(`${trip.length} stops in total.`);
    }
}

printTrip(planTrip(N, 'Times Square', six, '33rd'));

