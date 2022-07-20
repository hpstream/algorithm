/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  let list: string[] = [];
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

  if (chars.length == 0) return [];
  let str: string[] = [];

  dfs(0, chars, str, list);
  return list;

  function dfs(idx: number, chars: string, str: string[], list: string[]) {
    if (idx == chars.length) {
      list.push(str.join(""));
      return;
    }
    let digit = chars[idx];
    let letters = lettersArray[digit];
    for (let i = 0; i < letters.length; i++) {
      str[idx] = letters[i];
      dfs(idx + 1, chars, str, list);
    }
  }
}
// @lc code=end
