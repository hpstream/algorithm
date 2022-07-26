export interface Heap<E> {
  // size: number;
  isEmpty(): boolean;
  clear(): void;
  add(element: E): void; // 添加堆顶元素
  get(): E | undefined; // 获取堆顶元素
  remove(): E | undefined; // 删除堆顶元素
  replace(elemnt: E): E | undefined; // 删除堆顶的元素，同时插入新元素
}
