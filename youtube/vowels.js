// Direction
// Write a function that returns the number of vowels used in a string. Vowels are the characters
// 'a','a','i','o','u'.
// Eg
// vowels('Hi There!') -> 3
// vowels('How are you') ->5
// vowels('Did you know') ->4
// vowels('Why')  -> 0

function vowels(str) {
  //     // Regular epression
  //   const matches = str.match(/[aeiou]/gi);
  //   return matches ? matches.length : 0;\

  const vowelCheck = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) count++;
  }
  return count;
}

console.log(vowels("Did you know"));
