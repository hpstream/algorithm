import {Comparator} from "./BinaryTree";
import {BST} from "./BST";
import {Node} from "./Node";
class AVLNode<T> extends Node<T> {
  height: number = 1;
  left?: AVLNode<T>;
  right?: AVLNode<T>;
  constructor(element: T, parent?: AVLNode<T>) {
    super(element, parent);
  }
  balanceFactor() {
    let leftHight = this.left ? this.left.height : 0;
    let rightHight = this.right ? this.right.height : 0;
    return leftHight - rightHight;
  }
  updateHeight() {
    let leftHight = this.left ? this.left.height : 0;
    let rightHight = this.right ? this.right.height : 0;
    this.height = Math.max(leftHight, rightHight);
  }
  tallerChild() {
    let diff = this.balanceFactor();
    if (diff > 0) {
      return this.left;
    } else if (diff < 0) {
      return this.right;
    } else {
      return this.isLeftChild() ? this.left : this.right;
    }
  }
}
export class AVLTree<T> extends BST<T> {
  constructor(
    comparator?: (
      newVal: number | Comparator<T>,
      oldVal: number | Comparator<T>
    ) => number
  ) {
    super(comparator);
  }
  protected createNode(e: T, parent?: AVLNode<T>) {
    return new AVLNode(e, parent);
  }

  isBalance(node: Node<T>): boolean {
    return Math.abs((node as AVLNode<T>).balanceFactor()) <= 1;
  }
  updateHeight(node: Node<T>) {
    (node as AVLNode<T>).updateHeight();
  }

  afterAdd(node?: Node<T>) {
    if (!node) return;
    while ((node = node.parent) !== undefined) {
      if (this.isBalance(node)) {
        // 更新高度
        this.updateHeight(node);
      } else {
        // 恢复高度
        this.rebalance(node);
        // 更新高度
        this.updateHeight(node);
        break;
      }
    }
    return;
  }
  private rebalance(grandNode: Node<T>) {
    // 得到第一个不平衡节点
    // 找出不平衡节点的子节点
    let parent = (grandNode as AVLNode<T>).tallerChild();
    // 找出不平衡节点的孙子节点
    let child = (parent as AVLNode<T>).tallerChild();
  }
}
