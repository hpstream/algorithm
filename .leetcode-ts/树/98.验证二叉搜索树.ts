/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;
  let flag = false;
  let val = null;
  inOrder(root, (node) => {
    if (val !== null) {
      if (val >= node.val) {
        flag = true;
      }
    }

    val = node.val;
  });
  return !flag;

  function inOrder(root, cb) {
    if (flag) return;
    root.left && inOrder(root.left, cb);
    !flag && cb && cb(root);
    root.right && inOrder(root.right, cb);
  }
}
// @lc code=end
