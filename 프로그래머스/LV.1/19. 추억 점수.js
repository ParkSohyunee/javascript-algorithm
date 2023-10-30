/**
 * [문제] 추억 점수
 * 그리워하는 사람의 이름을 담은 문자열 배열 name
 * 각 사람별 그리움 점수를 담은 정수 배열 yearning
 * 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수
 * 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성
 */

function solution(name, yearning, photo) {
  let result = [];

  // name과 yearining을 매칭하는 객체를 만든다.
  const nameAndYearning = {};
  for (let i = 0; i < name.length; i++) {
    nameAndYearning[name[i]] = yearning[i];
  }

  // photo를 반복하면서 그리움을 더한다.
  photo.flatMap((photoNames) => {
    let sum = 0;

    for (let i = 0; i < photoNames.length; i++) {
      const yearning = nameAndYearning[photoNames[i]];
      yearning ? (sum += yearning) : (sum += 0);
    }
    result.push(sum);
  });

  return result;
}

/** Test Case */
solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
// [19, 15, 6]

/**
 * 다른 풀이
 */

function solutionAnother(name, yearning, photo) {
  // name과 yearining을 매칭하는 객체를 만든다.
  const nameAndYearning = {};
  for (let i = 0; i < name.length; i++) {
    nameAndYearning[name[i]] = yearning[i];
  }

  // flatMap 대신 map을 두번 사용하고, reduce로 누적 더하기
  return photo.map((photolist) =>
    photolist
      .map((person) => (nameAndYearning[person] ? nameAndYearning[person] : 0))
      .reduce((acc, cur) => acc + cur, 0)
  );
}
