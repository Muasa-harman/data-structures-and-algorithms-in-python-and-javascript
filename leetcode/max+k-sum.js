// Max Number of K-Sum Pairs
// You are given interger array nums and interger k.

// In one operation, you can pick two numbers from the array whose
// sum equals k and remove them from the array.

// Example 1:
// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
//  - Remove numbers 1 and 4 ,then nums = [1,2,3,4]:
//  - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to  5, hence a total of
// operations.

// Constraints:
// 1 <= nums1.length <= 10^5
// 1 <=[i] <=10^9
// 1 <= k <= 10^9

// @param {number[]} nums
// @param {number} k
// @return {number}

// function maxOperations (nums, k) {};
function maxOperations(nums, k) {
  let count = 0; // Initialize the count of operations
  let map = {}; // Initialize a hash map to store the frequencies of numbers

  for (let num of nums) {
    let complement = k - num; // Calculate the complement

    // If the complement exists in the map and its frequency is greater than 0
    if (map[complement] > 0) {
      count++; // We found a valid pair, increment the count
      map[complement]--; // Decrement the frequency of the complement
    } else {
      // If the complement doesn't exist or its frequency is 0, add the current number to the map
      if (map[num] == null) {
        map[num] = 0; // Initialize the frequency of the current number
      }
      map[num]++; // Increment the frequency of the current number
    }
  }

  return count; // Return the total number of operations
}
