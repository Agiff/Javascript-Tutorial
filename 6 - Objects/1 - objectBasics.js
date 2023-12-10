// Object Basics
// Declaration and initialization
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming'],
  'full name': 'John Doe'
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe
console.log(person['full name']); // Output: John Doe (This method is useful when the object key has a symbol like 'space' or something else)

// Use case: Displaying person's information
console.log(`Name: ${person.firstName} ${person.lastName}`);
console.log(`Age: ${person.age}`);
