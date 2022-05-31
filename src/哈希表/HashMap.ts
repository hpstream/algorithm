import {Map, Visitor} from "../7.映射/Map";
export class Node<K, V> {
  // key: K;
  // value: V;
  color: boolean = true;
  left?: Node<K, V>;
  right?: Node<K, V>;
  // parent?: Node<K, V>;
  constructor(public key: K, public value: V, public parent?: Node<K, V>) {}

  isLeaf() {
    return !this.left && !this.right;
  }
  hasTwoChildren() {
    return this.left && this.right;
  }

  isLeftChild() {
    return this.parent && this === this.parent?.left;
  }
  isRightChild() {
    return this.parent && this === this.parent?.right;
  }
  sibling() {
    if (this.isLeftChild()) {
      return this.parent?.right;
    }
    if (this.isRightChild()) {
      return this.parent?.left;
    }
    // this.parent?.sibling();

    return;
  }
}
export class HashMap<K, V> implements Map<K, V> {
  size = 0;
  static RED = true;
  static BlACK = false;
  static DEFAILT_CAPACITY = 1 << 4; //default_capacity;
  table: (Node<K, V> | null)[] = new Array(HashMap.DEFAILT_CAPACITY);
  isEmpty(): boolean {
    return this.size == 0;
  }
  clear(): void {
    if (this.size == 0) return;
    for (let index = 0; index < this.table.length; index++) {
      this.table[index] = null;
    }
    this.size = 0;
  }
  put(key: K, value: V): V | undefined {
    // 计算索引
    let index = this.index(key);
    let root = this.table[index];
    if (!root) {
      root = new Node<K, V>(key, value, undefined);
      this.table[index] = root;
      this.afterPut(root);
      return;
    } else {
      // 添加新节点到红黑树上面

      let node: Node<K, V> | undefined = root;
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
      let newNode = new Node<K, V>(key, value, parent);
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

    return;
  }
  private index(key: K) {
    if (!key) return 0;
    // 由于js中，对象类型无法拿到内存地址，我们都转化成字符串进行处理；
    let hash = this.hashCode(JSON.stringify(key));
    return hash & (this.table.length - 1);
  }
  hashCode(str: string) {
    let hash = 0,
      i,
      chr,
      len;
    if (str.length === 0) return hash;
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  get(key: K): V | undefined {
    throw new Error("Method not implemented.");
  }
  remove(key: K): V | undefined {
    throw new Error("Method not implemented.");
  }
  containsKey(key: K): boolean {
    throw new Error("Method not implemented.");
  }
  containsValue(value: V): boolean {
    throw new Error("Method not implemented.");
  }
  traverasal(node: Node<K, V> | Visitor<K, V>, visitor?: Visitor<K, V>): void {
    throw new Error("Method not implemented.");
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

  protected compare(newVal: any, oldVal: any) {
    // if (this.comparator) {
    //   return this.comparator(newVal, oldVal);
    // }
    // return newVal.compare(oldVal);
  }

  // 染色操作
  private color(node: Node<K, V>, color: boolean) {
    if (!node) return node;
    node.color = color;
    return node as Node<K, V>;
  }
  private red(node: Node<K, V>) {
    return this.color(node, HashMap.RED);
  }
  private black(node: Node<K, V>) {
    return this.color(node, HashMap.BlACK);
  }
  private isBlack(node?: Node<K, V>) {
    return this.colorOf(node) === HashMap.BlACK;
  }
  private isRed(node?: Node<K, V>) {
    return this.colorOf(node) === HashMap.RED;
  }

  private colorOf(node?: Node<K, V>) {
    // this.color  node;
    let cNode = node as Node<K, V>;
    return !node ? HashMap.BlACK : cNode.color;
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
}
