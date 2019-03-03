//MTA Puzzle ..
//The subway line 
var nLine =['Times Square','34th', '28th', '23rd', 'Union Square','8th'];
var lLine =['8th', '6th', 'Union Square','3rd', '1st'];
var sixLine =['Grand Central', '33rd', '28th', '23rd', 'Union Square','Astor Place'];

function planTrip ()
{
    {
    console.log("You most travel through the following stop on The N line : ");
    console.log(nLine.slice(1,5));
    }
    var stop = [];
    function totalStop ()
    {
        
      
      console.log("the total of stops");
      return stop;
    }
    
    {
 
        for(var i = 0; i < nLine.length; i++)
        {
        
          if(nLine[i] == "Union Square")
          {
              return stop.indexOf(nLine[i]);
            console.log('Change at Union Square');
            
                {
                    return stop.indexOf(lLine[i])
 
                }
            console.log('Your journey continues through the following stops:')
            console.log(sixLine.slice(1,4));
          }
        }
        console.log(totalStop());
    }
}
    planTrip();
    



