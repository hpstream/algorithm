/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  if (!root) return res;

  let nodeList = [root];
  let levelCount = nodeList.length;
  let arr = [];

  while (nodeList.length > 0) {
    let currentNode = nodeList.shift();
    arr.push(currentNode.val)
    currentNode.left && nodeList.push(currentNode.left)
    currentNode.right && nodeList.push(currentNode.right)
    levelCount--;
    if (levelCount === 0) {
      levelCount = nodeList.length;
      res.unshift(arr);
      arr = [];

    }
  }
  return res;
};
// @lc code=end