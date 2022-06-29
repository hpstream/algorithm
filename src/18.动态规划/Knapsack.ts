/**
 * 假设values是价值数组，weights是重量数组
 * 编号为K的物品，价值是values[k],重量是weights[k], K属于[0,n)
 * 假设dp(i,j)是最大承重为j,有前i件物品可选时的最大总价值，i属于[0,n）,j属于[0,W]
 */

let values = [6, 3, 5, 4, 6];
let weights = [2, 2, 6, 5, 4];
let capacity = 10;

console.log(maxValue(values, weights, capacity));

function maxValue(values: number[], weights: number[], capacity: number) {
  let dp = new Array(weights.length + 1).fill(0).map((row) => {
    return new Array(capacity + 1).fill(0);
  });

  // .fill(new Array(capacity + 1).fill(0));
  for (let i = 1; i <= values.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (j < weights[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i - 1] + dp[i - 1][j - weights[i - 1]]
        );
      }
    }
  }
  // console.log(dp);
  return dp[values.length][capacity];
}

export {};
