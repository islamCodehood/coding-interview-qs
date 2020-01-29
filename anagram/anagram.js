//The first solution
function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  const cleanedStr = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return cleanedStr;
}

//The second solution
function anagram(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
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
    const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase()
    for (const char of cleanedStr) {
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
    return charMap;
}
