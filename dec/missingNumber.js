// Given an array nums containing n distinct numbers in the range [0,n],
// return the only number in the range that is missing in the array

// E.g 1
// Input: nums = [3,0,1]
// Output:2

// E.g 2
// Input: nums = [0,1]
// Output:2

// E.g 3
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output:8

// solution 0(N)
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
