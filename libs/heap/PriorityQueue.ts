import {BinaryHeap} from "./BinaryHeap";

export class PriorityQueue<E> {
  private heap!: BinaryHeap<E>;
  constructor(elements: E[], comparator: (el: E, e2: E) => number) {
    this.heap = new BinaryHeap(elements, comparator);
  }
  get size() {
    return this.heap.size;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  addAll(elements: E[]) {
    for (let i = 0; i < elements.length; i++) {
      this.enQueue(elements[i]);
    }
  }
  clear() {
    this.heap.clear();
  }
  enQueue(e: E) {
    this.heap.add(e);
  }
  deQueue(): E | undefined {
    return this.heap.remove();
  }
  front(): E | undefined {
    return this.heap.get();
  }
}
