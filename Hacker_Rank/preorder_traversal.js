// 'Hard' 'Day 7'
// Complete the preOrder function in the editor below. Which has 1 parameter:
//  a pointer to the root of the binary tree. It must print the value in the tree's preorder traversal as a single
// line of space-separated values.

// Input Format
// Our test code passes the root node of a binary tree to the preOrder function.

// Constraints
// 1 <= Nodes in the tree <= 500
// Output Format

// Print the tree's preorder traversal as a single line of space-separated values.

function preOrder(root) {}

// Definition of a binary tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrder(root) {
  if (root === null) {
    return;
  }

  // Print the data of the root (current node)
  process.stdout.write(root.data + " ");

  // Recursively traverse the left subtree
  preOrder(root.left);

  // Recursively traverse the right subtree
  preOrder(root.right);
}

// Example usage:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Expected output: 1 2 4 5 3
preOrder(root);
