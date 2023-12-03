// Loops

// Use Case 1: While loop to print numbers from 1 to 5
let counter = 1;

while (counter <= 5) { // keep looping if the counter is less than or equals to 5
  console.log(counter);
  counter++; // increasing counter value by 1
}

// Use Case 2: For loop to iterate over an array
// Recommended
const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*
Explanation:
  i (index) = a variable with initial value of 0 (can be: x or any other letter or word)

  i < fruits.length = the condition to loop, so it will keep looping if the i (starts from 0) is lesser than fruits.length (3)

  i++ = increasing i value by 1

  // A bit spoiler for array
           [   0   ,     1   ,     2    ]; // index starts from 0
  fruits = ['apple', 'banana', 'cherry'];
  fruits[0] = 'apple'
  fruits[1] = 'banana'
  fruits[2] = 'cherry'

  fruits.length = the length of the fruits array (will be explained more about array later)
           [   1   ,     2   ,     3    ]; // length starts from 1
  fruits = ['apple', 'banana', 'cherry']; // array length = 3
*/

// Use Case 3: For...of loop for simpler array iteration
// Good to know (simpler than above but we can't access the index)
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

/*
##############################################
############# !! INTERMEDIATE !! #############
##############################################
######### Uncomment the section below ########
##############################################
#### Drag all grey lines > Press CTRL + / ####
##############################################
*/

const names = ["Alice", "Bob", "Charlie"];
const tasks = ["read a book", "write code", "go for a walk"];

for (let i = 0; i < names.length; i++) { // looping in names = ["Alice", "Bob", "Charlie"];
  for (let j = 0; j < tasks.length; j++) { // looping in tasks = ["read a book", "write code", "go for a walk"];
    console.log(`${names[i]} will ${tasks[j]}.`);
  }
}

/*
Explanation:
  Outer Loop (i = 0): // Alice
  Inner Loop (j = 0): Alice is paired with the first task (read a book).
  Inner Loop (j = 1): Alice is paired with the second task (write code).
  Inner Loop (j = 2): Alice is paired with the third task (go for a walk).

  Outer Loop (i = 1): // Bob
  Inner Loop (j = 0): Bob is paired with the first task (read a book).
  Inner Loop (j = 1): Bob is paired with the second task (write code).
  Inner Loop (j = 2): Bob is paired with the third task (go for a walk).

  Outer Loop (i = 2): // Charlie
  Inner Loop (j = 0): Charlie is paired with the first task (read a book).
  Inner Loop (j = 1): Charlie is paired with the second task (write code).
  Inner Loop (j = 2): Charlie is paired with the third task (go for a walk).
*/

/*
####################################
############ !! QUIZ !! ############
####################################

1. Create two arrays, 'animals' and 'actions', each containing at least three items.

2. Use a nested loop to combine each animal with each action and log the combination.
   For example: "Dog jumps", "Dog runs", "Dog sleeps", "Cat jumps", ...

3. Write the expected output based on the arrays you've created.

####################################
######### EXPECTED OUTPUT ##########
####################################

Dog jumps
Dog runs
Dog sleeps
Cat jumps
Cat runs
Cat sleeps
Bird jumps
Bird runs
Bird sleeps
*/

// Your code here
