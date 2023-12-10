const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming'],
};

// Looping through an object
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// Use case: Displaying all properties and values
function displayPersonInfo(person) {
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
}

displayPersonInfo(person);
/*
Output:

firstName: John
lastName: Doe
age: 30
hobbies: reading,gaming
*/
