# 💻 2주차 요약

## 🌼 재귀
- 자신을 호출하는 절차로 모든곳에 사용된다
- 호출 스택은 꼭대기에 쌓이며 호출 시 꼭대기부터 꺼낸다.

### ✨재귀 함수의 두가지 필수 부분
1. Base Case : 재귀가 종료되는 조건이 있어야한다.
2. Different Input : 함수에 입력되는 값이 다르다.

<br>

#### num의 합

```javascript
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
```
 
#### 재귀호출로 팩토리얼 구하기
```javascript
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
 return total;
}
```

### ✨ Helper 메소드 재귀
- 외부함수와 재귀함수가 존재한다.
- 배열이나 데이터 목록들을 컴파일할때 사용한다.
```javascript
function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    
    helper(input)

    return outerScopedVariable;

}
```
#### 배열의 모든 홀수값만 출력
```javascript
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}
```
### ✨ 순수 재귀
- 배열의 경우 배열을 변경하지 않도록 배열 복사본을 만드는 `slice`
`spread operator` 및 `concat` 을 사용한다.
- 문자열은 변경이 어려우므로 `slice` , `substr` , `substring` 을 사용한다.
- 복사본 생성시  `Object.assign` 또는 `스프레드 연산자` 를 사용한다.

```javascript
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```