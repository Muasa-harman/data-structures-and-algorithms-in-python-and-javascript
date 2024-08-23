// Given the positive integers, find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two
// spaces separated long integers.

// E.g
// arr = [1,3,5,7,9]

// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is
// 3 + 5 + 7 + 9 = 24
// The function prints.

// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameters(s);

// arr:an array of 5 integers

// Print
// Print two space-separated integers.

// Constaints

// 1 <= arr[i]<=10^9

// Output Format

// Print two space-separated long integers denoting the respective minimum
// and maximum values that can be calculated by summing exactly four of the five integers.
// (The output can  be grater that a 32 bit integer)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// The numbers are 1,2,3,4 and 5. Calculate the following sums using four of the fiv integers:
// 1.Sum everything except 1. th sum is 2 + 3 + 4 + 5 = 14
// 2.Sum everything except 2. the sum is 1 + 3+ 4+5=13
// 3.Sum everything except 3. the sum is 1 + 2 + 4 + 5 = 12
// 4. Sum everything except 4. the sum is 1 + 2 + 3 + 5 = 11
// 5. Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10

// Hint: Beware of integer overflow! Use 64-bit integers.

function readLine(arr) {
  // return inputString[currentLine++];
  // sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the minimum sum (sum of the last four numbers)
  let minSum = arr[0] + arr[1] + arr[2] + arr[3];

  // claculate the maximum sum (sum of the last four numbers)
  let maxSum = arr[1] + arr[2] + arr[3] + arr[4];

  // print the results
  console.log(minSum, maxSum);
}
// Sample input
const arr = [1, 3, 4, 7, 9];
readLine(arr); //Output

// To solve this problem, you need to calculate the minimum and maximum sums that can be obtained by summing exactly four out of the five given integers. The approach is straightforward:

// Sort the array: By sorting the array, the smallest and largest elements will be easily accessible.
// Calculate the minimum sum: Sum the first four elements (which will be the smallest four).
// Calculate the maximum sum: Sum the last four elements (which will be the largest four).
// //

// Explanation
// Sorting: The array is sorted in ascending order, which helps in easily selecting the smallest and largest sets of numbers.
// Calculating the sums:
// The minimum sum is obtained by summing the first four numbers after sorting.
// The maximum sum is obtained by summing the last four numbers after sorting.
