/*
 * @lc app=leetcode.cn id=1751 lang=typescript
 *
 * [1751] 最多可以参加的会议数目 II
 */

// @lc code=start
function maxValue(events: number[][], k: number): number {
  let len = events.length;
  events.sort((a, b) => a[1] - b[1])

  // 参加n个会议最大的价值
  // let dp = [0];

  // 需要找出前一个可以参加的会议
  // [1,2,4];
  // [2,3,1];
  // [3,4,3];


  // 表示第k次会议参加的最大收益
  let dp = new Array(k + 1).fill(0);
  // 表示第i次会议最近一次完成的会议
  let prev = new Array(k + 1).fill(0);

  for (let i = 1; i <= len; i++) {
    let last = 0;
    for (let j = i - 1; j >= 0; j--) {
      // 结束时间小于开始时间
      if (events[j][1] < events[i][0]) {
        last = j + 1;
        break;
      }
    }
    prev[i] = last;

  }

  for (let i = 1; i <= len; i++) { // 任务

    for (let row = 1; row <= k; row++) {

      for (let j = i - 1; j >= 0; j--) {
        if (events[j][1] < events[i][0]) {
          last = j + 1;
          break;
        }
      }
      dp[row] = Math.max(dp[row - 1], dp[last] + events[i][2])
    }

  }





  for (let i = 1; i < len; i++) {
    let last = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (events[j][1] < events[i][0]) {
        last = j + 1;
        break;
      }
    }

    // dp[i + 1] = Math.max(dp[i], dp[last] + events[i][2])
  }

  return dp[len];

};
// @lc code=end

