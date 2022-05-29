import {LinkList} from "../4.链表/LinkList";
import {Set, Visitor} from "./Set";

export class ListSet<T> implements Set<T> {
  private list = new LinkList<T>();
  size(): number {
    return this.list.size;
  }
  isEmpty(): boolean {
    return this.list.isEmpty();
  }
  clear(): void {
    this.list.clear();
  }
  contains(element: T): boolean {
    return this.list.contains(element);
  }
  add(element: T): void {
    // if (this.contains(element)) return;
    // this.list.add(element);
    let index = this.list.indexOf(element);

    if (index != LinkList.ELEMENT_NOT_FOUND) {
      this.list.set(index, element);
    } else {
      this.list.add(element);
    }
    // console.log(index, element, this.list);
  }
  remove(element: T): void {
    let index = this.list.indexOf(element);
    if (index != LinkList.ELEMENT_NOT_FOUND) {
      this.list.remove(index);
    }
  }
  traversal(visitor: Visitor<T>): void {
    let size = this.size();
    for (let i = 0; i < size; i++) {
      if (visitor.visit(this.list.get(i))) return;
    }
  }
}
