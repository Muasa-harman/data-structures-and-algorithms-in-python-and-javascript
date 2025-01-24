// Given the array nums,For each num[i],
// find out how many numbers in the array are smaller than it .
// That is, for each num[i] you have to count the numbers of valid j's such that j !==i and nums[j] < nums[i]

// Return the answer in an array

// E.g1:
// Input: nums= [8,1,2,2,3]
// Output:[4,0,1,1,3]

// E.g2:
// Input: nums = [6,5,4,0]
// Output:[2,1,0,3]

// E.g3:
// Input:nums = [7,7,7,7]
// Output:[0,0,0,0]

// 0(n log n)
function smallerNumbersThanCurrent(nums) {
  // create a sorted copy of the array
  const sortedNums = [...nums].sort((a, b) => a - b);

  // create a map to store the smallest index for each number
  const numToCount = {};
  for (let i = 0; i < sortedNums.length; i++) {
    if (numToCount[sortedNums[i]] === undefined) {
      numToCount[sortedNums[i]] = i; //store the first occurence's index
    }
  }
  // map the count for each number in the original array
  return nums.map((num) => numToCount[num]);
}

// Example Usage
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Output: [4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 0])); // Output: [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // Output: [0, 0, 0, 0]
