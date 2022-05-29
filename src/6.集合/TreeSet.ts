import {RBTree} from "../5.tree/RBTree";
import {Set, Visitor} from "./Set";
export class TreeSet<T> implements Set<T> {
  private tree = new RBTree<T>();
  size(): number {
    return this.tree.size;
  }
  isEmpty(): boolean {
    return this.tree.isEmpty();
  }
  clear(): void {
    return this.tree.clear();
  }
  contains(element: T): boolean {
    return this.tree.contains(element);
  }
  add(element: T): void {
    // let flag = this.contains(element);
    // if(fl)
    this.tree.add(element);
  }
  remove(element: T): void {
    this.tree.remove(element);
  }
  traversal(visitor: Visitor<T>): void {
    this.tree.inOrderTraversal((node) => {
      return visitor.visit(node.element);
    });
  }
}
