import {AbstractList} from "./List";

// 单项链表的实现
class Node<T> {
  constructor(public element: T, public next: Node<T> | undefined) {}
}
export class LinkedList<T> extends AbstractList<T> {
  first!: Node<T> | undefined;
  size = 0;
  clear(): void {
    this.size = 0;
    this.first = undefined;
  }

  add(...args: [obj: T] | [index: number, obj: T]): void {
    if (args.length === 1) {
      let element = args[0];
      if (this.first === undefined) {
        this.first = new Node(element, undefined);
      } else {
        let node = this.findNode(this.size - 1);
        node.next = new Node(element, undefined);
      }
    } else {
      let index = args[0];
      let element = args[1];
      if (index === 0) {
        this.first = new Node(element, this.first);
      } else {
        let PreNode = this.findNode(index - 1);
        let newNode = new Node(element, PreNode.next);
        PreNode.next = newNode;
      }
    }
    this.size++;
  }

  findNode(index: number): Node<T> {
    this.rangeCheck(index);
    let node = this.first;
    for (let i = 0; i < index; i++) {
      node = (node as Node<T>).next;
    }
    return node as Node<T>;
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
    let preNode = this.first as Node<T>;
    let tem!: Node<T>;
    if (i === 0) {
      this.first = preNode.next;
      tem = preNode;
    } else {
      preNode = this.findNode(i - 1);
      tem = preNode.next as Node<T>;
      preNode.next = (preNode.next as Node<T>).next;
    }
    this.size--;
    return tem.element;
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
    return JSON.stringify(this.first);
  }
}
