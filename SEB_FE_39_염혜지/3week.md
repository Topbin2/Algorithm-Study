# π» 3μ£Όμ°¨ μμ½

## πΌ μ ν κ²μ
- λͺ¨λ  κ°λ³ ν­λͺ©μ μμλλ‘ μ΄ν΄λ³΄λ©΄μ μ°λ¦¬κ° μνλ κ°μΈμ§ νμΈνλ λ°©λ²
- `indexOf` , `includes` , `find` , `findIndex` ν¨μλ μ νκ²μμ΄λ€.
- μ ν κ²μμ μκ°λ³΅μ‘λλ O(n) μ΄λ€.

```javascript
function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
```

## πΌ μ΄μ§ κ²μ
- μ΄μ§ κ²μμ λ°°μ΄μ μμλ₯Ό λΆλ₯ν΄ μμκ° μμ΄μΌνλ€.
- μ€κ°μ μ μ ννκ³  μ°Ύλκ°μ΄ μ’μΈ‘, μ°μΈ‘μ μλμ§ νμΈνλ€.
- μ²μ 0μ μ’μΈ‘ ν¬μΈν° , λ°°μ΄μ λμ μ°μΈ‘ ν¬μΈν°λ‘ μ§μ νλ€.
- μ’μΈ‘ ν¬μΈν°κ° μ°μΈ‘ν¬μΈν°λ³΄λ€ μμ μμ κ²½μ°μλ§ μ°μ°μ΄ κ³μλλ€.
- μ΄μ§ κ²μμ μκ°λ³΅μ‘λλ O(log N)μ΄λ€.
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

