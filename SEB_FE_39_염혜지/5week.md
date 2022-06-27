# 💻 5주차 요약

## 🌼 Stack & Queue

### ✨stack
- Last in First Out(LIFO) 의 구조이다.
- 가장 늦게 추가된 값이 가장 먼저 제거가 된다.
- `실행취소` , `다시실행` 등이 있다.


#### 단일 연결 리스트로 구현한 스택
```javascript
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
  
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
  
    pop(){
        if(!this.first) 
          return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```
#### 스택의 BIG O
- 삽입 - `O(1)`
- 삭제 - `O(1)`
- 검색 - `O(N)`
- 접근 - `O(N)`

스택은 삽입과 제거를 우선시한다.

### ✨Queue
- First In First Out(FIFO) 의 구조이다.
- 가장 먼저 추가된 값이 가장 먼저 제거가 된다.
- `백그라운드 작업` , `인쇄작업` 등이 있다.

#### 단일 연결 리스트로 구현한 큐
```javascript
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```
#### 스택의 BIG O
- 삽입 - `O(1)`
- 삭제 - `O(1)`
- 검색 - `O(N)`
- 접근 - `O(N)`

탐색과 접근은 큐에서 실제로 사용하지 않는 기능이다.
`enqueue` 와 `dequeue` 로 추가와 삭제의 기능만 사용한다.
