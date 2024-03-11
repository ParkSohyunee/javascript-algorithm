function solution(array, commands) {
  const result = [];

  // i번째 숫자부터 j번째 숫자까지 자르고 정렬
  for (let i = 0; i < commands.length; i++) {
    // array의 복사본
    const newArray = array.slice(commands[i][0] - 1, commands[i][1]);
    const sortedNewArray = newArray.sort((a, b) => a - b);
    result.push(sortedNewArray[commands[i][2] - 1]);
  }
  return result;
}