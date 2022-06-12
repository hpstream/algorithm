import {Sort} from "../Sort";
// 无法对负数进行排序
// 及其浪费内存空间
// 不稳定排序
export class CountingSort_1 extends Sort<number> {
  sort(): void {
    let array = this.array;
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    let counts: number[] = new Array(max + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
      counts[array[i]]++;
    }
    let index = 0;

    for (let i = 0; i < counts.length; i++) {
      let value = counts[i];
      while (value > 0) {
        array[index++] = i;
        value--;
      }
    }
  }
}
