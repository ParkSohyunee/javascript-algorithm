function solution(numbers, target) {
  let count = 0;

  function sum_numbers(order, sum) {
    if (order === numbers.length) {
      // 만약, 다 더했을 때 target이 나오면 +1
      if (sum === target) {
        count += 1;
      }
      return;
    }
    sum_numbers(order + 1, sum + numbers[order]);
    sum_numbers(order + 1, sum - numbers[order]);
  }

  sum_numbers(0, 0);

  return count;
}