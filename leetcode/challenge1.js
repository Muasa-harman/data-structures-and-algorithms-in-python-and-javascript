// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//  Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,
//  though answers with absolute error of up to 10-4 are acceptable.

// Example
// arr = [1,1,0,-1,-1]

// There are n=5 elements, two positive, two negative and one zero.
//  Their ratios are 2/5=0.400000 ,2/5=0.400000  and 1/5=0.200000 . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers

// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer,n , the size of the array.
// The second line contains  n space-separated integers that describe arr[n] .

// Constraints
// O < n <= arr[i] <= 100

// Output Format

// Print the following  3 lines, each to 6 decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros
// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667

// Explanation

// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive:3/6=0.500000 , negative:2/6=0.333333  and zeros:1/6= 0.166667 .

// // answer
// 'use strict';

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Initialize counters
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const totalCount = arr.length;

  // Iterate through the array and count positive, negative and zero values
  arr.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  // Calculate the ratios
  const positiveRatio = (positiveCount / totalCount).toFixed(6);
  const negativeRatio = (negativeCount / totalCount).toFixed(6);
  const zeroRatio = (zeroCount / totalCount).toFixed(6);

  // Print the ratios
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  plusMinus(arr);
}

// // python
// def plusMinus(arr):
//     n = len(arr)
//     positive_count = 0
//     negative_count = 0
//     zero_count = 0

//     for num in arr:
//         if num > 0:
//             positive_count += 1
//         elif num < 0:
//             negative_count += 1
//         else:
//             zero_count += 1

//     positive_ratio = positive_count / n
//     negative_ratio = negative_count / n
//     zero_ratio = zero_count / n

//     print(f"{positive_ratio:.6f}")
//     print(f"{negative_ratio:.6f}")
//     print(f"{zero_ratio:.6f}")

// # Sample Inputs
// plusMinus([1, 1, 0, -1, -1])  # Output:
// # 0.400000
// # 0.400000
// # 0.200000

// plusMinus([-4, 3, -9, 0, 4, 1])  # Output:
// # 0.500000
// # 0.333333
// # 0.166667

// Explanation:

// The function plusMinus takes a list of integers arr as an argument.
// We initialize counters for positive, negative, and zero elements.
// We iterate through each element in the list and update the corresponding counters based on whether the element is positive, negative, or zero.
// We calculate the ratios by dividing each counter by the total number of elements.
// We print each ratio formatted to six decimal places using formatted string literals (f"{value:.6f}").
// This function handles the input correctly according to the provided constraints and examples.

function plusMinus(arr) {
  // Initialize counters
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const totalCount = arr.length;

  // Iterate through the array and count positive, negative and zero values
  arr.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  // Calculate the ratios and format to six decimal places
  const positiveRatio = (positiveCount / totalCount).toFixed(6);
  const negativeRatio = (negativeCount / totalCount).toFixed(6);
  const zeroRatio = (zeroCount / totalCount).toFixed(6);

  // Print the ratios
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

// Example usage:
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

// Output:
// 0.500000
// 0.333333
// 0.166667

// def plusMinus(arr):
//     n = len(arr)
//     positive_count = 0
//     negative_count = 0
//     zero_count = 0

//     for num in arr:
//         if num > 0:
//             positive_count += 1
//         elif num < 0:
//             negative_count += 1
//         else:
//             zero_count += 1

//     positive_ratio = positive_count / n
//     negative_ratio = negative_count / n
//     zero_ratio = zero_count / n

//     print(f"{positive_ratio:.6f}")
//     print(f"{negative_ratio:.6f}")
//     print(f"{zero_ratio:.6f}")

// # Example usage:
// arr = [-4, 3, -9, 0, 4, 1]
// plusMinus(arr)
