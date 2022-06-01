# 💻 1주차 요약

## 🌼 Big-O 표기법

- 알고리즘의 성능을 분석하기 위해 사용한다.
- 시간 복잡도와 공간 복잡도를 이해할 수 있다.
- 정밀도보다 일반적인 경향을 중요시한다.
- 입력이 증가함에 따라 알고리즘의 런타임이 어떻게 증가하는지 이해할 수 있다.

### ✨ 시간복잡도

```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;

}
```
- 항상 출력이 3 이므로 O(1)
 
```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
- 출력 수가 n개 이므로 O(n)

```javascript
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
- O(n) 내부에 O(n) 이므로 O(n^2)

### ✨ 공간복잡도 

```javascript
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
``` 
- return total이 O(1)의 공간을 차지한다
```javascript
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
``` 
- newArr은 n개의숫자 이므로 O(n)의 공간을 차지한다.

## 🌼 배열의 오브젝트의 성능 평가

### ✨ 배열의 O(n)

- `push - O(1)`
- `pop - O(1)`
- `shift - O(N)`
- `unshift - O(N)`
- `concat - O(N)`
- `slice - O(N)`
- `splice - O(N)`
- `sort - O(N * log N)`
- `forEach/map/filter/reduce/etc - O(N)`

➡️ 배열끝의 추가나 삭제는 O(1)이지만 앞에 인덱스의 추가나 삭제는 O(N)이다.
배열 앞의 요소 제거는 효율적이지 않고 `push` , `pop` 보다 `shift` , `unshift`가 더 느리다.
sort의 경우 O(N)내부에 연산이 더 있다. 
( 암기할 필요는 없으나 알아두자 )

## 🌼 문제 해결법

### ✨ 알고리즘이란?
- 특정 작업을 달성하기 위한 과정이나 일련의 단계를 의미한다.

### ✨ 문제 해결법 과정
**1. 문제 이해하기
2. 구체적인 예시 알아보기
3. 문제 세분화하기
4. 문제를 해결하고 단순화하기
5. 문제 되돌아보고 재구성
**
#### 1. 문제 이해하기
- 문제를 내 방식으로 다시 생각할 수 있는지 생각하기
- 문제가 어떤 입력값을 가져하는지 생각하기
- 문제의 해결책에서 나와야하는 출력값이 뭔지 생각하기
- 문제를 해결한 충분한 정보가 주어졌는지 생각하기
- 문제의 일부인 중요한 뿐에 어떻게 라벨을 지정할지 생각하기

#### 2. 구체적인 예시 알아보기
- 간단한 예시로 시작하기
- 복잡한 예시로 진행하기
- 빈 입력값이 있는 예제를 살펴보기
- 유효하지 않은 값을 입력하면 어떻게 될지 생각하기

#### 3. 문제 세분화하기
- 세분화 할 단계를 작성하기
- 작성하기 전에 작성해야 할 코드를 세부적으로 파악하기

#### 4. 문제를 해결하고 단순화하기
- 문제의 핵심적인 어려움을 찾고 일시적으로 무시하기
- 단순화된 솔루션을 작성하기
- 어려웠던 부분과 통합시키기

#### 5. 문제 되돌아보고 재구성
- 결과를 확인할 수 있는지 ✅
- 결과나 방법을 다른 문제에 사용할 수 있는지 ✅
- 결과를 향상 시킬 수 있는지 ✅
- 다른 사람들의 해결방법 ✅
