/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
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

class BSTIterator {
  i = 0;
  arr: any[] = [];
  constructor(root: TreeNode | null) {
    let arr: any[] = [];
    this.i = 0;
    inOrder(root);
    this.arr = arr;

    function inOrder(root: any) {
      root.left && inOrder(root.left);
      arr.push(root);
      root.right && inOrder(root.right);
    }
  }

  next(): number {
    let node = this.arr[this.i];
    this.i++;
    return node.val;
  }

  hasNext(): boolean {
    return this.i < this.arr.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
