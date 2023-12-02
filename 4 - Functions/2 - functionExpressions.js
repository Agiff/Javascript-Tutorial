/*
Same as previous lesson, the only difference is only the position:

Previous:
function example() {

}

Now:
const example = function() {

}
*/

// Function expressions
const multiply = function (x, y) {
  return x * y;
};

// Use case: Calculating area
let area = multiply(5, 8);
console.log(`Area: ${area} square units`);

// Anonymous function
const square = function (num) {
  return num * num;
};

// Use case: Finding square of a number
let squareResult = square(6);
console.log(`Square: ${squareResult}`);