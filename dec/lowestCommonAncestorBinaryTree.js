// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on wikipedia,The lowest common ancestor is defined between two nodes p and q
// as the lowest node in T that has both p and q as descendants (where we allow node to be a descendant of itself)

// E.g1
// Input:root = [3,5,3,6,2,0,0, null, null,7,4], p=5,q=1
// Output:3

// E.g2
// Input:root =

// // Recursive Approach:
// // The recursive solution traverses the tree and checks if a node matches either p or q.
// //  If it does, it returns that node.
// //  Otherwise, it continues to traverse its left and right subtrees to find the LCA.
// function lowestCommonAncestorRecursive(root, p, q) {
//   if (root === null || root === p || root === q) {
//     return root; //If the root is null or matches either p or q, return root
//   }
//   // Recursively search left and right subtrees
//   const left = lowestCommonAncestorRecursive(root.left, p, q);
//   const right = lowestCommonAncestorRecursive(root.right, p, q);

//   // if both left and right are not null,root is LCA
//   if (left !== null && right !== null) {
//     return root;
//   }

//   return left !== null ? left : right;
// }

// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }
// // Example: [3,5,1,6,2,0,8,null,null,7,4]
// const root = new TreeNode(
//   3,
//   new TreeNode(
//     5,
//     new TreeNode(6),
//     new TreeNode(2, new TreeNode(7), new TreeNode(4))
//   ),
//   new TreeNode(1, new TreeNode(0), new TreeNode(8))
// );

// const p = root.left; // Node 5
// const q = root.right; // Node 1

// console.log("Iterative LCA:", lowestCommonAncestorRecursive(root, p, q).val);

// Iterative Approach:
// The iterative approach uses a parent-pointer map and a set to track visited nodes.
function lowestCommonAncestorIterative(root, p, q) {
  // map to store parent pointers
  const parentMap = new Map();
  const stack = [root];

  // Populate the parent map for all nodes
  parentMap.set(root, null);

  while (!parentMap.has(p) || !parentMap.has(q)) {
    const node = stack.pop();

    if (node.left) {
      parentMap.set(node.left, node);
      stack.push(node.left);
    }

    if (node.right) {
      parentMap.set(node.right, node);
      stack.push(node.right);
    }
  }
  // set to store the ancestors of p
  const ancestors = new Set();

  // Add all ancestors of p to the set
  while (p !== null) {
    ancestors.add(p);
    p = parentMap.get(p);
  }
  // find the first ancestor of q that is also in p's ancestors
  while (!ancestors.has(q)) {
    q = parentMap.get(q);
  }
  return q;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example: [3,5,1,6,2,0,8,null,null,7,4]
const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

const p = root.left; // Node 5
const q = root.right; // Node 1

console.log("Recursive LCA:", lowestCommonAncestorIterative(root, p, q).val);
