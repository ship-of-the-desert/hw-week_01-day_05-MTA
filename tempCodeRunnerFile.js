var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

var lineL = ['8th', '6th', 'Union Square', '3th', '1st'];

var line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];





// Start of the main function

function subwaySystem(startLine, startStop, endLine, endStop) {

    // Defining Variables 

    var numberOfStops = 0;

    var firstTripString = `You must travel through the following stops on the ${startLine} line: `;

    var secondTripString = 'Your journey continues through the following stops: ';



    // Defining two functions to calculate out stops and log them

    function firstJourney(startLine,startStop){



        // I used if statement to decide which way the customer is heading

        if(startLine.indexOf(startStop) > startLine.indexOf('Union Square')){

            startLine.reverse();            

        }

        for (let i = startLine.indexOf(startStop)+1; i < startLine.indexOf('Union Square'); i++) {

            firstTripString += startLine[i] + ', ';

            numberOfStops++;

        }

        firstTripString += 'and Union Square.'

        numberOfStops++;



        // logging the first string and changing at Union Square message

        console.log(firstTripString);

        console.log('Change at Union Square.');

    }



    function secondJourney(endLine,endStop){

        

        // I used if statement to decide which way the customer is heading

        if(endLine.indexOf(endStop) > endLine.indexOf('Union Square')){

            for (let i = endLine.indexOf('Union Square'); i < endLine.indexOf(endStop)+1; i++) {

                if( i <= endLine.indexOf(endStop)){

                    secondTripString += endLine[i] + ', '

                }

                else{

                    secondTripString += 'and ' + endLine[i] + '.'

                }

            }            

        }

        else if (endLine.indexOf(endStop) < endLine.indexOf('Union Square')){

            endLine.reverse();

            for (let i = endLine.indexOf('Union Square')+1; i < endLine.indexOf(endStop)+1; i++){

                if( i <=  endLine.indexOf(endStop) -1){

                    secondTripString += endLine[i] + ', '

                }

                else{

                    secondTripString += 'and ' + endLine[i] + '.'

                }

                numberOfStops++;

            } 

        }

        

        // logging the second string and the total number of stops

        console.log(secondTripString);

        console.log(`${numberOfStops} stops in total.`);

        

    }





    // starting line and ending line validations then assigning their value to the lines' arrays 

    if(startLine.toUpperCase() == 'N'){

        startLine = lineN;

    }

    else if(startLine.toUpperCase() == 'L'){

        startLine = lineL;

    }

    else if(startLine.toUpperCase() == '6'){

        startLine = line6;

    }

    else{

        return console.log('Please enter a valid starting line');

        

    }



    if(endLine.toUpperCase() == 'N'){

        endLine = lineN;

    }

    else if(endLine.toUpperCase() == 'L'){

        endLine = lineL;

    }

    else if(endLine.toUpperCase() == '6'){

        endLine = line6;

    }

    else{

        return console.log('Please enter a valid ending line');

        

    }



    // starting and ending stop Validations

    if(!startLine.includes(startStop)){

        return console.log('Oppss! we can\'t find your start destination. Enter a valid destination, please');

    }

    if(!endLine.includes(endStop)){

        return console.log('Oppss! we can\'t find your end destination. Enter a valid destination, please');

    }





    // Running the functions

    firstJourney(startLine,startStop);

    secondJourney(endLine,endStop);

    

}





// Testing

subwaySystem('N', 'Times Square', '6', '33rd');

