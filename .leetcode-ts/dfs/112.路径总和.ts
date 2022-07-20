/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  let flag = false;
  dfs(root, targetSum);
  return flag;

  function dfs(root: TreeNode | null, targetSum: number) {
    if (flag) return flag;
    let val = targetSum - root.val;

    if (val === 0 && root.left === null && root.right === null) {
      flag = true;
      return flag;
    }

    root.left && dfs(root.left, val);
    if (flag) return flag;
    root.right && dfs(root.right, val);
  }
}
// @lc code=end
