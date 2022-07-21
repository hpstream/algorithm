/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (!root) return res;

  let nodeList = [root];
  let levelCount = nodeList.length;
  let arr: number[] = [];

  while (nodeList.length > 0) {
    let currentNode = nodeList.shift() as any;
    arr.push(currentNode.val);
    currentNode.left && nodeList.push(currentNode.left);
    currentNode.right && nodeList.push(currentNode.right);
    levelCount--;
    if (levelCount === 0) {
      levelCount = nodeList.length;
      res.unshift(arr);
      arr = [];
    }
  }
  return res;
}
// @lc code=end
