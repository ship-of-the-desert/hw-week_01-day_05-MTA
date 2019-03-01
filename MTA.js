var MTA = {
    N : ["34rd" ,"28th", "23rd", "Union Square", "8th"],
    L : ["8th" , "6th" , "Union Square" , "3rd", "1st"],
    6 : ["Grand Central" , "33rd", "28th" , "23rd","Union Square" , "Astor Place" ]
}
function  planTrip(line1 , step1,line2 , step2) { // 
var  tj = 0;                                          //totaljourney
for(i in MTA.N){
    var jor = "";                                           //journey
    if ( i == step2 ){
     
        break;
    }
    else {
        jor+= i;
        tj +=1;

    }
}

console.log("You must travel through the following stops on the N line" + jor );
}
planTrip( "","34rd" ,"" , "8th")
// var test = MTA.L.indexOf("Grand Central") - MTA.L.indexOf("Union Square");
// console.log(test);