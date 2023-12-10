// Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a multidimensional array
console.log(matrix[0][1]); // Output: 2
console.log(matrix[2][0]); // Output: 7

// Use case: Displaying a matrix
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(matrix[row][col]);
  }
}

// Use case: Transposing a matrix
let transposedMatrix = [];
for (let col = 0; col < matrix[0].length; col++) {
  let newRow = [];
  for (let row = 0; row < matrix.length; row++) {
    newRow.push(matrix[row][col]);
  }
  transposedMatrix.push(newRow);
}

console.log('Transposed Matrix:', transposedMatrix);
