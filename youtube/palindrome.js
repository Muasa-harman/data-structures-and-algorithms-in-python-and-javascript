// Directions
// Given a string, return true if the string is palindrome
// or false if it is not . Palindrome are words that form the same word if it is reversed.

// Eg
palindrome("kayak") === true;
palindrome("madam") === true;
palindrome("CodingMoney") === false;

function palindrome(str) {
  let reversed = str.split("").reverse().join("");

  //   if (str === reversed) {
  //     return true;
  //   }
  return str === reversed;
}
console.log(palindrome("kayak"));
console.log(palindrome("CodingMoney"));

// 2 pointer technique
// every
