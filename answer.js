//making an arrays or object for lines
//how many stops in each line and how to go to each stop
//only one stop can be change in it 'Union Square'
//.indexOf to know where to stop
//when change the line use .includes() 'US' and go to target

   var nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
   var lLine = ['8', '6th', 'Union Square', '3rd', '1st'];
   var sixLine = ['Grand Central', '33rd', '28', '23', 'Union Square', 'Astor Place'];
 
var planTrip = function (startLine, firstStop, changeLine, endStop) {
    
 if (changeLine === startLine){
    let endStop = startLine[startLine.length - 1];
    if (startLine === nLine && firstStop === 'Times Square') {
     
        console.log(`You must travel through the following stops ${nLine},on the N line`);
        console.log(nLine.length + "stops in total.");
  
    } else if (startLine === lLine && firstStop === '8') {
        // let endStop = lLine[lLine.length - 1];
        console.log(`You must travel through the following stops ${lLine},on the N line `);
        console.log(lLine.length + "stops in total.");
  
    } else  {
        // let endStop = sixLine[sixLine.length - 1];
        console.log(`You must travel through the following stops ${sixLine},on the N line `);
        console.log(sixLine.length + "stops in total.");
    }
} else {
    
    console.log("Change at Union Square.");
    let endStop1 = changeLine[changeLine.length - 1];
   let lastStops = (changeLine.indexOf('Union Square')) +  (changeLine.indexOf(endStop1));
        console.log("Your journey continues through the following stops:" + changeLine[lastStops] );
        let totalStop = startLine.length + lastStops;
        console.log(totalStop + "stops in total.");
}

}
planTrip("nLine", "Times Square", "nLine", '8th');

