// Given an integer array nums,
//  return all the triplets nums[i], nums[j],nums[k] such that nums[i] != nums[j] != nums[k] and
// nums[i] + nums[j] + nums[k] === 0

// Notice that the solution set must not contain duplicate triplets
// E.g1
// Input: nums = [-1,0,1,2,-1,-4]
// Output:[[-1,1,2],[-1,0,1]]

// E.g2
// Input: nums = [0,1,1]
// Output:[]

// E.g3
// Input: nums = [0,0,0]
// Output:[[0,0,0]]

// Explanation:
// Sorting:
// Sorting the array helps avoid duplicates and makes it easier to apply the two-pointer approach.
// Iterate Over the Array:
// Fix one element (nums[i]) and find two other numbers (nums[left] and nums[right]) such that their sum equals 0.
// Two-Pointer Technique:
// Start left at i + 1 and right at the end of the array.
// Adjust the pointers based on the current sum.
// Avoid Duplicates:
// Skip duplicate values for nums[i], nums[left], and nums[right] to ensure the solution set does not contain duplicate triplets.
// Time Complexity:
// Sorting the array takes
// 𝑂(𝑛log𝑛)O(nlogn).
// The main loop runs
// 𝑂(𝑛)
// O(n), and the two-pointer search within the loop runs
// 𝑂(𝑛)O(n).
// Overall:
// 𝑂(𝑛2)O(n 2).
// Space Complexity:
// 𝑂(1)O(1),

function threeSum(nums) {
  //   initialise the triplet list
  const result = [];

  // sort the array to enable two-pointer technique
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate elements for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // initialise the left and right pointer
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicate elements for the  second and third elements
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++; //Increase the sum by moving the left pointer
      } else {
        right--; //Decrease the sum by moving the right pointer
      }
    }
  }
  return result;
}

// Example Usage
const nums1 = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];
const nums3 = [0, 0, 0];

console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum(nums2)); // Output: []
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]
