/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let b = root;
  let parent: any = null;
  while (root) {
    parent = root;
    if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    }
  }
  if (!parent) return new TreeNode(val, null, null);

  if (parent.val > val) {
    parent.left = new TreeNode(val, null, null);
  } else if (parent.val < val) {
    parent.right = new TreeNode(val, null, null);
  }
  return b;
}
// @lc code=end
