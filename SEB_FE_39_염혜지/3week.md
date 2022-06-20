# 💻 3주차 요약

## 🌼 선형 검색
- 모든 개별 항목을 순서대로 살펴보면서 우리가 원하는 값인지 확인하는 방법
- `indexOf` , `includes` , `find` , `findIndex` 함수도 선형검색이다.
- 선형 검색의 시간복잡도는 O(n) 이다.

```javascript
function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
```

## 🌼 이진 검색
- 이진 검색은 배열에 순서를 분류해 순서가 있어야한다.
- 중간점을 선택하고 찾는값이 좌측, 우측에 있는지 확인한다.
- 처음 0을 좌측 포인터 , 배열의 끝을 우측 포인터로 지정한다.
- 좌측 포인터가 우측포인터보다 앞에 있을 경우에만 연산이 계속된다.
- 이진 검색의 시간복잡도는 O(log N)이다.
```javascript
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
```
or
```javascript
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
```

