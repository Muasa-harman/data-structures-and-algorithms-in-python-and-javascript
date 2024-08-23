// Container with most water
// You are given interger array height of length n . There are n vertical lines drawn
// such that the two endpoint of the ith line are (i,0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container
// the  container contains the most water.

// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section )
// the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output:1

// Constraints:
// n==height.length
// 2<=n <= 10^5
// 0 <= height[i] <[i] <= 10^4

/*
*@param {number[]} height
@return {number}

*/

// answer
// To solve the "Container with Most Water" problem, we need to find two vertical lines that,
//  along with the x-axis, form a container that can hold the maximum amount of water.
//  The amount of water a container can hold is determined by the shorter of the two lines
// (since water can't overflow) and the distance between these two lines.

// To solve this efficiently, we can use a two-pointer approach:

// Initialize two pointers: One pointer starts at the beginning (left) and the other at the end (right) of the array.
// Calculate the Area: For each pair of lines represented by the pointers, calculate the area they form with the x-axis.
// Move the Pointers:
// Always move the pointer pointing to the shorter line. This is because the width between the lines will decrease as the pointers move closer, so to maximize the area, we need to find a taller line.
// Update the Maximum Area: Keep track of the maximum area encountered during the iterations.
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the area formed by the line at the current pointers
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;

    // update maxArea if the current area is larger
    maxArea = Math.max(maxArea, area);

    // Move the pointer corresponding to the shoter line
    if (height[left] < height[height]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); //Output: 1

// Explanation
// Two-pointer Technique: The two pointers (left and right) start from the beginning and end of the array, respectively. The goal is to explore all possible containers formed by these two lines as they move toward each other.
// Calculating the Area: The area is calculated using the formula width * minHeight, where width is the distance between the two pointers, and minHeight is the shorter of the two heights.
// Updating Maximum Area: We keep track of the maximum area encountered.
// Pointer Movement: The pointer corresponding to the shorter line is moved towards the other pointer, as moving the shorter line may result in a larger container (by possibly finding a taller line).
// This approach has a time complexity of
// 𝑂
// (
// 𝑛
// )
// O(n), where
// 𝑛
// n is the number of elements in the height array, making it efficient even for large inputs.

// python

// def maxArea(height):
//     left = 0
//     right = len(height) - 1
//     max_area = 0

//     while left < right:
//         width = right - left
//         h = min(height[left], height[right])
//         current_area = width * h
//         max_area = max(max_area, current_area)

//         if height[left] < height[right]:
//             left += 1
//         else:
//             right -= 1

//     return max_area

// # Sample Inputs
// print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # Output: 49
// print(maxArea([1, 1]))                       # Output: 1

// // Explanation:

// // We initialize two pointers, left and right, at the beginning and end of the height array, respectively.
// // We also initialize max_area to keep track of the maximum area found.
// // We use a while loop to move the pointers towards each other until they meet.
// // In each iteration of the loop:
// // We calculate the width of the container as right - left.
// // We find the height of the container as the minimum of height[left] and height[right].
// // We calculate the current area as width * h and update max_area if the current area is greater.
// // We move the pointer pointing to the shorter line inward to try and find a container with a larger area.
// // Finally, we return max_area as the result.
// // This approach ensures that we check all possible containers efficiently with a time complexity of
// // 𝑂
// // (
// // 𝑛
// // )
// // O(n).

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the area formed by the line at the current pointers
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;

    // Update maxArea if the current area is larger
    maxArea = Math.max(maxArea, area);

    // Move the pointer corresponding to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1

// def maxArea(height):
//     left = 0
//     right = len(height) - 1
//     max_area = 0

//     while left < right:
//         width = right - left
//         h = min(height[left], height[right])
//         current_area = width * h
//         max_area = max(max_area, current_area)

//         if height[left] < height[right]:
//             left += 1
//         else:
//             right -= 1

//     return max_area

// # Example usage:
// print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # Output: 49
// print(maxArea([1, 1]))                       # Output: 1
