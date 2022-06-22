/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {


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


  return new TreeNode(val, buildTree(preorderLeft, inorderLeft), buildTree(preorderRight, inorderRight));
};

// 3
// 2 4
// 1


//[1,2,3]\n[3, 2, 1]
// [1,2]\n[1, 2]
// [3,2,1,4]\n[1, 2, 3, 4]
// [3, 9, 1, 2, 20, 15, 7];
// [1, 9, 2, 3, 15, 20, 7];


// @lc code=end