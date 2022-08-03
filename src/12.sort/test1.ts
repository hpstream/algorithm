let arr: number[] = [10, 20, 15, 25, 50, 30, 40, 35, 45];
heapSort(arr)
function heapSort(arr: number[]) {
  let len = arr.length;

  for (let i = (len >> 1) - 1; i >= 0; i--) {
    siftDown(i);
  }

  while (len > 0) {
    swap(0, --len);
    // 对0位置进行siftDown;
    siftDown(0);
  }

  console.log(arr)

  function swap(x1: number, x2: number) {
    let tem = arr[x1];
    arr[x1] = arr[x2];
    arr[x2] = tem;
  }

  function cmp(x1: number, x2: number) {
    return x1 - x2
  }

  // 下溢操作
  function siftDown(index: number) {
    let element = arr[index];
    let half = len >> 1;
    while (index < half) {

      let leftIndex = (index << 1) + 1;
      let leftChild = arr[leftIndex];
      let rightIndex = leftIndex + 1;
      let rightChild = arr[rightIndex];

      if (rightIndex < len && cmp(rightChild, leftChild) > 0) {
        leftChild = rightChild;
        leftIndex = rightIndex;
      }

      if (cmp(leftChild, element) > 0) {
        arr[index] = leftChild;
        index = leftIndex;
      } else {
        break;
      }

    }
    arr[index] = element;
  }

}