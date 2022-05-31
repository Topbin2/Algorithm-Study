> Big O : 코드가 실행 될 때, 시간적(실행시간)혹은 공간적(차지하는 메모리)으로 얼만큼 소요되는지 측정할 수 있는 표기법이다. 즉, 코드 품질 측정의 유용한 도구이고, 이를 제대로 숙지하고 있다면 비효율적인 코드를 찾아내고 개선하는 것에 도움이 된다.

<br>

```js
const log = console.log;
function addUpto(n) { // 입력한 숫자까지 누적해서 더해주는 함수
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUptobyMath(n) {
    return n * (n + 1) / 2; // 위 함수를 수학적으로 구현
}

// 1. 내장Function인 performance.now Function이용
let t1 = performance.now();
addUpto(100000000);
let t2 = performance.now();
log(`Tme Elapsed: ${(t2 - t1) / 1000} sec.`);
// Time Elapsed: 0.12090000000223518 sec. : 매번 값이 다르다.

let t3 = performance.now();
addUptobyMath(100000000);
let t4 = performance.now();
log(`Time Elapsed: ${(t4 - t3) / 1000} sec.`);
// Time Elapsed: 0.00009999999776482581 sec. : 매번 값이 다르다.
```

<br>


어떤 코드들을 비교할 때, 시간을 젤 수 있는 다양한 방법이 있다. 위의 방법은 수동으로 코드의 실행 시간을 도출해내는 방법이며 기기 사양에 따라 시간이 달라질 수 있고, 심지어 같은 기기에서도 언제나 다른 시간이 기록된다. 그렇기 때문에 완전히 믿을 수 있는 방법은 아니다.

_이럴 때 코드를 비교할 수 있게 해주는 것이 바로 BigO표기법이다._

<br>


# 연산 갯수 세기
```js
const addUptoMath = n => n * (n + 1) / 2;
// n의 갯수에 상관없이 언제나 *, +, / 연산 3번을 수행한다.
//  

const addUpto = n => {
    let total = 0; 
    for (let i = 1; i <= n; i++) {   // i
        total += i; // n번 +, = 연산이 이루어 진다.
    }
    return total;
}
// 위의 요소를 모두 고려하면 5n + 2번의 연산을 수행한다.
// 이런식으로 계산하면 매번 일일히 세야하는 번거로움 있다.
// 이 경우 N이 커질 수록 연산의 갯수도 비례적으로 늘어난다는 점이 중요하다.
// 즉 N의 값을 충분히 늘린다면 y=x 그래프와 같은 추세를 볼 수 있다.
```

<br>

# BigO
BigO는 정식으로 입력된 내용이 늘어날 수록 알고리즘 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식이다. 어떤 코드의 입력 크기와 실행시간의 관계를 말한다. 위의 연산갯수세기에서 나온 addUpto를 BigO로 표현하면 선형 추세기 때문에 O(n)이 된다. addUptoMath의 경우는 n의 값에 상관없이 일정한 시간을 유지하므로 O(1)이 된다. 

``` js
const printAllpairs = n => {
  for (var i = 0; i < n; i++) { // O(n)
    for(var j = 0; j < n; j++) { // O(n)
    	console.log(i, j);
    }
  }
}
```
위의 경우 처럼 반복문이 중첩되어 있는 경우 곱 연산이 되어서 O(n^2)가 된다.


<br>

# BigO표기법의 단순화

위에서 언급했듯이 BigO를 산정할 때 세부적인 연산을 하나하나 고려하는 것이 아닌 n이 충분히 늘어났을 때의 추세(그래프)를 파악하면 된다. 

- 상수는 중요하지 않다
O(10), O(100), O(10000) => O(1)
O(10n), O(100n), O(10000n) => O(n)
O(10n^2), O(100n^2), O(10000n^2) => O(n^2)

- 작은 연산은 중요하지 않다.
O(n + 10) => O(n), O(1000n + 50) => O(n), O(n^2 + 5n + 8) => O(n^2)

- 연산자와 변수, 배열, 객체의 할당은 모두 상수로 본다.

- 배열 속 엘리먼트의 검색, 객체의 데이터 접근 등은 상수다.

- n에 따라 동적으로 증가하는 루프는 n이며 그렇지 않은경우 상수다.

- 동적으로 증가하는 루프가 중첩되어 있으면 중첩될 때마다 n의 차수가 늘어난다.


<br>

# 공간 복잡도

공간복잡도는 입력되는 것을 제외하고 알고리즘 자체가 필요로하는 공간을 의미한다.

### 규칙
* booleans, numbers, undefined, null은 모두 불변 공간이다.
* 문자열은 O(n)의 공간이 필요하다. (50자일 경우 1자보다 50배 많은 공간 차지)
* ref타입(array object 등)은 O(n)의 공간이 필요하다.

``` js
function sum(arr) {
    let total = 0; 
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
} 
// O(1)

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// O(n);
```

<br>

# 로그

빅오 로그는 이진 로그이다. (log<sub>2</sub>=log)
O(log n)은 로그 그래프에서 알 수 있듯이 상수를 제외하고 시간복잡도가 가장 좋다.

주로 탐색알고리즘,효율적인 정렬알고리즘, 재귀 등이 O(log n)을 가진다.

