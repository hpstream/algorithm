/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (root) {
    let deep = 0;
    let nodeList = [root];
    let levelRow = nodeList.length;

    while (nodeList.length > 0) {
      let node = nodeList.shift();

      node.left && nodeList.push(node.left);
      node.right && nodeList.push(node.right)

      levelRow--;
      if (levelRow === 0) {
        levelRow = nodeList.length;
        deep++;
      }
    }

    return deep;
  } else {
    return 0
  }
};
// @lc code=end