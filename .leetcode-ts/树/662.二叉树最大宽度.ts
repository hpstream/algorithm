/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
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

function widthOfBinaryTree(root: TreeNode | null): number {
  if (root as any) {
    let max = 0;
    let nodeList = [root];
    let positons: number[] = [1];
    // let p = 1;
    let levelCount = nodeList.length;
    let deep = 0;
    let result: any[][] = [];
    while (nodeList.length > 0) {
      if (!result[deep]) result[deep] = [];
      let node = nodeList.shift();
      let p = positons.shift() as number;
      let can = Math.pow(2, 32) - 1;
      if (node) {
        result[deep].push(p);
        if (node.left !== null) {
          positons.push((p * 2) % can);
          nodeList.push(node.left);
        }
        if (node.right !== null) {
          positons.push((p * 2 + 1) % can);
          nodeList.push(node.right);
        }
      }
      levelCount--;
      // console.log(levelCount)
      if (levelCount === 0) {
        let row = result[result.length - 1];
        let endPositon = row[row.length - 1] || 0;

        let starPositon = row[0] || 0;

        max = Math.max(max, endPositon - starPositon + 1);
        levelCount = nodeList.length;
        deep++;
      }
    }
    // console.log(result)
    return max;
  } else {
    return 0;
  }
}
// @lc code=end
