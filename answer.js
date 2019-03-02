var map={
    'N':['Times Square', '34th', '28th', '23rd','Union Square','8th'],
    'L':[ '8th', '6th','Union Square','3rd','1st'],
    '6': ['Grand Central','33rd','28th', '23rd','Union Square','Astor Place']
}

var i1="N";
var i2="Times Square";
var i3="6";
var i4="33rd";

// the complete function
var trainStops=function(i1,i2,i3,i4) {
    // a small function to complete a step
    function step(i1,i2,i4,reverse=false) {
        if (reverse){
            var map_r=map[i1].reverse();
            var steps=map_r.slice(map_r.indexOf(i2)+1,map_r.indexOf(i4)+1);
            return steps
        }
        var steps=map[i1].slice(map[i1].indexOf(i2),map[i1].indexOf(i4)+1);
        return steps
    }
    // the complete process with one liner
    (i1===i3)? console.log("You must travel through the following stops on the N line: "+step(i1,i2,i4)+'\n'+step(i1,i2,i4).length+" stops in total."):(map[i1].indexOf(i2)<map[i1].indexOf('Union Square'))? step1=step(i1,i2,'Union Square'):step1=step(i1,i2,'Union Square',reverse=true);(map[i3].indexOf(i4)>map[i3].indexOf('Union Square'))? step2=step(i3,'Union Square',i4):step2=step(i3,'Union Square',i4,reverse=true);
    // console.log the steps
    console.log("You must travel through the following stops on the N line: "+step1+'.');
    console.log("Change at Union Square.");
    console.log("Your journey continues through the following stops: "+step2+'.');
    console.log((step1.length+step2.length-1+" stops in total."));
}
// running the function
trainStops('N','Times Square','6','33rd');