// 栈是一种特殊的线性表，只能在一端进行操作
// 往栈中添加元素的操作，一般叫做 push，入栈
// 从栈中移除元素的操作，一般叫做 pop，出栈（只能移除栈顶元素，也叫做：弹出栈顶元素）
// 后进先出的原则，Last In First Out，LIFO

export interface Stack<T> {
  get size(): number;
  isEmpty(): boolean;
  pop(): T;
  push(e: T): void;
  top(): T;
  clear(): void;
}
