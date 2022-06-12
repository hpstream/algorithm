import {Sort} from "./Sort";

export class BubbleSort2<E> extends Sort<E> {
  sort(): void {
    let array = this.array;
    for (let end = array.length - 1; end > 0; end--) {
      let sorted = true;
      for (let begin = 1; begin <= end; begin++) {
        if (this.cmp(begin, begin - 1) < 0) {
          this.swap(begin, begin - 1);
          sorted = false;
        }
      }
      if (sorted) break;
    }
  }
}
