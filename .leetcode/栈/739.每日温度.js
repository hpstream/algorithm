/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//200ms 69.58% 38.2%
var dailyTemperatures1 = function (temperatures) {
  let stack = [];
  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length != 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};
//992ms 26.02% 66.28%
var dailyTemperatures = function (temperatures) {
  let answer = [];
  for (let i = 0; i < temperatures.length; i++) {
    let value = temperatures[i];
    let max = 0;

    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > value) {
        max = j - i;
        break;
      }
    }
    answer[i] = max;
  }
  return answer;
};
// @lc code=end
