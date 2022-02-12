/*
Given a string, such as "playground", return a count of each letter contained in the string.

Output should be alphabetical.

E.g, function output may look something like this:

numberOfCharactersInString("playground")
{
  a: 1,
  d: 1,
  g: 1,
  l: 1,
  n: 1,
  o: 1,
  p: 1,
  r: 1,
  u: 1,
  y: 1,
}

*/

function numberOfCharactersInString(string) {
  if (typeof(string) !== 'string') {
    throw "Input must be a string.";
  }
  let characterCount = {};
  // Sort the string alphabetically so Obj output is alphbatetical
  string = string.split("").sort().join("");
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter in characterCount) {
      characterCount[letter] = characterCount[letter] + 1;
    } else {
      characterCount[letter] = 1;
    }
  }
  return characterCount;
};

let lettersOutput = numberOfCharactersInString("hello");
console.log(lettersOutput);
// {e: 1, h: 1, l: 2, o: 1}

lettersOutput = numberOfCharactersInString("racecar");
console.log(lettersOutput);
// {a: 2, c: 2, e: 1, r: 2}

lettersOutput = numberOfCharactersInString("winning");
console.log(lettersOutput);
// {g: 1, i: 2, n: 3, w: 1}

