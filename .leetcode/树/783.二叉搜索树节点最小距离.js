/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let min = Number.MAX_VALUE;
  let preNode;
  inOrder(root, (node) => {

    if (preNode) {
      min = Math.min(min, node.val - preNode.val)
    }
    preNode = node;

  })
  return min;

  function inOrder(root, cb) {
    root.left && inOrder(root.left, cb)
    cb && cb(root)
    root.right && inOrder(root.right, cb)
  }
};


// @lc code=end