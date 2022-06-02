/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let nodeList = [root];
  let levelCount = nodeList.length;
  let deep = 0;
  let result = [];

  while (nodeList.length > 0) {
    let cNode = nodeList.shift();
    if (!result[deep]) result[deep] = [];

    if ((deep & 1) == 0) {
      result[deep].push(cNode.val)
    } else {
      result[deep].unshift(cNode.val)
    }
    if (cNode.left) {
      nodeList.push(cNode.left)
    }

    if (cNode.right) {
      nodeList.push(cNode.right)
    }
    levelCount--;
    if (levelCount === 0) {
      levelCount = nodeList.length;
      deep++;
    }
  }

  return result
};
// @lc code=end