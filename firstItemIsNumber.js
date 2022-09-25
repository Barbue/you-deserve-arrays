const prompt = require('prompt-sync')({sigint: true});

/*
firstItemIsNumber.js: prompts the user for an array then logs out a boolean indicating whether or not the first item in the array is a number
*/

let firstItemIsNumber = JSON.parse(prompt("Enter an array: "));

let dog = firstItemIsNumber[0]

if(typeof dog === "number" ){console.log("First item is a number")}
else(console.log("First item is not a number"));



