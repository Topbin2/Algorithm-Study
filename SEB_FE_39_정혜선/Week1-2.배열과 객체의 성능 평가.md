## 객체의 Big O

### 객체는 언제 사용하나?

- 정렬되어 있을 필요가 없을 때
- 빠른 access, insertion, removal이 필요할 때

### Big O of Objects

- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(1)

### Big O of Objects Methods

- Object.keys: O(n)
- Object.values: O(n)
- Object.entries: O(n)
- hasOwnProperty: O(1)

## 배열의 Big O

### 배열은 언제 사용하나?

- 정렬이 필요할 때
- 정렬되어 있는 것이 필요할 때는 유용하지만, 연산 시간이 더 걸릴 수 있음
- element 마다 붙어있는 index가 있음

### Big O of Arrays

- Insertion: It depends...
  - 배열 뒤에 추가할 때에는 상수 시간
  - 배열 앞에 추가할 때에는 index를 새로 배정해야하기 때문에 O(n)
- Removal: It depends...
- Searching: O(n)
- Access: O(1)

### Big O of Arrays Methods

- push: O(1)
- pop: O(1)
- push: O(n)
- shift: O(n)
- unshift: O(n)
- concat: O(n)
- slice: O(n)
- splice: O(n)
- sort: O(n\*log n)
- forEach/map/filter/reduce/etc.: o(n)
