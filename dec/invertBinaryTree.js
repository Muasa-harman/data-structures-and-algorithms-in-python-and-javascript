// Given the root of a binary tree, invert the tree and return its root.

// E.g1
// Input: root = [4,2,2,2,3,5,9]
// Output:[4,7,2,9,6,3,1]

// E.g2
// Input: root = [2,3,3]
// Output:[2,3,1]

// E.g3
// Input: root = []
// Output:[]

// Explanation:
// Base Case: If the root is null, there is nothing to invert, so return null.
// Swap: Swap the left and right child nodes of the current node.
// Recursive Step: Call the function on the left and right children of the current node to ensure the entire tree is inverted.

// // recursively by traversing the tree

// function invertBinaryTree(root) {
//   if (root === null) {
//     return null; // Base case: if the tree is empty, return null
//   }
//   // Swap the left and right children
//   const temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   // Recursively invert the left and right subtrees
//   invertBinaryTree(root.left);
//   invertBinaryTree(root.right);

//   return root; //return the root if the inverted tree
// }

// // Example Usage:
// // To test this function, you need a way to create a binary tree.
// //  Here's an example using a basic tree structure:

// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// // Example: [4, 2, 7, 1, 3, 6, 9]
// const root = new TreeNode(
//   4,
//   new TreeNode(2, new TreeNode(1), new TreeNode(3)),
//   new TreeNode(7, new TreeNode(6), new TreeNode(9))
// );

// console.log("Original Tree:", JSON.stringify(root));
// const invertedRoot = invertBinaryTree(root);
// console.log("Inverted Tree:", JSON.stringify(invertedRoot));

// Explanation:
// Time Complexity
// 𝑂(𝑛)O(n):

// Each node is visited exactly once during the level-order traversal, so the time complexity is
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the tree.
// Space Complexity
// 𝑂(𝑛)O(n):

// The space complexity comes from the queue, which at most holds all the nodes of the largest level of the tree.
//  In the worst case (for a complete binary tree), this would be
// 𝑂(𝑛2)O(n/2), which simplifies to
// 𝑂(𝑛)O(n).

// iterative approach with a queue (BFS-style traversal)

function invertBinaryTree(root) {
  if (root === null) {
    return null; //if tree is empty return null
  }
  // use a queue to perform a level-order traversal (BFS)
  const queue = [root];
  while (queue.length > 0) {
    // Dequeue the current node
    const current = queue.shift();

    // Swap the left and right children
    const temp = current.left;
    current.left = current.right;
    current.right = temp;

    // Enqueue the children if they exist
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return root; //Return the root of the inverted tree
}

// Example Usage:
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log("Original Tree:", JSON.stringify(root));
const invertedRoot = invertBinaryTree(root);
console.log("Inverted Tree:", JSON.stringify(invertedRoot));
