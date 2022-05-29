## Big-O Notation

- 여러가지 코드를 서로 일반화하고, 비교하여 성능을 평가하는 방법
- 시간 복잡도 & 공간 복잡도를 나타낼 때 주로 사용

### 더 좋은 코드는 무엇인가?

- 더 빠른 코드(faster)인가?
- 메모리를 덜 사용하는 코드(less memory-intensive)인가?
- 가독성이 더 좋은 혹은 짧은 코드(more readable)인가?
- **모든 요소가 중요하지만 속도와 메모리가 특히 중요**

### 속도는 어떻게 평가할 수 있는가?

```
// example1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

```
// example2
function addUpTo(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

- 내장된 timing function을 사용
  - performance.now()
- 그러나 시간을 측정하여 비교 것에는 몇 가지 문제점이 있음(The Problem with Time)
  - 기기에 따라 측정 시간이 다름
  - 같은 기기라도 매 번 측정 시간이 다름
  - 빠른 알고리즘의 경우 속도 측정이 정확하지 않을 수 있음
- 코드를 실행하여 시간을 측정하지 않고 코드를 비교 평가할 수 있는 방법이 Big-O 표기법

### 시간을 사용하지 않으면 무엇을 사용하는가?

```
// example1
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

```
// example2
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```
// example3
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

- 코드가 실행될 때 걸리는 시간을 측정하는 것 보다는, 컴퓨터가 처리해야 하는 연산의 수를 세면 됨
- 예시 1번은 3번의 연산이 이루어지는 반면 예시 2번은 5n+2번의 연산이 실행됨

#### Big-O

- 입력이 늘어날수록 알고리즘의 runtime이 어떻게 변하는지 설명하는 방법(시간 복잡도)

##### 표기법 단순화

- 산수(덧셈, 뺄셈, 곱셈, 나눗셈)는 상수임
- 변수 할당도 상수에 해당함
- index로 배열의 요소에 접근하는 것 또는 key로 객체의 요소에 접근하는 것은 상수임
- 루프 내에서 복잡도는 루프의 길이 곱하기 루프 내의 연산
- 참고
  - 계수 법칙: 상수는 제외하고 표기함(예: 2n -> O(n))
  - 다항 법칙: f(n)이 k차 다항식이면 f(n)은 O(n^k)

##### 예시 코드에 대한 표기법

- 예시1: O(n)
- 예시2: O(1)
- 예시3: O(n^2)

##### 시간 복잡도 성능

- O(1) < O(log n) < O(n) < O(n\*log n) < O(n^2) < O(2^n) < O(n!)

### 공간 복잡도

- 알고리즘을 실행하기 위해 얼마나 많은 추가 메모리의 할당이 필요한지 설명하는 방법
- 입력을 제외하고, 알고리즘 자체가 필요로 하는 공간을 의미함
- 대부분의 원시 자료형(boolean, number, undefined, null)은 고정 공간을 차지함(예: 숫자 1, 1000은 동일한 공간을 차지함)
- 문자열은 O(n)의 공간을 차지함(예: 문자열 1자에 비해 50자는 50배의 공간을 차지함)
- 참조 자료형은 O(n)의 공간을 차지함
  - array: n is the length
  - object: n is the number of keys

```
// example1
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

```
// example2
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

- 예시1: O(1) space
  - total이라는 변수, i라는 변수에 해당하는 공간만 차지
- 예시2: O(n) space
  - 배열의 length와 비례해서 커짐
