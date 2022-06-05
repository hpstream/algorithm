import {HashMap} from "./HashMap";
import {Map, Visitor} from "../7.映射/Map";
import {extend, isEqual, spread} from "lodash";
import {Node} from "./HashMap";

export class LinkedNode<K, V> extends Node<K, V> {
  // key: K;
  // value: V;
  next?: LinkedNode<K, V>;
  prev?: LinkedNode<K, V>;
  // parent?: Node<K, V>;
  constructor(
    public key: K,
    public value: V,
    public parent?: LinkedNode<K, V>
  ) {
    // this.hash = isNullorUndefined(key) ? 0 : hashCode(key);
    super(key, value, parent);
  }
}
export class LinkedHashMap<K, V> extends HashMap<K, V> {
  first?: LinkedNode<K, V>;
  last?: LinkedNode<K, V>;
  clear(): void {
    super.clear();
    this.first = undefined;
    this.last = undefined;
  }
  traverasal(visitor?: Visitor<K, V>): void {
    if (!visitor) return;
    let node = this.first;
    while (node) {
      if (visitor.visitor(node.key, node.value)) return;
      node = node.next;
    }
  }
  public remove(node: LinkedNode<K, V>): V;
  public remove(key: K): V;
  public remove(node?: K | LinkedNode<K, V>): V | undefined {
    if (node === undefined) return;

    if (!(node instanceof LinkedNode)) {
      let targeNode = this.findNode(node) as LinkedNode<K, V>;

      if (targeNode) {
        return this.remove(targeNode);
      }
    } else {
      return super.remove(node);
    }
  }
  afterRemove(willNode: LinkedNode<K, V>, removeNode: LinkedNode<K, V>) {
    if (willNode !== removeNode) {
      // 交换
      let node1 = willNode;
      let node2 = removeNode;
      let temPrev = node1.prev;
      willNode.prev = node2.prev;
      node2.prev = temPrev;
      // 交换prev
      if (!node1.prev) {
        this.first = node1;
      } else {
        node1.prev.next = node1;
      }

      if (!node2.prev) {
        this.first = node2;
      } else {
        node2.prev.next = node2;
      }
      // 交换next
      let temNext = node1.next;
      willNode.next = node2.next;
      node2.next = temNext;
      if (!node1.next) {
        this.last = node1;
      } else {
        node1.next.prev = node1;
      }
      if (!node2.next) {
        this.last = node2;
      } else {
        node2.next.prev = node2;
      }
    }
    let targeNode = removeNode;
    let next = targeNode.next;
    let prev = targeNode.prev;
    if (!prev) {
      this.first = next;
    } else {
      prev.next = next;
    }
    if (!next) {
      this.last = prev;
    } else {
      next.prev = prev;
    }
    // targeNode.next = undefined;
    // targeNode.prev = undefined;
  }

  createNode(key: K, value: V, parent?: LinkedNode<K, V>): LinkedNode<K, V> {
    let node = new LinkedNode<K, V>(key, value, parent);
    if (this.first && this.last) {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    } else {
      this.first = this.last = node;
    }
    return node;
  }
}
