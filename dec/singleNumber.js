// Given a non-empty array of integers nums, every element appears twice, excempt for one
//  Find that single one.
// You must implement a solution with linear runtime complexity and use only constant matrix space
// E.g1
// Input: nums = [2,2,1]
// Output:1

// E.g2
// Input: nums = [4,1,2,1,2]
// Output:1

// E.g3
// Input: nums = [1]
// Output:1

// To solve this problem in linear time complexity (
// 𝑂(𝑛)O(n))
// and constant space (𝑂(1)O(1)),
// we can use the bitwise XOR operation. XOR has the property that 𝑎 ⊕𝑎 = 0 a⊕a=0 and  𝑎 ⊕ 0 = 𝑎 a⊕0=a.
//  Using this, all duplicate numbers cancel out, leaving the single number.

// Explanation:
// XOR Property:
// XOR of a number with itself is 0:
// 𝑎⊕𝑎=0
// a⊕a=0.
// XOR of a number with 0 is the number itself:
// 𝑎⊕0=𝑎a⊕0=a.
// XOR is commutative and associative, so the order doesn’t matter.
// Algorithm:
// Start with result = 0.
// Iterate through the array and XOR each number with result.
// All duplicate numbers will cancel out, leaving the single number in result.
// Edge Cases:
// If the array has only one element, return that element (it works directly because
// 0⊕𝑎=𝑎0⊕a=a).
// Time Complexity:
// 𝑂(𝑛)O(n): We iterate through the array once.
// Space Complexity:
// 𝑂(1)O(1):

function singleNumber(nums) {
  let result = 0;
  // iterate
  for (const num of nums) {
    result ^= num; //XOR each number with result
  }

  return result;
}

// Example Usage
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];
const nums3 = [1];

console.log(singleNumber(nums1)); // Output: 1
console.log(singleNumber(nums2)); // Output: 4
console.log(singleNumber(nums3)); // Output: 1
