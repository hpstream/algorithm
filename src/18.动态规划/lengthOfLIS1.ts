let arr = [10, 2, 2, 5, 1, 7, 101, 18];

var lengthOfLIS = function (nums: number[]) {
  let len = 0; // 牌堆的数量
  let top: number[] = new Array(nums.length).fill(0); // 牌顶的数组

  for (const num of nums) {
    let j = 0;
    while (j < len) {
      if (top[j] >= num) {
        top[j] = num;
        break;
      }
      j++;
    }
    if (j === len) {
      // 新建一个排堆
      len++;
      top[j] = num;
    }
  }

  return len;
};

console.log(lengthOfLIS(arr));
export {};
