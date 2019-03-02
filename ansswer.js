var subway = { 
    lineN: ['Times Square', '34th', 'n28th', '23rd', 'Union Square', '8th'],
    lineL: [ '8th', '6th', 'Union Square', '3rd', '1st'],
    line6:[ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    } ;
    
    var stop = [];
    function stopCount ()
    {
      console.log(stop.length-4 + " the total of stops");
    }
    function planTrip()
    {
        console.log("You must travel through the following stops on the line N ")
        console.log(subway.lineN.slice(1, 5));
    
        for(var i = 0; i < subway.lineN.length; i++)
        {
          var count = stop.push(subway.lineN[i]);
          if(subway.lineN[i] == 'Union Square')
          {
            console.log("Change at Union Square");
                for (var i = 0; i <= subway.lineL.length; i++)
                {
                var count = stop.push(subway.lineL[i]);
    
                }
            console.log("Your journey continues through the following stops:")
            console.log(subway.line6.slice(1,4));
          }
        }
        console.log(stopCount());
    }
    
    planTrip();