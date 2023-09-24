let age = 20;
console.log(age); // Output: 20

age = 25;
console.log(age); // Output: 25

age = age + 1;
console.log(age); // Output: 26

age += 4;
console.log(age); // Output: 30

age = age - 1;
console.log(age); // Output: 29

age -= 1;
console.log(age); // Output: 28

age *= 2;
console.log(age); // Output: 56

age /= 8;
console.log(age); // Output: 7

const number = 50;
console.log(age + number); // Output: 57

const total = age + number;
console.log(total); // Output: 57

/*
###############################
######## IMPORTANT !!! ########
###############################
*/

console.log(age); // Output: 7
console.log(typeof age); // Output: number

let month = 'February';
console.log(month); // Output: February
console.log(typeof month); // Output: string

console.log(month + age); // Output: February7 (string concatenation)
console.log(age + month); // Output: 7February (string concatenation)

console.log(age - month); // Output: NaN (Not-a-Number)