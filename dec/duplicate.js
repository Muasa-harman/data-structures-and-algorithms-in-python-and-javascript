// Given an integer array nums,return true
//  if any value appears atleast twice in the array and false if every element is disctinct

// Eg.1
// Input: nums = [1,2,3,1]
// Output:true

// E.g2
// Input: nums = [1,2,3,4]
// Output:false

// E.g3
// Input: nums =  [1,1,1,3,3,4,3,4,2]
// Output:true
// 0(N)
function duplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true; //Duplicate found
    }
    set.add(num);
  }
  return false; //No duplicate
}
console.log(duplicate([1, 2, 3, 1]));
console.log(duplicate([1, 2, 3, 4]));
