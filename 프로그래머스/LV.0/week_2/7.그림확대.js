// 1. 문제
// 직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
// 이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
// 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 2. 풀이
function solution(picture, k) {
  // 가로길이 k배 늘리기
  let row = [];
  for (i = 0; i < picture.length; i++) {
    let str = "";
    for (let j = 0; j < picture[i].length; j++) {
      str += picture[i][j].repeat(k); // 각 배열의 원소의 원소를 k배 만큼 반복
    }
    row.push(str);
  }
  // 세로길이 k배 늘리기
  return row.reduce((acc, cur) => {
    let result = [];
    for (let i = 0; i < k; i++) {
      result.push(cur);
    }
    return [...acc, ...result]; // Array ["...", "...", ...]
  }, []);
}

// 3. ** for 반복문을 forEach를 사용해서 리팩토링
function solution(picture, k) {
  let answer = [];
  picture.forEach((el) => {
    // 각 원소를 k배 늘리기 (가로)
    const row = [...el].reduce((acc, cur) => acc + cur.repeat(k), ""); // 초깃값을 ''으로 설정

    // 각 원소를 k배 늘리기 (세로)
    for (let i = 0; i < k; i++) answer.push(row);
  });
}
