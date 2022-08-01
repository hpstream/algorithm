/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */
// [1,2,87,87,87,2,1]
// [1,2,3,1,3,2,1]
// [1,2,3,1,0]
// [1,2,3,2,1]
// @lc code=start

function candy(ratings: number[]): number {
  if (ratings.length == 0) return 1;

  let dp = new Array(ratings.length).fill(1);

  // 计算左规则
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  // 计算右规则

  for (let j = ratings.length - 1; j >= 0; j--) {
    if (ratings[j - 1] > ratings[j]) {
      dp[j - 1] = Math.max(dp[j - 1], dp[j] + 1);
    }
  }

  return dp.reduce((pre, next) => pre + next, 0);

};


function candy1(ratings: number[]): number {
  if (ratings.length == 0) return 1;

  let dp = [1];
  //表示第i个孩子需要最少的糖
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] == ratings[i - 1]) {
      dp[i] = 1
    } else if (ratings[i] < ratings[i - 1]) {
      if (dp[i - 1] == 1) {
        dp[i] = 1
        let j = i;
        while (ratings[j] < ratings[j - 1] && dp[j - 1] == dp[j]) {
          dp[j - 1]++;
          j--;
        }
      } else {
        dp[i] = 1
      }
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }
  return dp.reduce((pre, next) => pre + next, 0);

};
// @lc code=end

