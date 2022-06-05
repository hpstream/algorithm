import {Comparator} from "./../5.tree/BinaryTree";
import {Heap} from "./Heap";
export class BinaryHeap<E> implements Heap<E> {
  static DEFAULT_CAPACITY = 10;
  private elements!: (E | undefined)[];
  constructor(public comparator?: (el: E, e2: E) => number) {
    this.elements = new Array(BinaryHeap.DEFAULT_CAPACITY);
  }
  size = 0;

  compare(e1: E, e2: E) {
    if (this.comparator) {
      return this.comparator(e1, e2);
    } else {
      return (e1 as any as number) - (e2 as any as number);
    }
  }
  isEmpty(): boolean {
    return this.size == 0;
  }
  clear(): void {
    for (let i = 0; i < this.size; i++) {
      this.elements[i] = undefined;
    }

    this.size = 0;
  }
  add(element: E): void {
    this.elementNotNullorUndefined(element);
    this.ensureCapacity(this.size + 1);
    this.elements[this.size++] = element;
    this.siftUp(this.size - 1);
  }
  siftUp(index: number) {
    let element = this.elements[index] as E;

    while (index > 0) {
      let parentIndex = (index - 1) >> 1;
      let parent = this.elements[parentIndex] as E;
      if (this.compare(element, parent) <= 0) break;
      let tmp = this.elements[index];
      this.elements[index] = parent;
      this.elements[parentIndex] = tmp;
      index = parentIndex;
    }
  }
  ensureCapacity(capacity: number) {
    let oldCapacity = this.elements.length;
    if (oldCapacity >= capacity) return;
    let newElements = new Array((oldCapacity + oldCapacity) >> 1);
    for (let i = 0; i < this.size; i++) {
      newElements[i] = undefined;
    }
    this.elements = newElements;
  }
  get(): E | undefined {
    return this.elements[0];
  }
  remove(): E {
    throw new Error("Method not implemented.");
  }
  replace(elemnt: E): E {
    throw new Error("Method not implemented.");
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
