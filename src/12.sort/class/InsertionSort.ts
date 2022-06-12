import {Sort} from "./Sort";
export class InsertionSort<E> extends Sort<E> {
  // 定性：true    耗时：0.306s(306ms)     比较:9999万     交换:2477.9759万
  sort(): void {
    let array = this.array;
    for (let begin = 1; begin < array.length; begin++) {
      let cur = begin;
      while (cur > 0 && this.cmp(cur, cur - 1) < 0) {
        this.swap(cur, cur - 1);
        cur--;
      }
    }
  }
}
