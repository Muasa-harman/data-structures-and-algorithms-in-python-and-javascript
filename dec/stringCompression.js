// You are developing a text processing system that need to compress repetitive character sequences in a string.
// Design a function that takes a string as input and returns a compressed version where consecutive repeated characters are
// replaced with the character followed by its count.However,if the compressed version would be longer than the original string,
// return the original string.The input string will only contain uppercase letters(A-Z)

// EXAMPLE 1
// Input:AABBCCCC

// Outout:A2B3C4

// Explanation:A appers 2 TimeRanges, B appears 3 times , C appears 4 times

// EXAMPLE 2
// Input:XYZ

// Output:XYZ

// Explanation:No consecutive repeated characters,
//  compressed version(X1Y1Z1) would be longer than original

// Requirements1:
// Implement a function that compresses consecutive repeated characters
// 2.Return original string if compressed version would be longer
// 3.Handle strings with both single and multiple consecutive characters
// 4.Input will only contain uppercase letters A- Z
// 5.Maintain the order of characters in the original string
// 6. Return compressed string in format: character followed by count
// 7. Function should run in 0(n) time complexity where n is string length

function compressString(inputString) {
  // initialize variables to store the compressed string and the count of the current character
  let compressed = [];
  let count = 1;

  // iterate through the string
  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i - 1]) {
      // increment count if the current character matches the previous one
      count++;
    } else {
      // Append the character and its count to the compressed list
      compressed.push(inputString[i - 1] + count);
      count = 1;
    }
  }
  // Append the last character and its count
  if (inputString.length > 0) {
    compressed.push(inputString[inputString.length - 1] + count);
  }
  // Join the compressed
  const compressString = compressed.join("");

  // Return the original string if the compressed conversion is longer
  return compressString.length < inputString.length
    ? compressString
    : inputString;
}

// Example usage
console.log(compressString("AABBBCCCC")); // Output: "A2B3C4"
console.log(compressString("XYZ")); // Output: "XYZ"
