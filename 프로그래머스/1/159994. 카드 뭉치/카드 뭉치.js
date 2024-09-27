function solution(cards1, cards2, goal) {
  while (goal.length) {
    let firstWord = goal.shift();

    if (firstWord === cards1[0]) {
      cards1.shift();
    } else if (firstWord === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}