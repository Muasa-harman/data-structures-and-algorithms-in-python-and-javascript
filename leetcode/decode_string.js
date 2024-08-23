// Decode String
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string],
//  where the encoded_string inside the square brackets is being repeated exactly k times.
//   Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces,
//  square brackets are well-formed, etc. Furthermore, you may assume that the original
//  data does not contain any digits and that digits are only for those repeat numbers, k.
//   For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 10^5.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:
// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  stack = [];
  current_number = 0;
  current_string = "";

  for (let char of s) {
    if (!isNaN(char)) {
      current_number = current_number * 10 + parseInt(char, 10);
    } else if (char === "[") {
      stack.push([current_number, current_string]);
      current_number = 0;
      current_string = "";
    } else if (char === "]") {
      let [num, prevString] = stack.pop();
      current_string = prevString + current_string.repeat(num);
    } else {
      current_string += char;
    }
  }
  return current_string;
};
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

// To decode an encoded string in JavaScript using a similar approach as described before, we can also use a stack to manage the characters and numbers. Here's how you can implement it:

// Initialization:

// Use a stack to store tuples of numbers and strings.
// Create a currentNum to track the current multiplier and currentString to accumulate the string being processed.
// Traversal:

// Iterate through each character in the string.
// If the character is a digit, update currentNum to account for multi-digit numbers.
// If the character is [, push the currentNum and currentString onto the stack and reset them.
// If the character is ], pop the stack to retrieve the last number and string, then concatenate currentString repeated num times to the previous string.
// If the character is a letter, add it to currentString.
// Completion:

// After iterating through the string, currentString will contain the decoded string.

// // python

// def decodeString(s):
//     stack = []
//     current_num = 0
//     current_string = ""

//     for char in s:
//         if char.isdigit():
//             current_num = current_num * 10 + int(char)
//         elif char == '[':
//             stack.append((current_string, current_num))
//             current_string = ""
//             current_num = 0
//         elif char == ']':
//             last_string, num = stack.pop()
//             current_string = last_string + current_string * num
//         else:
//             current_string += char

//     return current_string

// # Sample Inputs
// print(decodeString("3[a]2[bc]"))       # Output: "aaabcbc"
// print(decodeString("3[a2[c]]"))        # Output: "accaccacc"
// print(decodeString("2[abc]3[cd]ef"))   # Output: "abcabccdcdcdef"

// Explanation:

// We initialize a stack to keep track of the strings and numbers while processing the encoded string.
// We also initialize current_num to keep track of the current multiplier and current_string to build the current substring.
// We iterate through each character in the input string s:
// If the character is a digit, we update current_num by multiplying the previous current_num by 10 and adding the current digit (to handle multi-digit numbers).
// If the character is [, we push the current string and number onto the stack and reset current_string and current_num.
// If the character is ], we pop from the stack to get the last string and the multiplier, and we update current_string by repeating it num times and appending it to the last string.
// If the character is a letter, we simply append it to current_string.
// After the loop, current_string will contain the fully decoded string, which we return as the result.
// This approach efficiently handles the decoding of nested and sequential encoded patterns, ensuring the correct output.

var decodeString = function (s) {
  let stack = [];
  let current_number = 0;
  let current_string = "";

  for (let char of s) {
    if (!isNaN(char)) {
      // If the character is a number, update the current_number
      current_number = current_number * 10 + parseInt(char, 10);
    } else if (char === "[") {
      // Push the current string and current number to stack, then reset them
      stack.push([current_number, current_string]);
      current_number = 0;
      current_string = "";
    } else if (char === "]") {
      // Pop the stack, repeat the string and add it to the previous string
      let [num, prevString] = stack.pop();
      current_string = prevString + current_string.repeat(num);
    } else {
      // If it's a letter, add it to the current_string
      current_string += char;
    }
  }

  return current_string;
};

// Test cases
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

// def decodeString(s):
//     stack = []
//     current_num = 0
//     current_string = ""

//     for char in s:
//         if char.isdigit():
//             # If the character is a digit, update current_num
//             current_num = current_num * 10 + int(char)
//         elif char == '[':
//             # Push the current string and current number to the stack, then reset them
//             stack.append((current_string, current_num))
//             current_string = ""
//             current_num = 0
//         elif char == ']':
//             # Pop the stack, repeat the string and add it to the previous string
//             last_string, num = stack.pop()
//             current_string = last_string + current_string * num
//         else:
//             # If it's a letter, add it to the current_string
//             current_string += char

//     return current_string

// # Test cases
// print(decodeString("3[a]2[bc]"))      # Output: "aaabcbc"
// print(decodeString("3[a2[c]]"))       # Output: "accaccacc"
// print(decodeString("2[abc]3[cd]ef"))  # Output: "abcabccdcdcdef"
