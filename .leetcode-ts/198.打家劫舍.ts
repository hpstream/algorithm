/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  let value!: number;
  if (nums.length >= 2) {
    value = Math.max(nums[1], nums[0])
  }
  // let dp = [nums[0], value];
  let dp1 = nums[0];
  let dp2 = value;

  for (let i = 2; i < nums.length; i++) {
    let tem = dp2;
    dp2 = Math.max(dp1 + nums[i], dp2)
    dp1 = tem;
  }
  return dp2
};
// @lc code=end

