/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // 1. 消除多余空格
  let chars = s.split("");
  let len = deleteSpaceWord(chars);
  if (!len) {
    return "";
  }
  reverse(chars, 0, len);

  let prevSpaceIdx = -1;
  for (let i = 0; i < len; i++) {
    if (chars[i] != " ") continue;
    reverse(chars, prevSpaceIdx + 1, i);
    prevSpaceIdx = i;
  }
  reverse(chars, prevSpaceIdx + 1, len);
  return chars.slice(0, len).join("");
}

function deleteSpaceWord(s: any) {
  let len = 0;
  let cur = 0;
  let space = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      s[cur++] = s[i];
      space = false;
    } else if (space == false) {
      s[cur++] = s[i];
      space = true;
    }
  }
  len = space ? cur - 1 : cur;
  return len <= 0 ? null : len;
}
// console.log(reverseWords("  hello world!    "));
// console.log(reverseWords("a good  example"));
// console.log(reverseWords("are you ok"));
function reverse(chars: any, li: any, ri: any) {
  // 反转字符串
  ri--;
  while (li < ri) {
    let tem = chars[li];
    chars[li] = chars[ri];
    chars[ri] = tem;
    li++;
    ri--;
  }
}
// @lc code=end
