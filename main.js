function mta(stops){
    var numberOfStops = 0;
    var startingPoint = [];
    var endingPoint = [];

    if (stops==null || stops.length==0) {
        return [];
    } else {
        for (i in stops) {
            if (stops[i] > 0) {
                startingPoint;
            } else {
                endingPoint= endingPoint + stops[i];
            }
        }
    }

    return [startingPoint, endingPoint];
}



var subwayLineStops =[
    nLine=["Times Square", "34th", "n28th", "n23rd", "Union Square", "n8th"],
    lLine=["8th", "6th", "Union Square", "3rd", "1st"],
    line6=["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
];




console.log(mta(subwayLineStops))