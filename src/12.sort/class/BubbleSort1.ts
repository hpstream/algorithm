import {Sort} from "./Sort";

export class BubbleSort1<E> extends Sort<E> {
  sort(): void {
    let array = this.array;
    for (let end = array.length - 1; end > 0; end--) {
      for (let begin = 1; begin <= end; begin++) {
        if (this.cmp(begin, begin - 1) < 0) {
          this.swap(begin, begin - 1);
        }
      }
    }
  }
}
