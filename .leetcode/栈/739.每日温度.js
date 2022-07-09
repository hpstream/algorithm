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
//184 ms 92.7%  82.79%
var dailyTemperatures = function (temperatures) {
  let T = temperatures;
  let values = new Array(T.length).fill(0);
  for (let i = T.length - 2; i >= 0; i--) {
    let j = i + 1;

    while (true) {
      if (T[i] < T[j]) {
        values[i] = j - i;
        break;
      } else if (values[j] == 0) {
        values[i] = 0;
        break;
      }
      j = j + values[j];
    }
  }
  return values;
};
//184 ms 92.7%  82.79%
var dailyTemperatures3 = function (temperatures) {
  let T = temperatures;
  let values = new Array(T.length).fill(0);
  for (let i = T.length - 2; i >= 0; i--) {
    let j = i + 1;

    while (true) {
      if (T[i] < T[j]) {
        values[i] = j - i;
        break;
      } else if (values[j] == 0) {
        values[i] = 0;
        break;
      } else if (T[i] == T[j]) {
        values[i] = values[j] + j - i;
        break;
      } else {
        j = j + values[j];
      }
    }
  }
  return values;
};
// dailyTemperatures([(89, 62, 70, 58, 47, 47, 46, 76, 100, 70)]);
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
var dailyTemperatures2 = function (temperatures) {
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
