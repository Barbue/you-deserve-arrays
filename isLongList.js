const prompt = require('prompt-sync')({sigint: true});

/*
isLongList.js: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
 */

let array = JSON.parse(prompt("Enter an array: "));

let arrayLength = array.length

if(arrayLength >= 10){console.log("Array's length is at least 10")}
else{console.log("Array's length is not at least 10")}








    



