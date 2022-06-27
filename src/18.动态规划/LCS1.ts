/*
 * 最长公共子序列
 */
let nums1 = [1, 3, 4, 5, 9, 10];
let nums2 = [1, 4, 9, 10];
console.log(lcs(nums1, nums2));
// 空间 O(K) K=min{n,m},m,n,是两个序列的长度
// 时间复杂度 O(n2)
function lcs(nums1: number[], nums2: number[]) {
  return lcsLoop(nums1, nums1.length, nums2, nums1.length);
}

function lcsLoop(
  nums1: number[],
  i: number,
  nums2: number[],
  j: number
): number {
  if (i == 0 || j == 0) return 0;

  if (nums1[i - 1] === nums2[j - 1]) {
    return lcsLoop(nums1, i - 1, nums2, j - 1) + 1;
  }

  return Math.max(
    lcsLoop(nums1, i - 1, nums2, j),
    lcsLoop(nums1, i, nums2, j - 1)
  );
}

export {};
