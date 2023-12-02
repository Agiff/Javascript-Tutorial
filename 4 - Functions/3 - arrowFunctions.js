/*
Similar (not same) as previous lesson, explanation:

Previous:
function damageCalculator(HP, damage) {
  // logic here
}

Now:
const damageCalculator = (HP, damage) => {
  // logic here
}
*/

// Arrow functions (Single Line)
const divide = (a, b) => a / b; // No need to declare "return" for single line arrow function
/*
same as this:

const divide = (a, b) => {
  return a / b;
}
*/

// Use case: Dividing
let divideResult = divide(100, 10);
console.log(`Divide Result: ${divideResult}`); // Output: Divide Result 10

const damageCalculator = (hp, dmg, def) => {
  console.log(hp); // Output: 100
  console.log(dmg); // Output: 60
  console.log(def); // Output: 20
  const damageDealt = dmg - def;
  const result = hp - damageDealt;
  
  return result;
}

const currentHP = 100;
const damage = 60;
const defense = 20;

const remainingHP = damageCalculator(currentHP, damage, defense); // 100 is HP, 60 is damage, 20 is defense
console.log(`Remaining HP: ${remainingHP}`); // Output: Remaining HP: 60
