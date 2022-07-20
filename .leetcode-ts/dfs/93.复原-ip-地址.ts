/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */
// restoreIpAddresses("25525511135");
// @lc code=start
function restoreIpAddresses(s: string): string[] {
  if (s.length < 4) return [];
  let result: string[] = [];
  dfs(0);
  return result;

  function dfs(idx: number, tem: string[] = []) {
    // if (tem.length > 4) return;
    if (idx == s.length && tem.length === 4) {
      // 添加进入数组
      result.push(tem.join("."));
      return;
    }

    let one = s[idx];
    let two = s[idx + 1];
    let three = s[idx + 2];
    // 取一个数的情况
    if (one === undefined) return;

    // 这种情况可以结束了
    if (!(tem.length == 3 && idx + 1 < s.length)) {
      dfs(idx + 1, [...tem, one]);
    }

    // 取两位数的情况
    if (one === "0") return;
    if (two === undefined) return;

    if (!(tem.length == 3 && idx + 2 < s.length)) {
      dfs(idx + 2, [...tem, one + two]);
    }

    // 取三位数的情况
    if (three === undefined) return;
    let val = Number(one + two + three);
    if (val <= 255) {
      if (!(tem.length == 3 && idx + 3 < s.length)) {
        dfs(idx + 3, [...tem, one + two + three]);
      }
    }
  }
}
// @lc code=end
