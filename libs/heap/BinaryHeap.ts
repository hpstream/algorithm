import {Heap} from "./heap";

export class BinaryHeap<E> implements Heap<E> {
  static DEFAULT_CAPACITY = 10;
  private elements!: (E | undefined)[];

  // compare!: (el: E, e2: E) => number;

  constructor(
    elements: (E | undefined)[],
    public compare: (el: E, e2: E) => number
  ) {
    this.elements = [...elements];
    this.heapify();
  }
  get size() {
    return this.elements.length;
  }
  heapify() {
    // 自上而下的上滤
    // for (let i = 1; i < this.elements.length; i++) {
    //   this.siftUp(i);
    // }
    // 自下而上的上滤
    for (let i = (this.size >> 1) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  isEmpty(): boolean {
    return this.size == 0;
  }
  clear(): void {
    for (let i = 0; i < this.size; i++) {
      this.elements[i] = undefined;
    }
    // this.size = 0;
    this.elements.length = 0;
  }
  add(element: E): void {
    this.elementNotNullorUndefined(element);
    this.ensureCapacity(this.size + 1);
    this.elements[this.size++] = element;
    this.siftUp(this.size - 1);
  }

  ensureCapacity(capacity: number) {
    let oldCapacity = this.elements.length;
    if (oldCapacity >= capacity) return;
    let newElements = new Array((oldCapacity + oldCapacity) >> 1);
    for (let i = 0; i < this.size; i++) {
      newElements[i] = this.elements[i];
    }
    this.elements = newElements;
  }
  get(): E | undefined {
    return this.elements[0];
  }
  remove(): E | undefined {
    let root = this.elements[0];
    let lastIndex = --this.size;
    this.elements[0] = this.elements[lastIndex];
    this.elements[lastIndex] = undefined;

    this.siftDown(0);
    return root;
  }
  siftDown(index: number) {
    let element = this.elements[index] as E;
    // index 必须保证index位置是非叶子结点
    // 第一个叶子节点的索引 == 非叶子节点的数量
    // index < 第一个叶子节点的索引
    let half = this.size >> 1;
    while (index < half) {
      // index 节点有两种情况
      // 两个子节点
      // 一个子节点
      let childIndex = (index << 1) + 1;
      let child = this.elements[childIndex] as E;
      // 右子节点
      let rightIndex = childIndex + 1;

      let rightChild = this.elements[rightIndex] as E;

      if (rightIndex < this.size && this.compare(rightChild, child) > 0) {
        childIndex = rightIndex;
        child = rightChild;
      }
      if (this.compare(element, child) >= 0) break;
      this.elements[index] = child;
      index = childIndex;
    }
    this.elements[index] = element;
  }
  siftUp(index: number) {
    let element = this.elements[index] as E;

    while (index > 0) {
      let parentIndex = (index - 1) >> 1;
      let parent = this.elements[parentIndex] as E;

      if (this.compare(element, parent) <= 0) break;
      // let tmp = this.elements[index];
      this.elements[index] = parent;
      // this.elements[parentIndex] = tmp;
      index = parentIndex;
    }
    this.elements[index] = element;
  }

  replace(elemnt: E): E | undefined {
    this.elementNotNullorUndefined(elemnt);
    let root;
    if (this.size == 0) {
      this.elements[0] = elemnt;
      this.size--;
    } else {
      root = this.elements[0];
      this.elements[0] = elemnt;
      this.siftDown(0);
    }
    return root;
  }
  emptyCheck() {
    if (this.elements.length == 0) {
      throw new Error("elements must not be empty");
    }
  }
  elementNotNullorUndefined(s: any) {
    if (s === undefined || s === null) {
      throw new Error("element must not be empty");
    }
  }
  print(
    index: number,
    sb: {
      value: string;
    },
    s: string
  ) {
    this.elements[(index << 1) + 1] &&
      this.print((index << 1) + 1, sb, " ".repeat(s.length) + "|---");
    sb.value += `${" ".repeat(Math.floor(s.length / 2))}${s}${
      this.elements[index]
    }\n`;
    this.elements[(index << 1) + 2] &&
      this.print((index << 1) + 2, sb, " ".repeat(s.length) + "|---");
  }

  toString() {
    let str = {
      value: "",
    };
    this.print(0, str, "");
    return str.value;
  }
}
