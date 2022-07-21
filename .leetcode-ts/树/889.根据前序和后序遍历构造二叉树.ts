/*
 * @lc app=leetcode.cn id=889 lang=typescript
 *
 * [889] 根据前序和后序遍历构造二叉树
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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length == 0) {
    return undefined;
  }
  if (preorder.length == 1) {
    return new TreeNode(preorder[0]);
  }

  let root = preorder[0];
  let rootLeft = preorder[1];
  let index = postorder.indexOf(rootLeft);
  let leftPost = postorder.slice(0, index + 1);
  let rightPost = postorder.slice(index + 1, postorder.length - 1);

  let leftPre = preorder.slice(1, 1 + leftPost.length);

  let rightPre = preorder.slice(1 + leftPost.length);

  return new TreeNode(
    root,
    constructFromPrePost(leftPre, leftPost),
    constructFromPrePost(rightPre, rightPost)
  );
}
// @lc code=end
