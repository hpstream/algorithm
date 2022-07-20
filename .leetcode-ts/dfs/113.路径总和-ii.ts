/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];
  let result: number[][] = [];
  dfs(root, targetSum, [], result);
  return result;

  function dfs(
    root: TreeNode | null,
    targetSum: number,
    path: number[],
    result: number[][]
  ) {
    let val = targetSum - root.val;

    if (val === 0 && root.left === null && root.right === null) {
      result.push([...path, root.val]);
    }
    if (root.left === null && root.right === null) {
      return;
    }
    root.left && dfs(root.left, val, [...path, root.val], result);

    root.right && dfs(root.right, val, [...path, root.val], result);
  }
}
// @lc code=end
