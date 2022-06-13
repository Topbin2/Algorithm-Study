# Recursion

## What is recursion?

- 자기 자신(함수)를 호출하는 절차

## 재귀를 알아야 하는 이유

- 어디에나 사용하기 때문
  - JSON.parse / JSON.stringify
  - document.getElementById, DOM traversal algorithms(DOM 순회 알고리즘)
  - Object traversal(객체 순회)
  - 데이터 구조(트리, 그래프)를 생성하고 순회하여 그 안의 요소를 검색하고자 하는 경우

## 자바스크립트에서의 함수 호출

- 대부분의 프로그래밍 언어에는 함수 호출을 관리하는 데이터 구조가 있으며, 자바스크립트에서는 **call stack**이라는 데이터 구조가 이를 담당함
- 함수를 호출하면 호출된 함수는 call stack의 맨 위에 쌓임
- 자바스크립트가 **retrun** 키워드를 확인하거나, 함수 내 더 이상 실행할 코드가 없으면 **컴파일러(complier)**는 스택의 맨 위에 있는 item을 제거함

## 재귀 함수의 두 가지 기본 요소

- 종료 조건
- 다른 입력값

### 재귀 함수 예시1

```
function countDown(num) {
	if (num <= 0) {
		console.log("All done!");
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

countDown(3);
// 3
// 2
// 1
// All done!
```

- 작동 순서
  1.  countDown(3) -> print 3 -> countDown(2)
  2.  print 2 -> countDown(1)
  3.  print 1 -> countDown(0)
  4.  print All done!

### 재귀 함수 예시2

```
function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

sumRange(3); // 6
```

- 작동 순서
  1.  return 3 + sumRange(2)
  2.  return 2 + sumRange(1)
  3.  return 1

## 재귀 함수 작성 시 흔히 발생하는 문제

```
// 오류 예시1
function sumRange(num) {
	return num + sumRange(num - 1);
}

// 오류 예시2
function sumRange(num) {
	if (num === 1) console.log(1);
	return num + sumRange(num - 1);
}

sumRange(2) // Chrome: Maximum call stack size exceeded
```

- 종료 조건이 없거나 잘못됨
  - 이 경우 코드가 계속 실행되면서 스택에 계속해서 함수를 추가함
- 잘못된 값을 return하거나 값을 return하지 않음
  - return은 재귀의 토대가 되기 때문에 중요함!!
- 예시 함수를 호출할 경우 Chrome에서는 Maximum call stack size exceeded라는 에러가 발생하는데, 이를 stack overflow라고 함

## Helper Method Recursion

```
// 헬퍼 함수 예시
function collectionOddValues(arr) {
  let result = [];

  function helper(helperInput) {
		// 종료 조건
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
```

- 헬퍼 메소드 재귀에는 두 개의 함수가 있음
  - 재귀적이지 않은 외부 함수 + 재귀적인 내부 함수
- 개발자가 외부 함수를 호출하여 parameter를 내부로 전달하면 내부의 재귀함수가 자기자신을 호출하며 동작함
  - 배열이나 데이터 목록 등을 컴파일 해야할 때 흔히 사용함
- 예시 함수의 경우 helper 함수를 사용하지 않고 result를 outer 함수 내부에 정의할 경우 함수가 호출될 때마다 빈 배열로 reset되기 때문에 이를 해결하기 위해 helper method를 사용함

## Pure Recursion

```
function collectionOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectionOddValues(arr.slice(1)));
  return newArr;
}

collectionOddValues([1, 2, 3, 4, 5]) // [1, 3, 5]
```

- 순수 재귀의 경우 모든 코드가 함수 자체에 포함되며, 재귀적임
- 작동 순서
  1. [1].concat(collectionOddValues([2, 3, 4, 5]))
  2. [].concat(collectionOddValues([3, 4, 5]))
  3. [3].concat(collectionOddValues([4, 5]))
  4. [].concat(collectionOddValues([5]))
  5. [5].concat(collectionOddValues([]))
  6. []
- 배열을 복사하는 slice, spread 연산자, concat과 같은 메서드를 사용하면 배열을 변경할 필요가 없이 결과물을 축적할 수 있음
- 문자열은 변경할 수 없기 때문에 slice, substr 또는 substring과 같은 메서드를 사용하여 사본을 만들어야 함
- 객체는 Object.assign이나 spread 연산자를 사용하면 유용함
