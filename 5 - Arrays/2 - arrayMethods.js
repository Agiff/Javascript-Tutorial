// Declaration and Initialization
let fruits = ["apple", "banana", "cherry"];

// Iterating through an Array with For Loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Iterating through an Array with forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Use Case: Filtering Even Numbers from an Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Use Case: Mapping Array Elements to Their Squares
let squaredNumbers = numbers.map((num) => num ** 2);
console.log("Squared Numbers:", squaredNumbers);

// Use Case: Checking if All Numbers are Positive
let allPositive = numbers.every((num) => num > 0);
console.log("Are all numbers positive?", allPositive);

// Use Case: Finding the First Even Number
let firstEven = numbers.find((num) => num % 2 === 0);
console.log("First Even Number:", firstEven);

// Use Case: Summing All Numbers in the Array
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// Use case: Concatenating arrays
let vegetables = ['carrot', 'broccoli', 'spinach'];
let combined = fruits.concat(vegetables);
console.log(combined); // Output: [ 'apple', 'banana', 'strawberry', 'carrot', 'broccoli', 'spinach' ]

// Use case: Joining array elements into a string
let fruitsString = fruits.join(', ');
console.log(fruitsString); // Output: apple, banana, strawberry

// Use case: Slicing an array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: [ 'banana', 'strawberry' ]

// Use case: Finding the index of an element
let indexBanana = fruits.indexOf('banana');
console.log(`Index of banana: ${indexBanana}`); // Output: Index of banana: 1

// Use case: Checking if an element exists in an array
let isBananaInArray = fruits.includes('banana');
console.log(`Is banana in the array? ${isBananaInArray}`); // Output: Is banana in the array? true

// Use case: Reversing an array
let reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: [ 'strawberry', 'banana', 'apple' ]