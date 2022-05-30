export abstract class Visitor<K, V> {
  public stop: boolean = false;
  abstract visitor(key: K, value: V): boolean;
}
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
export interface Map<K, V> {
  // size(): number;
  isEmpty(): boolean;
  clear(): void;
  put(key: K, value: V): V | undefined;
  get(key: K): V | undefined;
  remove(key: K): V | undefined;
  containsKey(key: K): boolean;
  containsValue(value: V): boolean;
  traverasal(node: Node<K, V> | Visitor<K, V>, visitor?: Visitor<K, V>): void;
}
