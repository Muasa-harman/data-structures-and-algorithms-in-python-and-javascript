// You are given an array of strings tokens that represent an arithmetic expression in a Reverse Polish notation .
// Evaluate the expression.Return an integer that represents the value of the expression.

// Note.
// The valid operations are "*","-","*", and "/".
// Each operand may be an integer or another expression
// The division between two integers always truncate towards ero
// There will not be any division by ero
// The input represents a valid arithmetic expression in a reverse polish notation
// The answer and all the intermediate calculations can be represented in a 32-bit integer

// E.g1
// Input:tokens = ["2","1","*","3","*"]
// Output:9

// E.g2
// Input:tokens = ["4","13","5","2","*"]
// Output:6

// Explanation:
// Stack for Evaluation:

// Use a stack to store numbers and intermediate results.
// Push operands (numbers) onto the stack.
// For operators, pop the top two numbers from the stack, apply the operation, and push the result back onto the stack.
// Division Handling:

// Use Math.trunc(a / b) to ensure truncation towards zero for integer division.
// Final Result:

// After processing all tokens, the stack will contain exactly one value, which is the result of the expression.
// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of tokens, as we process each token once.
// Space Complexity:
// 𝑂(𝑛)O(n), for the stack to store intermediate results.

function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      // if token is a number, push it to the stack
      stack.push(Number(token));
    } else {
      // otherwise its an operator ; pop the last two numbers from the stack
      const b = stack.pop();
      const a = stack.pop();

      // Perform the operation based on the token and push the result back to the stack
      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(Math.trunc(a / b)); // Use Math.trunc for truncation towards zero
      }
    }
  }
  // The final result is the only number left in the stack
  return stack[0];
}

// Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*", "17", "+", "5", "+"])); // Output: 22
