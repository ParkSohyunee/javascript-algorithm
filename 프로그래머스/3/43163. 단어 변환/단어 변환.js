
function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const stack = [];
  let beginWord = begin;
  let count = 0;

  // 방문한 노드를 체크하는 배열
  const visited = new Array(words.length).fill(false);

  // 배열을 돌면서
  for (let i = 0; i < words.length; i++) {
    stack.push(words[i]);

    let check = false;

    while (stack.length > 0 && !check) {
      let word = stack.pop();
      let chance = 3;

      for (j = 0; j < word.length; j++) {
        if (word[j] !== beginWord[j]) {
          chance--;
        }
      }
      if (chance === 2) {
        beginWord = words[i];
        count++;
        break;
      } else if (chance <= 1) {
        stack.push(word);
        check = true;
      }
    }

    let changeCount = 0;

    // 변경한 횟수(count)가 target까지 1번만 남았을때 +1 리턴
    for (k = 0; k < beginWord.length; k++) {
      if (beginWord[k] === target[k]) {
        changeCount++;
      }
    }

    if (target.length - changeCount === 1) {
      return count + 1;
    }
  }
}