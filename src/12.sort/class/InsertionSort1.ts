import {Sort} from "./Sort";
export class InsertionSort_1<E> extends Sort<E> {
  sort(): void {
    let array = this.array;
    for (let begin = 1; begin < array.length; begin++) {
      let cur = begin;
      let v = array[cur];
      while (cur > 0 && this.cmpElement(v, this.array[cur - 1]) < 0) {
        array[cur] = array[cur - 1];
        cur--;
      }
      array[cur] = v;
    }
  }
}
