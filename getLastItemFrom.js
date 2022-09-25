const prompt = require('prompt-sync')({sigint: true});

/*
Write a program, getLastItemFrom.js that prompts the user for an array, then logs out the last item from that array
*/

let getLastItemFrom1 = JSON.parse(prompt("Enter an array: "));

let getLastItemFrom2 = getLastItemFrom1.length

console.log(getLastItemFrom1[getLastItemFrom2-1])