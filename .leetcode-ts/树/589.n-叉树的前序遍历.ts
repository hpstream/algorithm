/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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

function preorder(root: Node | null): number[] {
  var arr: number[] = [];
  preorder(root);
  return arr;

  function preorder(node) {
    if (node) {
      arr.push(node.val);
      node.children.forEach((n) => {
        preorder(n);
      });
    }
  }
}
// @lc code=end
