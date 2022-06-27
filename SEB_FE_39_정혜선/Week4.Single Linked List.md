# 단일 연결 리스트(Singly Linked List)

## 연결 리스트(Linked List)는 무엇인가?

- 데이터를 저장하는 자료구조
- 배열과 같이 순서에 따라 데이터를 저장함
- 배열의 각각의 요소들은 index가 부여되지만, 연결 리스트의 요소에는 index가 없음
- 자료구조의 속성: head, tail, length
  - **head** 속성은 연결 리스트의 시작 노드
  - **tail** 속성은 연결 리스트의 마지막 노드
  - 중간의 노드들은 추적하지 않으며, head 노드부터 다음 노드를 알아내는 방식으로 마지막 노드까지 접근함
  - 이를 용이하기 하기 위해 **length** 속성이 활용됨
- 각각의 요소: **노드(node)**
  - 각 노드들은 **value**와 **pointer**를 가짐
  - 다음 노드를 가리키는 정보를 저장해야하며, 더 이상 다음 노드가 없을 경우 null을 저장함

## Singly Linked List 구현

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push
  push(val) {
    // newNode 생성
    let newNode = new Node(val);
    if (!this.head) {
      // head가 null일때 head와 tail은 newNode로 선언
      this.head = newNode;
      this.tail = this.head;
    } else {
      // head가 있을 때는 tail의 next 프로퍼티를 newNode로 선언, newNode가 tail이 됨
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // SingleLinkedList length 1 증가
    this.length++;
    return this;
  }

  // pop
  pop() {
    // head가 null일때 undefined 반환
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // shift
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // unshift
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // remove
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // reverse
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
```

## BIG O of Singly Linked Lists

- Insertion: O(1)
- Removal: O(1) or O(N)
- Searching: O(N)
- Access: O(N)
