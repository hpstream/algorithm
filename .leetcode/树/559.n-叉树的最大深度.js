/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let deep = 0;
  if (root) {
    let nodeList = [root];
    let levelRow = nodeList.length;
    while (nodeList.length > 0) {
      let node = nodeList.shift();

      node.children.forEach(n => {
        nodeList.push(n)
      });
      levelRow--;
      if (levelRow === 0) {
        levelRow = nodeList.length;
        deep++;
      }
    }

  }

  return deep;




};
// @lc code=end