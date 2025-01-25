// Given the root of a binary search tree, return a balanced binary search tree with the same node values.
// If there is more than one answer, return any of them.
// A binary search tree is a balanced if the depth of the two subtrees of every node never differs by more than one.

// E.g1
// Input: root = [1,null,2,null,3, null,4,null,null]
// Output:[2,1,3,null,null,null,4]

// Explanation of Functions:
// inOrderTraversal(node, result):

// Performs an in-order traversal of the tree.
// Collects node values in a sorted array.
// buildBalancedBST(sortedValues, start, end):

// Recursively builds a balanced BST by selecting the middle element of the array as the root.
// Constructs left and right subtrees using the left and right halves of the array.
// balanceBST(root):

// First collects all node values in sorted order using inOrderTraversal.
// Then constructs a balanced BST using buildBalancedBST.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// iterative approach

function balanceBST(root) {
  // function to perform in-order traversal and collect value
  function inOrderTraversal(node, result) {
    if (!node) return;
    inOrderTraversal(node.left, result);
    result.push(node.val);
    inOrderTraversal(node.right, result);
  }
  // function build a balanced BST from the sorted values
  function buildBalancedBST(sortedValues, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(sortedValues[mid]);
    root.left = buildBalancedBST(sortedValues, start, mid - 1);
    root.right = buildBalancedBST(sortedValues, mid + 1, end);

    return root;
  }
  // collect sorted values from the BST
  const sortedValues = [];
  inOrderTraversal(root, sortedValues);

  // build a balanced BST from sorted values
  return buildBalancedBST(sortedValues, 0, sortedValues.length - 1);
}

// Create the initial unbalanced BST
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);

// Balance the BST
const balancedRoot = balanceBST(root);

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

console.log(printTree(balancedRoot)); // Output: [2, 1, 3, null, null, null, 4]

// recursive implementation in JavaScript, fully utilizing recursion to balance a binary search tree:

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function balanceBST(root) {
  // Helper function to perform in-order traversal and collect values
  function inOrderTraversal(node) {
    if (!node) return [];
    return [
      ...inOrderTraversal(node.left),
      node.val,
      ...inOrderTraversal(node.right),
    ];
  }

  // Helper function to recursively build a balanced BST from sorted values
  function buildBalancedBST(sortedValues) {
    if (sortedValues.length === 0) return null;

    const mid = Math.floor(sortedValues.length / 2);
    const root = new TreeNode(sortedValues[mid]);

    root.left = buildBalancedBST(sortedValues.slice(0, mid)); // Left half
    root.right = buildBalancedBST(sortedValues.slice(mid + 1)); // Right half

    return root;
  }

  // Step 1: Collect sorted values from the BST
  const sortedValues = inOrderTraversal(root);

  // Step 2: Build and return the balanced BST
  return buildBalancedBST(sortedValues);
}
