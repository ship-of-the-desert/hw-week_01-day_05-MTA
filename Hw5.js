var line_N =["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var line_L =["8th", "6th", "Union Square", "3rd", "1st"];
var line_6 = ["Grand Central","33rd", "28th","23rd", "Union Square", "Astor Place"];

//planTrip(line_N, "Times Square", line_6 , "33rd");
planTrip(line_N, "Times Square", line_N , "8th");

function planTrip(First_line, First_stop ,Final_line,Final_stop)
{
    // check the first line is correct and set the name of the subway line to string
var s_array ="";
if (First_line === line_N)
{
s_array= "N";
}
else if(First_line === line_L)
{
    s_array= "L";

}else if (First_line === line_6)
{
    string_array= "6";

}
//else //it isn't working
//{
 //console.log("Sorry this subway line doesn't exist, please enter correct subway line : N , L or 6 ");

//}
    var stops = "";
var index_First_stop= First_line.indexOf(First_stop);
var index_Final_stop= Final_line.indexOf(Final_stop);

//check if the trip in one line 
if(First_line ===  Final_line )
{
    var i = index_First_stop + 1;
while (i < index_Final_stop)
{

    stops+=First_line[i] + ", ";

    i++;
}
console.log('You must travel through the following stops on the '+ s_array +' line : '+ stops + Final_stop+ ".");
console.log(`${i} stops in total.`);

}
else //when the trip is changes 

{ 

var j=index_First_stop + 1;
while (First_line[j] != "Union Square" )
{
    stops+=First_line[j] + ", ";
j++;
}
console.log("You must travel through the following stops on the "+ s_array+" line : " + stops + "Union Square.");
var index_US=Final_line.indexOf("Union Square");
console.log("Change at Union Square.");

var branch_line=[];
branch_line=Final_line.slice(index_Final_stop , index_US);

branch_line.reverse();

var b=0;
var stops_branch_line="";
while ( branch_line[b]!= Final_stop)
{
    stops_branch_line+=branch_line[b] + ", ";
    b ++;
}
console.log("Your journey continues through the following stops: "+stops_branch_line+ Final_stop+ ".");
console.log(`${b+j+1} stops in total.`);
}

}