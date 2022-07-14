import {AbstractList} from "./List";
export class ArrayList<T> extends AbstractList<T> {
  private list: T[];
  constructor() {
    super();
    this.list = [];
  }

  get size() {
    return this.list.length;
  }

  get(i: number): T {
    this.rangeCheck(i);
    return this.list[i];
  }
  set(i: number, obj: T): T {
    this.rangeCheck(i);
    let tem = this.list[i];
    this.list[i] = obj;
    return tem;
  }
  clear(): void {
    this.list = [];
  }
  isEmpty(): boolean {
    return this.size == 0;
  }
  contains(obj: T): boolean {
    return this.list.indexOf(obj) > -1;
  }
  add(...args: [obj: T] | [index: number, obj: T]): void {
    if (args.length == 1) {
      this.list.push(args[0]);
    } else {
      // 判断数组是否越界
      this.rangeCheck(args[0]);
      // 1. 使用原声api
      // this.list.splice(args[0], 0, args[1]);

      // 2. 使用for循环实现
      for (let i = this.size; i > args[0]; i--) {
        this.list[i] = this.list[i - 1];
      }
      this.list[args[0]] = args[1];
    }
  }

  remove(index: number): T {
    this.rangeCheck(index);
    // return this.list.splice(i, 1)[0];

    let tem = this.list[index];
    for (let i = index + 1; i < this.size; i++) {
      this.list[i] = this.list[i - 1];
    }
    // 数组长度减小
    this.list.length = this.list.length - 1;

    return tem;
  }
  indexOf(obj: T): number {
    return this.list.indexOf(obj);
  }
  toString() {
    return `${this.list}`;
  }
}
