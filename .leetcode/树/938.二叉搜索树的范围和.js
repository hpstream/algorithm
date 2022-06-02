/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  inOrder(root, (node) => {
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
  })
  return sum;

  function inOrder(root, cb) {

    root.left && inOrder(root.left, cb);
    cb && cb(root);
    root.right && inOrder(root.right, cb);

  }
};
// @lc code=end