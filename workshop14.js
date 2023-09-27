//Create an array of numbers
//create a loop that runs through the array
//create an if statement for an odd number
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = [];

for (let i = 0; i <= number.length - 1; i++) {
  if (i % 2 === 1) {
    odd.push(i);
  }
}
console.log(odd);

//create vars for string, consonant, and vowels
//create a string
//create a loop that runs through string
//create if statement for consonant and vowels
let testString = "textbook";
const vowels = "aeiou";

let vows = 0;
let cons = 0;

for (let index = 0; index < testString.length; index++) {
  if (vowels.indexOf(testString[index].toLowerCase()) !== -1) {
    vows += 1;
  } else if (testString[index] !== " ") {
    cons += 1;
  }
}
console.log(testString, "has", vows, "vowels and", cons, "consonants.");

//create an array
//create a for loop that reverse the array

let numArray = [1, -1, 2, -3, 5, -8, 13];

let reverseNumArray = [];

for (let index = numArray.length - 1; index >= 0; index--) {
  reverseNumArray.push(numArray[index]);
}
console.log(reverseNumArray);

//create a loop that runs through 1-100
//if the number is divisable of 3 write "Fizz"
//if the number is divisable of 5 write "Buzz"
//if the number is divisable of 15 write "FizzBuzz"

for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log("FizzBuzz");
  } else if (index % 5 == 0) {
    console.log("Buzz");
  } else if (index % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(index);
  }
}
