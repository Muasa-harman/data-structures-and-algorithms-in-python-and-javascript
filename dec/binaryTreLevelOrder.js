// Given the root of a binary tree,return the level order traversal of its node's value(i.e,
// from left to right, level by level)

// E.g1
// Input:root = [3,9,20,null,15,7]
// Output:[[3],[9,20],[15,7]]

// E.g2
// Input: root = [1]
// Output:[[2]]

// E.g3
// Input: root = []
// Output:[]

// Explanation:
// Breadth-First Traversal:

// Use a queue to traverse the binary tree level by level.
// At each level, process all nodes in the queue, adding their values to a level array and enqueuing their children.
// Building the Result:

// After processing a level, add the level array to the result.
// Edge Cases:

// If the root is null, return an empty array.
// Complexity:
// Time Complexity:
// 𝑂(𝑛)O(n), where
// 𝑛
// n is the number of nodes in the tree. Each node is visited once.
// Space Complexity:
// 𝑂(𝑚)O(m), where
// 𝑚
// m is the maximum number of nodes at any level (the width of the tree). This is the space used by the queue.

function levelOrder(root) {
  if (!root) return []; // If the tree is empty, return an empty array

  const result = [];
  const queue = [root]; // Use a queue to perform breadth-first traversal

  while (queue.length > 0) {
    const level = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // Dequeue the front node
      level.push(node.val); // Add the node's value to the current level

      // Enqueue the left and right children if they exist
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level); // Add the current level to the result
  }

  return result;
}

// Helper function to create a binary tree from an array (null values represent missing nodes)
function createBinaryTree(arr) {
  if (arr.length === 0) return null;

  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = { val: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = { val: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Test cases
const root1 = createBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root1)); // Output: [[3], [9, 20], [15, 7]]

const root2 = createBinaryTree([1]);
console.log(levelOrder(root2)); // Output: [[1]]

const root3 = createBinaryTree([]);
console.log(levelOrder(root3)); // Output: []
