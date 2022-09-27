const prompt = require('prompt-sync')({sigint: true});

/*
Write a program getIndex3.js that prompts the user for an array then logs out the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it logs out the value at the last index
 */

let thirdIndex1 = JSON.parse(prompt("Enter an array: "));

let index3 = thirdIndex1.length

if(index3 >= 4){console.log(thirdIndex1[3])}
else{console.log(thirdIndex1[index3-1])}  
