# ๐ป 2์ฃผ์ฐจ ์์ฝ

## ๐ผ ์ฌ๊ท
- ์์ ์ ํธ์ถํ๋ ์ ์ฐจ๋ก ๋ชจ๋ ๊ณณ์ ์ฌ์ฉ๋๋ค
- ํธ์ถ ์คํ์ ๊ผญ๋๊ธฐ์ ์์ด๋ฉฐ ํธ์ถ ์ ๊ผญ๋๊ธฐ๋ถํฐ ๊บผ๋ธ๋ค.

### โจ์ฌ๊ท ํจ์์ ๋๊ฐ์ง ํ์ ๋ถ๋ถ
1. Base Case : ์ฌ๊ท๊ฐ ์ข๋ฃ๋๋ ์กฐ๊ฑด์ด ์์ด์ผํ๋ค.
2. Different Input : ํจ์์ ์๋ ฅ๋๋ ๊ฐ์ด ๋ค๋ฅด๋ค.

<br>

#### num์ ํฉ

```javascript
function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
```
 
#### ์ฌ๊ทํธ์ถ๋ก ํฉํ ๋ฆฌ์ผ ๊ตฌํ๊ธฐ
```javascript
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
 return total;
}
```

### โจ Helper ๋ฉ์๋ ์ฌ๊ท
- ์ธ๋ถํจ์์ ์ฌ๊ทํจ์๊ฐ ์กด์ฌํ๋ค.
- ๋ฐฐ์ด์ด๋ ๋ฐ์ดํฐ ๋ชฉ๋ก๋ค์ ์ปดํ์ผํ ๋ ์ฌ์ฉํ๋ค.
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
#### ๋ฐฐ์ด์ ๋ชจ๋  ํ์๊ฐ๋ง ์ถ๋ ฅ
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
### โจ ์์ ์ฌ๊ท
- ๋ฐฐ์ด์ ๊ฒฝ์ฐ ๋ฐฐ์ด์ ๋ณ๊ฒฝํ์ง ์๋๋ก ๋ฐฐ์ด ๋ณต์ฌ๋ณธ์ ๋ง๋๋ `slice`
`spread operator` ๋ฐ `concat` ์ ์ฌ์ฉํ๋ค.
- ๋ฌธ์์ด์ ๋ณ๊ฒฝ์ด ์ด๋ ค์ฐ๋ฏ๋ก `slice` , `substr` , `substring` ์ ์ฌ์ฉํ๋ค.
- ๋ณต์ฌ๋ณธ ์์ฑ์  `Object.assign` ๋๋ `์คํ๋ ๋ ์ฐ์ฐ์` ๋ฅผ ์ฌ์ฉํ๋ค.

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