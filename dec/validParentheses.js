// Given  a string s containing just the character "(",")","{","}","[" and "]",
//  determine if the input string is valid

// An input string is valid if
// 1.Open brackets must be closed by same type of brackets
// 2. Open brackets must be closed in the correct order
// 3.Every close bracket has a corresponding open bracket of the same type

// E.g1
// Input: s = "{}"
// Output:true

// E.g2
// Input:s="()[]{}"
// Output:true

// E.g3
// Input:s="[}"
// Output:false

// Explanation:
// Stack Data Structure:

// Use a stack to keep track of open brackets.
// Push an open bracket onto the stack when encountered.
// For a closing bracket, check if it matches the top of the stack. If it does, pop the top; otherwise, return false.
// Mapping Closing to Opening Brackets:

// A map object is used to define the relationship between closing and opening brackets.
// This helps efficiently check if a closing bracket corresponds to the last open bracket on the stack.
// Final Check:

// If the stack is empty after processing the string, the input string is valid. Otherwise, it's invalid.
// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the length of the string, as each character is processed once.
// Space Complexity:
// 𝑂(𝑛)O(n) in the worst case, for the stack to store all open brackets.

function validParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // push open brackets onto the stack
      stack.push(char);
    } else {
      // check if the stack is empty
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      // pop the matching opening bracket from the stack
      stack.pop();
    }
  }
  //    if the stack is empty, all brackets are valid
  return stack.length === 0;
}

// Test cases
console.log(validParentheses("{}")); // Output: true
console.log(validParentheses("()[]{}")); // Output: true
console.log(validParentheses("[}")); // Output: false
console.log(validParentheses("([{}])")); // Output: true
console.log(validParentheses("(]")); // Output: false
