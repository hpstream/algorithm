import {UnionFind} from "./UF";

export class UnionFind_QF extends UnionFind {
  constructor(capacity: number) {
    super(capacity);
  }

  public find(v: number) {
    this.rangeCheck(v);
    return this.parents[v];
  }
  // 将v1所有集合所有元素都嫁接到v2的父节点上
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;

    for (let i = 0; i < this.parents.length; i++) {
      if (this.parents[i] === p1) {
        this.parents[i] = p2;
      }
    }
  }
}
