// Given the root of a binary search tree (BST),return the minimum absolute difference between the values of any two
// different node in the tree

// E.g1
// Input:root = [4,2,6,1,3]
// Output:1

// E.g2
// Input: root = []
// Output:

// // Recursive Approach:
// function getMinimumDifference(root) {
//   let prev = null; //to track the previous node during in-order traversal
//   let minDiff = Infinity; // Initialize the minimum difference as Infinity

//   function inOrder(node) {
//     if (node === null) return;

//     // Traverse the left subtree
//     inOrder(node.left);

//     // Calculate the difference between the current and previous nodes
//     if (prev !== null) {
//       minDiff = Math.min(minDiff, Math.abs(node.val - prev));
//     }
//     prev = node.val; //update the previous node value

//     // Traverse the right subtree
//     inOrder(node.right);
//   }
//   inOrder(root); //Start in-order traversal
//   return minDiff;
// }
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// // Example 1: Input tree [4, 2, 6, 1, 3]
// const root1 = new TreeNode(
//   4,
//   new TreeNode(2, new TreeNode(1), new TreeNode(3)),
//   new TreeNode(6)
// );

// console.log(getMinimumDifference(root1)); // Output: 1

// // Example 2: Input tree []
// const root2 = null;
// console.log(getMinimumDifference(root2)); // Output: Infinity (or handle as 0 if tree is empty)

// Iterative approach
// time comple of 1
function getMinimumDifference(root) {
  const stack = [];
  let prev = null;
  let minDiff = Infinity;

  while (stack.length > 0 || root !== null) {
    // Go as left an possible
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    // process the node
    root = stack.pop();
    if (prev !== null) {
      minDiff = Math.min(minDiff, Math.abs(root.val - prev));
    }
    prev = root.val;

    // Move to the right subtree
    root = root.right;
  }
  return minDiff;
}
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example 1: Input tree [4, 2, 6, 1, 3]
const root1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);

console.log(getMinimumDifference(root1)); // Output: 1

// Example 2: Input tree []
const root2 = null;
console.log(getMinimumDifference(root2)); // Output: Infinity (or handle as 0 if tree is empty)
