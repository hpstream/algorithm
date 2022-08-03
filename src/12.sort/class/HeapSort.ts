import { BinaryHeap } from "./../../9.堆/BinaryHeap";

import { Sort } from "./Sort";


export class HeapSort<E> extends Sort<E> {
  heapSize = 0;

  sort(arr?: E[]): void {
    // 原地建堆
    //  this.array = [...array];
    this.heapSize = this.array.length;
    for (let i = (this.heapSize >> 1) - 1; i >= 0; i--) {
      this.siftDown(i);
    }

    while (this.heapSize > 0) {
      this.swap(0, --this.heapSize);
      // 对0位置进行siftDown;
      this.siftDown(0);
    }
  }

  siftDown(index: number) {
    let element = this.array[index];
    // index 必须保证index位置是非叶子结点
    // 第一个叶子节点的索引 == 非叶子节点的数量
    // index < 第一个叶子节点的索引
    let half = this.heapSize >> 1;
    while (index < half) {
      // index 节点有两种情况
      // 两个子节点
      // 一个子节点
      let childIndex = (index << 1) + 1;
      let child = this.array[childIndex];
      // 右子节点
      let rightIndex = childIndex + 1;
      let rightChild = this.array[rightIndex];
      // 找到左右节点中较大的一个
      if (
        rightIndex < this.heapSize &&
        this.cmpElement(rightChild, child) > 0
      ) {
        childIndex = rightIndex;
        child = rightChild;
      }
      if (this.cmpElement(element, child) >= 0) break;
      this.array[index] = child;
      index = childIndex;
    }
    this.array[index] = element;
  }
}


