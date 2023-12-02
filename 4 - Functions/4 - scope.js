// Function scope
function exampleScope() {
  let localVar = "I am a local variable";
  console.log(localVar);
}

exampleScope();

// Use case: Preventing variable conflicts
let globalVar = "I am a global variable";

function logGlobalVar() {
  console.log(globalVar);
}

logGlobalVar();

// Block scope (let and const)
if (true) {
  let blockVar = "I am a block-scoped variable";
  const constantVar = "I cannot be reassigned";
  console.log(blockVar);
}

// console.log(blockVar); // Error: blockVar is not defined outside the block
// constantVar = "I am reassigned"; // Error: Assignment to constant variable
