/*
 * @lc app=leetcode.cn id=1235 lang=typescript
 *
 * [1235] 规划兼职工作
 */
// var left = 0, right = i;
// while (left < right) {
//   var mid = (left + right) >> 1;
//   if (total[mid][1] <= total[i][0]) {
//     left = mid + 1;
//   } else {
//     right = mid;
//   }
// }


// @lc code=start
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  let max = 0;
  // 我们使用一个dp数组，dp[i]表示做包括i号工作之前的所有工作能取得的最大收益
  // 再使用一个prev数组，prev[i]表示i号工作之前最近能做的工作

  var total: number[][] = [];
  var l = endTime.length;
  for (var i = 0; i < l; i++) {
    total.push([
      startTime[i],
      endTime[i],
      profit[i]
    ]);
  }
  total.sort((a, b) => a[1] - b[1]);

  var dp = new Array(l + 1).fill(0);
  for (var i = 1; i <= l; i++) {
    let last = 0;
    for (let j = i - 2; j >= 0; j--) {
      // 开始时间大于等于结束时间，表示可以开始下一个工作了
      // console.log(total[j][1], total[i][0])
      if (total[j][1] <= total[i - 1][0]) {
        last = j + 1;
        break;
      }
    }
    dp[i] = Math.max(dp[i - 1], dp[last] + total[i - 1][2]);
  }
  return dp[l];


};
// @lc code=end

