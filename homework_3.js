var line_N = ['timessquare', '34th', '28th', '23rd', 'unionsquare', '8th' ];
var line_L = ['8thL', '6th', 'unionsquareL', '3rd','1st'];
var line_6 = ['grandcentral', '33rd', '28th6', '23rd6','unionsquare6', 'astorplace'];
var collected = line_N.concat(line_L, line_6);
var start=  window.prompt ("start your trip", "");
 var end= window.prompt ("end your trip", "");

 for (var i = 0; i< collected.length;i++)

{
  if(collected[i]==start){
  var startNum=i;}

  if(collected[i]==end){
    var startNum=i;}

  for (var count = start; count<= end.length;count++)
  {
    console.log(collected [count]+"+");   
  }}
  console.log("The end");  