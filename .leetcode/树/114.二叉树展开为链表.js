/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function (root) {
  if (!root) return;
  // let rootNode = root;
  let parentNode = null;
  preOrder(root);

  function preOrder(node) {
    if (node) {
      let leftNode = node.left;
      let rightNode = node.right;
      node.left = null;
      node.right = null;
      if (parentNode) {
        parentNode.right = node;
      }
      parentNode = node;
      // console.log(parentNode.val)
      node.left = null;


      leftNode && preOrder(leftNode);
      rightNode && preOrder(rightNode);

    }
  }
};
// @lc code=end