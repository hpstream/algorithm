export function bubbleSort1(array: number[]) {
  for (let end = array.length - 1; end > 0; end--) {
    for (let begin = 1; begin <= end; begin++) {
      if (array[begin] < array[begin - 1]) {
        let tmp = array[begin];
        array[begin] = array[begin - 1];
        array[begin - 1] = tmp;
      }
    }
  }
}

export function bubbleSort2(array: number[]) {
  for (let end = array.length - 1; end > 0; end--) {
    let sorted = true;
    for (let begin = 1; begin <= end; begin++) {
      if (array[begin] < array[begin - 1]) {
        let tmp = array[begin];
        array[begin] = array[begin - 1];
        array[begin - 1] = tmp;
        sorted = false;
      }
    }
    if (sorted) break;
  }
}

export function bubbleSort3(array: number[]) {
  for (let end = array.length - 1; end > 0; end--) {
    let sortedIndex = 1;
    for (let begin = 1; begin <= end; begin++) {
      if (array[begin] < array[begin - 1]) {
        let tmp = array[begin];
        array[begin] = array[begin - 1];
        array[begin - 1] = tmp;
        sortedIndex = begin;
      }
    }
    end = sortedIndex;
  }
}
