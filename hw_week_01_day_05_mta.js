/*
 * Filename: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw-week_01-day_05-MTA\hw_week_01_day_05_mta.js
 * Path: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw-week_01-day_05-MTA
 * Created Date: Friday, March 1st 2019, 8:20:32 pm
 * Author: Mortaja Alqassab <moqassa@gmail.com>
 * 
 * Copyright (c) 2019 MiSK Academy
 */


// Define a javascript object for each subway line.
// Each object contains the name of the line, a list of
// of all the stations and an object of the intersecting 
// stations.
var nLine = {
    name: 'nLine',
    stations: ['Times Square', '34th', '28th',
        '23rd', 'Union Square', '8th'
    ],
    intersections: {
        lLine: 'Union Square',
        sixLine: 'Union Square'
    }
}

var lLine = {
    name: 'lLine',
    stations: ['8th', '6th', 'Union Square',
        '3rd', '1st'
    ],
    intersections: {
        nLine: 'Union Square',
        sixLine: 'Union Square'
    }
}

var sixLine = {
    name: 'sixLine',
    stations: ['Grand Central', '33rd', '28th',
        '23rd', 'Union Square', 'Astor Place'
    ],
    intersections: {
        nLine: 'Union Square',
        lLine: 'Union Square'
    }
}

// Define a variable that holds total number of
// subway lines
var numOfLines = 3;

// Define a list that holds all the defined 
// objects above. This list is used to iterate
// over all objects.
var lines = [nLine, lLine, sixLine];

// Define a function that prints trip plan
function planTrip(startStation, endStation) {

    // result used to concatenate all the stations
    // from start station to end station
    var result = '';

    // Iterate over all lines and get the startStation
    // and endStation
    for (var i = 0; i < numOfLines; i++) {
        if (lines[i].stations.includes(endStation)) {
            var endLine = lines[i];
        }
        if (lines[i].stations.includes(startStation)) {
            var startLine = lines[i];
            var intersection = lines[i].intersections;

            // Get the keys of the intersection of the 
            // endStation. The keys will be used to get
            // the station of intersecting point
            var keys = Object.keys(intersection);
        }
    }
    // Get the intersecting  station of the end point
    // from the intersection object
    intersection = intersection[endLine.name];
    if (startLine === endLine) {
        if (startLine.stations.indexOf(startStation) > startLine.stations.indexOf(intersection)) {
            for (var i = startLine.stations.indexOf(startStation); i > startLine.stations.indexOf(intersection); i--) {
                result += startLine.stations[i] + ' ' + ' --> ';
            }
        } else {
            // Concatenate the stations from the startStation to 
            // the intersection
            for (var i = startLine.stations.indexOf(startStation); i < startLine.stations.indexOf(intersection); i++) {
                result += startLine.stations[i] + ' ' + ' --> ';
            }
        }

    } else {
        if (startLine.stations.indexOf(startStation) >= startLine.stations.indexOf(intersection)) {
            for (var i = startLine.stations.indexOf(startStation); i >= startLine.stations.indexOf(intersection); i--) {
                result += startLine.stations[i] + ' ' + ' --> ';
            }
        } else {
            // Concatenate the stations from the startStation to 
            // the intersection
            for (var i = startLine.stations.indexOf(startStation); i < startLine.stations.indexOf(intersection); i++) {
                result += startLine.stations[i] + ' ' + ' --> ';
            }
        }


        if (endLine.stations.indexOf(intersection) >= endLine.stations.indexOf(endStation)) {
            for (var i = endLine.stations.indexOf(intersection); i >= endLine.stations.indexOf(endStation); i--) {
                result += endLine.stations[i] + ' ' + ' --> ';
            }
        } else {
            // Concatenate the stations from the startStation to 
            // the intersection
            for (var i = endLine.stations.indexOf(endStation); i < endLine.stations.indexOf(intersection); i++) {
                result += endLine.stations[i] + ' ' + ' --> ';
            }
        }
    }

    console.log(result);
}


planTrip('Astor Place', '8th');