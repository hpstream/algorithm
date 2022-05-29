import {BBST} from "./BBST";
import {Comparator} from "./BinaryTree";
import {BST} from "./BST";
import {Node} from "./Node";
class RBNode<T> extends Node<T> {
  color: boolean = true;
  left?: RBNode<T>;
  right?: RBNode<T>;
  public parent?: RBNode<T>;
  constructor(element: T, parent?: RBNode<T>) {
    super(element, parent);
  }
}
export class RBTree<T> extends BBST<T> {
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
  protected afterAdd(node: Node<T>): void {
    let parent = node.parent as RBNode<T>;
    // 添加的节点是根节点
    if (!parent) {
      this.black(node);
      return;
    }
    // 如果父节点是黑色，直接返回
    if (this.isBlock(parent)) return;

    // 叔父 节点
    let uncle = parent.sibling();
    let grand = parent.parent;
    if (uncle && this.isRed(uncle)) {
      this.black(parent);
      this.black(uncle);
      grand && this.afterAdd(this.red(grand));
      return;
    } else {
      // LL\RR
      if (parent.isLeftChild()) {
        // L

        grand && this.red(grand);
        if (node.isLeftChild()) {
          // LL
          this.black(parent);
        } else {
          // R
          this.black(node);
          parent && this.rotateLeft(parent);
        }
        grand && this.rotateRight(grand);
      } else {
        //R

        grand && this.red(grand);
        if (node.isLeftChild()) {
          // RL
          this.black(node);
          this.rotateRight(parent);
        } else {
          // RR
          this.black(parent);
        }
        grand && this.rotateLeft(grand);
      }
    }
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
  private isRed(node: Node<T>) {
    return this.colorOf(node) === RBTree.RED;
  }
  protected createNode(e: T, parent?: RBNode<T>) {
    return new RBNode(e, parent);
  }

  private colorOf(node: Node<T>) {
    // this.color  node;
    let cNode = node as RBNode<T>;
    return !node ? RBTree.BlACK : cNode.color;
  }

  print(
    node: RBNode<T>,
    sb: {
      value: string;
    },
    s: string
  ) {
    if (node) {
      let n: RBNode<T> | undefined = node;
      let val = `${node.color ? "R_" : "B_"}${node.element}p_(${
        node.parent?.element
      })`;

      val = val + "\n";
      while ((n = n.parent)) {
        val = `${" ".repeat(
          `${n.element}p_(${n.parent?.element})`.length
        )}${val}`;
      }

      node.left && this.print(node.left, sb, s);
      sb.value += val;

      node.right && this.print(node.right, sb, s);
    }
  }
}
