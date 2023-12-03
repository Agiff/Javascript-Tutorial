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

/*
########################################################
###################### !! QUIZ !! ######################
########################################################
##### Do this after you finish logicalOperators.js #####
########################################################

1. Make a simple if-else statement to check if a given number is even or odd. 
   Create a variable 'numberToCheck' with any numeric value and write an if-else statement 
   to log whether the number is even or odd.
   Note: You need to use '%' (modulus) to find the leftover number
   Example:
    - 4 % 2 = 0 // Explanation: 2 * 2 = 4, (no leftover so the answer is 0)
    - 10 % 3 = 1 // Explanation: 3 * 3 = 9, 10 - 9 = 1 (the leftover is 1)
    - 9 % 5 = 4 // Explanation: 5 * 1 = 5, 9 - 5 = 4 (the leftover is 4)
    - 10 % 5 = 0 // Explanation: 5 * 2 = 10 (no leftover so the answer is 0)

2. Create a comparison and logical operators scenario. 
   Define two variables 'firstNumber' and 'secondNumber' with numeric values. 
   Write an if-else statement to check and log whether 'firstNumber' is greater than, 
   less than, or equal to 'secondNumber'.

3. Implement a nested if-else statement to simulate a grading system. 
   Create a variable 'studentScore' with a numeric value. 
   Write nested if-else statements to determine and log the corresponding grade 
   based on the following conditions:
   - A: 90-100
   - B: 80-89
   - C: 70-79
   - D: 60-69
   - F: 0-59
*/


