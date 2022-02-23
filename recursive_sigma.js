/*
Write a function (`recursiveSigma(number)`) that given a number, returns sum of integers. 

Example)
recursiveSigma(5) = 1+2+3+4+5 = 15
*/

// Time complexity = O(n)
// Space complexity = O(n) 
function recursiveSigma(value) {
  if (typeof(value) !== 'number') {
    throw "Input must be a value.";
  }

  if (value < 1) {
    return 0;
  }

  if (value === 1) {
    return value;
  }

  return value + recursiveSigma(value-1);
}

console.log(recursiveSigma(5));
console.log(recursiveSigma(-1));
console.log(recursiveSigma(10));