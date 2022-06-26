let faces = [25, 20, 5, 1].sort((a, b) => b - a);
let money = 41;

// 时间复杂度，空间复杂度O(n)
class CoinChange {
  dp: any[] = [0];
  faces: any[] = [];

  constructor() {
    console.log(this.coins(41));
    // console.log(this.coins(19));
  }
  coins(n: number): number {
    // 递归，自底向上
    if (n < 1) return -1;

    for (let i = 1; i <= n; i++) {
      let min = Number.MAX_SAFE_INTEGER;
      if (i >= 1 && this.dp[i - 1] < min) {
        min = this.dp[i - 1];
        this.faces[i] = 1;
      }

      if (i >= 5 && this.dp[i - 5] < min) {
        min = this.dp[i - 5];
        this.faces[i] = 5;
      }
      if (i >= 20 && this.dp[i - 20] < min) {
        min = this.dp[i - 20];
        this.faces[i] = 20;
      }
      if (i >= 25 && this.dp[i - 25] < min) {
        min = this.dp[i - 25];
        this.faces[i] = 25;
      }
      this.dp[i] = min + 1;
    }
    // console.log(this.faces);
    this.print(this.faces, n);

    return this.dp[n];
  }
  print(faces: number[], n: number) {
    let arr: number[] = [];

    while (faces[n]) {
      arr.push(faces[n]);
      n = n - faces[n];
    }
    console.log(`方案是：${arr}`);
  }
}
new CoinChange();
export {};
