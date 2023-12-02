// Boolean in JavaScript is only true and false
let isSunny = true;
let isRaining = false;
const age = 10;

// Comparison operators
console.log(5 > 3); // Output: true
console.log(age <= 30); // Output: true

// Logical operators: AND, OR, NOT
console.log(isSunny && isRaining); // Output: false (AND)
console.log(isSunny || isRaining); // Output: true (OR)
console.log(!isSunny); // Output: false (NOT)

// Use case: Checking if a number is positive
let positiveNumber = 10;
console.log(positiveNumber > 0); // Output: true

// Use case: Combining conditions
let isWeekend = true;
let hasTimeOff = false;

console.log(isWeekend && hasTimeOff); // Output: false
console.log(isWeekend || hasTimeOff); // Output: true
