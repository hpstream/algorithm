import {size} from "lodash";
import {List} from "./List";

export class ArrayList<T> implements List<T> {
  private list: T[];
  constructor() {
    this.list = [];
  }

  get size() {
    return this.list.length;
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
      if (args[0] >= this.size) {
        throw new Error("数组越界");
      } else {
        // 1. 使用原声api
        // this.list.splice(args[0], 0, args[1]);

        // 2. 使用for循环实现
        for (let i = this.size; i > args[0]; i--) {
          this.list[i] = this.list[i - 1];
        }
        this.list[args[0]] = args[1];
      }
    }
  }
  remove(i: number): T {
    throw new Error("Method not implemented.");
  }
  indexOf(obj: T): number {
    return this.list.indexOf(obj);
  }
}
