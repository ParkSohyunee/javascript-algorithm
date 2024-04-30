// 힙을 이용하여 구현
// minHeap은 부모 노드가 항상 자식 노드보다 작거나 같은 값을 가지는 이진 트리
function minHeap() {
  const heap = [];

  const push = (value) => {
    heap.push(value);
    heapUp(); // 힙에 새로운 요소를 추가할 때 호출
  };

  const heapUp = () => {
    let currentIndex = heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2); // 완전 이진 트리로 부모 노드 인덱스 계산
      if (heap[currentIndex] >= heap[parentIndex]) break;
      // 현재 노드가 부모 노드보다 작으면 위치 변경 -> 반복
      [heap[currentIndex], heap[parentIndex]] = [
        heap[parentIndex],
        heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  };

  const pop = () => {
    if (heap.length === 0) {
      return null;
    }
    if (heap.length === 1) {
      return heap.pop();
    }
    const min = heap[0];
    heap[0] = heap.pop();
    heapDown();
    return min;
  };

  const heapDown = () => {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = null;

      if (
        leftChildIndex < heap.length &&
        heap[leftChildIndex] < heap[currentIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex] < heap[currentIndex] &&
        heap[rightChildIndex] < heap[leftChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex === null) break;

      [heap[currentIndex], heap[smallestChildIndex]] = [
        heap[smallestChildIndex],
        heap[currentIndex],
      ];
      currentIndex = smallestChildIndex;
    }
  };

  const peek = () => {
    return heap.length > 0 ? heap[0] : null;
  };

  const size = () => {
    return heap.length;
  };

  return { push, pop, peek, size };
}

function solution(scoville, K) {
  let count = 0;
  const heap = minHeap();

  for (let i = 0; i < scoville.length; i++) {
    heap.push(scoville[i]);
  }

  // heap의 최소값이 k보다 같거나 클때까지 반복
  while (heap.peek() < K) {
    if (heap.size() === 1) {
      count = -1;
      break;
    }
    const mixedScoville = heap.pop() + heap.pop() * 2;
    heap.push(mixedScoville);
    count++;
  }
  return count;
}

// 초기 풀이 - 런타임 에러
// function solution(scoville, K) {
//   let min = Math.min(...scoville);
//   let sorted = scoville.slice(0);
//   let count = 0;

//   while (min <= K) {
//     count++;
//     sorted = sorted.sort((a, b) => a - b);
//     let mixed = sorted[0] + sorted[1] * 2;
//     sorted.splice(0, 2, mixed);

//     if (sorted.length === 1 && sorted[0] < K) {
//       return -1;
//     }
//     min = Math.min(...sorted);
//   }
//   return count;
// }