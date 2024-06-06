//TASK1
const number1 = prompt("Enter first number:");
const number2 = prompt("Enter second number:");
const subtraction = number1 - number2;
console.log(`The subtraction of ${number2} from ${number1} is ${subtraction}.`);
const multiply = number1 * number2;
console.log(`The multiplication of ${number1} and ${number2} is ${multiply}.`);
const division = number1 / number2;
console.log(`The division of ${number1} by ${number2} is ${division}.`);

//TASK2
const firstName = prompt("Enter your name:");
console.log(`Merhaba, ${firstName}!`);
console.log(firstName.length);

//TASK3
const numberInput1 = prompt("Enter a number:");
if (numberInput1 > 0) {
  console.log("The number is positive.");
} else if (numberInput1 < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

const numberInput2 = prompt("Enter another number:");
if (numberInput1 > numberInput2) {
  console.log(`${numberInput1} is bigger than the ${numberInput2}`);
} else if (numberInput1 < numberInput2) {
  console.log(`${numberInput1} is smaller than the ${numberInput2}`);
} else {
  console.log(`${numberInput1} is equal to the ${numberInput2}`);
}