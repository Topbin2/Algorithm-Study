# Binary Search Tree

## What is a tree?

- 노드로 구성된 자료구조로, 각 노드는 서로 부모-자식의 관계로 연결됨(자식 노드가 부모를 가리키거나 형제를 가리킬 수 없음)
- 연결리스트와 달리 각 노드는 한 개 이상의 다른 노드로 연결될 수 있음
- 가장 꼭대기에 있는 노드를 **root**라 함

### Lists vs Trees

- **Lists**: linear
- **Trees**: non-linear

### Tree Terminology

- Root: 트리의 가장 위에 있는 노드
- Child: 루트에서 멀어지는 방향으로 연결된 노드
- Parent: Child의 반대 개념
- Siblings: 같은 부모를 가지는 노드
- Leaf: 자식이 없는 노드
- Edge: 노드끼리의 연결을 의미함

## 트리는 어디에 사용될까?

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems

## Tree의 종류

- Trees
- Binary Trees: 부모 노드가 최대 두 개 이하의 자식 노드를 가지는 트리 구조
- Binary Search Trees

## How Binary Search Trees work?

- 모든 부모 노드는 최대 2개의 자식 노드를 가짐
- 부모 노드의 왼쪽에 있는 모든 노드는 항상 부모 노드보다 작음
- 부모 노드의 오른쪽에 있는 모든 노드는 항상 부모 노드보다 큼
- 때문에 찾고자 하는 것을 빠르고 쉽게 찾을 수 있음

## Binary Search Tree 구현

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
```
