class Node<K, V> {
  // key!: K;
  // value!: V;
  nexts!: Node<K, V>[];
  constructor(public key: K, public value: V, level: number) {
    this.nexts = new Array(level);
  }
}
// 时间复杂度O(logn)
export class SkipList<K, V> {
  static MAX_LEVEL = 32;
  static P = 0.25;
  level: number = 1; // 有效层数

  size = 0;
  first: Node<K, V>;
  constructor(public comparator?: (key1: K, key2: K) => number) {
    this.first = new Node(null, null, SkipList.MAX_LEVEL) as any;
    // this.first.nexts = [];
  }
  isEmpty() {
    return this.size == 0;
  }
  put(key: K, value: V) {
    let node = this.first;
    let prevs: Node<K, V>[] = new Array(this.level);
    for (let i = this.level - 1; i >= 0; i--) {
      // let node = first.nexts[i];
      let cmp = -1;
      while (
        node.nexts[i] &&
        (cmp = this.compare(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      if (cmp == 0) {
        let oldValue = node.nexts[i].value;
        node.nexts[i].value = value;
        return oldValue;
      }
      prevs[i] = node;
    }
    // 添加新节点
    let newLevel = this.randomLevel();
    let newNode = new Node(key, value, newLevel);

    for (let i = 0; i <= newLevel; i++) {
      if (i >= this.level) {
        this.first.nexts[i] = newNode;
      } else {
        newNode.nexts[i] = prevs[i].nexts[i];
        prevs[i].nexts[i] = newNode;
      }
    }
    this.size++;
    this.level = Math.max(this.level, newLevel);
  }
  randomLevel() {
    let level = 0;
    while (Math.random() < SkipList.P && level < SkipList.MAX_LEVEL) {
      level++;
    }
    return level;
  }

  get(key: K) {
    let node = this.first;
    for (let i = this.level - 1; i >= 0; i--) {
      // let node = first.nexts[i];
      let cmp = -1;
      while (
        node.nexts[i] &&
        (cmp = this.compare(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      if (cmp == 0) return node.nexts[i].value;
    }
  }

  compare(k1: K, k2: K): number {
    if (this.comparator) {
      return this.comparator(k1, k2);
    }

    return (k1 as any as number) - (k2 as any as number);
  }

  remove(key: K) {
    let node = this.first as Node<K, V>;
    let prevs: Node<K, V>[] = new Array(this.level);
    let exist = false;
    for (let i = this.level - 1; i >= 0; i--) {
      // let node = first.nexts[i];
      let cmp = -1;
      while (
        node.nexts[i] &&
        (cmp = this.compare(key, node.nexts[i].key)) > 0
      ) {
        node = node.nexts[i];
      }
      if (cmp == 0) exist = true;
      prevs[i] = node;
    }
    if (!exist) return;
    let removeNode = node.nexts[0];
    // 设置后继
    for (let i = 0; i < removeNode.nexts.length; i++) {
      prevs[i].nexts[i] = removeNode.nexts[i];
    }
    let newLevel = this.level;
    while (--newLevel >= 0 && !this.first.nexts[newLevel]) {
      this.level = newLevel;
    }
    this.size--;
    return removeNode.value;
  }

  toString() {
    let str = `一共${this.level}层\n`;
    for (let i = this.level - 1; i >= 0; i--) {
      let tem = [];
      let node = this.first;
      while (node.nexts[i]) {
        tem.push(`<${node.nexts[i].key}>:${node.nexts[i].value}`);
        node = node.nexts[i];
      }
      str += `${tem.join(" ")}\n`;
    }
    return str;
  }
}
