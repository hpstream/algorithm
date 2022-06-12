import {Sort} from "../Sort";
// 无法对负数进行排序
// 及其浪费内存空间
// 不稳定排序
export class CountingSort_2 extends Sort<number> {
  sort(): void {
    let array = this.array;
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
      if (array[i] < min) {
        min = array[i];
      }
    }
    // 存储次数
    let counts: number[] = new Array(max - min + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
      counts[array[i] - min]++;
    }
    for (let i = 1; i < counts.length; i++) {
      counts[i] = counts[i] + counts[i - 1];
    }

    let newArray = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
      let index = array[i] - min;
      newArray[--counts[index]] = array[i];
      // counts[index]--;
    }
    for (let i = 0; i < newArray.length; i++) {
      this.array[i] = newArray[i];
    }
  }
}
