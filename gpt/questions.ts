// There's a small error in the code above. JavaScript strings don't have a
//  .reverse() method directly. To reverse a string, you'll need to convert it to an array,
//  reverse it, and then join it back into a string. Here’s the corrected version of the function:

// function reverseNumber(num: number): number {
//     // Convert the number to a string
//     const numString = String(num);
    
//     // Split the string into an array, reverse it, and join it back
//     const reversedString = numString.split('').reverse().join('');
    
//     // Parse the reversed string back to a number
//     const reversedNumber = parseInt(reversedString, 10);
    
//     return reversedNumber;
//   }
  
// // Example usage:
// console.log(reverseNumber(1223)); // Output: 3221
// console.log(reverseNumber(987654321)); // Output: 123456789
  


// Data Structures - Arrays
// Question 1:
// Write a function that takes an array of integers and 
// returns the maximum sum of any contiguous subarray within the array.
// Answer: This problem can be solved using Kadane’s Algorithm.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6



// Question 2:
// What is the event loop in Node.js, and why is it important?
// Answer:
// The event loop is a mechanism in Node.js that handles asynchronous operations. 
// Node.js is single-threaded, and the event loop allows it to perform non-blocking
//  I/O operations by offloading tasks to the operating system or worker threads when necessary.
//  This ensures Node.js can handle many requests concurrently without blocking the main thread.



// Question 3:
// What are some principles of clean code?
// Answer:
// Clean code is clear, readable, and maintainable. Some principles include:

// Meaningful Names: Variables, functions, and classes should have descriptive names.
// Small Functions: Functions should do one thing and do it well.
// Avoiding Repetition: Follow the DRY (Don't Repeat Yourself) principle.
// Consistent Style: Code formatting should be consistent, with clear indentation and spacing.
// Error Handling: Code should handle errors gracefully and provide informative messages.


// Question 4:
// Implement a function that checks if a given string containing only parentheses is valid. A string is considered valid if every opening parenthesis has a corresponding closing parenthesis in the correct order.
// Answer: Use a stack to solve this problem.

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false



// Clean Code
// Question 3:
// What are some principles of clean code?
// Answer:
// Clean code is clear, readable, and maintainable. Some principles include:

// Meaningful Names: Variables, functions, and classes should have descriptive names.
// Small Functions: Functions should do one thing and do it well.
// Avoiding Repetition: Follow the DRY (Don't Repeat Yourself) principle.
// Consistent Style: Code formatting should be consistent, with clear indentation and spacing.
// Error Handling: Code should handle errors gracefully and provide informative messages.

// Coding: Data Structures - Stacks and Queues
// Question 4:
// Implement a function that checks if a given string containing only parentheses is valid. A string is considered valid if every opening parenthesis has a corresponding closing parenthesis in the correct order.
// Answer: Use a stack to solve this problem.



// Data Structures - Strings
// Question 5:
// Write a function that takes a string and returns the first non-repeating character. If all characters repeat, return null.
// Answer: We can use a hash map to keep track of character counts.

// javascript
// Copy code
function firstNonRepeatingCharacter(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// Example usage:
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null





// You said:
/* AI: Certainly! You can create a function that takes in a number and returns its reverse. Here’s how you can do it: */  function reverseNumber(num: number): number {   // Convert the number to a string   const numString = String(num);   // Reverse the string   const reversedString = numString.reverse();   // Parse the reversed string back to a number   const reversedNumber = parseInt(reversedString, 10);   return reversedNumber; } // Example usage: console.log(reverseNumber(1223)); // Output: 3221 console.log(reverseNumber(987654321)); // Output: 123456789 
// There's a small error in the code above. JavaScript strings don't have a .reverse() method directly.
//  To reverse a string, you'll need to convert it to an array, reverse it, and then join it back into a string.
//   Here’s the corrected version of the function:


function reverseNumber(num: number): number {
  // Convert the number to a string
  const numString = String(num);
  
  // Split the string into an array, reverse it, and join it back
  const reversedString = numString.split('').reverse().join('');
  
  // Parse the reversed string back to a number
  const reversedNumber = parseInt(reversedString, 10);
  
  return reversedNumber;
}

// Example usage:
console.log(reverseNumber(1223)); // Output: 3221
console.log(reverseNumber(987654321)); // Output: 123456789







// You said:
// function oppositeNumber(num: number): number {
//   return -num;
// }

// Example usage:
console.log(oppositeNumber(5)); // Output: -5
console.log(oppositeNumber(-7)); // Output: 7

// Your oppositeNumber function is perfect! It simply negates the input by using the unary minus (-) operator, effectively flipping the sign of the number.

// Here's the code again for reference:

// typescript
// Copy code
function oppositeNumber(num: number): number {
  return -num;
}

// Example usage:
console.log(oppositeNumber(5));   // Output: -5
console.log(oppositeNumber(-7));  // Output: 7



// It looks like you’re aiming to create a Caesar Cipher encryption function called cc_encryptor,
//  which takes an input string (iText), an orientation (orient),
//   and a shift amount (k). Here’s a sample implementation of the Caesar Cipher in TypeScript
//    that handles shifting in both directions depending on the orientation (orient)


import * as readline from 'readline';

interface Input {
    str1: string;
    orient: number;
    k: number;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cc_encryptor(iText: string, orient: number, k: number): string {
    const shift = orient === -1 ? -k : k;
    let result = '';

    for (const char of iText) {
        if (/[a-z]/.test(char)) {
            // For lowercase letters
            const code = ((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97;
            result += String.fromCharCode(code);
        } else if (/[A-Z]/.test(char)) {
            // For uppercase letters
            const code = ((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65;
            result += String.fromCharCode(code);
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }

    return result;
}

// Read the input
rl.question('', (str1: string) => {
    const input: Input = {
        str1: str1.trim(),
        orient: 0,
        k: 0
    };

    rl.question('', (orient: string) => {
        input.orient = parseInt(orient);

        rl.question('', (k: string) => {
            input.k = parseInt(k);

            // Call the function to perform the Caesar cipher encryption
            const cText = cc_encryptor(input.str1, input.orient, input.k);

            if (cText !== "") {
                // Print the encrypted string
                console.log(cText);
            }

            rl.close();
        });
    });
});
}


// Function Explanation
// The getMaxChars function finds the character that appears most frequently in a given string,
//  excluding any leading whitespace

function getMaxChars(str: string): string {
    const frequency: { [key: string]: number } = {};
    let maxFrequency = 0;
    let maxChar = '';

    // Calculate the frequency of each character
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        
        if (!/\s/.test(currentChar)) { // Skip whitespace characters
            frequency[currentChar] = (frequency[currentChar] || 0) + 1;

            // Update maxChar if a character has a higher frequency
            if (frequency[currentChar] > maxFrequency) {
                maxFrequency = frequency[currentChar];
                maxChar = currentChar;
            }
        }
    }

    return maxChar;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Read the string input
rl.question('', (str1: string) => {
    // Call getMaxChars function and display the result
    const result = getMaxChars(str1 || "");
    console.log(result);

    rl.close();
});


// To help you implement the findMissingOperationIndex function,
//  I'll go over a possible approach based on the setup you've provided.



// ops is an array of operations (probably strings like "PUSH X" and "POP").
// missingOp is the operation that should be inserted into ops at some index to achieve the final stack currentTop.
// The goal of findMissingOperationIndex is likely to determine where in the list of operations (ops) the missingOp 
// needs to be inserted so that,when executed in order, the stack reaches currentTop as its top element.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Candidate function
function findMissingOperationIndex(ops, missingOp, currentTop) {
    // Function to simulate stack operations
    const simulateStack = (operations) => {
        const stack = [];
        for (let op of operations) {
            if (op.startsWith('PUSH')) {
                const value = parseInt(op.split(' ')[1], 10);
                stack.push(value);
            } else if (op === 'POP') {
                if (stack.length > 0) {
                    stack.pop();
                }
            }
        }
        // Return the current top of the stack, or null if empty
        return stack.length > 0 ? stack[stack.length - 1] : null;
    };

    // Try inserting `missingOp` at each position in `ops`
    for (let i = 0; i <= ops.length; i++) {
        // Create a new array with `missingOp` inserted at index `i`
        const testOps = [...ops.slice(0, i), missingOp, ...ops.slice(i)];
        
        // Simulate the stack with this modified operations list
        const top = simulateStack(testOps);
        
        // Check if this gives the desired `currentTop`
        if (top === currentTop) {
            return i; // Return the index if the stack top matches `currentTop`
        }
    }

    // If no valid index is found, return -1
    return -1;
}

// Read the input from stdin
const ops = [];
let missingOp, currentTop;

rl.question('', (n) => {
    let counter = parseInt(n);
    const readOps = () => {
        if (counter-- > 0) {
            rl.question('', (op) => {
                ops.push(op);
                readOps();
            });
        } else {
            rl.question('', (op) => {
                missingOp = op;
                rl.question('', (top) => {
                    currentTop = parseInt(top);

                    // Call the candidate function
                    const result = findMissingOperationIndex(ops, missingOp, currentTop);
                    
                    // Print result
                    console.log(result);

                    rl.close();
                });
            });
        }
    };
    readOps();
});
