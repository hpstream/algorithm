/*
 * @lc app=leetcode.cn id=856 lang=typescript
 *
 * [856] 括号的分数
 */

// @lc code=start
function scoreOfParentheses(s: string): number {
  let stack = [0];
  let map = {
    "(": ")",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(0);
    } else {
      let v = stack.pop() as number;
      let w = stack.pop() as number;
      stack.push(w + Math.max(2 * v, 1));
    }
  }
  return stack[0];
}
// @lc code=end
