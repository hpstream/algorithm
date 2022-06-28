/*
 * 最长公共子序列
 */
// dp[i][j]表示nums1第i个元素,与nums2第j的元素的最长公共子序列;
// dp[j],与dp[i]的最长子序列
// dp[i][j]= dp[i-1][j] + nums1[i - 1];
// dp[i][j]= dp[i][j-1] + nums2[j - 1];

let nums1 = [1, 3, 4, 5, 9, 10];
let nums2 = [1, 4, 9, 10];
// "bsbininm";
// "jmjkbkjkv";
console.log(lcs(nums1, nums2));
// 空间 O(K) K=min{n,m},m,n,是两个序列的长度
// 空间复杂度，时间复杂度 O(n*m)
function lcs(nums1: number[] | string, nums2: number[] | string) {
  let dp: number[] = new Array(nums2.length + 1).fill(0);
  for (let i = 1; i <= nums1.length; i++) {
    let cur = dp[0];

    for (let j = 1; j <= nums2.length; j++) {
      let leftTop = cur;
      cur = dp[j];
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = leftTop + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }
  }

  return dp[nums2.length];
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
