class Node<K, V> {
  key!: K;
  value!: V;
  nexts!: Node<K, V>[];
}

export class SkipList<K, V> {
  static MAX_LEVEL = 32;
  level: number = 0; // 有效层数

  size = 0;
  first!: Node<K, V>;
  constructor(public comparator?: (key1: K, key2: K) => number) {
    this.first = new Node();
    this.first.nexts = [];
  }
  isEmpty() {
    return this.size == 0;
  }
  put(key: K, value: V) {}

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
    if (this.compare) {
      return this.compare(k1, k2);
    }

    return (k1 as any as number) - (k2 as any as number);
  }

  remove(key: K) {}
}
