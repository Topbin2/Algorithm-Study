# 💻 4주차 요약

## 🌼 단일 연결 리스트
- 문자열이나 숫자 등 데이터를 저장하는 자료구조로 배열처럼 순서에 따라 데이터를 저장하지만 인덱스가 존재하지 않다.
- 리스트 접근 시 처음부터 순차적으로 접근해야한다.
- head , tail , length 속성을 포함한다.

#### push 메소드
```javascript
push(val){
        val newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
```
#### pop메소드
```javascript
pop(){
        if(!this.head) 
          return undefined;
  
        val current = this.head;
        val newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
```

#### shift 메소드
```javascript
shift(){
        if(!this.head) 
          return undefined;
  
        val currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
```
#### unshift 메소드
```javascript
unshift(val){
        val newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
```
#### get 메소드
```javascript
get(index){
        if(index < 0 || index >= this.length) 
          return null;
        val counter = 0;
        val current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
```
#### set 메소드
```javascript
set(index, val){
        val foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
```
#### insert 메소드
```javascript
insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
```
#### remove 메소드
```javascript
remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
```
#### reverse 메소드
```javascript
reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
```
### Big O
- Insertion : O(1)
- Removal : O(1) or O(n)
- Searching : O(N)
- Access : O(N)

삽입과 제거에서 배열보다 효율적이다