//object countain all subway lines
var Subway = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    sixth: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}
//function that return the final trip and the total number of stops
function planTrip(onLine, onStop, offLine, offStop) {
    var onLineArray = getTheKey(onLine)
    var offLineArray = getTheKey(offLine)
    var trip = [];
    trip.push(onLine);
    counter = 0;
    if (onLineArray == offLineArray) {
        //same line 
        for (i = onLineArray.indexOf(onStop) + 1; i <= onLineArray.indexOf(offStop); i++) {
            trip.push(i);
            counter++;
        }
    }
    else {
        //2 lines
        for (i = onLineArray.indexOf(onStop) ; i <= onLineArray.indexOf("Union Square"); i++) {
            trip.push(i);
            counter++;
        }
        trip.push(offLine)
        if (offLineArray.indexOf("Union Square") < offLineArray.indexOf(offStop)) {
            for (i = offLineArray.indexOf("Union Square") + 1; i <= offLineArray.indexOf(offStop); i++) {
                trip.push(i);
                counter++;
            }
        } else {
            for (i = offLineArray.indexOf("Union Square") - 1; i >= offLineArray.indexOf(offStop); i--) {
                trip.push(i);
                counter++;
            }
        }
    }
    trip.push(counter);
    return trip;
}
// function return the line stations 
function getTheKey(keyword) {
    switch (keyword) {
        case "N":
            return Subway.N;
            break;
        case "L":
            return Subway.L;
            break;
        case "6":
            return Subway.sixth;
            break;
        //default
    }
}
//user input 
printFinaltrip(planTrip("N", "Times Square", "N", "8th"));
printFinaltrip(planTrip("N", "Times Square", "6", "33rd"));
console.log(planTrip("N", "Times Square", "6", "33rd"));

function printFinaltrip(finalTrip){
console.log(`You must travel through the following stops on the ${finalTrip[0]} line:`);
var line = getTheKey(finalTrip[0]);

for (var i = 1; i <= finalTrip.length - 1; i++) {
    if (typeof finalTrip[i] != 'number'){//if (isNaN(finalTrip[i])) {
        console.log("Change at Union Square.");
        console.log(`Your journey continues through line ${finalTrip[i]} the following stops:`);
        line = getTheKey(finalTrip[i]);
        continue;
    }
    else {
        console.log(line[finalTrip[i]] + ", ");
    }
}
console.log(finalTrip[finalTrip.length - 1] + " stops in total.");
}

