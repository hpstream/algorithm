/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let str1 = postSerialize(root);
  let str2 = postSerialize(subRoot);

  return str1.indexOf(str2) > -1;
};

function postSerialize(root) {
  let str = "";
  postOrder(root);
  return str;
  function postOrder(root) {
    if (root) {
      postOrder(root.left);
      postOrder(root.right);
      str += root.val + "!";
    } else {
      str += "#!";
    }
  }
}

// @lc code=end
