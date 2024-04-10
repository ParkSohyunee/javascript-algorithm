function solution(s, skip, index) {
  // 최종 풀이
  let result = "";

  // skip을 제외한 알파벳 배열
  const alphabet = Array.from({ length: 26 }, (_, index) => {
    return String.fromCharCode(97 + index);
  });

  const filterdAlphabet = alphabet.filter((el) => !skip.includes(el));

  // index를 건너뛴 변경할 문자 찾기
  let changeChar;

  for (let i = 0; i < s.length; i++) {
    const position = filterdAlphabet.indexOf(s[i]);
    changeChar = position + index;

    while (changeChar >= filterdAlphabet.length) {
      changeChar -= filterdAlphabet.length;
    }
    result += filterdAlphabet[changeChar];
  }
  return result;
}

// 처음 풀이 - 알파벳 배열을 1번 이상 건너 뛸 때 반례 미처리로 주석 처리
// function solution(s, skip, index) {
//   let result = "";

//   const alphabet = Array.from({ length: 26 }, (_, index) => {
//     return String.fromCharCode(97 + index);
//   });

//   for (let i = 0; i < s.length; i++) {
//     let skipCount = 0;
//     const position = alphabet.indexOf(s[i]);

//     // index까지 계산할 때, skip에 해당하는 문자가 포함된 개수 count
//     for (let i = 1; i <= index; i++) {
//       let changeIndex;

//       if (position + i >= alphabet.length) {
//         changeIndex = position + i - alphabet.length;
//       } else {
//         changeIndex = position + i;
//       }

//       if (skip.includes(alphabet[changeIndex])) skipCount++;
//     }

//     // index + skip count를 건너뛴 변경할 문자 찾기
//     let changeChar;
//     if (position + index + skipCount >= alphabet.length) {
//       changeChar = position + index + skipCount - alphabet.length;
//     } else {
//       changeChar = position + index + skipCount;
//     }

//     // 찾은 문자열이 skip에 포함되어 있다면 다음 문자 찾기
//     while (skip.includes(alphabet[changeChar])) {
//       changeChar++;
//     }

//     result += alphabet[changeChar];
//   }
//   return result;
// }