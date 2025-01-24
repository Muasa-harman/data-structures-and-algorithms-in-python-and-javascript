// Given an array nums of n integers where nums[i] is in the range [1,n],
// return an array of all the integers in the range [1,n] that do not appear in the nums.

// E.g1:
// Input nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// E.g2:
// Input: nums = [1,1]
// Output: [2]

// 0(N)
function findDissapearedNumber(nums) {
  const n = nums.length;
  const allNumbers = new Set([...Array(n + 1).keys()].slice(1)); //create a set with numbers [1,n]

  for (const num of nums) {
    allNumbers.delete(num); //Remove numbers present in nums
  }
  return [...allNumbers]; //Convert the remaining numbers in the set of an array
}

console.log(findDissapearedNumber([4, 3, 2, 7, 8, 2, 3, 1])); //Output: [5,6]
console.log(findDissapearedNumber([1, 1])); //Output: [2]

// 0(n) time and 0(1)
function findDissapearedNumber(nums) {
  // mark each num in nums by flipping the sign of the number at its corresponding index
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1; //Get the index for the current number
    if (nums[index] > 0) {
      nums[index] = -nums[index]; //Mark as visited
    }
  }
  // collect all indices + 1 where the value is still positive
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1); // missing number
    }
  }
  return result;
}

// Example Usage
console.log(findDissapearedNumber([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findDissapearedNumber([1, 1])); // Output: [2]
