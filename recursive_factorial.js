/**
 * Recursive Factorial (`recursive_factorial.js`):
 *  Write a function (`recursiveFactorial(number)`) that given a number, returns the product of the integers from 1 to that number.
 * 
 * Example)
 * recursiveFactorial(5)
 * 5 * 4 * 3 * 2 * 1 = 120
 */

// Time complexity = O(n)
// Space complexity = O(n)
function recursiveFactorial(value) {
  if (typeof(value) !== 'number' || value < 0) {
    throw "Input must be a positive number";
  }
  if (value === 1 || value === 0) {
    return 1;
  }
  return value * recursiveFactorial(value-1);
}

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(20));