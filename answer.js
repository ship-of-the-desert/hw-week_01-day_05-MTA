
var lineN= ['Times Square', '34th', 'n28th', '23rd', 'Union Square', '8th'];
var lineL= [ '8th', '6th', 'Union Square', '3rd', '1st'];
var line6= [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


var stopCount = [];
function countStop()
{
  return stopCount.length-4 + " stops in total.";
}
function trip()
{
    console.log("You must travel through the following stops on the N Line:")
    console.log(lineN.slice(0, 5));
    for(var i = 0; i < lineN.length; i++)
    {
      var count = stopCount.push(lineN[i]);
      if(lineN[i] == 'Union Square')
      {
        console.log("Change at Union Square");
            for (var i = 0; i <= lineL.length; i++)
            {
            var count = stopCount.push(lineL[i]);

            }
        console.log("Your journey continues through the following stops:")
        console.log(lineL.slice(0,2));
      }
    }
    console.log(countStop());
}
trip();