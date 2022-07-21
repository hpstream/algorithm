/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let nodeList = [root];
  let levelCount = nodeList.length;
  let deep = 0;
  let result: number[][] = [];

  while (nodeList.length > 0) {
    let cNode = nodeList.shift();
    if (!result[deep]) result[deep] = [];

    if ((deep & 1) == 0) {
      result[deep].push(cNode.val);
    } else {
      result[deep].unshift(cNode.val);
    }
    if (cNode.left) {
      nodeList.push(cNode.left);
    }

    if (cNode.right) {
      nodeList.push(cNode.right);
    }
    levelCount--;
    if (levelCount === 0) {
      levelCount = nodeList.length;
      deep++;
    }
  }

  return result;
}
// @lc code=end
