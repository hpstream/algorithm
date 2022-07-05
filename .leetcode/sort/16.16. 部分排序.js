/**
 * 
面试题 16.16. 部分排序
给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。
示例：

输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]
输出： [3,9]
提示：

0 <= len(array) <= 1000000
 */

var subSort = function (array) {
  if (array.length == 0) return [-1, -1]
  let max = array[0];
  let right = -1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < max) {
      right = i;
    } else {
      max = array[i]
    }
  }
  let min = array[array.length - 1];
  let left = -1;
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > min) {
      left = i;
    } else {
      min = array[i]
    }
  }
  return [left, right]
};

console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))