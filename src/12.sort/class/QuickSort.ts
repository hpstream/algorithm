import {Sort} from "./Sort";
export class QuickSort<E> extends Sort<E> {
  sort(...args: [] | [begin: number, end: number]) {
    if (args.length === 0) {
      this.sort(0, this.array.length);
    } else {
      let [begin, end] = args;
      if (end - begin < 2) return;

      let mid = this.pivotIndex(begin, end);
      // console.log(mid);
      this.sort(begin, mid);
      this.sort(mid + 1, end);
    }
  }
  pivotIndex(begin: number, end: number) {
    // 建立随机轴点
    this.swap(begin, begin + Math.floor(Math.random() * (end - begin)));
    let pivot = this.array[begin]; //备份begin位置的元素
    end--; //指向最后一个元素

    while (begin < end) {
      while (begin < end) {
        if (this.cmpElement(pivot, this.array[end]) < 0) {
          end--;
        } else {
          this.array[begin++] = this.array[end];
          break;
        }
      }

      while (begin < end) {
        if (this.cmpElement(pivot, this.array[begin]) > 0) {
          begin++;
        } else {
          this.array[end--] = this.array[begin];
          break;
        }
      }
    }
    //将轴点元素放入最终位置
    this.array[begin] = pivot;
    // 返回轴点元素
    return begin;
  }
}
