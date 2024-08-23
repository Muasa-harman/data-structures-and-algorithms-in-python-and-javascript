
# 1110
# Given the of a binary tree, each node in the tree has a distinct value/
# After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees)

# Return the roots if the tree in the remaining forest. You may return the results in any order

# E..g
# Input: root = (1,2,3,4,5,6,7),to_delete = (3,5)
# Output: [[1,2,null,4],[6],[7]]



# Defination for a binary tree node.
class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self) -> None:
        self.output = []

    def delNode(self,root: TreeNode, to_delete: list[int]) -> list[TreeNode]:
        if root.val not in to_delete:
            self.output.append(root)
        queue = [root]
        while queue:
            node = queue.pop(0)

            if node.val in to_delete:
                if node.left:
                   self.delNode(node.left, to_delete)
                if node.right:   
                   self.delNode(node.right,to_delete)
            else:
                if node.left:
                    queue.append(node.left)
                    if node.left.val in to_delete:
                        node.left = None


                if node.right:
                    queue.append(node.right)
                    if node.right.val in to_delete:
                        node.right = None

        return self.output                  