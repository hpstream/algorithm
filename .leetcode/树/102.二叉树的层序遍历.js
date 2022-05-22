/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (root) {
    let i = 0;
    let nodeList = [root];
    let result = [];
    let deep = 0;
    let levelCount = nodeList.length - i;

    while (nodeList[i]) {
      if (!result[deep]) result[deep] = [];
      result[deep].push(nodeList[i].val);

      nodeList[i].left && nodeList.push(nodeList[i].left);
      nodeList[i].right && nodeList.push(nodeList[i].right);
      i++;
      levelCount--;
      if (levelCount === 0) {
        levelCount = nodeList.length - i;
        deep++;
      }


    }
    return result;
  } else {
    return [];
  }
};
// @lc code=end