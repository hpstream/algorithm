export abstract class Sort {
  array: number[] = [];
  time: number = 0;
  protected cmpCount: number = 0;
  protected swapCount: number = 0;

  protected abstract sort(): void;
  constructor(array: number[]) {
    if (!array || array.length < 2) return;
    this.array = array;
    let begin = new Date().getTime();
    this.sort();
    let end = new Date().getTime();
    this.time = end - begin;
  }

  cmp(i1: number, i2: number) {
    this.cmpCount++;

    return this.array[i1] - this.array[i2];
  }
  cmpElement(v1: number, v2: number) {
    this.cmpCount++;
    return v1 - v2;
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

  toString() {
    return `算法名称:[${this.constructor.name}}
耗时：${this.time / 1000}s(${this.time}ms)\t比较:${this.format(
      this.cmpCount
    )}\t交换:${this.format(this.swapCount)}
————————————————————————————————————————`;
  }
}
