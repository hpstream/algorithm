export class BinarySearch {
  indexOf(array: number[], v: number) {
    if (!array || array.length === 0) return -1;

    let begin = 0;
    let end = array.length;
    while (begin < end) {
      let mid = (begin + end) >> 1;
      if (array[mid] === v) return mid;
      if (array[mid] > v) {
        end = mid;
      } else {
        begin = mid + 1;
      }
    }
    return -1;
  }

  static search(array: number[], v: number) {
    if (!array || array.length === 0) return -1;

    let begin = 0;
    let end = array.length;
    let mid = begin;
    while (begin < end) {
      mid = (begin + end) >> 1;
      // if (array[mid] === v) return mid;
      if (array[mid] > v) {
        end = mid;
      } else {
        begin = mid + 1;
      }
    }
    return begin;
  }
}
