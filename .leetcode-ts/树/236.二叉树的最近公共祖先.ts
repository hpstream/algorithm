/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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
 * 去以root为根节点的二叉树中查找p,q的最近公共祖先
 * 1.如果p,q同时存在于这颗二叉树中，就能返回它们的最近公共祖先
 * 2.如果p,q都不存在于这颗二叉树，返回null;
 * 3.如果只有p存在于这颗二叉树中，返回p
 * 4.如果只有q存在于这颗二叉树中，返回q
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root == p || root == q) return root;

  let left = lowestCommonAncestor(root.left, p, q);

  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}
// @lc code=end
