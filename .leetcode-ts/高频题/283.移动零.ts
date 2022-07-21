/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) continue;

    if (cur != i) {
      nums[cur] = nums[i];
      nums[i] = 0;
    }
    cur++;
  }
}
// @lc code=end
