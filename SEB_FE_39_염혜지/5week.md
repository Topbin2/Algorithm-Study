# ๐ป 5์ฃผ์ฐจ ์์ฝ

## ๐ผ Stack & Queue

### โจstack
- Last in First Out(LIFO) ์ ๊ตฌ์กฐ์ด๋ค.
- ๊ฐ์ฅ ๋ฆ๊ฒ ์ถ๊ฐ๋ ๊ฐ์ด ๊ฐ์ฅ ๋จผ์  ์ ๊ฑฐ๊ฐ ๋๋ค.
- `์คํ์ทจ์` , `๋ค์์คํ` ๋ฑ์ด ์๋ค.


#### ๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ๋ก ๊ตฌํํ ์คํ
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
#### ์คํ์ BIG O
- ์ฝ์ - `O(1)`
- ์ญ์  - `O(1)`
- ๊ฒ์ - `O(N)`
- ์ ๊ทผ - `O(N)`

์คํ์ ์ฝ์๊ณผ ์ ๊ฑฐ๋ฅผ ์ฐ์ ์ํ๋ค.

### โจQueue
- First In First Out(FIFO) ์ ๊ตฌ์กฐ์ด๋ค.
- ๊ฐ์ฅ ๋จผ์  ์ถ๊ฐ๋ ๊ฐ์ด ๊ฐ์ฅ ๋จผ์  ์ ๊ฑฐ๊ฐ ๋๋ค.
- `๋ฐฑ๊ทธ๋ผ์ด๋ ์์` , `์ธ์์์` ๋ฑ์ด ์๋ค.

#### ๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ๋ก ๊ตฌํํ ํ
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
#### ์คํ์ BIG O
- ์ฝ์ - `O(1)`
- ์ญ์  - `O(1)`
- ๊ฒ์ - `O(N)`
- ์ ๊ทผ - `O(N)`

ํ์๊ณผ ์ ๊ทผ์ ํ์์ ์ค์ ๋ก ์ฌ์ฉํ์ง ์๋ ๊ธฐ๋ฅ์ด๋ค.
`enqueue` ์ `dequeue` ๋ก ์ถ๊ฐ์ ์ญ์ ์ ๊ธฐ๋ฅ๋ง ์ฌ์ฉํ๋ค.
