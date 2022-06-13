export abstract class UnionFind {
  protected parents!: number[];
  constructor(capacity: number) {
    if (capacity < 0) {
      throw new Error("capacity must be >=1");
    }
    let parents = new Array(capacity);
    for (let i = 0; i < parents.length; i++) {
      parents[i] = i;
    }
    this.parents = parents;
  }

  public abstract find(v: number): number;
  public abstract union(v1: number, v2: number): void;

  public isSame(v1: number, v2: number) {
    return this.find(v1) === this.find(v2);
  }

  protected rangeCheck(v: number) {
    if (v < 0 || v >= this.parents.length) {
      throw new Error(`${v} is out if bounds`);
    }
  }
}
