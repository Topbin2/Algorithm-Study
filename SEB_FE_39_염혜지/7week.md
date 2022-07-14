# 💻 7주차 요약

## 트리 순회


### 1. 너비 우선 탐색 (BFS)
- 너비를 우선적으로 탐색하는 방법
![](https://velog.velcdn.com/images/haji3354/post/d90fabe1-f01c-4bd0-a2ab-2374125c3575/image.png)

```javascript
BFS(){
       let node = this.root,
            data = [],
            queue = [];
        queue.push(node); // 루트노드를 큐에 추가

        while(queue.length){ //큐가 0일때까지 반복
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);//왼쪽 확인
           if(node.right) queue.push(node.right);//오른쪽확인!

        }
        return data;
    }
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();

```
### 2. 깊이 우선 탐색 (DFS)
- 깊이를 우선적으로 탐색하는 방법![](https://velog.velcdn.com/images/haji3354/post/d6d5ed75-d4e2-4431-8e69-85df26246683/image.png)

#### 2-1. 전위 순회
- [루트 - 왼쪽 자식 - 오른쪽 자식]
```javascript
DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
```
#### 2-2. 중위 순회
- [왼쪽 자식 - 루트 - 오른쪽 자식]
```javascript
 DFSInOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
```
#### 2-3. 후위 순회
- [왼쪽 자식 - 오른쪽 자식 - 루트]
```javascript
 DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
```

### 3. BFS? DFS?
- 시간복잡도는 동일하고 공간복잡도를 살펴봐야한다.
- 트리의 모양에 따라 선택해야한다.
