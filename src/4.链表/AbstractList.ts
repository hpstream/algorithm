import { List } from './List';
export abstract class AbstractList<T> implements List<T> {

  static ELEMENT_NOT_FOUND = -1;
  protected size = 0;


  isEmpty(): boolean {
    return this.size == 0;
  }

  outOfBounds(index: number) {
    throw new Error(`Index: ${index}, Size: ${this.size}`)
  }
  rangeCheck(index: number) {
    if (index < 0 || index >= this.size) {
      this.outOfBounds(index)
    }
  }
  rangeCheckForAdd(index: number) {
    if (index < 0 || index >= this.size) {
      this.outOfBounds(index)
    }
  }
  abstract clear(): void;
  abstract contains(obj: T): boolean;
  abstract add(...args: [obj: T] | [index: number, obj: T]): void;
  abstract get(i: number): T;
  abstract set(i: number, obj: T): T;
  abstract remove(i: number): T;
  abstract indexOf(Obj: T): number

}