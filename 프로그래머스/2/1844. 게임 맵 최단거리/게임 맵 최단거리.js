function solution(maps) {
  // 좌표를 담는 큐
  const queue = [];

  // 방문 노드 체크 배열 생성
  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );

  // 최단거리 탐색을 위한 distance 배열 생성
  const distance = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(0)
  );

  // 출발점 좌표
  queue.push([0, 0]);
  visited[0][0] = true;

  // 노드가 이동할 상, 하, 좌, 우 방향 좌표 설정
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const [dx, dy] of directions) {
      let nextRow = row + dx;
      let nextCol = col + dy;

      if (
        nextRow < 0 ||
        nextRow >= maps.length ||
        nextCol < 0 ||
        nextCol >= maps[0].length
      ) {
        continue;
      }

      // 이동할 수 있는 위치이고, 방문한 적이 없다면
      if (maps[nextRow][nextCol] === 1 && !visited[nextRow][nextCol]) {
        queue.push([nextRow, nextCol]);
        visited[nextRow][nextCol] = true;
        // 출발점으로부터 떨어진 거리 측정 -> 기존 노드 거리에 +1
        distance[nextRow][nextCol] = distance[row][col] + 1;
      }

      // 좌표가 도착지점에 도달한 경우
      if (nextRow === maps.length - 1 && nextCol === maps[0].length - 1) {
        return distance[nextRow][nextCol] + 1;
      }
    }
  }
  return -1;
}