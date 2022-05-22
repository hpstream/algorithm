/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  var arr = [];
  preorder(root);
  return arr;

  function preorder(node) {

    if (node) {

      node.children.forEach(n => {
        preorder(n)
      });
      arr.push(node.val);
    }
  }

};
// @lc code=end