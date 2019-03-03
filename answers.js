//Line (N) 
//The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
var N=["Times Square","34th","28th","23rd","Union Square","8th"]


//Line (L)
//The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
var L=["8th","6th",N[4],"3rd","1st"]

//Line (6)
//The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place
var six=["Grand Central","33rd","28th","23rd",N[4],"Astor Place"]

//The program takes the line and stop that a user is getting on at and the line and stop that user 
//is getting off at and prints the journey and the total number of stops for the trip in the console:
var stopsNames = ''
var stopsCount = 0
var firstLine = ''
var secondLine = ''
var planTrip = function(inLine,inStop,outLine,outStop){

    if(inLine == outLine){
        firstLine=inLine.value
        for (let index = inLine.indexOf(inStop); index <= outLine.indexOf(outStop); index++) {
            stopsNames+=inLine[index]+", "
            stopsCount++;    
        }  
        
        
        }
        console.log("You must travel through the following stops on the "+firstLine+" line:"+stopsNames)
        console.log(stopsCount+" stops in total.")
        if(inLine!=outLine){
            for (let index = inLine.indexOf(inStop); index <= outLine.indexOf(N[4]); index++) {
                stopsNames+=inLine[index]+", "
                stopsCount++;   
                

        }
        console.log("Change at "+N[4])
       console.log("Your journey continues through the following stops: ")
        }
    }

    planTrip(L, "8th", L, "1st")
    
// console.log(N.length)
//planTrip("N", "Times Square", "6", "33rd");
//// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//.indexOf() -- return index of first element matching the argument
//includes() -- return True if array include the element or False otherwise 



// for (let index = 0; index < six.length; index++) {
//     console.log(six[index])
        
// }

