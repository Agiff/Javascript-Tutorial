// Declaring functions
function greet() {
  console.log("Hello, welcome!");
}

// Use case: Greeting the user
greet(); // Output: Hello, welcome!

// Function with parameters
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Use case: Greeting different users
sayHello("Agif"); // Output: Hello, Agif!
sayHello("Seirei"); // Output: Hello, Seirei!

// Function with default parameter
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault('Budi'); // Output: Hello, Budi!

// Function with a return value
function addNumbers(a, b) {
  return a + b;
}

// Use case: Calculating the total price
let totalPrice = addNumbers(30, 50); // 30 is a, 50 is b
console.log(`Total Price: $${totalPrice}`); // Output: Total Price: 80

addNumbers(2, 3); // Nothing in the log, because the function is only returning a value and not logging
console.log(addNumbers(2, 3)); // Output: 5
console.log(5); // Output: 5, same as this, 5 is the returned value from 2 + 3
console.log(2 + 3); // Output: 5, same as this as well

/*
##############################################
############ !! SECOND EXAMPLE !! ############
##############################################
######### Uncomment the section below ########
##############################################
#### Drag all grey lines > Press CTRL + / ####
##############################################
*/

// Function with a return value
// console.log('');
// console.log('==============================');
// console.log('======= Second Example =======');
// console.log('==============================');
// console.log('');
// function damageCalculator(HP, damage) {
//   console.log(HP); // Output: 100
//   console.log(damage); // Output: 60
//   const result = HP - damage;
  
//   return result;
// }

// const currentHP = 100;
// const damage = 60;

// const remainingHP = damageCalculator(currentHP, damage); // 100 is HP, 60 is damage
// console.log(`Remaining HP: ${remainingHP}`); // Output: Remaining HP: 40