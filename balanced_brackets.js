/*
Given a string of brackets, e.g, "{([])}", write a function 
`balancedBrackets(string)` that returns a `boolean` if the brackets are balanced.

Example)
balancedBrackets("{([])}");

Output:
true

balancedBrackets("{([)}");

Output:
false
*/

function balancedBrackets(string) {
  let queue = [];
  const pairings = {
    "{": "}",
    "[": "]",
    "(": ")",
    "<": ">",
  };
  
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // Add opening bracket to queue if detected
    if (char in pairings) {
      queue.push(char);
    }
    // Remove from queue if matching closing bracket is detected
    else {
      if (queue.length > 0 && Object.values(pairings).includes(char)) {
        let last = queue.pop();
        if (pairings[last] !== char) {
          // Brackets are not balanced
          return false;
        }
      } 
    }
  }
  // Brackets are balanced
  return queue.length === 0 ? true : false;
}

let bracketsString = "{([])}";
let areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// true

bracketsString = "{([<>])}";
areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// true

bracketsString = "{([)}";
areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// false

bracketsString = "({[{[]}]})";
areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// true

bracketsString = "({[{[]]})";
areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// false

bracketsString = "<";
areBracketsBalanced = balancedBrackets(bracketsString);
console.log(areBracketsBalanced);
// false
