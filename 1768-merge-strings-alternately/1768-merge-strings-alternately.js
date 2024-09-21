/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let answer = "";

  const longerWord = word1.length > word2.length ? word1 : word2;

  for (let i = 0; i < longerWord.length; i++) {
    if (!word1[i]) {
      answer += word2[i];
    } else if (!word2[i]) {
      answer += word1[i];
    } else {
      answer += word1[i] + word2[i];
    }
  }
  return answer;
}