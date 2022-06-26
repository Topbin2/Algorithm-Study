# Stack

## What is a STACK?

- LIFO(Last In First Out; 후입선출) data structure
- 스택에 가장 먼저 나중에 추가된 요소는 가장 먼저 제거됨
- 자바스크립트에 내장된 자료구조는 아님

## Where STACKS are used?

- Function Invocation(함수 호출)
- Undo / Redo
- Routing(history objects in browser)도 스택처럼 관리됨

## 배열로 Stack 만들기

- `push`, `pop` 또는 `unshift`, `shift` 메서드를 사용하면 LIFO data structure 구현 가능

## Stack 구현

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

## BIG O of STACKS

- Insertion: O(1)
- Removal: O(1)
- Searching: O(N)
- Access: O(N)

# Queue

## What is a QUEUE?

- FIFO(First In First Out; 선입선출) data structure

## 프로그래밍에서 QUEUE는 어떻게 사용되는가?

- Background tasks
- Uploading resources
- Printing / Task processing

## 배열로 Queue 만들기

- `push`, `shift` 또는 `unshift`, `pop` 메서드를 사용하면 FIFO data structure 구현 가능

## Queue 구현

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

## BIG O of QUEUES

- Insertion: O(1)
- Removal: O(1)
- Searching: O(N)
- Access: O(N)
