/*
Given two arrays of numbers, write a function `findDuplicates(arr1, arr2)` which 
returns an array of all the numbers that are in both arr1 and arr2. Solve for 
the following **2** cases:
  - arr1 and arr2 are the same length
  - arr2 is much bigger than arr1

Constraints
  - Array inputs are sorted and no duplicates
  - Input is always an array (don't worry about type enforcement)

Example) findDuplicates(
  [1, 2, 3, 4],
  [0, 2, 3, 5],
);
Output: 
[2,3]

Example) findDuplicates(
  [1, 2, 3, 4, 6],
  [0, 2, 3, 5, 6, 8, 10, 16],
);
Output:
[2,3,6]
*/

// Medicore (faster than solution 2 but slower than solution 3)
// Solution 1: Using built in methods
// Sub-optimal
function findDuplicates(arr1, arr2) {
  console.time("solution1");
  let duplicates = [];
  arr1.forEach((value) => {
    if (arr2.includes(value)) {
      duplicates.push(value);
    }
  })
  console.timeEnd("solution1");
  return duplicates;
}

let array1 = [2, 3, 4, 5, 6, 7, 9, 19, 30, 100, 209];
let array2 = [0, 1, 2, 4, 5, 7, 10, 19, 30, 100, 220];
let duplicates = findDuplicates(array1, array2);
// [2, 4, 5, 7, 19, 30, 100]


// Slowest
// Solution 2: No built in methods
// Nested loops: least efficient
function findDuplicatesAgain(arr1, arr2) {
  console.time("solution2");
  let duplicates = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        duplicates.push(arr1[i])
      }
    }
  }
  console.timeEnd("solution2");
  return duplicates;
}

let arrayA = [2, 3, 4, 5, 6, 7, 9, 19, 30, 100, 209];
let arrayB = [0, 1, 2, 4, 5, 7, 10, 19, 30, 100, 220];
let dupesAgain = findDuplicatesAgain(arrayA, arrayB);
// [2, 4, 5, 7, 19, 30, 100]

// Fastest
// Solution 3: Greatest efficiency & No built in methods
// e.g, no nested looping
function findDupes(arr1, arr2) {
  console.time("solution3");
  let duplicates = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    const arr1Numb = arr1[i];
    const arr2Numb = arr2[j];
    if (arr1Numb === arr2Numb) {
      duplicates.push(arr1Numb);
      i++;
      j++;
    } else if (arr1Numb < arr2Numb) {
      i++;
    } else {
      j++;
    }
  }
  console.timeEnd("solution3");
  return duplicates;
}

let arrayOne = [2, 3, 4, 5, 6, 7, 9, 19, 30, 100, 209];
let arrayTwo = [0, 1, 2, 4, 5, 7, 10, 19, 30, 100, 220];
let dupes = findDupes(arrayA, arrayB);
// [2, 4, 5, 7, 19, 30, 100]