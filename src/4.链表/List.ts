export interface List<T> {

  clear(): void;
  // get size(): number;
  isEmpty(): boolean;
  contains(obj: T): boolean;
  add(...args: [obj: T] | [index: number, obj: T]): void;
  remove(i: number): void;
  indexOf(Obj: T): number
}