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
