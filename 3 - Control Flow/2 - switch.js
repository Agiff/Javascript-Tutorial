// Use Case 1: Switch statement for multiple conditions
let dayOfWeek = 'Monday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('It\'s the start of the week.');
    break;
  case 'Friday':
    console.log('Weekend is almost here!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('It\'s the weekend!');
    break;
  default:
    console.log('It\'s a regular day.');
}

// Use Case 2: Switch statement with fall-through
let grade = 'B';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!');
    break;
  case 'D':
  case 'F':
    console.log('You need to improve.');
    break;
  default:
    console.log('Invalid grade');
}
