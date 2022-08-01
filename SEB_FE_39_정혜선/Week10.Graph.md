# Graphs

## What is a Graphs?

- 한정되고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 자료구조
- 노드의 집합에 순서가 없는 경우에는 무방향 그래프, 순서가 있는 경우에는 방향그래프라고 함

## Usages for Graphs

- Social Networks
- Location / Mapping(예: 구글 지도 길찾기)
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations

## 그래프의 종류

### 용어

- Vertex: 노드
- Edge: 노드 사이의 연결
- Weighted/Unweighted(가중/비가중)
  - 가중 그래프: 간선에 가중치라 부르는 수치가 할당됨
  - 비가중 그래프: 간선에 가중치가 부여되지 않음
- Directed/Undirected(방향/무방향)
  - 방향 그래프: 간선에 방향이 존재하지 않음
  - 무방향 그래프: 간선에 방향이 존재함

### Adjacency Matrix vs Adjacency List

![graphBigO](./graphBigO.png)

## 구현

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g);
```
