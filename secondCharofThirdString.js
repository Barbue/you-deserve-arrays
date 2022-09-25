const prompt = require('prompt-sync')({sigint: true});

/*
secondCharOfThirdString.js: prompts the user for an array then logs the second character in the third item in the array. If the third item is not a string, log an error instead
*/

let secondCharacter = JSON.parse(prompt("Enter an array: "));

if(typeof secondCharacter[2][1] === "string")
{console.log(secondCharacter[2][1])}
else{console.log("Error")}









