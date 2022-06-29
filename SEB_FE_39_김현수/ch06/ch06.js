class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let current = this.root;

    while (true) {
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) return current;
      else {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        }
      }
    }
    return undefined;
  }
}
