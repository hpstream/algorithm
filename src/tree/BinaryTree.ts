import {Node} from "./Node";

export interface Comparator<T> {
  compare?(e2: T): number;
}
interface callBackNode<T> {
  (node: Node<T>): void;
}
export class BinaryTree<T> {
  public root?: Node<T>;
  private _size: number = 0;
  constructor(
    public comparator?: (
      newVal: number | Comparator<T>,
      oldVal: number | Comparator<T>
    ) => number
  ) {}

  isEmpty() {
    return this._size == 0;
  }
  get size() {
    return this._size;
  }
  set size(val) {
    this._size = val;
  }
  clear() {
    this.root = undefined;
  }
  // 判断是否是一刻完全二叉树；
  isComplete(): boolean;
  isComplete(node?: Node<T>) {
    // if (!node) return false;
    node = node ? node : this.root;
    if (!node) return false;
    let nodeList: Node<T>[] = [node];
    let i = 0;
    let leaf = false;
    while (nodeList[i]) {
      let currentNode = nodeList[i];
      if (leaf && !currentNode.isLeaf()) return false;
      currentNode.left && nodeList.push(currentNode.left);
      currentNode.right && nodeList.push(currentNode.right);

      if (!currentNode.left && currentNode.right) {
        return false;
      }
      if (currentNode.left && !currentNode.right) {
        leaf = true;
      }
      i++;
    }
    return true;
  }
  protected compare(newVal: number, oldVal: number): number;
  protected compare(newVal: Comparator<T>, oldVal: Comparator<T>): number;
  protected compare(newVal: any, oldVal: any) {
    if (this.comparator) {
      return this.comparator(newVal, oldVal);
    }

    if (typeof newVal == "number") {
      return newVal - oldVal;
    }

    if (typeof newVal !== "number" && newVal.compare) {
      return newVal.compare(oldVal);
    }
  }

  protected elementNotNullCheck(e: T) {
    if (e === null || e === undefined) {
      throw new Error("element must not be null or undefined");
    }
  }
  // 遍历，前驱，后继...
  preOrderTraversal(cb: callBackNode<T>): void;
  preOrderTraversal(node: Node<T>, cb?: callBackNode<T>): void;
  preOrderTraversal(node: Node<T> | callBackNode<T>, cb?: callBackNode<T>) {
    let targetNode!: Node<T> | undefined;
    if (typeof node === "function") {
      cb = node;
      targetNode = this.root;
    } else {
      targetNode = node;
    }
    if (targetNode) {
      cb && cb(targetNode);
      targetNode.left && this.preOrderTraversal(targetNode.left, cb);
      targetNode.right && this.preOrderTraversal(targetNode.right, cb);
    }
  }

  inOrderTraversal(cb: callBackNode<T>): void;
  inOrderTraversal(node?: Node<T>, cb?: callBackNode<T>): void;
  inOrderTraversal(node?: Node<T> | callBackNode<T>, cb?: callBackNode<T>) {
    let targetNode!: Node<T> | undefined;
    if (typeof node === "function") {
      cb = node;
      targetNode = this.root;
    } else {
      targetNode = node;
    }
    if (targetNode) {
      targetNode.left && this.inOrderTraversal(targetNode.left, cb);
      cb && cb(targetNode);
      targetNode.right && this.inOrderTraversal(targetNode.right, cb);
    }
  }

  postOrderTraversal(cb: callBackNode<T>): void;
  postOrderTraversal(node: Node<T>, cb?: callBackNode<T>): void;
  postOrderTraversal(node: Node<T> | callBackNode<T>, cb?: callBackNode<T>) {
    let targetNode!: Node<T> | undefined;
    if (typeof node === "function") {
      cb = node;
      targetNode = this.root;
    } else {
      targetNode = node;
    }
    if (targetNode) {
      targetNode.left && this.postOrderTraversal(targetNode.left, cb);
      targetNode.right && this.postOrderTraversal(targetNode.right, cb);
      cb && cb(targetNode);
    }
  }
  levelOrderTraversal(cb: callBackNode<T>): void;
  levelOrderTraversal(node: Node<T>, cb?: callBackNode<T>): void;
  levelOrderTraversal(node: Node<T> | callBackNode<T>, cb?: callBackNode<T>) {
    let targetNode!: Node<T> | undefined;

    if (typeof node === "function") {
      cb = node;
      targetNode = this.root;
    } else {
      targetNode = node;
    }

    if (targetNode) {
      let nodeList: Node<T>[] = [targetNode];
      let i = 0;
      while (nodeList[i]) {
        let currntNode = nodeList[i];
        cb && cb(currntNode);
        currntNode.left && nodeList.push(currntNode.left);
        currntNode.right && nodeList.push(currntNode.right);
        i++;
      }
    }
  }

  //后继节点
  successor(node?: Node<T>) {
    if (!node || !node.right) return;
    let current: Node<T> = node.right;
    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return current;
      }
    }
  }
  // 前驱节点
  predecessor(node?: Node<T>) {
    if (!node || !node.left) return;
    let current: Node<T> = node.left;
    while (current) {
      if (current.right) {
        current = current.right;
      } else {
        return current;
      }
    }
  }
  height1(node?: any): number {
    //递归
    if (node) {
      return 1 + Math.max(this.height1(node.left), this.height1(node.right));
    } else {
      return 0;
    }
  }
  height(): number;
  height(node?: Node<T>): number;
  height(node?: Node<T>): number {
    // 层序遍历；
    let height = 0;
    let levelSize = 0;
    node = node ? node : this.root;
    if (node) {
      let nodeList: Node<T>[] = [node];
      let i = 0;
      levelSize = nodeList.length - i;

      while (nodeList[i]) {
        let currentNode = nodeList[i];
        levelSize--;
        currentNode.left && nodeList.push(currentNode.left);
        currentNode.right && nodeList.push(currentNode.right);
        i++;
        if (levelSize === 0) {
          levelSize = nodeList.length - i;
          height++;
        }
      }
    }
    return height;
  }

  print(
    node: Node<T>,
    sb: {
      value: string;
    },
    s: string
  ) {
    if (node) {
      node.left && this.print(node.left, sb, " ".repeat(s.length) + "|---");
      sb.value += `${" ".repeat(Math.floor(s.length / 2))}${s}${
        node.element
      }\n`;
      node.right && this.print(node.right, sb, " ".repeat(s.length) + "|---");
    }
  }

  toString() {
    let str = {
      value: "",
    };
    this.root && this.print(this.root, str, "");
    return str.value;
  }
}

// let bt = new BinaryTree<number>();
