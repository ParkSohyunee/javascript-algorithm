function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].length > 10) continue; // 한번씩 사용한 조합은 최대 10자리

    let copiedWord = babbling[i];
    let isDuplicated = new Array(word.length).fill(false); // 2번 이상 등장하는지 체크

    while (copiedWord.length > 0) {
      let initialLength = copiedWord.length;

      for (let i = 0; i < word.length; i++) {
        const indexOfWord = copiedWord.indexOf(word[i]);

        if (indexOfWord === 0) {
          if (isDuplicated[i]) break; // 등장한 단어면 탈출
          copiedWord = copiedWord.slice(word[i].length);
          isDuplicated[i] = true;
        }
      }
      if (initialLength === copiedWord.length) {
        break; // while문 탈출
      }
      if (copiedWord.length === 0) {
        count++;
      }
    }
  }
  return count;
}