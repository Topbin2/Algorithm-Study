# ๐ป 4์ฃผ์ฐจ ์์ฝ

## ๐ผ ๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ
- ๋ฌธ์์ด์ด๋ ์ซ์ ๋ฑ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๋ ์๋ฃ๊ตฌ์กฐ๋ก ๋ฐฐ์ด์ฒ๋ผ ์์์ ๋ฐ๋ผ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ์ง๋ง ์ธ๋ฑ์ค๊ฐ ์กด์ฌํ์ง ์๋ค.
- ๋ฆฌ์คํธ ์ ๊ทผ ์ ์ฒ์๋ถํฐ ์์ฐจ์ ์ผ๋ก ์ ๊ทผํด์ผํ๋ค.
- head , tail , length ์์ฑ์ ํฌํจํ๋ค.

#### push ๋ฉ์๋
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
#### pop๋ฉ์๋
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

#### shift ๋ฉ์๋
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
#### unshift ๋ฉ์๋
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
#### get ๋ฉ์๋
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
#### set ๋ฉ์๋
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
#### insert ๋ฉ์๋
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
#### remove ๋ฉ์๋
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
#### reverse ๋ฉ์๋
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

์ฝ์๊ณผ ์ ๊ฑฐ์์ ๋ฐฐ์ด๋ณด๋ค ํจ์จ์ ์ด๋ค