/*
Write a function find_primes(n) that returns all prime numbers less than or equal to n.

Examples
find_primes(1)  # => []
find_primes(5)  # => [2, 3, 5]
find_primes(20) # => [2, 3, 5, 7, 11, 13, 17, 19]_distance(friends, 0, 2) # => 2
```"
*/

function findPrimes(number) {
  if (isNaN(number)) {
    throw "Parameter must be a number.";
  }
  if (number < 2) {
    return [];
  }
  let primeValues = [];
  for (let i = 2; i <= number; i++) {
    isPrime = true;
    primeValues.forEach(value => {
      if (i % value === 0) {
        isPrime = false;
      }
    });
    if (isPrime) {
      primeValues.push(i);
    }
  }
  return primeValues;
}

let primes = findPrimes(1);
console.log(primes);
// []

primes = findPrimes(5);
console.log(primes);
// [2, 3, 5]

primes = findPrimes(20);
console.log(primes);
// [2, 3, 5, 7, 11, 13, 17, 19]


// TODO: more optimized solution?
// TODO: square root solution?