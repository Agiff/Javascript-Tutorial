// Declaration and Initialization
let fruits = ["apple", "banana", "cherry"];

// Accessing Elements
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Modifying Elements
fruits[2] = "strawberry";
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry' ]

// Adding Elements
fruits.push("orange"); // Adds 'orange' to the end of the array
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry', 'orange' ]

// Removing Elements
let removedFruit = fruits.pop(); // Removes and returns the last element
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry' ]

// Array Length
console.log(fruits.length); // Output: 3
