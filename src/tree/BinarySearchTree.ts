export class Node<T>{
  // element?: T;
  left!: Node<T> | null;
  right!: Node<T> | null;
  // parent?: Node<T>;
  constructor(public element: T, public parent: Node<T> | null) { }
}
// var s = new Node(1, null)
// s.parent
export class BinarySearchTree<T> {
  private root!: Node<T> | null;
  private _size: number = 0;

  size() {
    return this._size;
  }
  isEmpty() {
    return this._size == 0;
  }
  add(e: T) {
    this.elementNotNullCheck(e);

    if (this.root === null) {
      this.root = new Node(e, null);
      this._size++;
    } else {
      let current = this.root;

      while (current) {
        if (current.element < e) {
          if (!current.left) {
            current.left = new Node(e, current);
            return;
          } else {
            current = current.left
          }
        } else {
          if (!current.right) {
            current.right = new Node(e, current);
            return;
          } else {
            current = current.right
          }
        }
      }

    }
  }

  remove(e: T) {

  }

  contains(e: T) {

  }

  private elementNotNullCheck(e: T) {
    if (e === null || e === undefined) {
      throw new Error("element must not be null or undefined");
    }
  }
}