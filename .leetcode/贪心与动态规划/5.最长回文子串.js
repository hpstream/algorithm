/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 马拉车算法
// 52ms 100% 93.83%
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let oldCs = s.split("");
  // 预处理
  let cs = preprocess(oldCs);
  let m = new Array(cs.length).fill(0);

  let c = 1,
    r = 1,
    lastIdx = m.length - 2;

  let maxLen = 0,
    idx = 0;
  for (let i = 2; i < lastIdx; i++) {
    if (r > i) {
      let li = (c << 1) - i;
      if (i + m[li] <= r) {
        m[i] = m[li];
      } else {
        m[i] = r - i;
      }
    }
    // 以i为中心，向左右扩展
    while (cs[i + m[i] + 1] == cs[i - m[i] - 1]) {
      m[i]++;
    }
    // 更新下c,r
    if (i + m[i] > r) {
      c = i;
      r = i + m[i];
    }
    // 找出更大的回文子串
    if (m[i] > maxLen) {
      maxLen = m[i];
      idx = i;
    }
  }
  let begin = (idx - maxLen) >> 1;

  return s.slice(begin, begin + maxLen);
};
// longestPalindrome("abba");
function preprocess(oldCs) {
  let cs = [];

  cs[0] = "^";
  cs[1] = "#";
  for (let i = 0; i < oldCs.length; i++) {
    let idx = (i + 1) << 1;
    cs[idx] = oldCs[i];
    cs[idx + 1] = "#";
  }
  cs[cs.length] = "$";

  return cs;
}
// 扩展中心法——优化
// 52ms 100% 93.83%
var longestPalindrome3 = function (s) {
  if (s.length <= 1) return s;

  let maxLen = 1;
  let begin = 0;
  let i = 0;
  while (i < s.length) {
    // 找到右边第一个不等于s[i]的位置

    let l = i - 1;
    let r = i;
    while (++r < s.length && s[r] == s[i]);
    i = r;

    while (l >= 0 && r < s.length && s[l] == s[r]) {
      l--;
      r++;
    }
    // 扩展结束，s(l,r)就是刚才最大回文子串
    // let b = l + 1;
    let len = r - ++l;
    if (len > maxLen) {
      maxLen = len;
      begin = l;
    }
  }

  return s.slice(begin, begin + maxLen);
};

// 扩展中心法
// 88ms 75.81% 81.26%
var longestPalindrome2 = function (s) {
  if (s.length <= 1) return s;

  let maxLen = 1;
  let begin = 0;

  for (let i = s.length - 2; i >= 1; i--) {
    let len1 = palindromeLenth(s, i - 1, i + 1);
    let len2 = palindromeLenth(s, i, i + 1);
    len1 = Math.max(len1, len2);
    if (len1 > maxLen) {
      maxLen = len1;
      begin = i - ((maxLen - 1) >> 1);
    }
  }
  // 处理以0号字符右边处理

  if (s[0] == s[1] && maxLen < 2) {
    maxLen = 2;
    begin = 0;
  }
  return s.slice(begin, begin + maxLen);
};

function palindromeLenth(s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }

  return r - l - 1;
}
// 暴力法，时间复杂度O(n^3),空间O(n)
// 动态规划，时间复杂度O(n^2),空间O(n^2)
// 1104ms 15.65% 5.11%
var longestPalindrome1 = function (s) {
  if (s.length <= 1) return s;

  let dp = new Array(s.length)
    .fill(0)
    .map((row) => new Array(s.length).fill(false));

  let maxLen = 0;
  let begin = 0;
  // 从下到上
  for (let i = s.length - 1; i >= 0; i--) {
    // 从左到右
    for (let j = i; j < s.length; j++) {
      let len = j - i + 1;
      dp[i][j] = s[i] == s[j] && (len <= 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && len > maxLen) {
        // 说明是回文串
        maxLen = len;
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + maxLen);
};
// @lc code=end
