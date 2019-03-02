//MTA Puzzle
var nLine= ['Times Square', '34th', 'n28th', '23rd', 'Union Square', '8th'];
var lLine= [ '8th', '6th', 'Union Square', '3rd', '1st'];
var sLine= [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

//first step: find arrival line and stop
//second step: find destination line and stop
//second and a half step: print change on union cross
//third step: find number of stops between arrival and destination
//fourth step: display all that into console
//fifth step: hello world celebration

var stopCount = [];
function countStop()
{
  return stopCount.length-4 + " stops in total.";
}
function trip()
{
    console.log("You must travel through the following stops on the N Line:")
    console.log(nLine.slice(0, 5));
    for(var i = 0; i < nLine.length; i++)
    {
      var count = stopCount.push(nLine[i]);
      if(nLine[i] == 'Union Square')
      {
        console.log("Change at Union Square");
            for (var i = 0; i <= lLine.length; i++)
            {
            var count = stopCount.push(lLine[i]);
            
            }
        console.log("Your journey continues through the following stops:")
        console.log(lLine.slice(0,2));
      }
    }
    console.log(countStop());
}
trip();
