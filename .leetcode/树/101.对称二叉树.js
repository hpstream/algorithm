/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (!root) return true;
  let flag = true;
  abc(root.left, root.right);

  return flag;

  function abc(rLeft, rRight) {
    if (!flag) return;
    if (rLeft === null && rRight === null) return;

    if (rLeft === null && rRight) {
      flag = false;
      return;
    }
    if (rLeft && rRight === null) {
      flag = false;
      return;
    }
    if (rLeft.val !== rRight.val) {
      flag = false;
      return;
    }
    abc(rLeft.left, rRight.right)
    abc(rLeft.right, rRight.left)
  }


};
// @lc code=end