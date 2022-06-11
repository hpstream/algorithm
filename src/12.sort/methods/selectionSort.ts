export function selectionSort(array: number[]) {
  for (let end = array.length - 1; end > 0; end--) {
    let maxIndex = 0;
    for (let begin = 1; begin <= end; begin++) {
      if (array[maxIndex] <= array[begin]) {
        maxIndex = begin;
      }
    }
    let tmp = array[end];
    array[end] = array[maxIndex];
    array[maxIndex] = tmp;
  }
}
