## 학습 목표

- 트리가 무엇인지 정의
- 트리와 리스트 비교
- 트리, 이진 트리, 이진 검색 트리의 차이점
- 이진 검색 트리 동작 구현

## Tree의 정의 및 사용 예시

- **정의** : 부모-자식 관계의 노드로 이루어진 데이터 구조 (연결 리스트와 유사)
- **용어** :
    - `root` - 트리의 꼭대기 노드
    - `child` - 루트에서 멀어질 때 다른 노드에 직접 연결된 자식 노드
    - `parent` - 자식 노드의 반대 개념
    - `siblings` - 부모가 같은 형제 노드 그룹
    - `leaf` - 자식이 없는 노드
    - `edge` - 한 노드와 다른 노드 간의 연결 간선

- **사용 예시** :
    - HTML DOM
    - 네트워크 라우팅
    - 추상 구문 트리
    - 인공 지능
    - OS에서의 폴더 구조
    - 컴퓨터 파일 시스템
    - JSON

## Tree VS List

| Tree | List |
| --- | --- |
| 비선형 | 선형 |

## 트리의 종류 및 차이점

- 트리 (Trees)

![image](https://user-images.githubusercontent.com/59650985/177039186-bf3e9611-3729-4054-aef5-7edbd3683aff.png)


- 이진 트리 (Binary Trees) : 노드 당 최대 2개의 자식을 가지는 트리

![image](https://user-images.githubusercontent.com/59650985/177039214-fcdb21de-23fd-420b-ac99-ed50c68e9116.png)

- 이진 검색 트리 (Binary Search Trees) : 노드 당 최대 2개의 자식을 가지며 순서에 따라 정렬되는 트리

![image](https://user-images.githubusercontent.com/59650985/177039228-ed61e8f5-d0a0-4051-a121-7cd9e21a8aff.png)

## 이진 검색 트리

- **특징** :
    - 모든 부모 노드에는 최대 두 개의 자식이 있다.
    - 상위 노드의 왼쪽에 있는 모든 노드는 항상 상위 노드보다 작다.
    - 상위 노드의 오른쪽에 있는 모든 노드는 항상 상위 노드보다 크다.

### 기본 구조

```jsx
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
}

let tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
```

### insert 메서드

```jsx
class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(this.root === null){ // root가 없는 경우
            this.root = newNode;
            return this;
        } else { // root가 있는 경우
            let current = this.root;
            while(true){
                if(value === current.value) return undefined; // 중복 값 추가 시 무한루프 방지

                if(value < current.value){ // value가 root보다 작은 경우
                    if(current.left === null){ // root의 left가 빈 경우
                        current.left = newNode; // 바로 삽입
                        return this;
                    } else { // root의 left가 있는 경우
                        current = current.left; // current를 업데이트
                    }
                } else if(value > current.value){ // value가 root보다 큰 경우
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

let tree = new BST();
tree.insert(3);
tree.insert(5);
tree.insert(1);

//   3
// 1   5
```

- 코드를 더 짧게 하려면 else문 생략해도 됨.

### find 메서드

```jsx
class BST {
    constructor(){
        this.root = null;
    }

    find(value){
        if(this.root === null) return false;
        
        let current = this.root,
            found = false;
        
        while(current && !found){ // 반복할 요소는 남아있는데 아직 값을 찾지 못했다면 계속 반복
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){ 
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false; // 찾는 값이 없으면 false 리턴
        return current;
    }
}
```

### contains 메서드

```jsx
class BST {
    constructor(){
        this.root = null;
    }

    contains(value) {
      if (this.root === null) return false;
      var current = this.root,
        found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
    }
    return false;
  }
}
```

## Big O of BTS

- 삽입 - O(log n)
- 검색 - O(log n)

[이진트리 시간복잡도 계산](https://velog.io/@xdfc1745/%EC%9D%B4%EC%A7%84%ED%8A%B8%EB%A6%AC-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84)

> 예외
> 
- 아래 그림과 같이 한 쪽으로 치우쳐진 연결 리스트 같은 트리라면 O(n)을 가진다. 이 경우 연결 리스트를 사용하는 것이 낫다.
    
    ![image](https://user-images.githubusercontent.com/59650985/177039258-2102f86f-a9f1-4e9c-a1d0-e8be08c8cf4d.png)
