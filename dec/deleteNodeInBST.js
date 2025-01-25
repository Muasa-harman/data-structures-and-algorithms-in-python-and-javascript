// Given a root node reference of a BST and a key, delete the node with the given key in the BST.
// return the root node reference(possibly updated) of the BST

// Basically the deletion can be divided into two stages
// 1Search for a node to remove
// 2If the node is found,delete the node

// E.g1
// Input: root = [5,3,6,2,4,null,2], key = 3
// Output:[5,4,6,2,null,null,2]

// To delete a node from a binary search tree (BST), follow these steps:

// Search for the node with the given key.
// Delete the node:
// If the node has no children, simply remove it.
// If the node has one child, replace it with its child.
// If the node has two children, find its in-order successor (smallest node in the right subtree)
//  or in-order predecessor (largest node in the left subtree),
//   replace the node's value with it, and delete the successor or predecessor.

// recursive implementation of deleting a node in a Binary Search
// Time:0(N)linear - N is the height of tree
// Space: 0(1) nothing changed

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function deleteNode(root, key) {
  if (!root) return null;

  // step 1: search for node to delete
  if (key < root.val) {
    root.left = deleteNode(root.left, key); //key is in the left subtree
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key); //key is in the right subtree
  } else {
    // step 2 node to delete is found
    // case 1 Node has no children or one child
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Case2: Node has two children
    // Find the in-order successor(smallest in the right subtree)
    let successor = findMin(root.right);
    root.val = successor.val; //Replace value with successor's value
    root.right = deleteNode(root.right, successor.val); // Delete the successor
  }
  return root;
}
//   function to find minimum value node in a subtree
function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

// Create the BST
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(2);

// Delete the node with key = 3
const updatedRoot = deleteNode(root, 3);

// Helper function to print the tree (level-order traversal)
function printTree(root) {
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node ? node.val : null);
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return result;
}

console.log(printTree(updatedRoot)); // Output: [5, 4, 6, 2, null, null, 2]
