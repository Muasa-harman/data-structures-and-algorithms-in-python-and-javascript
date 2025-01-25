// Given an integer array nums,whereb the elements are sorted in ascending order,
//  convert it to a height-balanced binary search tree

// E.g1
// Input: nums = [-10,-3,0,5,9]
// Output:[0,-3,9,-10,null,5]

// E.g2
// Input: nums = [-3,-10,0,9,5]
// Output:

// Recursive Solution:
// To convert a sorted integer array into a height-balanced binary search tree (BST),
// the key is to use the middle element of the array as the root,
//  and recursively construct the left and right subtrees using the left and right halves of the array.

// Explanation:
// Middle Element as Root: The middle element of the array ensures the left and right subtrees are balanced.
// Recursive Calls:
// The left half of the array becomes the left subtree.
// The right half of the array becomes the right subtree.
// Base Case: When the left index exceeds the right index, return null.

// Recursive Solution:

// function sortedArrayToBST(nums){
//     if(nums.length === 0){
//         return null //Base case: if the array is empty,return null
//     }
//     function helper(left,right){
//         if(left > right){
//             return null; //Base case: no element to form subtree
//         }
//         // pick the middle element as the root
//         const mid = Math.floor((left + right)/2);
//         const root = new TreeNode(nums[mid]);

//         // Recursively build the left and right subtrees
//         root.left = helper(left, mid - 1);
//         root.right = helper(mid + 1,right);

//         return root;
//     }
//     return helper(0,nums.length - 1); //Start with the full array range
// }

// // To test this function, we’ll use a TreeNode class for building the binary tree:
// class TreeNode{
//     constructor(val,right,left){
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// // Example 1: Input nums = [-10, -3, 0, 5, 9]
// const nums1 = [-10, -3, 0, 5, 9];
// const bst1 = sortedArrayToBST(nums1);
// console.log(JSON.stringify(bst1));

// // Example 2: Input nums = [-3, -10, 0, 9, 5]
// const nums2 = [-3, -10, 0, 9, 5];
// const sortedNums2 = nums2.sort((a, b) => a - b); // Ensure the array is sorted
// const bst2 = sortedArrayToBST(sortedNums2);
// console.log(JSON.stringify(bst2));

// Iterative Solution:
// Here’s how it works:

// Use a queue to keep track of nodes and the ranges of the array that correspond to their subtrees.
// Start with the root node as the middle of the array.
// Iteratively process the left and right halves of the array for the left and right children.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null; //Base case:empty array
  }

  // create the root node
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // Queue to manage nodes and their corresponding array ranges
  const queue = [{ node: root, left: 0, right: nums.length - 1 }];

  while (queue.length > 0) {
    const { node, left, right } = queue.shift();

    if (left <= mid - 1) {
      // Process the left subtree
      const leftMid = Math.floor((left + mid - 1) / 2);
      node.left = new TreeNode(nums[leftMid]);
      queue.push({ node: node.left, left: left, right: mid - 1 });
    }

    // Process the right subtree
    if (mid + 1 <= right) {
      const rightMid = Math.floor((mid + 1 + right) / 2);
      node.right = new TreeNode(nums[rightMid]);
      queue.push({ node: node.right, left: mid + 1, right: right });
    }
  }
  return root;
}
// Example Input: Sorted array
const nums = [-10, -3, 0, 5, 9];

// Build the BST
const bst = sortedArrayToBST(nums);

// Helper function to serialize the tree for visualization
function serialize(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  return result;
}

// Output the tree as an array
console.log(serialize(bst));
