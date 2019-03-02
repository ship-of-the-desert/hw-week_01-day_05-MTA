var MTA = {
    N : ["34rd" ,"28th", "23rd", "Union Square", "8th"],
    L : ["8th" , "6th" , "Union Square" , "3rd", "1st"],
    6 : ["Grand Central" , "33rd", "28th" , "23rd","Union Square" , "Astor Place" ]
}
function planTrip (line11 , step1 , line22 ,step2 ){
      line1 = MTA[line11];
    line2 = MTA[line22]; 
     // Solving input problems-----------------------------
  
          
          
        
        if ( !(line1.includes(step1)) || !(line2.includes(step2))  ){
                        return console.log("the line or step is not exists"); 
                        
        }
    // i know is not compleet 
    // Solving input problems----------------------------------------


    //Move from the same line-----------------------------------------------------------
    if ( line1 === line2 ){
    var tj = 0;                                    //totaljourney
    var jor = "";                                 // journey
    if ( line1.indexOf(step1) <= line1.indexOf(step2)){
    
    tj = (line1.indexOf(step2) - line1.indexOf(step1)) 
    for (  i = line1.indexOf(step1) ; i <= line1.indexOf(step2) ; i++){
    
        jor += line1[i] + ", " ;
     }
     }
    else {
        tj = (line1.indexOf(step1) - line1.indexOf(step2)) 
        for ( i= (line1.indexOf(step1) -1) ; i >=line1.indexOf(step2) ; i--){
    
            jor += line1[i] + ", " ;
    
        }
    }
    return console.log("You must travel through the following stops on the " +  jor  + "total step " + tj );
  }
//Move from the same line----------------------------------------------------------------------
//Moving from different line----------------------------------------------------------------

else { 
    var journey1="";
    var journey2="";
    var total_step1,total_step2;
    
    MiStation = MiStation1();
    if ( line1.indexOf(step1) <= line1.indexOf(MiStation)){
    
        total_step1 = (line1.indexOf(MiStation) - line1.indexOf(step1)) 
        for (  i = line1.indexOf(step1)+1 ; i <= line1.indexOf(MiStation) ; i++){
        
            journey1 += line1[i] + ", " ;
         }
         }
        else {
            total_step1 = (line1.indexOf(step1) - line1.indexOf(MiStation)) 
            for ( i= (line1.indexOf(step1)-1 ) ; i >=line1.indexOf(MiStation) ; i--){
        
                journey1 += line1[i] + ", " ;
        
            }
         }
         if ( line2.indexOf(step2) <= line2.indexOf(MiStation)){
    
            total_step2 = (line2.indexOf(MiStation) - line2.indexOf(step2)) 
            for (  i = line2.indexOf(MiStation)-1 ; i >= line2.indexOf(step2) ; i--){
            
                journey2 += line2[i] + ", " ;
             }
             }
            else {
                total_step2= (line2.indexOf(step2) - line2.indexOf(MiStation)) 
                for ( i= (line2.indexOf(MiStation) +1) ; i <=line2.indexOf(step2) ; i++){
            
                    journey2 += line2[i] + ", " ;
            
                }
             }
               
console.log("You must travel through the following stops on the " +line11+" line : "+ journey1 );
console.log("Change at " +MiStation ); 
console.log("Your journey continues through the following stops: " +journey2 );
console.log("total steps " + ( total_step1+total_step2))




}
//Moving from different line----------------------------------------------------------------

}
// var line1 = prompt("enter your line");
// var step1 = prompt("enter your step")
// var line2 = prompt("Enter your destination line")
// var step2 = prompt("Enter your destination step")
// planTrip(line1, step1 ,line2,step2 );

planTrip("N","28th",6,"33rd" );
//Find the mine station-----------
function MiStation1(){
    // for ( let key in MTA)
    for (i in MTA.N){
      
      for ( j in MTA.L){
          if ( MTA.N[i] == MTA.L[j]){

            for (k in MTA[6]){

                if ( MTA.N[i] == MTA[6][k]){
                    return MTA.N[i]
            }
          }

      }

    }
}
}


