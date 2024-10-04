function solution(n, words) {
  let postLastWord;
  let currentFirstWord;

  for (let i = 0; i < words.length; i++) {
    let number = (i % n) + 1;
    let order = Math.ceil((i + 1) / n);

    let slicedArray = words.slice(0, i);
    let isPassWordLength = words[i].length > 1;

    if (!isPassWordLength || slicedArray.includes(words[i])) {
      return [number, order];
    }

    if (i === 0) continue;

    postLastWord = words[i - 1][words[i - 1].length - 1];
    currentFirstWord = words[i][0];

    if (!isPassWordLength || postLastWord !== currentFirstWord) {
      return [number, order];
    }
  }
  return [0, 0];
}
