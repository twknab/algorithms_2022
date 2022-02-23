# Algorithms - 2022

NOTE: Each algorithm is given 30 minutes to solve.

NOTE: Add `console.time('foo');` to start of function, and
`console.timeEnd('foo')`; to end (before return), to see millisecond run time.
For algorithms with multiple solutions this is a great way to see which one has
faster runtime.

- Prime Numbers (`prime_numbers.js`):
  - Write a function `findPrimes(n)` that returns all prime numbers less than or equal to n.
- Characters in a String (`num_char_string.js`):
  - Write a function `numberOfCharactersInString('foo')` that returns a count of each character in a string.
- Is Palindrome (`is_palindrome.js`):
  - Write a function `isPalindrome('foo')` that returns `true` or `false` if a provided string is a Palindrome (e.g, same spelling forwards and backwards -- example: "racecar").
- Find The Duplicates (`find_the_duplicates.js`):
  - Given two sorted arrays of numbers, write a function `findDuplicates(arr1, arr2)` which returns an array of all the numbers that are in both arr1 and arr2. Solve for the following **2** cases:
    - arr1 and arr2 are the same length
    - arr2 is much bigger than arr1
    - Analyze time and space complexity of each
- Balanced Brackets (`balanced_brackets.js`):
  - Given a string of brackets, e.g, "{([])}", write a function `balancedBrackets(string)` that returns a `boolean` if the brackets are balanced.
- Fix Mismatched Brackets (`fix_brackets.js`):
  - Given a string of mis-matched brackets, similar to above, e.g, "{([])}", write a function `fixBrackets(string)`, that returns it properly fixed. If the brackets do not need to be fixed, return the string as is. 
- Recursive Sigma (`recursive_sigma.js`):
  - Write a function (`recursiveSigma(number)`) that given a number, returns sum of integers.
- Recursive Factorial (`recursive_factorial.js`):
  - Write a function (`recursiveFactorial(number)`) that given a number, returns the product of the integers from 1 to that number.
