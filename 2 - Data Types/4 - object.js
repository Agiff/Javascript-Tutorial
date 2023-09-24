// Object declaration and initialization
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming'],
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe

// Modifying properties
person.age = 35;
console.log(person.age); // Output: 35

console.log(person, '<<< Before Add');
/*
Output:

{
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  hobbies: [ 'reading', 'gaming' ]
} <<< Before Add

*/

// Adding properties
person.country = 'USA';
console.log(person, '<<< After Add');
/*
Output:

{
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  hobbies: [ 'reading', 'gaming' ],
  country: 'USA'
} <<< After Add

*/

// Deleting properties
delete person.hobbies;
console.log(person, '<<< After Delete');

/*
Output:

{ firstName: 'John', lastName: 'Doe', age: 35, country: 'USA' } <<< After Delete

*/

/*
######################################
######## !! INTERMEDIATE !! ##########
######################################
## Don't think too much about these ##
######################################
*/

// Looping/Iterating through an object
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
