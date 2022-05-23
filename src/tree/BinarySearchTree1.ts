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

export class BinarySearchTree<T> {
  // public comparator!: (a: T | number, b: T | number) => | number;
  constructor(public comparator?: (a: T, b: T) => number) {}

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
}
