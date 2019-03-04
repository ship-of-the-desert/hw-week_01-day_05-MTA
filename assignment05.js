lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
lineSix = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

//intersect at Union Square
console.log("The number of stops for Line N is:"+ lineN.length + " And the stops are:" + lineN)
console.log("The number of stops for Line N is:"+ lineL.length + " And the stops are:" + lineL)
console.log("The number of stops for Line 6 is:"+ lineSix.length + " And the stops are:" + lineSix)

if (lineN.includes("Union Square")) {
    console.log("The subway intersect with the other 3 lines")
}