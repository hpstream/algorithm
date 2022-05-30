import {Comparator} from "../5.tree/BinaryTree";
import {Map, Node, Visitor} from "./Map";

export class TreeMap<K, V> implements Map<K, V> {
  static RED = true;
  static BlACK = false;
  public root?: Node<K, V>;
  private _size: number = 0;
  constructor(
    public comparator?: (newVal: Comparator<K>, oldVal: Comparator<K>) => any
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
    this.size = 0;
  }
  protected keyNotNullCheck(key: K) {
    if (key === null || key === undefined) {
      throw new Error("key must not be null or undefined");
    }
  }
  protected compare(newVal: Comparator<K>, oldVal: Comparator<K>): any;
  protected compare(newVal: any, oldVal: any) {
    if (this.comparator) {
      return this.comparator(newVal, oldVal);
    }
    return newVal.compare(oldVal);
  }
  protected afterPut(node: Node<K, V>): void {
    let parent = node.parent as Node<K, V>;
    // 添加的节点是根节点，或者上溢到达了根节点
    if (!parent) {
      this.black(node);
      return;
    }
    // 如果父节点是黑色，直接返回
    if (this.isBlack(parent)) return;

    // 叔父 节点
    let uncle = parent.sibling();
    let grand = parent.parent;
    if (uncle && this.isRed(uncle)) {
      // 叔父节点是红色【B树节点上溢】
      this.black(parent);
      this.black(uncle);
      grand && this.afterPut(this.red(grand));
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

  put(key: K, value: V): V | undefined {
    this.keyNotNullCheck(key);

    if (!this.root) {
      this.root = this.createNode(key, value);
      this.size++;
      this.afterPut(this.root);
    } else {
      let node: Node<K, V> | undefined = this.root;
      let parent!: Node<K, V>;
      let cmp = 0;
      while (node) {
        cmp = this.compare(key, node.key);
        parent = node;
        if (cmp > 0) {
          node = node.right;
        } else if (cmp < 0) {
          node = node.left;
        } else {
          let oldval = node.value;
          node.key = key;
          node.value = value;
          return oldval;
        }
      }
      let newNode = this.createNode(key, value, parent);
      // console.log(parent)
      if (cmp > 0) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
      this.afterPut(newNode);
      this.size++;
      return;
    }
  }

  get(key: K): V | undefined {
    let node = this.findNode(key);
    return node ? node.value : undefined;
  }
  findNode(key: K): Node<K, V> | undefined {
    let node = this.root;

    while (node) {
      let val = this.compare(key, node.key);
      if (val === 0) return node;
      if (val > 0) {
        node = node.right;
      } else if (val < 0) {
        node = node.left;
      }
    }
    return node;
  }

  containsKey(key: K): boolean {
    throw this.findNode(key) != undefined;
  }
  containsValue<K, V>(value: V): boolean {
    // throw new Error("Method not implemented.");
    if (!this.root) return false;
    let queue: Node<K, V>[] = [];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node?.value === value) {
        return true;
      }
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
    return false;
  }

  traverasal(cb: Visitor<K, V>): void;
  traverasal(node: Node<K, V>, cb?: Visitor<K, V>): void;
  traverasal(node: Node<K, V> | Visitor<K, V>, visitor?: Visitor<K, V>): void {
    let targetNode!: Node<K, V> | undefined;
    if (node instanceof Node) {
      targetNode = node;
    } else {
      visitor = node;
      targetNode = this.root;
    }
    // console.log("?", targetNode, visitor);

    if (targetNode && visitor) {
      if (!targetNode || visitor.stop) return;
      targetNode.left && this.traverasal(targetNode.left, visitor);
      if (visitor.stop) return;
      visitor.visitor(targetNode.key, targetNode.value);
      targetNode.right && this.traverasal(targetNode.right, visitor);
    }
  }

  createNode(key: K, value: V, parent?: Node<K, V>) {
    return new Node(key, value, parent);
  }
  // 染色操作
  private color(node: Node<K, V>, color: boolean) {
    if (!node) return node;
    node.color = color;
    return node as Node<K, V>;
  }
  private red(node: Node<K, V>) {
    return this.color(node, TreeMap.RED);
  }
  private black(node: Node<K, V>) {
    return this.color(node, TreeMap.BlACK);
  }
  private isBlack(node?: Node<K, V>) {
    return this.colorOf(node) === TreeMap.BlACK;
  }
  private isRed(node?: Node<K, V>) {
    return this.colorOf(node) === TreeMap.RED;
  }

  private colorOf(node?: Node<K, V>) {
    // this.color  node;
    let cNode = node as Node<K, V>;
    return !node ? TreeMap.BlACK : cNode.color;
  }

  protected rotateLeft(GRAND: Node<K, V>) {
    let grand = GRAND as Node<K, V>;
    let parent = grand.right as Node<K, V>;
    let child = parent.left;

    grand.right = child;
    parent.left = grand;

    this.afterRotate(grand, parent, child);
  }
  protected rotateRight(GRAND: Node<K, V>) {
    let grand = GRAND;
    let parent = grand.left as Node<K, V>;
    let child = parent.right;

    grand.left = child;
    parent.right = grand;
    this.afterRotate(grand, parent, child);
  }

  protected afterRotate(
    grand: Node<K, V>,
    parent: Node<K, V>,
    child?: Node<K, V>
  ) {
    parent.parent = grand.parent;
    if (grand.parent && grand.isLeftChild()) {
      grand.parent.left = parent;
    } else if (grand.parent && grand.isRightChild()) {
      grand.parent.right = parent;
    } else {
      this.root = parent;
    }
    if (child) {
      child.parent = grand;
    }
    grand.parent = parent;
  }
  public remove(node: Node<K, V>): V;
  public remove(key: K): V;
  public remove(node?: Node<K, V> | K): V | undefined {
    if (node === undefined) return;
    if (node instanceof Node) {
      // 度为2，怎么删除；
      this._size--;
      if (node.hasTwoChildren()) {
        let s = this.successor(node);
        if (s) {
          node.value = s.value;
          node.key = s.key;
          node = s;
        }
      }
      // 删除node节点, 度为0或1；
      let replacement = node.left ? node.left : node.right;
      // console.log(replacement?.key);
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
            node.parent.left = undefined;
          } else {
            node.parent.right = undefined;
          }
        } else {
          this.root = undefined;
        }
      }
      return node.value;
    } else {
      let targeNode = this.findNode(node);
      targeNode && this.remove(targeNode);
    }
  }

  //后继节点
  successor(node: Node<K, V> | null) {
    if (node === null || !node.right) return null;
    let current: Node<K, V> = node.right;
    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return current;
      }
    }
  }
  // 前驱节点
  predecessor(node: Node<K, V> | null) {
    if (node === null || !node.left) return null;
    let current: Node<K, V> = node.left;
    while (current) {
      if (current.right) {
        current = current.right;
      } else {
        return current;
      }
    }
  }
  protected afterRemove(node: Node<K, V>): void {
    let cNode = node as Node<K, V>;
    // 如果是红色节点，直接删除
    // if (this.isRed(cNode)) return;

    // 用于取代node的子节点是红色
    if (this.isRed(node)) {
      this.black(node);
      return;
    }
    // 删除的是根节点
    let parent = node.parent;
    if (!parent) return;

    // 删除的是黑色叶子节点【下溢】
    // 判断被删除的node是左还是右
    let left = parent.left === undefined || node.isLeftChild();
    let sibling = (left ? parent.right : parent.left) as Node<K, V>;
    if (left) {
      // 被删除的节点在左边，兄弟节点在右边
      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateLeft(parent);
        sibling = parent.right as Node<K, V>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove(parent);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.right)) {
          this.rotateRight(sibling);
          sibling = parent.right as Node<K, V>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.right && this.black(sibling.right);
        this.black(parent);
        this.rotateLeft(parent);
      }
    } else {
      // 被删除的节点在右边，兄弟节点在左边

      if (this.isRed(sibling)) {
        // 处理红色
        this.black(sibling);
        this.red(parent);
        this.rotateRight(parent);
        sibling = parent.left as Node<K, V>;
      }
      // 兄弟节点必然是黑色
      if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
        // 兄弟节点没有一个红色子节点，父节点向下跟兄弟节点合并
        let parentBlack = this.isBlack(parent);
        this.black(parent);
        this.red(sibling);
        if (parentBlack) {
          this.afterRemove(parent);
        }
      } else {
        // 兄弟节点至少有一个红色子节点
        // 兄弟节点左边是黑色，兄弟进行左旋转
        if (this.isBlack(sibling.left)) {
          this.rotateLeft(sibling);
          sibling = parent.left as Node<K, V>;
        }
        this.color(sibling, this.colorOf(parent));
        sibling.left && this.black(sibling.left);
        this.black(parent);
        this.rotateRight(parent);
      }
    }
  }
}
