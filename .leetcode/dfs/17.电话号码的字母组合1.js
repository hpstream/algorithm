/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// DFS: 回溯，和减枝
var letterCombinations = function (digits) {
  if (!digits) return [];
  let list = [];
  const lettersArray = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let chars = digits;

  if (chars.length == 0) return;
  let str = [];

  dfs(0);
  return list;

  function dfs(idx) {
    if (idx == chars.length) {
      list.push(str.join(""));
      return;
    }
    let digit = chars[idx];
    let letters = lettersArray[chars[idx]];
    for (let i = 0; i < letters.length; i++) {
      str[idx] = letters[i];
      dfs(idx + 1);
    }
  }
};
// @lc code=end
