/*Write a function that takes 2 string arguments and check if
 *the 2 strings are anagrams to each other (have the same characters
 * with the same quantity). Consider only characters not spaces, or
 * punctuations.*/

//Example: anagram('Ab bc', 'cbab'); // return true
//Example: anagram('abbc', 'cba'); // return false
//Example: anagram('abbc?!', 'cbab'); // return true

//The second solution

function anagram(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  let charMap = {};
  const cleanedStr = str.replace(/[^\w]|_/g, "").toLowerCase();
  for (const char of cleanedStr) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    //Or with if statement
    //if (!charMap[char]) {
    //    charMap[char] = 1
    //} else {
    //    charMap[char] += 1
    //}
  }
  return charMap;
}
