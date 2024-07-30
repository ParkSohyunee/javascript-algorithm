function solution(citations) {
  let result = 0;

  citations.sort((a, b) => b - a);

  citations.forEach((el, index) => {
    let hIndex = index + 1 < el ? index + 1 : el;

    if (result < hIndex) {
      result = hIndex;
    }
  });

  return result;
}