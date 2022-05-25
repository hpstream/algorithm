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
  // 左旋转，单旋 LL
  // 右旋转，单旋 RR
  //
}
