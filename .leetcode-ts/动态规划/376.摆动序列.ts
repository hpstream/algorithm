/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */


// @lc code=start
function wiggleMaxLength(nums: number[]): number {

  if (nums.length <= 1) return nums.length;

  let updp = new Array(nums.length).fill(0);
  let downdp = new Array(nums.length).fill(0);

  updp[0] = downdp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      downdp[i] = Math.max(updp[i - 1] + 1, downdp[i - 1])
      updp[i] = updp[i - 1];

    } else if (nums[i - 1] < nums[i]) {
      updp[i] = Math.max(updp[i - 1], downdp[i - 1] + 1)
      downdp[i] = downdp[i - 1];


    } else {
      updp[i] = updp[i - 1];
      downdp[i] = downdp[i - 1];
    }

  }

  return Math.max(updp[nums.length - 1], downdp[nums.length - 1]);
};
// @lc code=end

