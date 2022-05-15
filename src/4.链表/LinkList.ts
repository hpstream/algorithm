import { AbstractList } from './AbstractList';

class Node<T>{
  constructor(public element: T, public next: Node<T> | null) { }
}
export class LinkList<T> extends AbstractList<T> {


  first!: Node<T> | null;

  constructor() {
    super()
  }
  clear(): void {
    this.size = 0;
    this.first = null;
  }

  add(...args: [obj: T] | [index: number, obj: T]): void {

    if (args.length === 1) {
      let element = args[0]
      if (this.first === undefined) {
        this.first = new Node(element, null);
      } else {
        let node = this.findNode(this.size - 1)
        node.next = new Node(element, null);
      }
    } else {
      let index = args[0];
      let element = args[1];
      if (index === 0) {
        this.first = new Node(element, this.first);
      } else {
        let PreNode = this.findNode(index - 1)
        let newNode = new Node(element, PreNode.next);
        PreNode.next = newNode
      }
    }
    this.size++;
  }

  findNode(index: number): Node<T> {
    this.rangeCheck(index);
    let node = this.first;
    for (let i = 0; i < index; i++) {
      node = (node as Node<T>).next

    }
    return node as Node<T>;
  }

  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
  contains(obj: T): boolean {
    throw new Error('Method not implemented.');
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
  remove(i: number): void {
    throw new Error('Method not implemented.');
  }
  indexOf(Obj: T): number {
    throw new Error('Method not implemented.');
  }

}

let link = new LinkList();

link.add(1)
link.add(2)
link.add(1, 3)
link.add(0, 4)

console.log(JSON.stringify(link.first))

