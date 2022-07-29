/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

lengthOfLIS([0, 1, 0, 3, 2, 3]);

// @lc code=start

function lengthOfLIS(nums: number[]): number {
  let dp = [nums[0]];
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
      res++;
    } else {
      let l = 0,
        r = dp.length - 1;
      while (l < r) {
        let mid = (l + r) >> 1;
        if (nums[i] > dp[mid]) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }
      dp[l] = nums[i];
    }
  }
  // console.log(dp);

  return res;
}
// [0,1,0,3,2,3]
function lengthOfLIS1(nums: number[]): number {
  let dp = [1];

  let max = (dp[0] = 1);

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = dp[i] > dp[j] + 1 ? dp[i] : dp[j] + 1;
      }
    }

    if (dp[i] > max) {
      max = dp[i]
    }
  }

  return max;
}
// @lc code=end
