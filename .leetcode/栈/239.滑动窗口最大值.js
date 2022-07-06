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
i = 0, [1]
i = 1, [3]
i = 2, [3, 1]
i = 3, [2]
i = 4, [2, 0],
  i = 5, [5]
i = 6, [5]

var maxSlidingWindow = function (nums, k) {

  let queue = []; // 存储下标;
  let result = []
  let j = -k + 1;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= value) {
      queue.pop();
    }
    queue.push(i);
    if (j >= 0) {
      result.push(nums[queue[0]])
      if (queue[0] == j) {
        queue.shift()
      }
    }
    j++;
  }

  return result

};
// @lc code=end

