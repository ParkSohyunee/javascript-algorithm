function solution(n, a, b) {
  let nextA = a;
  let nextB = b;

  // 제곱근만큼 반복하면서
  for (i = 0; i < Math.ceil(Math.sqrt(n)); i++) {
    // a, b를 2로 나누고 올림한 값을 구함, 다음 대진표가 다시 1번부터 N/2번을 차례대로 배정받으므로
    nextA = Math.ceil(nextA / 2);
    nextB = Math.ceil(nextB / 2);

    // 값이 서로 같다면 그 횟수를 리턴, 같다는 뜻은 서로 겨뤘다는 의미
    if (nextA === nextB) {
      return i + 1;
    }
  }
}