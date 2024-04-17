/**
 * 접근 - 3과 30으로 큰 수를 만들 때 330, 303이 있다.
 * 즉, 3은 30, 31, 32 보다는 앞에 위치해야 하지만, 34보다는 뒤에 위치해야 한다.
 * 3을 33으로 생각하면 34와 비교하기 쉽다.
 * 마찬가지로 1,000 이하 이므로, 숫자를 4자리까지 이어 붙여본다.
 *  */

function solution(numbers) {
  let result = "";
  const newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    let word = numbers[i] + "";

    if (word.length === 4) {
      newArray.push([Number(word), numbers[i]]);
      continue;
    }
    while (word.length < 4) {
      word += word;
    }
    newArray.push([word.slice(0, 4), numbers[i]]);
  }

  newArray.sort((a, b) => Number(b[0]) - Number(a[0]));
  if (newArray[0][1] === 0) {
    return String(0);
  }

  newArray.map((number) => (result += number[1]));
  return result;
}