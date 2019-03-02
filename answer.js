//MTA Puzzle

// planTrip("N", "Times Square", "6", "33rd");
//planTrip receive user start and end point and display how many stops during their journey
//planTrip used "Union Square" as intersection point of start line not the same as end line
//intersection point used as stop point in the start line
//and as turning point to end line

function planTrip(startLine,startStop,endLine,endStop){

nLine=["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
lLine=["8th", "6th", "Union Square", "3rd","1st"];
sixLine =["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]; 


if (startLine=="N"){
var arrayOfStartTripLine=nLine;
var unionSStart=arrayOfStartTripLine.indexOf("Union Square");
}
if (startLine=="L"){
    var arrayOfStartTripLine=lLine;
    var unionSStart=arrayOfStartTripLine.indexOf("Union Square");


}
if(startLine=="6") {
    var arrayOfStartTripLine=sixLine;
    var unionSStart=arrayOfStartTripLine.indexOf("Union Square");

}
//.........................................
if (endLine=="N"){
    var arrayOfEndTripLine=nLine;
    var unionSEnd=arrayOfEndTripLine.indexOf("Union Square")

}
if (endLine=="L"){
    var arrayOfEndTripLine=lLine;
    var unionSEnd=arrayOfEndTripLine.indexOf("Union Square")
}
if(endLine=="6") {
    var arrayOfEndTripLine=sixLine;   
    var unionSEnd=arrayOfEndTripLine.indexOf("Union Square")

}   
var trip=arrayOfStartTripLine.indexOf(startStop);
var stop=-1;//-1 to not calculate start stop in the total of stops
var result=[" "];

var continueSearch=true;
var reachEndStop="";
if (startLine!=endLine){
for (var i=0;continueSearch==true;i++){
    if (startLine!=endLine){
    if (i<=unionSStart){//if i am at start line 
        result[i]=arrayOfStartTripLine[trip]+ " ";
        trip++;//jump to the next stop
        stop++;//increase stop  
        reachEndStop+=result[i];
        var reachStop= reachEndStop.includes(endStop);
        }
    if (reachStop==true){//check if reaching end stop
        continueSearch=false;
        }

    if (i>unionSStart){//reach union point from start line
        result[i]=arrayOfEndTripLine[unionSEnd-1]+"";//going to union point at end line and go back on step to allocate the element before it
        unionSEnd--;//back to one stop
        stop++;//increase stop 
        reachEndStop+=result[i];
        var reachStop= reachEndStop.includes(endStop);
        } 
        if (reachStop==true){//check if reaching end stop
            continueSearch=false;
            }   
        }  
    }
var startSlice= result.indexOf("Union Square ");
var stopsBeforeUnion=result.slice(0,startSlice+1);
var stopsAfterUnion=result.slice(startSlice+1);
    var outMessage=(`You must travel through the following stops on the ${startLine} line: ${stopsBeforeUnion}
Change at Union Square.
Your journey continues through the following stops:${stopsAfterUnion}
${stop} stops in total.`);
} 

//here the start and stop lines are the same
else {
    for (i=0;i<=arrayOfEndTripLine.indexOf(endStop);i++){//this loop will end at the endStop
            result[i]=arrayOfStartTripLine[trip]+ " ";//add the stop the the result
            trip++;//jump to the next stop
            stop++;//increase stop  
}
var outMessage=(`You must travel through the following stops on the ${startLine} line: ${result}
${stop} stops in total.`);
}



console.log(outMessage);

}
planTrip("N","Times Square","6","33rd");
