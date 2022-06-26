let faces = [25, 20, 5, 1].sort((a, b) => b - a);
let money = 41;

// 存在大量重复的计算
class CoinChange {
  constructor() {
    console.log(this.coins(41));
  }
  coins(n: number): number {
    // 缺点：自顶向下，会出现重复计算
    if (n <= 1) return Number.MAX_SAFE_INTEGER;
    if (n === 25 || n === 20 || n === 5 || n === 1) return 1;
    return (
      Math.min(
        this.coins(n - 25),
        this.coins(n - 20),
        this.coins(n - 5),
        this.coins(n - 1)
      ) + 1
    );
  }
}
new CoinChange();
export {};
