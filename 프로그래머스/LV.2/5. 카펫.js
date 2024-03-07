/**
 * [문제]
 * Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때
 * 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 
 * [제한 사항]
 * 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 * 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 */

function solution(brown, yellow) {
  // 1. brown + yellow = size
  const size = brown + yellow;

  // 2. x(가로)*y(세로) = size의 모든 경우의 수를 탐색
  for (i = 1; i <= size; i++) {
    // 3. x>=y 인 경우의 수 필터링
    if (size % i === 0 && i >= size / i) {
      const x = i;
      const y = size / i;

      // 4. yellow가 정사각형 또는 직사각형을 만족하는 size
      // 노란블럭이 안에 들어가려면 (x-2) * (y-2) 가 노락블럭 수와 같아야 쏙 들어감
      if (yellow === (x - 2) * (y - 2)) {
        return [x, y];
      }
    }
  }
}

solution(10, 2); // [4,3]
solution(8, 1); // [3,3]
solution(24, 24); // [8,6]
