const prompt = require('prompt-sync')({sigint: true});
/*
Write a program, getFirstItemFrom.js that prompts the user for an array, then logs out the first item in that array
 */

let getFirstItemFRom1 = JSON.parse(prompt("Enter an array: "));

let getFirstItemFRom2 = getFirstItemFRom1[0]

console.log(getFirstItemFRom2)