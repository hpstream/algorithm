interface Comparator<T> {
  compare?(e2: T): number;
}

class Person implements Comparator<Person> {
  constructor(public age: number) {}
  compare: undefined;
}

export class Node<T> {
  // element?: T;
  left!: Node<T> | null;
  right!: Node<T> | null;
  // parent?: Node<T>;
  constructor(public element: T, public parent: Node<T> | null) {}

  isLeaf() {
    return !this.left && !this.right;
  }
  hasTwoChildren() {
    return this.left && this.right;
  }
}

export class BinarySearchTree<T extends number | Comparator<T>> {
  public root!: Node<T> | null;
  private _size: number = 0;
  // public comparator!: (a: T | number, b: T | number) => | number;

  constructor(public comparator?: (a: T, b: T) => number) {
    this.root = null;
  }

  get size() {
    return this._size;
  }
  set size(val) {
    this._size = val;
  }
  isEmpty() {
    return this._size == 0;
  }
  add(e: T) {
    this.elementNotNullCheck(e);

    if (this.root === null) {
      this.root = new Node(e, null);
      this._size++;
    } else {
      let node: Node<T> | null = this.root;
      let parent!: Node<T>;
      let cmp = 0;
      while (node) {
        cmp = this.compare(e, node.element);
        parent = node;
        if (cmp > 0) {
          node = node.right;
        } else if (cmp < 0) {
          node = node.left;
        } else {
          node.element = e;
          return;
        }
      }
      let newNode = new Node(e, parent);
      // console.log(parent)
      if (cmp > 0) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
      this._size++;
    }
  }
  private compare(newVal: T, oldVal: T) {
    if (this.comparator) {
      return this.comparator(newVal, oldVal);
    }

    if (typeof newVal == "number" && typeof oldVal == "number") {
      return newVal - oldVal;
    }

    if (typeof newVal !== "number" && newVal.compare) {
      return newVal.compare(oldVal);
    } else {
      throw new Error("类型不符合规范");
    }
  }

  public remove(node: Node<T>): Node<T>;
  public remove(e: T): Node<T>;
  public remove(node: Node<T> | T | null): Node<T> | undefined {
    if (node === null) return;
    if (node instanceof Node) {
      // 度为2，怎么删除；
      this._size--;
      if (node.hasTwoChildren()) {
        let s = this.successor(node);
        if (s) {
          node.element = s.element;
          node = s;
        }
      }
      // 删除node节点, 度为0或1；
      let replacement = node.left ? node.left : node.right;
      console.log(replacement?.element);
      if (replacement) {
        // 更改parent
        replacement.parent = node.parent;
        if (node.parent) {
          if (node.parent.left === node) {
            node.parent.left = replacement;
          } else {
            node.parent.right = replacement;
          }
        } else {
          this.root = replacement;
        }
      } else {
        // 度为0的节点
        if (node.parent) {
          if (node.parent.left === node) {
            node.parent.left = null;
          } else {
            node.parent.right = null;
          }
        } else {
          this.root = null;
        }
      }
    } else {
      let targeNode = this.findNode(node);
      targeNode && this.remove(targeNode);
    }
  }
  //后继节点
  successor(node: Node<T> | null) {
    if (node === null || !node.right) return null;
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
  predecessor(node: Node<T> | null) {
    if (node === null || !node.left) return null;
    let current: Node<T> = node.left;
    while (current) {
      if (current.right) {
        current = current.right;
      } else {
        return current;
      }
    }
  }

  private findNode(e: T): Node<T> | null {
    let node = this.root;

    while (node) {
      let val = this.compare(e, node.element);
      if (val === 0) return node;
      if (val > 0) {
        node = node.right;
      } else if (val < 0) {
        node = node.left;
      }
    }
    return node;
  }
  clear() {
    this.root = null;
  }

  contains(e: T) {
    return !!this.findNode(e);
  }

  private elementNotNullCheck(e: T) {
    if (e === null || e === undefined) {
      throw new Error("element must not be null or undefined");
    }
  }
  preOrderTraversalCurrentNode() {
    this.preOrderTraversal(this.root, (node) => {
      console.log(node.element);
    });
  }

  preOrderTraversal(node?: Node<T> | null, cb?: (node: Node<T>) => void) {
    if (node) {
      cb && cb(node);
      node.left && this.preOrderTraversal(node.left, cb);
      node.right && this.preOrderTraversal(node.right, cb);
    }
  }

  inOrderTraversalCurrentNode() {
    this.inOrderTraversal(this.root, (node) => {
      console.log(node.element);
    });
  }

  inOrderTraversal(node?: Node<T> | null, cb?: (node: Node<T>) => void) {
    if (node) {
      node.left && this.inOrderTraversal(node.left, cb);
      cb && cb(node);
      node.right && this.inOrderTraversal(node.right, cb);
    }
  }

  postOrderTraversalCurrentNode() {
    this.postOrderTraversal(this.root, (node) => {
      console.log(node.element);
    });
  }

  postOrderTraversal(node: Node<T> | null, cb?: (node: Node<T>) => void) {
    if (node) {
      node.left && this.postOrderTraversal(node.left, cb);
      node.right && this.postOrderTraversal(node.right, cb);
      cb && cb(node);
    }
  }
  levelOrderTraversalCurrentNode() {
    this.levelOrderTraversal(this.root, (node) => {
      console.log(node.element);
    });
  }
  levelOrderTraversal(node: Node<T> | null, cb?: (node: Node<T>) => void) {
    if (node) {
      let arr: Node<T>[] = [node];
      let i = 0;

      while (arr[i]) {
        cb && cb(node);
        arr[i].left && arr.push(arr[i].left as Node<T>);
        arr[i].right && arr.push(arr[i].right as Node<T>);
        i++;
      }
    }
  }
  print(
    node: Node<T> | null,
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

  heightRoot() {
    return this.height(this.root);
  }
  height1(node?: Node<T> | null): number {
    //递归
    if (node) {
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    } else {
      return 0;
    }
  }
  height(node?: Node<T> | null): number {
    // 递归
    // if (node) {
    //   return 1 + Math.max(this.height(node.left), this.height(node.right));
    // } else {
    //   return 0;
    // }
    // 层序遍历；
    let height = 0;
    let levelSize = 0;
    if (node) {
      let arr: Node<T>[] = [node];
      let i = 0;
      levelSize = arr.length - i;

      while (arr[i]) {
        levelSize--;
        arr[i].left && arr.push(arr[i].left as Node<T>);
        arr[i].right && arr.push(arr[i].right as Node<T>);
        i++;
        if (levelSize === 0) {
          levelSize = arr.length - i;
          height++;
        }
      }
    }
    return height;
  }
  // 判断是否是一刻完全二叉树；
  isComplete(node: Node<T>) {
    if (!node) return false;
    let arr: Node<T>[] = [node];
    let i = 0;
    let leaf = false;
    while (arr[i]) {
      if (leaf && !arr[i].isLeaf()) return false;
      arr[i].left && arr.push(arr[i].left as Node<T>);
      arr[i].right && arr.push(arr[i].right as Node<T>);

      if (!arr[i].left && arr[i].right) {
        return false;
      }
      if (arr[i].left && !arr[i].right) {
        leaf = true;
      }
      i++;
    }
    return true;
  }

  toString() {
    let str = {
      value: "",
    };
    this.print(this.root, str, "");
    return str.value;
  }
}
