import {UnionFind} from "./UF";

// 基于rank的优化
export class UnionFind_QU_R extends UnionFind {
  ranks: number[] = [];
  constructor(capacity: number) {
    super(capacity);
    for (let i = 0; i < capacity; i++) {
      this.ranks[i] = i;
    }
  }
  // 通过parent链条不断往上找
  public find(v: number) {
    this.rangeCheck(v);
    while (v != this.parents[v]) {
      v = this.parents[v];
    }
    return v;
  }
  // 将v1的根节点嫁接到v2的根节点上
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;
    if (this.ranks[p1] < this.ranks[p2]) {
      this.parents[p1] = p2;
    } else if (this.ranks[p1] > this.ranks[p2]) {
      this.parents[p2] = p1;
    } else {
      this.parents[p1] = p2;
      this.ranks[p2] += p1;
    }
  }
}
