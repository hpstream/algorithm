/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {

  let val;
  for (let j = 0; j < k; j++) {
    let index = 0;
    let max = nums[index];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i]
        index = i;
      }
    }
    nums[index] = Number.MIN_SAFE_INTEGER;
    val = max;
  }
  return val;

};
// @lc code=end

