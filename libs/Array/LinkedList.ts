import {AbstractList} from "./List";

// 单项链表的实现
class Node<T> {
  constructor(
    public prev: Node<T> | undefined,
    public element: T,
    public next: Node<T> | undefined
  ) {}
}
export class LinkedList<T> extends AbstractList<T> {
  first!: Node<T> | undefined;
  last!: Node<T> | undefined;
  size = 0;
  clear(): void {
    this.size = 0;
    this.first = undefined;
    this.last = undefined;
  }

  add(...args: [obj: T] | [index: number, obj: T]): void {
    if (args.length === 1) {
      let element = args[0];
      let oldLast = this.last;
      this.last = new Node(oldLast, element, undefined);
      if (oldLast === undefined) {
        this.first = this.last;
      } else {
        oldLast.next = this.last;
      }
      this.size++;
      return;
    }

    let index = args[0];
    let element = args[1];

    if (index == this.size) {
      let oldLast = this.last;
      this.last = new Node(oldLast, element, undefined);
      if (oldLast === undefined) {
        this.first = this.last;
      } else {
        oldLast.next = this.last;
      }
      this.size++;
      return;
    } else {
      let next = this.findNode(index);
      let prev = next.prev;
      let current = new Node(prev, element, next);
      next.prev = current;
      if (prev === undefined) {
        this.first = current;
      } else {
        (prev as Node<T>).next = current;
      }
      this.size++;
    }
  }

  findNode(index: number): Node<T> {
    this.rangeCheck(index);
    if (index < this.size >> 1) {
      let node = this.first;
      for (let i = 0; i < index; i++) {
        node = (node as Node<T>).next;
      }
      return node as Node<T>;
    } else {
      let node = this.last;
      for (let i = this.size - 1; i > index; i--) {
        node = (node as Node<T>).prev;
      }
      return node as Node<T>;
    }
  }

  isEmpty(): boolean {
    return this.size == 0;
  }
  contains(obj: T): boolean {
    return this.indexOf(obj) > -1;
  }

  get(i: number): T {
    return this.findNode(i).element;
  }
  set(i: number, obj: T): T {
    let node = this.findNode(i);
    let old = node.element;
    node.element = obj;
    return old;
  }
  remove(i: number): T {
    this.rangeCheck(i);
    let node = this.findNode(i);
    let prev = node.prev;
    let next = node.next;

    if (prev === undefined) {
      this.first = next;
    } else {
      prev.next = next;
    }
    if (next === undefined) {
      this.last = prev;
    } else {
      next.prev = prev;
    }
    this.size--;
    return node.element;
  }
  indexOf(Obj: T): number {
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      if (!node) return LinkedList.ELEMENT_NOT_FOUND;
      if (node.element === Obj) {
        return i;
      } else {
        node = node.next;
      }
    }
    return LinkedList.ELEMENT_NOT_FOUND;
  }
  toString() {
    let fistArr = [];
    let lastArr = [];
    let first = this.first;
    let last = this.last;
    while (first) {
      fistArr.push(first.element);
      first = first.next;
    }

    while (last) {
      lastArr.push(last.element);
      last = last.prev;
    }
    return `first:${fistArr.join("->")},last:${lastArr.join("->")}`;
  }
}
