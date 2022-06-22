/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */


// function guess(n) {
//   return random - n
// }
var guessNumber = function (n) {
  let begin = 1;
  let end = n + 1;
  while (begin < end) {
    let mid = Math.floor((end + begin) / 2);
    let val = guess(mid);
    console.log(val, mid)
    if (val === 0) {
      return mid;
    } else if (val > -1) {
      begin = mid + 1;
    } else {
      end = mid;
    }
  }
};
// guessNumber(n)
//1\n1
// @lc code=end