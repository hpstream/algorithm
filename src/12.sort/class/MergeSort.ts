import { Sort } from "./Sort";
export class MergeSort<E> extends Sort<E> {
  sort(...args: [] | [begin: number, end: number]) {
    if (args.length === 0) {
      this.sort(0, this.array.length);
    } else {
      let [begin, end] = args;
      if (end - begin < 2) return;
      let mid = (begin + end) >> 1;
      // console.log(begin, end);
      this.sort(begin, mid);
      this.sort(mid, end);
      this.merge(begin, mid, end);
    }
  }
  merge(begin: number, mid: number, end: number) {
    let li = 0;
    let le = mid - begin;
    let ri = mid;
    let re = end;
    let ai = begin;
    let leftArray: E[] = [];
    for (let i = li; i < le; i++) {
      leftArray[i] = this.array[begin + i];
    }

    while (li < le) {
      // console.log(li, le);
      // 左边没结束
      if (ri < re && this.cmpElement(this.array[ri], leftArray[li]) < 0) {
        this.array[ai++] = this.array[ri++];
        // ai++;
        // li++;
      } else {
        this.array[ai++] = leftArray[li++];
        // ai++;
        // ri++;
      }
    }
  }
}
