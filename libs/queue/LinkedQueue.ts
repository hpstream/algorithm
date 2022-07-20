import {LinkedList} from "../Array/LinkedList";
import {Queue} from "./queue";

export class LinkedQueue<T> implements Queue<T> {
  queue = new LinkedList<T>();
  get size(): number {
    return this.queue.size;
  }
  isEmpty(): boolean {
    return this.queue.isEmpty();
  }
  enQueue(e: T): void {
    this.queue.add(e);
  }
  deQueue(): T {
    return this.queue.remove(this.queue.size - 1);
  }
  clear(): void {
    this.queue.clear();
  }
  front(): T {
    return this.queue.get(this.queue.size - 1);
  }
}
