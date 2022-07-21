/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return undefined;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0], null, null);
  }
  let val = preorder[0];
  let index = inorder.indexOf(val);
  let inorderLeft = inorder.slice(0, index); //[]
  let inorderRight = inorder.slice(index + 1); //[2]
  let inorderLeftLegth = inorderLeft.length;

  let preorderLeft = preorder.slice(1, inorderLeftLegth + 1);
  let preorderRight = preorder.slice(inorderLeftLegth + 1);

  return new TreeNode(
    val,
    buildTree(preorderLeft, inorderLeft),
    buildTree(preorderRight, inorderRight)
  );
}
// @lc code=end
