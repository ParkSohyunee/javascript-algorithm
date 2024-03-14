function solution(answers) {
  const result = [];

  const math = {
    0: [1, 2, 3, 4, 5],
    1: [2, 1, 2, 3, 2, 4, 2, 5],
    2: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  for (let i = 0; i < Object.keys(math).length; i++) {
    let count = 0;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === math[i][j % math[i].length]) {
        count += 1;
      }
    }
    result.push(count);
  }

  const findIndex = [];
  result.filter((el, index) => {
    if (el === Math.max(...result)) {
      return findIndex.push(index + 1);
    }
  });

  return findIndex.sort((a, b) => a - b);
}