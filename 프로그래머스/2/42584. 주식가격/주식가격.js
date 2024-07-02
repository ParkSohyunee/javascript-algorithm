function solution(prices) {
  const result = new Array(prices.length).fill(0);
  const stack = []; // index가 저장되는 배열

  for (let i = 0; i < prices.length; i++) {
    // 가격이 하락하는 시점
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      // 마지막 스택에 저장된 index를 꺼내서
      const index = stack.pop();
      // 하락한 시점까지 유지된 기간(index)을 계산
      result[index] = i - index;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const index = stack.pop();
    result[index] = prices.length - 1 - index; // 가격이 마지막까지 하락하지 않은 경우
  }
  return result;
}