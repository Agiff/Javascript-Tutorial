// Undefined and Null in JavaScript
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

// Null
let nullValue = null;
console.log(nullValue); // Output: null

// Use case: Initializing variables
let username;
if (username === undefined || username === null) {
  username = "Guest";
}

console.log(`Welcome, ${username}!`); // Output: Welcome, Guest!

// Use case: Marking a variable as intentionally empty
let userData = null;

// Use case: Resetting a variable
let score = 100;
score = null;

console.log(`Current score: ${score}`); // Output: Current score: null
