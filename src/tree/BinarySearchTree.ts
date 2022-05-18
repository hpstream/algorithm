interface Comparator<T> {
  compare?(e2: T): number
}

class Person implements Comparator<Person> {
  constructor(public age: number) { }
  compare: undefined
}

export class Node<T> {
  // element?: T;
  left!: Node<T> | null;
  right!: Node<T> | null;
  // parent?: Node<T>;
  constructor(public element: T, public parent: Node<T> | null) { }
}


export class BinarySearchTree<T extends number | Comparator<T>> {
  private root!: Node<T> | null;
  private _size: number = 0;
  // public comparator!: (a: T | number, b: T | number) => | number;

  constructor(public comparator?: (a: T, b: T) => number) {

    this.root = null;

  }

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
      let node: Node<T> | null = this.root;
      let parent!: Node<T>;
      let cmp = 0;
      while (node) {
        cmp = this.compare(e, node.element)
        parent = node;
        if (cmp > 0) {
          node = node.right;
        } else if (cmp < 0) {
          node = node.left;
        } else {
          return
        }
      }
      let newNode = new Node(e, parent);
      // console.log(parent)
      if (cmp > 0) {
        parent.right = newNode;
      } else {
        parent.left = newNode;
      }
      this._size++;

    }
  }
  private compare(newVal: T, oldVal: T) {
    if (this.comparator) {
      return this.comparator(newVal, oldVal)
    }

    if (typeof newVal == "number" && typeof oldVal == "number") {
      return newVal - oldVal
    }

    if (typeof newVal !== "number" && newVal.compare) {
      return newVal.compare(oldVal)
    } else {
      throw new Error('类型不符合规范');
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
  toString() {
    // ┌───381────┐         
    //   │          │               
    // ┌─12─┐     ┌─410─┐
    // │    │     │     │
    // 9  ┌─40─┐ 394 ┌─540─┐
    //    │    │     │     │
    // 35 ┌─190 ┌─476 ┌─760─┐
    //      │     │     │     │
    // 146   445   600   800
    return `
 
`
  }
}

let data = [7, 4, 9, 2, 5, 8, 11, 3]

var bst = new BinarySearchTree<number>();

for (let i = 0; i < data.length; i++) {
  bst.add(data[i])
}

console.log(bst.toString())

// s.add(p)
