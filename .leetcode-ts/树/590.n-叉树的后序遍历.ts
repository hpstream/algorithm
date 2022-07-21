/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
  var arr: number[] = [];
  preorder(root);
  return arr;

  function preorder(node) {
    if (node) {
      node.children.forEach((n) => {
        preorder(n);
      });
      arr.push(node.val);
    }
  }
}
// @lc code=end
