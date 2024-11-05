// maximum number of number of vowels in a substring of given length
// Given a String s and an interger KeyboardEvent, return the maximum number of vowel
// letters in any substring of s with length k.

// Vowel letter in English are 'a','e','i','o' and 'u'.

// Example 1:
// Input: s = "abciiidef", k=3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters

// Explanation 3:

// Input: s = "leetcode", k= 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:f
// 1 <= satisfies.length <= 10^5
// s consists of lowercase English letters.
// 1 <= k <= satisfies.length

/*
@param {string} s
@params {number} k
@return {number}
*/

var maxVowels = function (s, k) {};

var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowelCount = 0;
  let currentVowelCount = 0;

  // Initial count for the first window of size `k`
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }
  }

  maxVowelCount = currentVowelCount;

  // Slide the window over the string
  for (let i = k; i < s.length; i++) {
    // Remove the effect of the leftmost character in the previous window
    if (vowels.has(s[i - k])) {
      currentVowelCount--;
    }
    // Add the effect of the new character in the current window
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }

    // Update the max vowel count
    maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
  }

  return maxVowelCount;
};

// Example usages:
console.log(maxVowels("abciiidef", 3)); // Output: 3
console.log(maxVowels("leetcode", 3)); // Output: 2
console.log(maxVowels("rhythms", 4)); // Output: 0
console.log(maxVowels("aeiou", 2)); // Output: 2

// def maxVowels(s, k):
//     vowels = set('aeiou')
//     max_vowel_count = 0
//     current_vowel_count = 0

//     # Initial count for the first window of size `k`
//     for i in range(k):
//         if s[i] in vowels:
//             current_vowel_count += 1

//     max_vowel_count = current_vowel_count

//     # Slide the window over the string
//     for i in range(k, len(s)):
//         # Remove the effect of the leftmost character in the previous window
//         if s[i - k] in vowels:
//             current_vowel_count -= 1
//         # Add the effect of the new character in the current window
//         if s[i] in vowels:
//             current_vowel_count += 1

//         # Update the max vowel count
//         max_vowel_count = max(max_vowel_count, current_vowel_count)

//     return max_vowel_count

// # Example usages:
// print(maxVowels("abciiidef", 3))   # Output: 3
// print(maxVowels("leetcode", 3))    # Output: 2
// print(maxVowels("rhythms", 4))     # Output: 0
// print(maxVowels("aeiou", 2))       # Output: 2
