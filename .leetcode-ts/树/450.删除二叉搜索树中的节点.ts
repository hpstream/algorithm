/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;
  inOrder(root, null);
  let cNode = findNode(root, key);
  if (!cNode) return root;

  if (cNode.left && cNode.right) {
    // 需要找到前驱节点
    let node = cNode.right;
    let preNode;
    while (node) {
      preNode = node;
      node = node.left;
    }
    cNode.val = preNode.val;
    cNode = preNode;
  }

  if (!cNode.left && !cNode.right) {
    let parent = cNode.parent;
    if (!parent) return null;
    if (parent.left === cNode) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  } else {
    let parent = cNode.parent;
    if (!parent) return cNode.left ? cNode.left : cNode.right;
    if (parent.left === cNode) {
      parent.left = cNode.left ? cNode.left : cNode.right;
    } else {
      parent.right = cNode.left ? cNode.left : cNode.right;
    }
  }

  return root;

  function inOrder(root, p) {
    root.parent = p;
    root.left && inOrder(root.left, root);
    root.right && inOrder(root.right, root);
  }

  function findNode(root, key) {
    while (root) {
      if (root.val == key) return root;
      if (root.val > key) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
  }
}
// @lc code=end
