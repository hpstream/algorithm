/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1. 使用双端队列
// 2. 队列中的元素从头到尾对应的元素值是逐渐减少的
var maxSlidingWindow1 = function (nums, k) {


  let maxes = []
  let maxIdex = 0;
  for (let i = 1; i < k; i++) {
    if (nums[i] > nums[maxIdex]) {
      maxIdex = i;
    }
  }
  for (let li = 0; li < nums.length - k + 1; li++) {
    let ri = li + k - 1;

    if (maxIdex < li) {
      maxIdex = li;
      for (let i = li; i <= ri; i++) {
        if (nums[i] > nums[maxIdex]) {
          maxIdex = i;
        }
      }
    } else if (nums[ri] >= nums[maxIdex]) {
      maxIdex = ri;
    }

    maxes[li] = nums[maxIdex]
  }

  return maxes

};

var maxSlidingWindow = function (nums, k) {

  let queue = []; // 存储下标;
  let result = []
  // let j = -k + 1;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= value) {
      queue.pop();
    }
    queue.push(i);
    let w = i - k + 1;
    if (w >= 0) {
      if (queue[0] < w) {
        queue.shift();
      }
      result.push(nums[queue[0]])
    }
  }

  return result

};
// @lc code=end

