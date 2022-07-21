/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let str1 = postSerialize(root);
  let str2 = postSerialize(subRoot);

  return str1.indexOf(str2) > -1;
}

function postSerialize(root: any) {
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
