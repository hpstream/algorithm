// 队列是一种特殊的线性表，只能在头尾两端进行操作
// 队尾（rear）：只能从队尾添加元素，一般叫做 enQueue，入队
// 队头（front）：只能从队头移除元素，一般叫做 deQueue，出队
// 先进先出的原则，First In First Out，FIFO

export interface Queue<T> {
  get size(): number;
  isEmpty(): boolean;
  enQueue(e: T): void;
  deQueue(): T;
  clear(): void;
  front(): T;
}
// DoubleEndedQueue;
export interface DoubleEndedQueue<T> {
  get size(): number;
  isEmpty(): boolean;
  clear(): void;
  enQueueRear(e: T): void; // 从队尾入队
  enQueueFront(e: T): void; //从对头入队
  deQueueFront(): T; //从队头出队
  deQueueRear(): T; // 从队尾出队

  front(): T;
  rear(): T;
}
