// Directions
// Given a string, return the character that is most commonly used in the string.

// Eg
// maxChar('abccccccd') === 'c'
// maxChar("apple 1231111") === '1'

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    // if (charMap[char]) {
    charMap[char] = charMap[char] + 1 || 1;
    // } else {
    //   charMap[char] = 1;
    // }
  }

  //   for (const [key, value] of Object.entries(charMap)) {
  //     if (value > max) {
  //       max = value;
  //       maxChar = key;
  //     }
  //   }

  //   or
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}
console.log(maxChar("abcccccccd"));
console.log(maxChar("1231111"));
