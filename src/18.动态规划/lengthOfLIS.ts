let arr = [10, 2, 2, 5, 1, 7, 101, 18];

var lengthOfLIS = function (nums: number[]) {
  let dp = [1];

  let max = (dp[0] = 1);

  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    max = Math.max(dp[i], max);
  }

  return max;
};

console.log(lengthOfLIS(arr));

export {};
