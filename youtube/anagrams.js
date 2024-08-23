// Directions
// Check to see if the two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity, Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as the lower cases

// E.g
// anagrams('you know' ,'know you') -> true
// anagrams('RAIL! SAFETY!', 'fairy tales') -> true
// anagrams('Hi there', 'Bye there') -> false

// function charMap(str) {
//   const charMap = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");
//   for (let char of str) {
//     charMap[char] = ++charMap[char] || 1;
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   // Build Char map for stringA
//   const charMapA = charMap(stringA);
//   //   {};
//   //   stringA = stringA.toLowerCase().replace(/[\W]/g, "");
//   //   for (let char of stringA) {
//   //     charMapA[char] = charMapA[char] || 1;
//   //   }
//   //   return charMapA;
//   // Build char map for stringB
//   const charMapB = charMap(stringB);
//   //Compare each character in the both char maps
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;

//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) return false;
//   }

//   return true;
// }

// console.log(anagrams("Hi there', 'Bye there"));

function cleanString(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

console.log(anagram("Hi there", "Bye there"));
