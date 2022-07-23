/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */
// @lc code=start

class LRUNode {
  constructor(
    public key: number,
    public value: number,
    public prev?: LRUNode,
    public next?: LRUNode
  ) {}
}

class LRUCache {
  queue = [];
  capacity: number;
  frist: LRUNode;
  last: LRUNode;

  map = new Map<number, LRUNode>();
  constructor(capacity: number) {
    this.capacity = capacity;
    this.frist = new LRUNode(0, 0);
    this.last = new LRUNode(0, 0);
    this.frist.next = this.last;
    this.last.prev = this.frist;
  }

  get(key: number): number {
    let node = this.map.get(key);
    if (!node) return -1;

    this.removeNode(node);
    this.addAfterFirst(node);
    return node.value;
  }
  removeNode(node: LRUNode) {
    (node.next as LRUNode).prev = node.prev;
    (node.prev as LRUNode).next = node.next;
  }
  addAfterFirst(node: LRUNode) {
    node.next = this.frist.next;
    (this.frist.next as LRUNode).prev = node;

    this.frist.next = node;
    node.prev = this.frist;
  }

  put(key: number, value: number): void {
    let v = this.map.get(key);
    if (v) {
      v.value = value;
      this.removeNode(v);
      this.addAfterFirst(v);
    } else {
      if (this.map.size == this.capacity) {
        this.map.delete((this.last.prev as LRUNode).key);
        this.removeNode(this.last.prev as LRUNode);
      }
      v = new LRUNode(key, value);
      this.map.set(key, v);
      this.addAfterFirst(v);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
