/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */
findMedianSortedArrays([2], []);
// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let len = nums1.length + nums2.length;
  let val: any[] = [];
  if (nums1.length == 0) {
    if (nums2.length % 2 == 1) {
      return nums2[nums2.length >> 1];
    } else {
      return (nums2[nums2.length >> 1] + nums2[(nums2.length >> 1) - 1]) / 2;
    }
  }
  if (nums2.length == 0) {
    if (nums1.length % 2 == 1) {
      return nums1[nums1.length >> 1];
    } else {
      return (nums1[nums1.length >> 1] + nums1[(nums1.length >> 1) - 1]) / 2;
    }
  }
  // 6，7，8，9，10
  // 1，2，3，4，5

  let n1 = 0;
  let n2 = 0;
  let i = 0;
  let n1Count = nums1.length >> 1;
  let n2Count = nums2.length >> 1;
  if (nums1[n1Count] > nums2[n2Count]) {
    i = n2 = n2Count == 0 ? n2Count : n2Count - 1;
    n1 = 0;
  } else {
    i = n1 = n1Count == 0 ? n1Count : n1Count - 1;
    n2 = 0;
  }

  while (i <= len >> 1) {
    if (n1 == nums1.length && n2 < nums2.length) {
      val[0] = val[1];
      val[1] = nums2[n2];
      n2++;
      i++;
      continue;
    }
    if (n2 == nums2.length && n1 < nums1.length) {
      val[0] = val[1];
      val[1] = nums1[n1];
      n1++;
      i++;
      continue;
    }
    if (nums1[n1] > nums2[n2]) {
      val[0] = val[1];
      val[1] = nums2[n2];
      n2++;
    } else {
      val[0] = val[1];
      val[1] = nums1[n1];
      n1++;
    }
    i++;
  }
  if (len % 2 == 1) {
    return val[1];
  } else {
    return (val[1] + val[0]) / 2;
  }
}
//[1,3]\n[2,4]
//[2]\n[]
// @lc code=end
