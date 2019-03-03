// storing only This shall tell him the number of stops only after he chooses departure and arrival point
var goingThroughPoints = [];
// Storing one line and one Station 
var endingPointOfACustomer = [];
//Storing one line and one station  
var startingPointOfACustomer = [];
//this shall tell him how many stops
var totalStopsInNumber = [];


// This is what the user will choose from 
    var availTrips= {
    nLine :['N-Line','34th Station', 'NN28th', 'NN23rd', 'Union Square', '8th', ],
     lLine :[ 'L-Line','L8th', '6th', 'Union Square', '3rd', '1st'],
    line6 :[ 'Line-6','Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    };
    
    
    //console.log(availTrips)

// Here are the actions to be taken by the user 
       planTrip1 = {
  
        customerPickUpStationAndDropStation: function (startPickUpLine , startPicksupStation , dropOutLine , dropOutStation){
        //Here we shall have the departure of the user 
        startingPointOfACustomer.push(startPickUpLine);
        startingPointOfACustomer.push(startPicksupStation);
       
       
        // let pickupPos = startPickUpLine.indexOf(startPicksupStation)
            //count the indexof starting point to the end point 
        //Here we shall have the destination of the user 
        endingPointOfACustomer.push(dropOutLine);
        endingPointOfACustomer.push(dropOutStation);

        goingThroughPoints.push(startingPointOfACustomer);
        goingThroughPoints.push(endingPointOfACustomer);
// console.log(startingPointOfACustomer.indexOf(goingThroughPoints));
        }
        // i need to calucalte the trips
      
        }
        
        
        
        
           // function countTheStops(){}

planTrip1.customerPickUpStationAndDropStation('Line-6', 'Grand Central',availTrips.line6[0], "Astor Place");
console.log("the User will start from " + startingPointOfACustomer + " going to " + endingPointOfACustomer );
//console.log("the user will stop at these "+goingThroughPoints);
//console.log("the user will stop at " + endingPointOfACustomer );
// //console.log(endingPointOfACustomer);
// //console.log(availTrips);

//     // Compare the index of the CUSTOMERPICKUPLINE with the index of DESTINATION 
// // This to be chosen by customer 