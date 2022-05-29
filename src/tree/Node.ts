export class Node<T> {
  // element?: T;
  left?: Node<T>;
  right?: Node<T>;
  // parent?: Node<T>;
  constructor(public element: T, public parent?: Node<T>) {}

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
