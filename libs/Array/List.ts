export interface List<T> {
  // 长度
  size: number;

  clear(): void;
  isEmpty(): boolean;
  contains(obj: T): boolean;

  add(...args: [obj: T] | [index: number, obj: T]): void;
  remove(i: number): T;
  indexOf(Obj: T): number;
}

export abstract class AbstractList<T> implements List<T> {
  static ELEMENT_NOT_FOUND = -1;

  isEmpty(): boolean {
    return this.size == 0;
  }
  outOfBounds(index: number) {
    throw new Error(`Index: ${index}, Size: ${this.size}`);
  }
  rangeCheck(index: number) {
    if (index < 0 || index >= this.size) {
      this.outOfBounds(index);
    }
  }
  abstract get size(): number;
  abstract clear(): void;
  abstract contains(obj: T): boolean;
  abstract add(...args: [obj: T] | [index: number, obj: T]): void;
  abstract get(i: number): T;
  abstract set(i: number, obj: T): T;
  abstract remove(i: number): T;
  abstract indexOf(Obj: T): number;
}
