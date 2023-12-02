// Loops

// Use Case 1: While loop to print numbers from 1 to 5
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// Use Case 2: For loop to iterate over an array
// Recommended
const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Use Case 3: For...of loop for simpler array iteration
// Good to know
for (const fruit of fruits) {
  console.log(fruit);
}

// Use Case 4: Do-While loop to execute code at least once
// Rarerly being used
let number = 1;

do {
  number *= 2
} while (number < 20); // 1 * 2 = 2, 2 * 2 = 4, 4 * 2 = 8, 8 * 2 = 16, 16 * 2 = 32

console.log(`Number: ${number}`); // Output: 32
