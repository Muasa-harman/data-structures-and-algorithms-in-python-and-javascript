// Given two sorted arrays nums1 and nums2 of size m and n respectively,
//  return the median of the two sorted arrays.

// The overall runtime complexity should be 0(log (m+n)).

// Example1:
// input: nums1 = [1,3], nums2 = [2]
// output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5

// Javascript
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let m = nums1.length;
  let n = nums2.length;
  let i_min = 0,
    i_max = m,
    half_len = Math.floor((m + n + 1) / 2);

  while (i_min <= i_max) {
    let i = Math.floor((i_min + i_max) / 2);
    let j = half_len - i;

    if (i < m && nums1[i] < nums2[j - 1]) {
      i_min = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      i_max = i - 1;
    } else {
      let max_of_left;
      if (i === 0) {
        max_of_left = nums2[j - 1];
      } else if (j === 0) {
        max_of_left = nums2[j - 1];
      } else {
        max_of_left = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return max_of_left;
      }
      let min_of_right;
      if (i === m) {
        min_of_right = nums2[j];
      } else if (j === n) {
        min_of_right = nums1[i];
      } else {
        min_of_right = Math.min(nums1[i], nums2[j]);
      }
      return (max_of_left + min_of_right) / 2.0;
    }
  }
  throw new Error("Input arrays are not sorted or empty. ");
}

// Example usage:
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); //Output: 2.0

nums1 = [1, 2];
nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2)); //Output: 2.5

// Python

// def findMedianSortedArrays(nums1, nums2):
//     if len(nums1) > len(nums2):
//         nums1, nums2 = nums2, nums1

//     m, n = len(nums1), len(nums2)
//     imin, imax, half_len = 0, m, (m + n + 1) // 2

//     while imin <= imax:
//         i = (imin + imax) // 2
//         j = half_len - i

//         if i < m and nums1[i] < nums2[j-1]:
//             imin = i + 1
//         elif i > 0 and nums1[i-1] > nums2[j]:
//             imax = i - 1
//         else:
//             if i == 0: max_of_left = nums2[j-1]
//             elif j == 0: max_of_left = nums1[i-1]
//             else: max_of_left = max(nums1[i-1], nums2[j-1])

//             if (m + n) % 2 == 1:
//                 return max_of_left

//             if i == m: min_of_right = nums2[j]
//             elif j == n: min_of_right = nums1[i]
//             else: min_of_right = min(nums1[i], nums2[j])

//             return (max_of_left + min_of_right) / 2.0

// # Example usage:
// nums1 = [1, 3]
// nums2 = [2]
// print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0

// nums1 = [1, 2]
// nums2 = [3, 4]
// print(findMedianSortedArrays(nums1, nums2))  # Output: 2.5

// Ensure nums1 is the smaller array: This simplifies the logic, so you can always binary search the smaller array. If nums1 is larger than nums2, swap them.

// Binary Search on the smaller array:

// Use binary search to partition the smaller array nums1 such that the left part of nums1 combined with the left part of nums2 forms the left half of the combined array, and the right parts form the right half.
// Calculate Partitions:

// Let i be the partition in nums1 and j be the partition in nums2. The condition for correct partition is:
// max(𝐿1,𝐿2)≤min(𝑅1,𝑅2)
// max(L1,L2)≤min(R1,R2)

// where L1 is the largest element on the left side of the partition in nums1, L2 is the largest element on the left side of the partition in nums2, R1 is the smallest element on the right side of the partition in nums1, and R2 is the smallest element on the right side of the partition in nums2.
// Handle Edge Cases:

// If one side of the partition is empty, use -∞ or +∞ accordingly.
// Compute the Median:

// If the total length of the combined arrays is odd, the median is the maximum of the left elements.
// If the total length is even, the median is the average of the maximum of the left elements and the minimum of the right elements.
