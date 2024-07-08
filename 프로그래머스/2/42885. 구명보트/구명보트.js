// 그리디
function solution(people, limit) {
  let result = 0;

  people.sort((a, b) => a - b);

  while (people.length > 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      result += 1;
      people.pop();
      people.shift();
    } else {
      result += 1;
      people.pop();
    }
  }
  return result;
}