// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation
//  of words concatenated

// For example, if words = ['ab', 'cd', 'ef'], then 'abcdef',
// 'abefcd','cdabef','cdabef','cdefab','efabcd', and 'efcdab' are all concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return your answer in order.

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

function findSubstring(s, words) {
  if (!s || !words || words.length === 0) return [];

  let wordLength = words[0].length;
  let totalLength = wordLength * words.length;
  let result = [];
  let wordCount = new Map();

  // Count the frequency of each word in words array
  for (let word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  // Loop through the string to check every possible starting point
  for (let i = 0; i <= s.length - totalLength; i++) {
    let seen = new Map();
    let j = 0;
    while (j < words.length) {
      let word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
      if (wordCount.has(word)) {
        seen.set(word, (seen.get(word) || 0) + 1);
        // If the word is seen more times than expected, break
        if (seen.get(word) > wordCount.get(word)) break;
      } else {
        // If the word is not part of words array, break
        break;
      }
      j++;
    }
    // If all words match, add the start index to the result
    if (j === words.length) {
      result.push(i);
    }
  }

  return result;
}

// Example 1:
let s1 = "barfoothefoobarman";
let words1 = ["foo", "bar"];
console.log(findSubstring(s1, words1)); // Output: [0,9]

// Example 2:
let s2 = "wordgoodgoodgoodbestword";
let words2 = ["word", "good", "best", "word"];
console.log(findSubstring(s2, words2)); // Output: []

// Example 3:
let s3 = "barfoofoobarthefoobarman";
let words3 = ["bar", "foo", "the"];
console.log(findSubstring(s3, words3)); // Output: [6,9,12]
