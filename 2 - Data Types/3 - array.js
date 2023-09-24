// Array declaration and initialization
const fruits = ['apple', 'banana', 'cherry'];

// Accessing elements
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Modifying elements
fruits[2] = 'strawberry';
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry' ]

// Adding elements
fruits.push('orange'); // Adds 'orange' to the end of the array
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry', 'orange' ]

// Removing elements
const removedFruit = fruits.pop(); // Removes and returns the last element
console.log(fruits); // Output: [ 'apple', 'banana', 'strawberry' ]

// Array length (Total items in the array)
console.log(fruits.length); // Output: 3

/*
######################################
######## !! INTERMEDIATE !! ##########
######################################
## Don't think too much about these ##
######################################
*/

// Looping/Iterating through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Looping/Iterating too but with built-in function
fruits.forEach((fruit) => {
  console.log(fruit);
});