// let faces = [25, 20, 5, 1].sort((a, b) => b - a);
// let money = 41;

// 时间复杂度，空间复杂度O(n)
class CoinChange {
  dp: any[] = [0];
  faces: any[] = [];

  constructor() {
    // console.log(this.coins(41, [25, 20, 5, 1]));
    console.log(this.coins(10, [25, 20, 5]));
  }
  coins(n: number, faces: number[]): number {
    // 递归，自底向上
    if (n < 1) return -1;
    if (faces.length == 0) return -1;

    for (let i = 1; i <= n; i++) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < faces.length; j++) {
        let face = faces[j];
        if (i < face || this.dp[i - face] < 0) continue;
        if (this.dp[i - face] >= min) continue;

        min = this.dp[i - face];
        this.faces[i] = face;
      }
      if (min == Number.MAX_SAFE_INTEGER) {
        this.dp[i] = -1;
      } else {
        this.dp[i] = min + 1;
      }
    }
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
