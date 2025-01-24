// let's say you are given a problem where we have a list of n numbers (unknown length).
//  we dont know what numbers are in the list.

// we are asked to find and return true if the number is 2 in list.And if the number is not in the list
// we return false

// // python
// def contains_two(numbers):
//     for number in numbers:
//        if number= 2:
//           return true
//     return False

// print(contains_two([1, 3, 5, 2, 7]))  # Output: True
// print(contains_two([10, 20, 30]))     # Output: False
// print(contains_two([]))               # Output: False
function number(n) {
  for (let number of n) {
    if (number === 2) {
      return true;
    }
  }
  return false;
}

console.log(number([1, 3, 5, 2, 7])); // Output: true
console.log(number([10, 20, 30])); // Output: false
console.log(number([])); // Output: false

// NB:Best Case (O(1)):
// If the number 2 is the very first element in the list,
// the function only needs to check one element before returning true.
// This is the most efficient scenario.

// Worst Case (O(n)):
// If the number 2 is either at the very end of the list or does not exist in the list at all,
//  the function will need to check every single element in the list.
// Here, n is the length of the list.

// Summary:
// Time Complexity: 𝑂(1)O(1) (best case), (𝑛)O(n) (worst and average case)Space Complexity: 𝑂(1)O(1)
