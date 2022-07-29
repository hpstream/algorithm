/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 */
console.log(findNumberOfLIS([1, 3, 5, 4, 7]))

// @lc code=start


function findNumberOfLIS(nums: number[]): number {

  let dp: number[] = [1];

  let cnt: number[] = [1], maxLen = 1, ans = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    cnt[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j]; // 重置计数
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j];
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      ans = cnt[i]; // 重置计数
    } else if (dp[i] === maxLen) {
      ans += cnt[i];
    }
  }
  console.log(cnt)

  return ans;
}
// @lc code=end
