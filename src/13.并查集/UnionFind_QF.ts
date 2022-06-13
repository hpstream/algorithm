import {UnionFind} from "./UF";

export class UnionFind_QF extends UnionFind {
  constructor(capacity: number) {
    super(capacity);
  }

  public find(v: number) {
    this.rangeCheck(v);
    return this.parents[v];
  }
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
