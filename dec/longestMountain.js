// You may recall that an array  is a mountain  array if and only if:
// arr.length >== 3
// There exist some index i (0-indexed) with 0 < i < arr.length - 1
// such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[1]
// arr[i] > arr[i-1] > ... > arr[arr.length - 1]

// Given an integer array arr, return the length of the longest subarray, which is a mountain.
//  Return 0 if there is no mountain
// subarray

// E.g1
// Input: arr = [2,1,4,7,3,2,5]
// Output:5

// E.g2
// Input: arr = [2,2,2]
// Output:0

// Explanation:
// Mountain Definition:
// A mountain requires:
// An upward slope (arr[i - 1] < arr[i]).
// A peak (arr[i] > arr[i + 1]).
// A downward slope (arr[i + 1] > arr[i + 2]).
// Find Peaks:
// Iterate through the array to find elements that are peaks.
// Expand Around Peak:
// From the peak, expand left to find the start of the mountain.
// Similarly, expand right to find the end of the mountain.
// Track Maximum Length:
// Keep track of the longest mountain length.
// Move Efficiently:
// After processing a mountain, move the pointer i to the end of the mountain to skip redundant checks.
// Time Complexity:
// 𝑂(𝑛)O(n): Each element is processed at most twice (once while expanding).
// Space Complexity:
// 𝑂(1)O(1): No extra space is us

function longestMaintain(arr) {
  const n = arr.length;
  if (n < 3) return 0;

  let maxLength = 0;
  let i = 1;

  while (i < n - 1) {
    // check if i is a peak
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      // Expand left and right to find the mountain's boundaries
      let left = i - 1;
      let right = i + 1;

      while (left > 0 && arr[left - 1] < arr[left]) left--;
      while (right < n - 1 && arr[right] > arr[right + 1]) right++;
      // calculate the length of the mountain
      const currentLength = right - left + 1;
      maxLength = Math.max(maxLength, currentLength);

      // Move 'i' to the end of the current mountain
      i = right;
    } else {
      i++;
    }
  }
  return maxLength;
}

// Example Usage
const arr1 = [2, 1, 4, 7, 3, 2, 5];
const arr2 = [2, 2, 2];
console.log(longestMaintain(arr1)); // Output: 5
console.log(longestMaintain(arr2)); // Output: 0
