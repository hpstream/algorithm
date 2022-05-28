import {Comparator} from "./BinaryTree";
import {BST} from "./BST";
import {Node} from "./Node";
class RBNode<T> extends Node<T> {
  color!: boolean;
  left?: RBNode<T>;
  right?: RBNode<T>;
  public parent?: RBNode<T>;
  constructor(element: T, parent?: RBNode<T>) {
    super(element, parent);
  }
}
export class RBTree<T> extends BST<T> {
  static RED = true;
  static BlACK = false;
  constructor(
    comparator?: (
      newVal: number | Comparator<T>,
      oldVal: number | Comparator<T>
    ) => number
  ) {
    super(comparator);
  }
  // 染色操作
  private color(node: Node<T>, color: boolean) {
    if (!node) return node;
    (node as RBNode<T>).color = color;
    return node as RBNode<T>;
  }
  private red(node: Node<T>) {
    return this.color(node, RBTree.RED);
  }
  private black(node: Node<T>) {
    return this.color(node, RBTree.BlACK);
  }
  private isBlock(node: Node<T>) {
    return this.colorOf(node) === RBTree.BlACK;
  }

  private colorOf(node: Node<T>) {
    // this.color  node;
    let cNode = node as RBNode<T>;
    return !node ? RBTree.BlACK : cNode.color;
  }
}
