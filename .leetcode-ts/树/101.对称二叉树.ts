/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  let flag = true;
  abc(root.left, root.right);

  return flag;

  function abc(rLeft: TreeNode | null, rRight: TreeNode | null) {
    if (!flag) return;
    if (rLeft === null && rRight === null) return;

    if (rLeft === null && rRight) {
      flag = false;
      return;
    }
    if (rLeft && rRight === null) {
      flag = false;
      return;
    }
    if (rLeft.val !== rRight.val) {
      flag = false;
      return;
    }
    abc(rLeft.left, rRight.right);
    abc(rLeft.right, rRight.left);
  }
}
// @lc code=end
