let arr = [10, 2, 2, 5, 1, 7, 101, 18];
// 最长上升子序列——二分搜索——思路
var lengthOfLIS = function (nums: number[]) {
  let len = 0; // 牌堆的数量
  let top: number[] = new Array(nums.length).fill(0); // 牌顶的数组

  for (const num of nums) {
    let begin = 0;
    let end = len;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (num <= top[mid]) {
        end = mid;
      } else {
        begin = mid + 1;
      }
    }
    top[begin] = num;
    if (begin == len) len++;
  }

  return len;
};

console.log(lengthOfLIS(arr));
export {};
