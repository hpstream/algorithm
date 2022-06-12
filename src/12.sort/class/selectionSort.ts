import {Sort} from "./Sort";
export class SelectionSort<E> extends Sort<E> {
  sort(): void {
    let array = this.array;
    for (let end = array.length - 1; end > 0; end--) {
      let max = 0;
      for (let begin = 1; begin <= end; begin++) {
        if (this.cmp(max, begin) <= 0) {
          max = begin;
        }
      }
      this.swap(max, end);
    }
  }
}
