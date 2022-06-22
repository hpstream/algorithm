/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

  if (postorder.length == 0) {
    return undefined;
  }

  if (postorder.length == 1) {
    return new TreeNode(postorder[0]);
  }


  let root = postorder[postorder.length - 1];
  let leftIndex = inorder.indexOf(root);
  let leftInOrder = inorder.slice(0, leftIndex)
  let rightInOrder = inorder.slice(leftIndex + 1);
  let leftPostorder = postorder.slice(0, leftInOrder.length)
  let rightPostorder = postorder.slice(leftInOrder.length, postorder.length - 1)


  return new TreeNode(root, buildTree(leftInOrder, leftPostorder), buildTree(rightInOrder, rightPostorder));



};
// @lc code=end