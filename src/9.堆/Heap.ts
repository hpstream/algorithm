export interface Heap<E> {
  // size: number;
  isEmpty(): boolean;
  clear(): void;
  add(element: E): void; // 添加堆顶元素
  get(): E | undefined; // 获取堆顶元素
  remove(): E | undefined; // 删除堆顶元素
  replace(elemnt: E): E | undefined; // 删除堆顶的元素，同时插入新元素
}

export abstract class AbstractHeap<E> implements Heap<E> {
  static DEFAULT_CAPACITY = 10;
  constructor(public comparator?: (el: E, e2: E) => number) {}

  size = 0;
  isEmpty(): boolean {
    return this.size == 0;
  }
  abstract clear(): void;
  abstract add(element: E): void;
  abstract get(): E | undefined;
  abstract remove(): E | undefined;
  abstract replace(elemnt: E): E | undefined;
  protected compare(e1: E, e2: E) {
    if (this.comparator) {
      return this.comparator(e1, e2);
    } else {
      return (e1 as any as number) - (e2 as any as number);
    }
  }
}
