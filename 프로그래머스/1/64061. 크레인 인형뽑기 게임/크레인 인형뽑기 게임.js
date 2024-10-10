function solution(board, moves) {
  const stack = []; // 인형이 담길 배열
  let count = 0;
  const size = board.length;

  // 이중 배열 초기화
  const array = Array.from({ length: size })
    .fill()
    .map(() => new Array(size).fill(0));

  // 배열을 새로 졍렬
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      array[j][size - 1 - i] = board[i][j];
    }
  }
  // 인형 뽑기
  for (let i = 0; i < moves.length; i++) {
    let end = array[moves[i] - 1].pop();

    // 인형을 뽑을때까지
    while (end === 0) {
      end = array[moves[i] - 1].pop();
      if (end !== 0) break;
    }

    // 빈 배열인 경우
    if (!end) continue;

    if (stack.length === 0) {
      stack.push(end);
    } else {
      if (stack[stack.length - 1] === end) {
        stack.pop();
        count += 2;
      } else {
        stack.push(end);
      }
    }
  }
  return count;
}