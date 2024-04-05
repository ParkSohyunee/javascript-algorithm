
function solution(babbling) {
  let result = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (const el of babbling) {
    let copiedEl = el;

    const isContainWord = words.some((word) => copiedEl.includes(word));
    if (!isContainWord) {
      continue; // 다음 el로 넘어가기
    }

    let checkWord = "";

    while (copiedEl.length > 0) {
      let initialLength = copiedEl.length;

      for (const word of words) {
        const indexOfWord = copiedEl.indexOf(word);

        if (indexOfWord === 0) {
          if (checkWord === word) {
            break; // for문 탈출
          }
          checkWord = word;
          copiedEl = copiedEl.slice(word.length);
        }
      }
      if (initialLength === copiedEl.length) {
        break; // while문 탈출
      }
      if (copiedEl.length === 0) {
        result += 1;
      }
    }
  }
  return result;
}