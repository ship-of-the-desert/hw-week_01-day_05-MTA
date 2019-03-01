var N = ["34rd" ,"28th", "23rd", "Union Square", "8th"]
function  planTrip(s1,s2){                     // s1 = step one , s2 = step two
var tj = 0;                                    //totaljourney
var jor = " ";                                  // 

if ( N.indexOf(s1) <= N.indexOf(s2)){

tj = (N.indexOf(s2) - N.indexOf(s1)) 
for (  i = N.indexOf(s1) ; i <= N.indexOf(s2) ; i++){

    jor += N[i] + ", " ;
}
}
else {
    tj = (N.indexOf(s1) - N.indexOf(s2)) 
    for ( i= (N.indexOf(s1) -1) ; i >=N.indexOf(s2) ; i--){

        jor += N[i] + ", " ;

    }
}
console.log("You must travel through the following stops on the N line " + jor  + "total spet " + tj );
}
planTrip("8th","23rd");
gi