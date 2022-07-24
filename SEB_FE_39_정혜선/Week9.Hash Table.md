# Hash Tables

## What is a Hash Table?

- 해시테이블은 key-value의 쌍을 저장하는데 사용됨
- 해시테이블의 key는 순서를 가지지 않음
- 해시테이블은 value를 찾거나, 추가하거나, 삭제하는 속도가 빠름
- 연속적인 흐름이 있는 데이터가 있다면 배열을 사용하면 되지만, 그렇지 않은 경우 해시 맵이나 해시 테이블을 사용할 수 있음
- Hash Tables in the wild(언어별 예시)
  - Python: Dictionaries
  - JS: Objects and Maps
  - Java, Go, Scala: Maps
  - Ruby: Hashes

## What makes a good Hash?(암호학적으로 안전한 것은 고려하지 않음)

1. 빨라야 함(ex. constant time)
2. 결과를 균등하게 분배하여 특정 인덱스에 클러스터(군집) 하지 않아야 함. 즉, 고르게 퍼지도록 해야 함(예: 항상 배열의 중앙 위치를 주거나 0번 위치를 주면 안됨)
3. 결정론적이어야 함(같은 input은 같은 output을 출력해야 함)

## 해시 함수 구현

### basic

```js
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
```

- 이 해시 함수에는 다음과 같은 문제점이 있음
  1. 문자열만 처리할 수 있음
  2. 상수 시간을 가지지 않음(linear in key length)
  3. 무작위성이 떨어짐(데이터가 cluster되기(뭉치기) 쉬움)

### improved

```js
function hash(key, arrayLen) {
  let total = 0;
  // 소수
  let WEIRD_PRIME = 31;
  // 최소값 추가
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```

- 최소값 추가: 입력되는 key의 길이가 100을 초과하는 경우에도 for문이 100번까지만 동작하도록 함
- 소수 이용: 데이터를 저장하는 해시 테이블의 길이가 소수일 경우 충돌이 일어날 확률이 적음

### 충돌 처리

1. Separate Chaining

- 배열, 연결리스트 등과 같은 이중 데이터 구조를 활용
- 즉, 여러개의 key-value 쌍을 같은 위치에 저장함

2. Linear Probing

- 충돌이 발생하면 다음 빈 칸이 어디인지 확인하여 다음 위치에 데이터를 저장함
- 이 방법을 사용하면 각 자리에 하나의 데이터만을 저장함

## 해시 테이블 구현

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
```

## 해시 테이블의 Big O

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
