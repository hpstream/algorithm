export class Node<V> {
  parent: Node<V> = this;
  value!: V;
  rank = 1;
  constructor(v1: V) {
    this.value = v1;
  }
}

export class GenericUnionFind<V> {
  nodes = new Map<V, Node<V>>();
  makeSet(v1: V) {
    if (this.nodes.has(v1)) return;
    this.nodes.set(v1, new Node(v1));
  }
  /**
   * 找出v的根节点
   */
  findNode(v: V) {
    let node = this.nodes.get(v);
    if (!node) return null;
    while (node.value != node.parent.value) {
      node.parent = node.parent.parent;
      node = node.parent;
    }
    return node;
  }

  public find(v1: V) {
    let node = this.findNode(v1);
    return node ? node.value : null;
  }

  public union(v1: V, v2: V) {
    let p1 = this.findNode(v1);
    let p2 = this.findNode(v2);
    if (p1 === null || p2 === null) return;
    if (p1.value === p2.value) return;
    if (p1.rank < p2.rank) {
      p1.parent = p2;
    } else if (p1.rank > p2.rank) {
      p2.parent = p1;
    } else {
      p1.parent = p2;
      p2.rank += 1;
    }
  }
  getClassNamge() {
    return this.constructor.name;
  }

  /**
   * isSame
   */
  public isSame(v1: V, v2: V) {
    return this.find(v1) == this.find(v2);
  }
}
