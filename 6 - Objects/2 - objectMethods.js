const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming'],
};

// Modifying properties
person.age = 35;
console.log(person.age); // Output: 35

// Use case: Adding a new hobby
person.hobbies.push('traveling');
console.log(person.hobbies); // Output: ['reading', 'gaming', 'traveling']

// Object method
person.sayHello = function () {
  console.log('Hello, I am ' + this.firstName);
};

person.sayHello(); // Output: Hello, I am John
