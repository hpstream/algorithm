/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  let min = Number.MAX_VALUE;
  let preNode;
  inOrder(root, (node) => {
    if (preNode) {
      min = Math.min(min, node.val - preNode.val);
    }
    preNode = node;
  });
  return min;

  function inOrder(root, cb) {
    root.left && inOrder(root.left, cb);
    cb && cb(root);
    root.right && inOrder(root.right, cb);
  }
}
// @lc code=end
