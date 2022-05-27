/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

  let flag = true;
  postOrderTraversal(root, (node) => {
    node.height = calcHeight(node);
    // console.log(node.val)
    let leftHight = node.left ? node.left.height : 0;
    let rightHight = node.right ? node.right.height : 0;
    console.log(node.val, leftHight, rightHight)
    if (flag && Math.abs(leftHight - rightHight) <= 1) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  })
  return flag;

  function calcHeight(node) {
    if (node.left && node.right) {
      return 1 + Math.max(node.left.height, node.right.height)
    }

    if (!node.left && node.right) {
      return 1 + node.right.height
    }

    if (node.left && !node.right) {
      return 1 + node.left.height
    }

    if (!node.left && !node.right) {
      return 1
    }


  }

  function postOrderTraversal(node, cb) {


    if (node) {
      node.left && postOrderTraversal(node.left, cb);
      node.right && postOrderTraversal(node.right, cb);
      cb && cb(node);
      // console.log(node.val)

    }

  }

};
// [1,2,2,3,null,null,3,4,null,null,4]

// @lc code=end