//Create an if/else statement that can determine if a value is truthy or falsy
//Inputs: string, false, null, undefined, 0, ""

let input = null;

if (Boolean(input) === false) {
  console.log("The " + typeof input + " value is a falsy");
} else {
  console.log("The " + typeof input + " value is true");
}

//2 if/else statements
//one for "greater than 100"
//one for 0 & -n

let n1 = -1000;
let n2 = 0;

let number = n1 + n2;

if (n1 + n2 > 100) {
  console.log(number + " is greater than 100");
} else if (n1 + n2 > 0) {
  console.log(number + " is greater than 0");
} else if (n1 + n2 === 0) {
  console.log(number + " is a even to 0");
} else {
  console.log(number + " is a negative number");
}

//(n1 && n2 >= 5) --> true or false

let n3 = 5;
let n4 = 5;

const bool = true;
const message = bool.toString();

if (n3 && n4 >= 5) {
  console.log(message);
} else {
  console.log(!message);
}

//compare pair 1 = value or pair 2 = value than display true or false

let pair1A = "cake";
let pair1B = "cake";

let pair2A = "pie";
let pair2B = "pie";

const boolPair = true;
const messagePair = bool.toString();

if (pair1A === pair1B || pair2A === pair2B) {
  console.log(messagePair);
} else {
  console.log(!messagePair);
}
