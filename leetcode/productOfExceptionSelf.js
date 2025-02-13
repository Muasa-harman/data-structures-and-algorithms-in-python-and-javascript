// Given an integer array nums,
// return an array answer such that the answer[i] is equal to the product
// of all the elements of nums except num[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
// You must run an algorithm that runs in a 0(n) time and without using division operations.

// E.g.1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// E.g.2:Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2<= nums.length <= 10^5
// -30 <= nums[i] <= 30

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate prefix products
  let prefixProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  // Calculate suffix products and multiply with the prefix products
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return answer;
}

// Example usage:
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]

// def productExceptSelf(nums):
//     n = len(nums)

//     # Initialize the result array with 1s
//     answer = [1] * n

//     # Calculate the prefix products
//     prefix = 1
//     for i in range(n):
//         answer[i] = prefix
//         prefix *= nums[i]  # Update prefix to include nums[i]

//     # Calculate the suffix products and combine with the result
//     suffix = 1
//     for i in range(n - 1, -1, -1):
//         answer[i] *= suffix
//         suffix *= nums[i]  # Update suffix to include nums[i]

//     return answer

// # Example 1:
// nums1 = [1, 2, 3, 4]
// print(productExceptSelf(nums1))  # Output: [24, 12, 8, 6]

// # Example 2:
// nums2 = [-1, 1, 0, -3, 3]
// print(productExceptSelf(nums2))  # Output: [0, 0, 9, 0, 0]
