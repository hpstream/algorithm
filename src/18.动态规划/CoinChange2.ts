let faces = [25, 20, 5, 1].sort((a, b) => b - a);
let money = 41;

// 存在大量重复的计算
class CoinChange {
  dp: any[] = [];
  constructor() {
    this.dp[25] = 1;
    this.dp[20] = 1;
    this.dp[5] = 1;
    this.dp[1] = 1;
    // console.log(this.coins(19));
    console.log(this.coins(41));
  }
  coins(n: number): number {
    // 记忆化搜索
    if (this.dp[n]) return this.dp[n];
    if (n <= 1) return Number.MAX_SAFE_INTEGER;
    this.dp[n] =
      Math.min(
        this.coins(n - 25),
        this.coins(n - 20),
        this.coins(n - 5),
        this.coins(n - 1)
      ) + 1;
    return this.dp[n];
  }
}
new CoinChange();
export {};
