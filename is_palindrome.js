/*
Write a function that provided a string, returns a boolean whether or not the 
provided string is a Palindrome.

Example)
isPalindrome("Racecar");
// true
*/

/*
* Solution 1
* @function isPalindrome
* @param {String} string
* @return {Boolean} 
*/
function isPalindrome(string) {
  if (typeof string !== "string") {
    throw "Input must be a string.";
  }
  string = string.toLowerCase();
  const stringMaxIndex = string.length - 1;
  let isPalindrome = false;
  // Dividing `stringMaxIndex` by 2 ensures we always stop half way through
  // string length, and saves computing time
  for (let i = 0; i < stringMaxIndex / 2; i++) {
    if (string[i] === string[stringMaxIndex - i]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

let isStringPalindrome = isPalindrome("Racecar");
console.log(isStringPalindrome);
// true
isStringPalindrome = isPalindrome("Bevis");
console.log(isStringPalindrome);
// false
isStringPalindrome = isPalindrome("Anna");
console.log(isStringPalindrome);
// true
isStringPalindrome = isPalindrome("Kayak");
console.log(isStringPalindrome);
// true
isStringPalindrome = isPalindrome("Julianna");
console.log(isStringPalindrome);
// false
isStringPalindrome = isPalindrome("Redder");
console.log(isStringPalindrome);
// true
isStringPalindrome = isPalindrome("Detartrated");
console.log(isStringPalindrome);
// true

/*
* Solution 2: Longer run time. Note: As attractive as using built in methods 
* can be, note that these String and Array prototype methods add to time/space 
* complexity, with longer run times than the function above.
* @function isAnotherPalindrome
* @param {String} string
* @return {Boolean} 
*/
function isAnotherPalindrome(string) {
  if (typeof string !== "string") {
    throw "Input must be a string.";
  }
  // Convert string to array, reverse, and rejoin as string
  const reversedString = string.toLowerCase().split("").reverse().join("");
  if (string.toLowerCase() === reversedString) {
    return true;
  }
  return false;
}

let isStringAnotherPalindrome = isAnotherPalindrome("Racecar");
console.log(isStringAnotherPalindrome);
// true
isStringAnotherPalindrome = isAnotherPalindrome("Bevis");
console.log(isStringAnotherPalindrome);
// false
isStringAnotherPalindrome = isAnotherPalindrome("Anna");
console.log(isStringAnotherPalindrome);
// true
isStringAnotherPalindrome = isAnotherPalindrome("Kayak");
console.log(isStringAnotherPalindrome);
// true
isStringAnotherPalindrome = isAnotherPalindrome("Julianna");
console.log(isStringAnotherPalindrome);
// false
isStringAnotherPalindrome = isAnotherPalindrome("Redder");
console.log(isStringAnotherPalindrome);
// true
isStringAnotherPalindrome = isAnotherPalindrome("Detartrated");
console.log(isStringAnotherPalindrome);
// true
