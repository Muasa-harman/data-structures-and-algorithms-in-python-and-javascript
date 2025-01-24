// Given an integer array nums sorted in non-decreasing order,
//  return an array of the squares of each number sorted in non-decreasing order

// E.g1:
// Input nums = [-4,-1,0,3,10]
// Output:[0,1,9,16,100]

// E.g2:
// Input:nums = [-7,-3,2,3,11]
// Output:[4,9,9,49,121]

// Explanation:
// Two Pointers:
// left starts at the beginning, and right starts at the end of the array.
// Compare the absolute values at these pointers.
// Fill Result:
// Place the larger squared value in the result array, starting from the largest position (position).
// Update Pointers:
// Move the left pointer to the right if its value was used, or move the right pointer to the left.
// Repeat:
// Continue until left crosses right.
// Time Complexity:
// 𝑂(𝑛)O(n): Each element is processed once.
// Space Complexity:
// 𝑂(𝑛)O(n): The result array is the same size as the input array.

// function squareOfSorted(nums) {
//   // initialize two pointers
//   let left = 0;
//   let right = nums.length - 1;
//   // create a result array
//   const result = new Array(nums.length);
//   // position to fill the result array(from the end)
//   let position = nums.length - 1;

//   while (left <= right) {
//     // compare the absolute values of numbers at both ends
//     if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//       result[position] = nums[left] ** 2;
//       left++;
//     } else {
//       result[position] = nums[right] ** 2;
//       right--;
//     }
//     position;
//   }
//   return result;
// }

// // Example Usage
// const nums1 = [-4, -1, 0, 3, 10];
// const nums2 = [-7, -3, 2, 3, 11];
// console.log(squareOfSorted(nums1)); // Output: [0, 1, 9, 16, 100]
// console.log(squareOfSorted(nums2)); // Output: [4, 9, 9, 49, 121]

// To solve this using a split and merge approach,
//  you can first split the array into two parts (negative and non-negative numbers),
//  then square each element, and finally merge the two sorted sub-arrays into a single sorted array.

function sortedSquares(nums) {
  // split the array into two parts:negative and positive
  let negative = [];
  let positive = [];

  for (let num of nums) {
    if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }
  // square the elements in both arrays
  negative = negative.map((num) => num ** 2);
  positive = positive.map((num) => num ** 2);

  // Reverse the negative array since the smallest squares are now at the end
  negative.reverse();

  // Merge the sorted arrays
  return merge(negative, positive);
}

function merge(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  // Merge the two arrays by com paring elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // add any remaining elements from arr1 or arr2
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// Example Usage
const nums1 = [-4, -1, 0, 3, 10];
const nums2 = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums1)); // Output: [0, 1, 9, 16, 100]
console.log(sortedSquares(nums2)); // Output: [4, 9, 9, 49, 121]

// Explanation:
// Split the Array:
// Separate the input into negative (elements less than 0) and nonNegative (elements greater than or equal to 0).
// Square the Numbers:
// Square each number in both arrays.
// Reverse the Negative Array:
// Squaring negative numbers results in a decreasing order of squares, so reverse it to get ascending order.
// Merge the Two Sorted Arrays:
// Use the merge function to combine the two sorted arrays into one.
// Time Complexity:𝑂(𝑛)O(n) for splitting the array.𝑂(𝑛)O(n) for squaring and reversing the negative array.
// 𝑂(𝑛)O(n) for merging.
// Overall:
// 𝑂(𝑛)O(n).
// Space Complexity:
// 𝑂(𝑛)
// O(n): Temporary arrays for splitting and the result array.
