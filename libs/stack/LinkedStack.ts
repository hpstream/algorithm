import {LinkedList} from "../Array/LinkedList";
import {Stack} from "./stack";

export class ArrayStack<T> implements Stack<T> {
  private stack = new LinkedList<T>();

  get size(): number {
    return this.stack.size;
  }
  isEmpty(): boolean {
    return this.stack.isEmpty();
  }
  pop(): T {
    return this.stack.remove(this.size - 1);
  }
  push(e: T): void {
    this.stack.add(e);
  }
  top(): T {
    return this.stack.get(this.size - 1);
  }
  clear(): void {
    this.stack.clear();
  }
}
