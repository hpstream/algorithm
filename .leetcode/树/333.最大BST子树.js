/*
 * @lc app=leetcode.cn id=333 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

const {upperFirst} = require("lodash");

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

var largestBSTSubtree = function (root) {
  if (!root) return 0;
  // 判断一个树是不是二叉搜索树

  return getInfo().size;
};

function getInfo(root) {
  if (!root) return null;

  let li = getInfo(root.left);
  let ri = getInfo(root.right);

  let leftBstSize = -1;
  let rightBstSize = -1;
  let min = root.val;
  let max = root.val;
  if (li == null) {
    leftBstSize = 0;
  } else if (li.root == root.left && root.val > li.max) {
    leftBstSize = li.size;
    min = li.min;
  }

  if (ri == null) {
    rightBstSize = 0;
  } else if (ri.root == root.left && root.val > ri.min) {
    rightBstSize = li.size;
    max = ri.max;
  }
  if (leftBstSize >= 0 && rightBstSize >= 0) {
    return new Info(root, 1 + leftBstSize + rightBstSize, max, min);
  }
  if (li != null && ri != null) return li.size > ri.size ? li : ri;

  return li != null ? li : ri;
}

function Info(root, size, max, min) {
  this.size = size;
  this.root = root;
  this.max = max;
  this.min = min;
}
