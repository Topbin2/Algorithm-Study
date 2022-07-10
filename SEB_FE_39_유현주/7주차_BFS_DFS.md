## 트리 순회란?

- **정의** : 트리 구조에서 각각의 노드를 한 번씩 방문하는 과정을 의미한다. 노드를 방문하는 순서에 따라 너비 우선 탐색(BFS)과 깊이 우선 탐색(DFS)로 분류된다.

## 너비 우선 탐색(****Breadth First Search****)

![image](https://user-images.githubusercontent.com/59650985/178155275-51896666-5207-4eab-8529-6530362bb11c.png)

### BFS 구현

```jsx
BFS(){
	let node = this.root, 
      data = [],
      queue = []; // 큐(또는 배열)와 방문한 노드의 값을 저장할 변수 생성
  queue.push(node); // 루트 노드를 큐에 삽입

  while(queue.length){
     node = queue.shift(); // 큐에서 노드를 dequeue
     data.push(node.value); // 노드 값을 노드를 저장하는 변수에 push
     if(node.left) queue.push(node.left); // 큐에서 제거된 노드의 왼쪽 속성이 있는 경우 enqueue
     if(node.right) queue.push(node.right); // 큐에서 제거된 노드의 오른쪽 속성이 있는 경우 enqueue
  }
  return data; // 값을 저장하는 변수를 반환
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



## ****깊이 우선 탐색 (Depth First Search)****

![image](https://user-images.githubusercontent.com/59650985/178155288-7b64dd60-b215-43b9-908a-812cefb4edc1.png)

### 전위 순회 (Preorder)

![image](https://user-images.githubusercontent.com/59650985/178155299-60768e4c-c7ab-4677-808c-82369c2de994.png)

- 루트 노드 → 왼쪽 서브 트리 전위 순회→ 오른쪽 서브 트리 전위 순회

```jsx
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

### 중위 순회 (Inorder)

![image](https://user-images.githubusercontent.com/59650985/178155323-869a6731-5e5b-4a26-ab25-a3bd8821beeb.png)

- 왼쪽 서브 트리 중위 순회 → 루트 노드 → 오른쪽 서브 트리 중위순회

```jsx
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

### 후위 순회 (Postorder)

![image](https://user-images.githubusercontent.com/59650985/178155342-5fdb5946-a1f0-4ad0-937c-2690fba0bf46.png)

- 왼쪽 서브 트리 후위 순회 → 오른쪽 서브 트리 후위 순회 → 루트 노드

```jsx
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

## BFS vs DFS

- BFS나 DFS나 모든 노드를 방문하므로 시간 복잡도는 동일하다.
- 공간 복잡도 측면에서 너비가 넓은 트리의 경우 깊이 우선 탐색(DFS)이 적은 공간을 점유해 유리하고, 깊이가 깊은 트리의 경우 너비 우선 탐색 (BFS)이 유리하다.
