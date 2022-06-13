import {UnionFind} from "./UF";

export class UnionFind_QF extends UnionFind {
  constructor(capacity: number) {
    super(capacity);
  }

  public find(v: number) {
    this.rangeCheck(v);
    while (v != this.parents[v]) {
      v = this.parents[v];
    }
    return v;
  }
  union(v1: number, v2: number) {
    let p1 = this.find(v1);
    let p2 = this.find(v2);
    if (p1 === p2) return;

    this.parents[p1] = p2;
  }
}
