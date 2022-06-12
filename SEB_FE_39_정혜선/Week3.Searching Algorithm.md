# 탐색 알고리즘(Searching Algorithm)

## 배열

### 선형 탐색(Linear Search)

```
// example
function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }

  return -1;
}
```

- 배열의 모든 개별 항목을 처음부터 끝까지 순서대로 살펴보면서 원하는 값인지 확인
- 배열 탐색 메서드
  - indexOf
  - includes
  - find
  - findIndex
- 시간복잡도: O(n)
  - Best: O(1)
  - Worst: O(n)

### 이분 탐색(Binary Search)

```
// example
function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== el && start <= end) {
    if (arr[middle] > el) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === el ? middle : -1;
}
```

- 이분 탐색은 확인을 할 때마다 남은 항목의 절반을 제거할 수 있음
- 정렬된 배열을 대상으로만 작동함
- 동작 순서
  1. 배열의 중간점을 선택
  2. 중간점의 값이 찾는 값이 아니라면 찾는 값이 중간점을 기준으로 좌측 절반과 우측 절반 중 어느 쪽에 있을지 확인
  3. 검색 범위를 변경하여 위의 순서를 반복함
- 시간복잡도: O(log n)
  - Best: O(1)
  - Worst: O(log n)

### Naive String Search

```
// example
function naiveSearch(str, substr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        break;
      }
      if (j === substr.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}
```

- 긴 문자열에서 부분 문자열(substring)을 검색하는 알고리즘
- 예시로 긴 문자열에서 짧은 문자열이 등장하는 횟수를 카운트 할 때 처음부터 문자쌍을 하나씩 확인하는 것을 들 수 있음
