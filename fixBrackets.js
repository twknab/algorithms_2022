/*
Given a mis-matched string of brackets, e.g, "{([)}", write a function 
`fixBrackets(string)` that returns the correctly matched string (balanced).

Example)
fixBrackets("{([)}");

Output:
"{([])}"

If string is balanced, return string:
balancedBrackets("{([])}");

Output:
{([])}
*/

const pairings = {
  "{": "}",
  "[": "]",
  "(": ")",
  "<": ">",
};

/****
 * SOLUTION 1
 *
 */
function fixBrackets(string) {
  // Gather opening and closed brackets
  let openBrackets = [];
  let closedBrackets = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const isOpeningBracket = char in pairings === true;
    const isClosingBracket = Object.values(pairings).includes(char) === true;

    if (isOpeningBracket) {
      openBrackets.push(char);
    }
    if (isClosingBracket) {
      closedBrackets.push(char);
    }
  }

  // Evalue brackets and correct any mismatches
  let i = 0;
  let j = closedBrackets.length - 1;
  while (i < openBrackets.length || j >= 0) {
    const open = openBrackets[i];
    const closed = closedBrackets[j];
    if (pairings[open] !== closed) {
      let missingBracket;
      if (open === undefined) {
        missingBracket = Object.keys(pairings).find(
          (key) => pairings[key] === closed
        );
        openBrackets.push(missingBracket);
      }
      if (closed === undefined) {
        missingBracket = pairings[open];
        closedBrackets.unshift(missingBracket);
      }
    }
    i++;
    j--;
  }
  // concat arrays and join to string
  string = openBrackets.concat(closedBrackets).join("");
  return string;
}

/******
 * TEST CASES
 *
 */
let testString = "{([)}";
let balancedString = fixBrackets(testString);
// "{([])}"
expect(balancedString, "{([])}");

testString = "{(])}";
balancedString = fixBrackets(testString);
expect(balancedString, "{([])}");
// "{([])}"

testString = "{())}";
balancedString = fixBrackets(testString);
expect(balancedString, "{(())}");
// "{(())}";

testString = "{()))))))}";
balancedString = fixBrackets(testString);
expect(balancedString, "{((((((()))))))}");
// "{((((((()))))))}";

testString = "{<[{>}";
balancedString = fixBrackets(testString);
expect(balancedString, "{<[{}]>}");
// "{<[{}]>}"

testString = "{<[{<>}]>}";
balancedString = fixBrackets(testString);
expect(balancedString, "{<[{<>}]>}");
// "{<[{<>}]>}"

// TODO: Fix failing edge case where two nested closed brackets do not pass
testString = "{<[{}[]]>}";
balancedString = fixBrackets(testString);
expect(balancedString, "{<[{}[]]>}");
// "{<[{}[]]>}"

/**
 * Helper function to pass unit test
 * @param {string} output 
 * @param {string} expectedOutput 
 */
function expect(output, expectedOutput) {
  if (output !== expectedOutput) {
    throw `Failed. Expected: ${expectedOutput} but got ${output}`;
  } else {
    console.log(
      `PASSED...output: ${output} matches expected: ${expectedOutput}`
    );
  }
}
