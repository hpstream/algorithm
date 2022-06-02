/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function (root) {
  // this.root = root;
  let arr = [];
  this.i = 0;
  inOrder(root);
  this.arr = arr;



  function inOrder(root) {
    root.left && inOrder(root.left);
    arr.push(root);
    root.right && inOrder(root.right);
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let node = this.arr[this.i];
  this.i++;
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.i < this.arr.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end