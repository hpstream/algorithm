/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let val = 0;
  inOrder(root, (node) => {
    k--;
    if (k == 0) {
      val = node.val;
      // console.log(val)
    }
  })
  return val;

  function inOrder(root, cb) {
    root.left && inOrder(root.left, cb);
    cb && cb(root)
    root.right && inOrder(root.right, cb)
  }
};
// @lc code=end