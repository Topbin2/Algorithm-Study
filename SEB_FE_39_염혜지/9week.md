# 💻 9주차 요약

## Hash Tables

- 해시테이블은 key와 value을 저장하는데 사용된다.
- 키는 순서가 지정되지 않는다.
- 배열보다 값을 찾는과정과 값을 추가하는 과정 , 값을 제거하는 과정이 빠르다.

## Hash Function
![](https://velog.velcdn.com/images/haji3354/post/40a46fc0-9939-4ae9-bdf6-014386310b32/image.png)

- 전 세계 인터넷과 개인 정보 보호 , 일반 계산 없무 등에서 사용이 된다.
- 키를 배열에서 사용되는 인덱스로 바꿔주는데 사용된다.

#### basic_hash
```javascript
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
  
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
```
#### improved_hash
```javascript
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;//최소 값을 추가
  for (let i = 0; i < Math.min(key.length, 100); i++)
    
  {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```
- 소수 이용

## Hash Tables 구현
```javascript
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

```
## Big O of Hash Tables
- `Insert` : O(1)
- `Deletion` : O(1)
- `Access` : O(1)
