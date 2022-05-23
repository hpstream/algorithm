/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

  // let root = ;
  return bst(nums);

  function bst(nums) {
    if (nums.length === 0) {
      return undefined
    }
    if (nums.length === 1) {
      return new TreeNode(nums[0], undefined, undefined)
    }
    // if (nums.length === 2) {
    //   return new TreeNode(nums[0], undefined, undefined)
    // }
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid], bst(nums.slice(0, mid)), bst(nums.slice(mid + 1)))

    return root;
  }


};
// @lc code=end