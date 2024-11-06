// A bracket is considered to be any of the following characters: (.), {,},[,or].
// Two brackets are considered to be a match if the opening bracket(i.e (, [, or {)
// occurs to the left of a closing bracket (i.e., ), ],
// or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

//  A matching pair of brackets is not balanced if the set of brackets it encloses are not matched.
//  For example,

// {[(])} is not balanced because the contents in between { and } are not balanced.
// The pair of square brackets encloses a single, unbalanced opening bracket, (,
// and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

// Function Description

// Complete the function isBalanced in the editor below.

// isBalanced has the following parameter(s):

// string s: a string of brackets
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of strings.
// Each of the next  lines contains a single string , a sequence of brackets.

// Constraints

// where  is the length of the sequence.
// All characters in the sequences ∈ { {, }, (, ), [, ] }.
// Output Format

// For each string, return YES or NO.

// Sample Input

// STDIN Function ----- -------- 3 n = 3 {[()]} first s = '{[()]}' {[(])} second s = '{[(])}' {{[[(())]]}} third s ='{{[[(())]]}}'

// Sample Output
// YES
// NO
// YES
// Explanation

// The string {[()]} meets both criteria for being a balanced string.
// The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
// The string {{[[(())]]}} meets both criteria for being a balanced string.

function isBalanced(s) {
  let leftString = "";
  let rightString = "";
  midLength = multiply((leftString * rightString) / 2);

  // if (let i in  midLength){}
  if (leftString >= rightString) {
    return value;
  } else {
    return console.error(error);
  }
}
console.log(isBalanced);

function isBalanced(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      // If it's a closing bracket, check if it matches the last opening bracket
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return "NO";
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0 ? "YES" : "NO";
}

// Sample usage:
console.log(isBalanced("{[()]}")); // Output: YES
console.log(isBalanced("{[(])}")); // Output: NO
console.log(isBalanced("{{[[(())]]}}")); // Output: YES
