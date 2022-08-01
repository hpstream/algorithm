/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length == 1) return nums[0];

  let dp1 = 0;
  let dp2 = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    let tem = dp2;
    dp2 = Math.max(dp1 + nums[i], dp2)
    dp1 = tem;
  }

  let d1 = 0;
  let d2 = 0;

  for (let i = 1; i < nums.length; i++) {
    let tem = d2;
    d2 = Math.max(d1 + nums[i], d2)
    d1 = tem;
  }

  return Math.max(dp2, d2)
};
// @lc code=end

