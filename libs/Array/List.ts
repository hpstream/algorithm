let arr = [];

arr.unshift();

export interface List<T> {
  // 长度
  size: number;

  clear(): void;
  isEmpty(): boolean;
  contains(obj: T): boolean;

  add(...args: [obj: T] | [index: number, obj: T]): void;
  remove(i: number): T;
  indexOf(Obj: T): number;
}
