import {Sort} from "./Sort";
export class InsertionSort_2<E> extends Sort<E> {
  sort(): void {
    let array = this.array;
    for (let begin = 1; begin < array.length; begin++) {
      this.inset(begin, this.search(begin));
      // let insetIndex = this.search(begin);
    }
  }
  inset(begin: number, insetIndex: number) {
    let array = this.array;
    let v = array[begin];
    // for (let i = begin - 1; i >= insetIndex; i--) {
    //   array[i + 1] = array[i];
    // }
    for (let i = begin; i > insetIndex; i--) {
      array[i] = array[i - 1];
    }
    array[insetIndex] = v;
  }

  search(index: number) {
    let v = this.array[index];

    let begin = 0;
    let end = index;

    while (begin < end) {
      let mid = (begin + end) >> 1;
      // if (array[mid] === v) return mid;
      if (this.cmpElement(v, this.array[mid]) < 0) {
        end = mid;
      } else {
        begin = mid + 1;
      }
    }
    return begin;
  }
}
