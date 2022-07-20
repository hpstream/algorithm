import {LinkedList} from "../Array/LinkedList";
import {DoubleEndedQueue} from "./queue";

export class LinkedDoubleEndedQueue<T> implements DoubleEndedQueue<T> {
  queue = new LinkedList<T>();
  front(): T {
    return this.queue.get(0);
  }
  enQueueRear(e: T): void {
    this.queue.add(e);
  }
  enQueueFront(e: T): void {
    this.queue.add(0, e);
  }
  deQueueFront(): T {
    return this.queue.remove(0);
  }
  deQueueRear(): T {
    return this.queue.remove(this.queue.size - 1);
  }
  rear(): T {
    return this.queue.get(this.queue.size - 1);
  }

  get size(): number {
    return this.queue.size;
  }
  isEmpty(): boolean {
    return this.queue.isEmpty();
  }
  clear(): void {
    this.queue.clear();
  }
}
