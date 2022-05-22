/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
  if (root) {
    let max = 0;
    let nodeList = [root];
    root.positon = 1;
    let levelCount = nodeList.length;
    let deep = 0;
    let result = [];
    while (nodeList.length > 0) {
      if (!result[deep]) result[deep] = [];
      let node = nodeList.shift();
      let can = Math.pow(2, 32) - 1;
      if (node) {
        result[deep].push(node);
        if (node.left !== null) {
          node.left.positon = node.positon * 2 % can;
          nodeList.push(node.left);
        }
        if (node.right !== null) {
          node.right.positon = (node.positon * 2 + 1) % can;
          nodeList.push(node.right);
        }
      }
      levelCount--;
      // console.log(levelCount)
      if (levelCount === 0) {
        let row = result[result.length - 1];
        let endPositon = row[row.length - 1].positon || 0;

        let starPositon = row[0].positon || 0;
        // console.log(row[row.length - 1].positon, row[0].positon)

        max = Math.max(max, endPositon - starPositon + 1)
        levelCount = nodeList.length;
        deep++;

      }

    }
    // console.log(result)
    return max;
  } else {
    return 0;
  }
};
// [1,3,2,5,null,null,9,6,null,7]
// [0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,1,2,3,4,5,6]

// @lc code=end