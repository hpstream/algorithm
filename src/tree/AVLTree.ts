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
export class AVLTree<T> extends BST<T> {
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
  rotate(
    r: Node<T>, // 根节点
    a: Node<T> | undefined,
    b: Node<T>, // 儿
    c: Node<T> | undefined,
    d: Node<T>, // 父
    e: Node<T> | undefined,
    f: Node<T>, // 祖
    g: Node<T> | undefined
  ) {
    // 让d成为子树的根节点
    d.parent = r.parent;
    if (r.parent) {
      if (r.isLeftChild()) {
        r.parent.left = d;
      } else if (r.isRightChild()) {
        r.parent.right = d;
      }
    } else {
      this.root = d as AVLNode<T>;
    }
    // a-b-c
    b.left = a;
    b.right = c;
    if (a) {
      a.parent = b;
    }
    if (c) {
      c.parent = b;
    }
    this.updateHeight(b);

    //e-f-g
    f.left = e;
    if (e) {
      e.parent = f;
    }
    f.right = g;
    if (g) {
      g.parent = f;
    }
    this.updateHeight(f);

    // b-d-f

    d.left = b;
    if (b) {
      b.parent = d;
    }
    d.right = f;
    if (f) {
      f.parent = d;
    }
    this.updateHeight(d);
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
  private rotateLeft(GRAND: Node<T>) {
    let grand = GRAND as AVLNode<T>;
    let parent = grand.right as AVLNode<T>;
    let child = parent.left;

    grand.right = child;
    parent.left = grand;

    this.afterRotate(grand, parent, child);
  }
  private rotateRight(GRAND: Node<T>) {
    let grand = GRAND as AVLNode<T>;
    let parent = grand.left as AVLNode<T>;
    let child = parent.right;

    grand.left = child;
    parent.right = grand;
    this.afterRotate(grand, parent, child);
  }
  afterRotate(grand: AVLNode<T>, parent: AVLNode<T>, child?: AVLNode<T>) {
    parent.parent = grand.parent as AVLNode<T>;
    if (grand.isLeftChild()) {
      (grand.parent as AVLNode<T>).left = parent;
    } else if (grand.isRightChild()) {
      (grand.parent as AVLNode<T>).right = parent;
    } else {
      this.root = parent;
    }
    if (child) {
      child.parent = grand;
    }
    grand.parent = parent;
    // 更新高度
    this.updateHeight(grand);
    this.updateHeight(parent);
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
