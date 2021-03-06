# ๐ป 9์ฃผ์ฐจ ์์ฝ

## Hash Tables

- ํด์ํ์ด๋ธ์ key์ value์ ์ ์ฅํ๋๋ฐ ์ฌ์ฉ๋๋ค.
- ํค๋ ์์๊ฐ ์ง์ ๋์ง ์๋๋ค.
- ๋ฐฐ์ด๋ณด๋ค ๊ฐ์ ์ฐพ๋๊ณผ์ ๊ณผ ๊ฐ์ ์ถ๊ฐํ๋ ๊ณผ์  , ๊ฐ์ ์ ๊ฑฐํ๋ ๊ณผ์ ์ด ๋น ๋ฅด๋ค.

## Hash Function
![](https://velog.velcdn.com/images/haji3354/post/40a46fc0-9939-4ae9-bdf6-014386310b32/image.png)

- ์  ์ธ๊ณ ์ธํฐ๋ท๊ณผ ๊ฐ์ธ ์ ๋ณด ๋ณดํธ , ์ผ๋ฐ ๊ณ์ฐ ์๋ฌด ๋ฑ์์ ์ฌ์ฉ์ด ๋๋ค.
- ํค๋ฅผ ๋ฐฐ์ด์์ ์ฌ์ฉ๋๋ ์ธ๋ฑ์ค๋ก ๋ฐ๊ฟ์ฃผ๋๋ฐ ์ฌ์ฉ๋๋ค.

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
  let WEIRD_PRIME = 31;//์ต์ ๊ฐ์ ์ถ๊ฐ
  for (let i = 0; i < Math.min(key.length, 100); i++)
    
  {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```
- ์์ ์ด์ฉ

## Hash Tables ๊ตฌํ
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
