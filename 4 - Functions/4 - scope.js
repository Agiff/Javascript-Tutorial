// Function scope
function exampleScope() {
  let localVar = "I am a local variable";
  console.log(localVar);
}

exampleScope(); // Output: I am a local variable

// Use case: Preventing variable conflicts
let globalVar = "I am a global variable";

function logGlobalVar() {
  console.log(globalVar);
}

logGlobalVar(); // Output: I am a global variable

// Block scope
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar);
}

// console.log(blockVar); // Error: blockVar is not defined outside the block
