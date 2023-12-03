// Use Case 1: Logical AND (&&) operator
// if both value is "true" then the result is "true"
// if one value is "true" and the other one is "false" then the result is "false"
// if both value are "false" then the result is "false"
let highIncome = true;
let goodCreditScore = true;

if (highIncome && goodCreditScore) { // Output: Eligible for loan.
  console.log('Eligible for loan.');
} else {
  console.log('Not eligible for loan.');
}

// Use Case 2: Logical OR (||) operator
// if both value is "true" then the result is "true"
// if one value is "true" and the other one is "false" then the result is "true"
// if both value are "false" then the result is "false"
let student = true;
let workingProfessional = false;

if (student || workingProfessional) { // Output: User is valid.
  console.log('User is valid.');
} else {
  console.log('Invalid user.');
}

// Use Case 3: Logical NOT (!) operator
let loggedIn = false;

if (!loggedIn) { // Output: Please log in.
  console.log('Please log in.');
} else {
  console.log('Welcome!');
}

// same as this
if (loggedIn) { // Output: Please log in.
  console.log('Welcome!');
} else {
  console.log('Please log in.');
}

/*
##############################################
############ !! SECOND EXAMPLE !! ############
##############################################
######### Uncomment the section below ########
##############################################
#### Drag all grey lines > Press CTRL + / ####
##############################################
*/

// // Logical operators: AND, OR, NOT
// let isSunny = true;
// let isWarm = true;

// // AND operator
// if (isSunny && isWarm) {
//   console.log("It's a sunny and warm day!");
// } else {
//   console.log("The weather is not ideal.");
// }

// // OR operator
// let isWeekend = false;
// if (isSunny || isWeekend) {
//   console.log("It's a good day to go out!");
// } else {
//   console.log("Consider indoor activities.");
// }

// // NOT operator
// let hasRaincoat = false;
// if (!hasRaincoat) {
//   console.log("You might get wet in the rain.");
// } else {
//   console.log("You're prepared for rain.");
// }

