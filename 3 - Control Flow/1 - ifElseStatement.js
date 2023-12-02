// 3-Control-Flow/1-if-else.js

// Welcome to the Control Flow module!
// In this lesson, we'll explore the basic concepts of conditional statements using if-else.

// Example 1: Simple if-else statement
const isRaining = true;

if (isRaining) {
  console.log('Bring an umbrella!');
} else {
  console.log('Enjoy the sunshine!');
}

const temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day!");
}

// Example 2: Comparisons and logical operators
const age = 18;

if (age >= 18 && age <= 60) {
  console.log('You are eligible for the job.');
} else if (age < 18) {
  console.log('You are too young for this job.');
} else {
  console.log('You might be overqualified for this job.');
}

// Example 3: Nested if-else statements
const userName = 'user123';
const password = 'pass123';

if (userName === 'user123') {
  if (password === 'pass123') {
    console.log('Login successful!');
  } else {
    console.log('Incorrect password. Please try again.');
  }
} else {
  console.log('User not found. Please sign up.');
}

// Example 4: Ternary operator
const isEvening = true;
const greeting = isEvening ? 'Good evening!' : 'Good day!';
console.log(greeting);

// Example 5: Use case - Checking if a number is positive, negative, or zero
const number = -7;

if (number > 0) {
  console.log('The number is positive.');
} else if (number < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
}

// Example 6: Use case - Determining the type of a variable
const variable = 'Hello, World!';

if (typeof variable === 'string') {
  console.log('The variable is a string.');
} else if (typeof variable === 'number') {
  console.log('The variable is a number.');
} else {
  console.log('The variable is of an unknown type.');
}

// Feel free to experiment with these examples and try creating your own!
