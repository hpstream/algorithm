// import {CountingSort} from "./count/CountingSort1";
// import {ShellSort} from "./ShellSort";

interface Comparator<E> {
  (a: E, b: E): number;
}
export abstract class Sort<E> {
  array: E[] = [];
  time: number = 0;
  protected cmpCount: number = 0;
  protected swapCount: number = 0;
  compare?: Comparator<E>;
  protected abstract sort(): void;
  constructor(array: E[], compare?: Comparator<E>) {
    this.compare = compare;
    if (!array || array.length < 2) return;
    this.array = array;
    let begin = new Date().getTime();
    this.sort();
    let end = new Date().getTime();
    this.time = end - begin;
  }

  cmp(i1: number, i2: number) {
    let v1 = this.array[i1];
    let v2 = this.array[i2];
    return this.cmpElement(v1, v2);
  }
  cmpElement(v1: E, v2: E) {
    this.cmpCount++;
    if (typeof v1 === "number" && typeof v2 === "number") {
      return v1 - v2;
    } else {
      if (this.compare) {
        return this.compare(v1, v2);
      } else {
        throw new Error("compare is undefined");
      }
    }
  }
  swap(i1: number, i2: number) {
    this.swapCount++;
    let tmp = this.array[i1];
    this.array[i1] = this.array[i2];
    this.array[i2] = tmp;
  }
  format(number: number) {
    if (number < 10000) return "" + number;

    if (number < 100000000) return number / 10000 + "万";
    return number / 100000000 + "亿";
  }
  isStable() {
    // console.log(this.constructor);
    if (["ShellSort"].includes(this.constructor.name)) {
      return false;
    }
    if (["RadixSort", "CountingSort_1"].includes(this.constructor.name)) {
      return true;
    }
    let nums = 10;
    let arr = [];
    for (let i = 0; i < nums; i++) {
      arr.push({
        index: i,
        value: 10,
      });
    }
    let tem = this.array;
    this.array = arr as any;
    let array: any = this.array;
    this.compare = (a: any, b: any) => {
      return a.value - b.value;
    };
    this.sort();
    let flag = true;
    // console.log(array);
    for (let i = 1; i < array.length; i++) {
      if (array[i].index != array[i - 1].index + 1) {
        flag = false;
      }
    }
    this.array = tem;
    return flag;
  }

  toString() {
    let titleStr = `算法名称:[${this.constructor.name}}\n`;
    let swapCountStr = `交换:${this.format(this.swapCount)}\t`;
    let cmpCountStr = `比较:${this.format(this.cmpCount)}\t`;
    let stableStr = `稳定性：${this.isStable()}\t`;
    // let stableStr = "";
    let timeStr = `耗时：${this.time / 1000}s(${this.time}ms)\t`;
    let line = "\n————————————————————————————————————————";
    return `${titleStr}${stableStr}${timeStr}${cmpCountStr}${swapCountStr}${line}`;
  }
}
