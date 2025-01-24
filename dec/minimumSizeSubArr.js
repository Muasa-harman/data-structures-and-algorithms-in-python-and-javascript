// Given an array of positive integers nums and a positive integer target,
//  return the minimum length of a subarray whose sum is greater than or equal to
//  target. If there is no such subarray return 0 instead.

// E.g1
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output:2

// E.g2
// Input: target = 4, nums = [1,4,4]
// Output:1

// E.g3
// Input:target = 11, nums = [1,1,1,1,1,1,1,1]
// Output:0

// Explanation:
// Sliding Window:
// Use two pointers (left and right) to represent the window.
// Expand the window by incrementing right and adding nums[right] to currentSum.
// Shrink the window by incrementing left and subtracting nums[left] from currentSum when the condition currentSum >= target is met.
// Track Minimum Length:
// Calculate the window size as right - left + 1 and update minLength whenever the sum condition is satisfied.
// Edge Cases:
// If minLength remains Infinity, it means no subarray satisfies the condition, so return 0.
// Time Complexity:
// 𝑂(𝑛)O(n): Each element is processed at most twice (once when expanding the window and once when shrinking it).
// Space Complexity:
// 𝑂(1)O(1): No additional space is used apart from variables.

// sliding window technique for efficiency:
function minSiSubArray(nums, target) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  // iteration
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // shrink window as long as the condition is met
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// Example Usage
const nums1 = [2, 3, 1, 2, 4, 3];
const nums2 = [1, 4, 4];
const nums3 = [1, 1, 1, 1, 1, 1, 1, 1];

console.log(minSiSubArray(nums1, 7)); // Output: 2
console.log(minSiSubArray(nums2, 4)); // Output: 1
console.log(minSiSubArray(nums3, 11)); // Output: 0
