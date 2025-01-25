// Given the root of binary search tree, and an integer k, return the kTH smallest value (T-indexed) of all the values
//  of  the node in the tree

// E.g1
// Input:root = [3,1,4,null,2], k = 1
// Output:1

// E.g2
// Input: root=[]
// Output:

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function kthSmallest(root, k) {
  // function for in-order traversal
  function inOrderTraversal(node, result) {
    if (!node) return;
    inOrderTraversal(node.left, result); //Traversal left subtree
    result.push(node.val); //visit node
    inOrderTraversal(node.right, result); //Traverse right subtree
  }

  const sortedValues = [];
  inOrderTraversal(root, sortedValues);

  // Return the k-th smallest value(i-indexed)
  return sortedValues[k - 1] || null; // Return null if k is invalid
}

// Create the BST
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

// Find the 1st smallest value
console.log(kthSmallest(root, 1)); // Output: 1

// // Empty tree
// const root = null;

// Find the k-th smallest value
console.log(kthSmallest(root, 1)); // Output: null

// recursive implementation
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  let count = 0; // To keep track of the number of visited nodes
  let result = null; // To store the k-th smallest value

  function inOrderTraversal(node) {
    if (!node || result !== null) return;

    // Visit left subtree
    inOrderTraversal(node.left);

    // Process the current node
    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    // Visit right subtree
    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return result;
}

// Create the BST
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

// Find the 1st smallest value
console.log(kthSmallest(root, 1)); // Output: 1

// // Empty tree
// const root = null;

// Find the k-th smallest value
console.log(kthSmallest(root, 1)); // Output: null
