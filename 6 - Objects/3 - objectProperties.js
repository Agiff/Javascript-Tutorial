const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming'],
};

// Adding properties
person.country = 'USA';
console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 30, hobbies: ['reading', 'gaming'], country: 'USA' }

// Deleting properties
delete person.hobbies;
console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 30, country: 'USA' }
