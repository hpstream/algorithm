/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let res2 = new Set(nums2);
  let res: number[] = [];
  set1.forEach((e) => {
    if (res2.has(e)) {
      res.push(e);
    }
  });

  return res;
}
// @lc code=end
