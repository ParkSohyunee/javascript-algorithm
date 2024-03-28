function solution(progresses, speeds) {
  const complete = [];
  const result = [];

  for (let i = 0; i < progresses.length; i++) {
    const time = Math.ceil((100 - progresses[i]) / speeds[i]);
    complete.push(time);
  }

  let max = complete[0];
  result.push(1);

  for (let i = 1; i < complete.length; i++) {
    if (complete[i] <= max) {
      result[result.length - 1] += 1;
    } else {
      max = complete[i];
      result.push(1);
    }
  }
  return result;
}