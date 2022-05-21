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

  size() {
    return this._size;
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
  remove(e: T) {}

  contains(e: T) {}

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
      sb.value += `${s}${node.element}\n`;
      node.left && this.print(node.left, sb, s + "    ");

      node.right && this.print(node.right, sb, s + "    ");
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

let data = [7, 4, 2, 1, 3, 5, 9, 8, 11, 10, 12];
let levelData = [7, 4, 9, 2, 5];
var bst = new BinarySearchTree<number>();

for (let i = 0; i < levelData.length; i++) {
  // bst.add(Math.floor(Math.random() * 1000));
  bst.add(levelData[i]);
}

// console.log(bst.root?.left)

// bst.inOrderTraversalCurrentNode()
console.log(bst.toString());
// console.log(bst.height(bst.root));
// console.log(bst.height1(bst.root));
console.log(bst.isComplete(bst.root as Node<number>));

// s.add(p)
