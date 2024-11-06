// Given a binary array nums, you should delete one element from it.
//  Return the size of the longest non-empty subarray
// containing only 1's in the resulting array. Return 0 if there is no such subarray.

// E.g 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains
// 3 numbers with value of 1's.

// E.g 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1]
// longest subarray with value of 1's is [1,1,1,1,1].

// E.g.3
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:

// 1 <= nums1.length <= 10^5
// nums[i] is either 0 or 1

/*
@params {number[]} nums
@return {number}
*/

// function longestSubarray (nums) {
//   const binary_array = "";
// };

function longestSubarray(nums) {
  let left = 0;
  let max_len = 0;
  let zero_count = 0;

  for (let right = 0; right < nums.length; right++) {
    // Increase the zero count if we encounter a 0
    if (nums[right] === 0) {
      zero_count++;
    }

    // If the window has more than one 0, shrink the window from the left
    while (zero_count > 1) {
      if (nums[left] === 0) {
        zero_count--;
      }
      left++;
    }

    // Calculate the max_len (subtract 1 for the deletion)
    max_len = Math.max(max_len, right - left);
  }

  // Return max_len, ensuring at least one element has been removed
  return max_len;
}

// Example usages:
console.log(longestSubarray([1, 1, 0, 1])); // Output: 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // Output: 5
console.log(longestSubarray([1, 1, 1])); // Output: 2

// def longestSubarray(nums):
//     left = 0
//     max_len = 0
//     zero_count = 0

//     for right in range(len(nums)):
//         # Increase the zero count if we encounter a 0
//         if nums[right] == 0:
//             zero_count += 1

//         # If the window has more than one 0, shrink the window from the left
//         while zero_count > 1:
//             if nums[left] == 0:
//                 zero_count -= 1
//             left += 1

//         # Calculate the max_len (subtract 1 for the deletion)
//         max_len = max(max_len, right - left)

//     # Return max_len, ensuring at least one element has been removed
//     return max_len

// # Example usages:
// print(longestSubarray([1, 1, 0, 1]))              # Output: 3
// print(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]))  # Output: 5
// print(longestSubarray([1, 1, 1]))                 # Output: 2
