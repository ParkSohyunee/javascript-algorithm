function solution(k, tangerine) {
  let count = 0;
  let total = k;

  // 귤의 최대값만큼의 길이를 가진 값이 0인 배열 생성
  const maxSize = Math.max(...tangerine);
  const array = new Array(maxSize + 1).fill(0);

  // 크기 빈도를 array 배열에 저장
  for (i = 0; i < tangerine.length; i++) {
    array[tangerine[i]] += 1;
  }

  // 내림차순으로 정렬한 array를 돌면서 k가 0이될때까지의 count를 체크
  const sortedArray = array.sort((a, b) => b - a);

  for (i = 0; i < sortedArray.length; i++) {
    total -= sortedArray[i];
    count++;

    if (total <= 0) {
      return count;
    }
  }
}