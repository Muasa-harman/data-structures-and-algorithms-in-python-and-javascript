// Given an integer array nums1, return true if there exists a triple of indices(i,j,k) such that i < j < k
//  and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.


function increasingTriplet(nums) {
    let first = Infinity, second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // update the smallest so far
        } else if (num <= second) {
            second = num; // update the second smallest so far
        } else {
            // if we find a number larger than both first and second, return true
            return true;
        }
    }

    // if no such triplet is found, return false
    return false;
}

// Example usage:
const nums1 = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums1));  // Output: true

const nums2 = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums2));  // Output: false

const nums3 = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(nums3));  // Output: true
