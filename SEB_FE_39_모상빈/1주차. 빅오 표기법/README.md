# 빅오 표기법이란?
- 알고리즘의 효율성을 평가하기 위한 분석법
- 시간 복잡도(실행시간)와 공간 복잡도(실행공간)로 이루어진다.
- 빅오 표기법은 기본적으로, 최악의 효율일 경우의 복잡도를 기준으로 측정한다

## 빅오 복잡도

![](https://velog.velcdn.com/images/sangbin2/post/c279607c-d9fa-43ef-b189-03c3d19ec9a5/image.png)

### x축 = 입력값
### y축 = 시간



## O(1)
입력값에 상관없이 일정한 실행시간을 유지한다.

```javascript
function algorithm(arr, index) {
	return arr[index];
}  

```

## O(log n)
매우 큰 값을 입력받아도 크게 영향을 받지 않는다. (이진탐색)

```javascript
function algorithm (list, target, left, right) {
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    }
    
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
```

## O(n)
입력값에 비례해 실행시간이 늘어난다. (반복문)

```javascript
function algorithm(num) {
	for(let i = 0; i < num; i++) {
		// ...code
    }
}
```

## O(n^2)
입력값의 제곱의 비율로 실행시간이 늘어난다. (중첩 반복문)
```javascript
function algorithm(num) {
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
		// code..
		}
	}
}
```

## O(2^n)
빅오 표기법 중 가장 느린 시간 복잡도를 가진다. (피보나치 수열(재귀))
```javascript
function fibonacci(n) {
	if (n <= 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```

