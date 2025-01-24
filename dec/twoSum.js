// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add upto target:
// You may assume that each input would have exactly one solution and you may not use the same element twice

// You can return the answer in any order

// E.g1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// E.g2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// E.g3:
// Input:nums = [3,3], target = 6
// Output:[0,1]

function twoSum(nums, target) {
  const numToIndex = {}; //Hash map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; //calculate the complement
    if (complement in numToIndex) {
      return [numToIndex[complement], i]; //Return the indices of the two numbers
    }
    numToIndex[nums[i]] = i; //Store the current number and its index
  }
  throw new Error("No solution exists"); //Failsafe in case no solution
}

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Explanation:
// Hash Map for Quick Lookup:

// Use a hash map (numToIndex) to store numbers from the array as keys and their indices as values.
// This allows
// 𝑂(1)O(1) time lookup for the complement.

// Find the Complement:
// For each number nums[i], calculate its complement (target - nums[i]).
// Check if the complement already exists in the hash map.
// If it exists, the current index i and the stored index form the solution.

// Add to Hash Map:
// If the complement is not found,
// store the current number and its index in the hash map for future checks.

// Time Complexity:
// 𝑂(𝑛)O(n):
// The loop iterates through the array once.
// Hash map operations (lookup and insertion) are
// 𝑂(1)O(1).

// Space Complexity:
// 𝑂(𝑛)O(n):
// The hash map stores up to
// 𝑛 n elements (all numbers in the array).
