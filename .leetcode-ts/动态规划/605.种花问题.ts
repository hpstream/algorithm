/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
        count++;
        flowerbed[i] = 1;
      }
    }
  }
  return count >= n;

};
// @lc code=end

