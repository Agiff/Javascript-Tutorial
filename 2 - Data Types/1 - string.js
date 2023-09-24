const name = 'Agif';
const age = 27;

const sentence1 = 'Hello, my name is ' + name + '. I am ' + age + ' years old.';
const sentence2 = `Hello, my name is ${name}. I am ${age} years old.`;

console.log(sentence1); // Output: Hello, my name is Agif. I am 27 years old.
console.log(sentence2); // Output: Hello, my name is Agif. I am 27 years old.

let sentence3 = `Hello, my name is ${name}.`;
sentence3 += ` I am ${age} years old.`;

console.log(sentence3); // Output: Hello, my name is Agif. I am 27 years old.

console.log(typeof sentence3); // Output: string