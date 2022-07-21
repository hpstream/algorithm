/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) return;
  // let rootNode = root;
  let parentNode: any = null;
  preOrder(root);

  function preOrder(node) {
    if (node) {
      let leftNode = node.left;
      let rightNode = node.right;
      node.left = null;
      node.right = null;
      if (parentNode) {
        parentNode.right = node;
      }
      parentNode = node;
      // console.log(parentNode.val)
      node.left = null;

      leftNode && preOrder(leftNode);
      rightNode && preOrder(rightNode);
    }
  }
}
// @lc code=end
