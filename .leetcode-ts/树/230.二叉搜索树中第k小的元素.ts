/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let val = 0;
  inOrder(root, (node) => {
    k--;
    if (k == 0) {
      val = node.val;
      // console.log(val)
    }
  });
  return val;

  function inOrder(root, cb) {
    root.left && inOrder(root.left, cb);
    cb && cb(root);
    root.right && inOrder(root.right, cb);
  }
}
// @lc code=end
