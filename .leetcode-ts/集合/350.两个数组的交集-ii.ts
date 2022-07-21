/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  let map = {};
  let res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!map[nums1[i]]) map[nums1[i]] = 0;
    map[nums1[i]]++;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      res.push(nums2[i]);
      map[nums2[i]]--;
    }
  }
  return res;
}
// @lc code=end
