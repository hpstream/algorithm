import {BinaryHeap} from "./../9.堆/BinaryHeap";
export class PriorityQueue<E> {
  private heap!: BinaryHeap<E>;
  constructor(
    elements?: E[] | ((el: E, e2: E) => number),
    comparator?: (el: E, e2: E) => number
  ) {
    this.heap = new BinaryHeap(elements, comparator);
  }
  get size() {
    return this.heap.size;
  }
  isEmpty(): boolean {
    return this.size === 0;
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
