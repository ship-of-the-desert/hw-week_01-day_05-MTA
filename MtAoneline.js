var N = ["34rd" ,"28th", "23rd", "Union Square", "8th"]
function  planTrip1(line ,s1,s2){                     // s1 = step one , s2 = step two
    var tj = 0;                                    //totaljourney
    var jor = "";                                 // journey
    if ( line.indexOf(s1) <= line.indexOf(s2)){
    
    tj = (line.indexOf(s2) - line.indexOf(s1)) 
    for (  i = line.indexOf(s1) ; i <= line.indexOf(s2) ; i++){
    
        jor += line[i] + ", " ;
     }
     }
    else {
        tj = (line.indexOf(s1) - line.indexOf(s2)) 
        for ( i= (line.indexOf(s1) -1) ; i >=line.indexOf(s2) ; i--){
    
            jor += line[i] + ", " ;
    
        }
    }console.log("You must travel through the following stops on the N line " + jor  + "total spet " + tj );

}


planTrip1(N,"8th","23rd");
