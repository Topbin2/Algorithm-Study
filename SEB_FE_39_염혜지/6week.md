# 💻 6주차 요약

## Tree
![](https://velog.velcdn.com/images/haji3354/post/923e3299-9d30-4153-ad8f-6ae795c18118/image.png)


## BST (이진 검색 트리)

- 2개 이하의 자식 노드를 가지는 트리
- 부모 노드의 왼쪽 노드는 부모 노드보다 작아야한다.
- 부모 노드의 오르쪽 노드는 부모 노드보다 커야한다.


#### 기본 트리 class
```javascript
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

//    10
//  7    15
//   \  
//    9
```
#### BST Insert 메소드
```javascript

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){ 
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}
```
#### BST find 메소드  
```javascript
find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
```
#### BST contains 메소드
```javascript
//찾으면 true 없으면 false를 return 

 contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
```
### BST Big O
![](https://velog.velcdn.com/images/haji3354/post/9ce4108b-3721-4162-994d-c72b591fe1fe/image.png)
- `삽입` : O(log N)
- `검색` : O(log N)


- 예외 
![](https://velog.velcdn.com/images/haji3354/post/6101cd61-c266-4611-8660-769567a2c64c/image.png)
