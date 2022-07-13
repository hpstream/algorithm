/*
 * @lc app=leetcode.cn id=333 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var largestBSTSubtree = function (root) {
  if (!root) return 0;
  // 判断一个树是不是二叉搜索树
  if (isBST(root)) return node;

  return Math.max(largestBSTSubtree(root.left), largestBSTSubtree(root.right));
};
