import {BBST} from "./BBST";
import {Comparator} from "./BinaryTree";
import {BST} from "./BST";
import {Node} from "./Node";
class AVLNode<T> extends Node<T> {
  height: number = 1;
  left?: AVLNode<T>;
  right?: AVLNode<T>;
  public parent?: AVLNode<T>;
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
    this.height = 1 + Math.max(leftHight, rightHight);
  }
  tallerChild() {
    let diff = this.balanceFactor();
    if (diff > 0) {
      return this.left as AVLNode<T>;
    } else if (diff < 0) {
      return this.right as AVLNode<T>;
    } else {
      return (this.isLeftChild() ? this.left : this.right) as AVLNode<T>;
    }
  }
}
export class AVLTree<T> extends BBST<T> {
  public root?: AVLNode<T>;

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
      // console.log(this.isBalance(node));
      if (this.isBalance(node)) {
        // 更新高度
        this.updateHeight(node);
      } else {
        // 恢复高度
        this.rebalance(node);
        // 更新高度
        // this.updateHeight(node);
        break;
      }
    }
    return;
  }
  afterRemove(node?: Node<T>) {
    if (!node) return;
    while ((node = node.parent) !== undefined) {
      if (this.isBalance(node)) {
        // 更新高度
        this.updateHeight(node);
      } else {
        // 恢复高度
        this.rebalance(node);
      }
    }
  }
  rotate(
    r: Node<T>,
    a: Node<T> | undefined,
    b: Node<T>,
    c: Node<T> | undefined,
    d: Node<T>,
    e: Node<T> | undefined,
    f: Node<T>,
    g: Node<T> | undefined
  ): void {
    super.rotate(r, a, b, c, d, r, f, g);
    this.updateHeight(b);
    this.updateHeight(f);
    this.updateHeight(d);
  }
  afterRotate(grand: AVLNode<T>, parent: AVLNode<T>, child?: AVLNode<T>) {
    super.afterRotate(grand, parent, child);
    // 更新高度
    this.updateHeight(grand);
    this.updateHeight(parent);
  }

  private rebalance(grandNode: Node<T>) {
    // 得到第一个不平衡节点
    // 找出不平衡节点的子节点
    let parent = (grandNode as AVLNode<T>).tallerChild();
    // 找出不平衡节点的孙子节点
    let node = parent.tallerChild() as Node<T>;
    if (parent.isLeftChild()) {
      // L
      if (node.isLeftChild()) {
        // LL
        this.rotate(
          grandNode,
          node.left,
          node,
          node.right,
          parent,
          parent.right,
          grandNode,
          grandNode.right
        );
      } else {
        //LR
        this.rotate(
          grandNode,
          parent.left,
          parent,
          node.left,
          node,
          node.right,
          grandNode,
          grandNode.right
        );
      }
    } else {
      if (node.isLeftChild()) {
        // RL;
        this.rotate(
          grandNode,
          grandNode.left,
          grandNode,
          node.left,
          node,
          node.right,
          parent,
          parent.right
        );
      } else {
        // RR;
        this.rotate(
          grandNode,
          grandNode.left,
          grandNode,
          parent.left,
          parent,
          node.left,
          node,
          node.right
        );
      }
    }
  }

  private rebalance1(grandNode: Node<T>) {
    // 得到第一个不平衡节点
    // 找出不平衡节点的子节点
    let parent = (grandNode as AVLNode<T>).tallerChild();
    // 找出不平衡节点的孙子节点
    let node = (parent as AVLNode<T>).tallerChild();

    if (parent.isLeftChild()) {
      // L
      if (node.isLeftChild()) {
        // LL
        this.rotateRight(grandNode);
      } else {
        //LR

        this.rotateLeft(parent);
        this.rotateRight(grandNode);
      }
    } else {
      if (node.isLeftChild()) {
        // RL;
        this.rotateRight(parent);
        this.rotateLeft(grandNode);
      } else {
        // RR;
        this.rotateLeft(grandNode);
      }
    }
  }

  print(
    node: AVLNode<T>,
    sb: {
      value: string;
    },
    s: string
  ) {
    if (node) {
      let val = `${node.element}p_(${node.parent?.element})h_(${node.height})`;
      let n: AVLNode<T> | undefined = node;

      val = val + "\n";
      while ((n = n.parent)) {
        val = `${" ".repeat(
          `${n.element}p_(${n.parent?.element})h_(${n.height})`.length
        )}${val}`;
      }

      node.left && this.print(node.left, sb, s);
      sb.value += val;

      node.right && this.print(node.right, sb, s);
    }
  }
  print1(
    node: AVLNode<T>,
    sb: {
      value: string;
    },
    s: string
  ) {
    let nodeList = [node];
    let levelCount = nodeList.length;
    let resStr = "";
    let temStr = "";
    while (nodeList.length > 0) {
      let currentNode = nodeList.shift() as AVLNode<T>;
      currentNode?.left && nodeList.push(currentNode.left);
      currentNode?.right && nodeList.push(currentNode.right);
      levelCount--;
      temStr += `${currentNode.element}p_(${currentNode.parent?.element})h_(${currentNode.height})`;
      if (levelCount === 0) {
        levelCount = nodeList.length;
        resStr = temStr + "\n" + resStr;
        temStr = "";
      }
    }
    sb.value = resStr;
  }
}
