function solution(phone_book) {
  const hash = new Map();

  let checkLength = 1;
  let result = true;

  for (let i = 0; i < phone_book.length; i++) {
    if (i === 0) {
      checkLength = phone_book[i].length;
    } else if (checkLength > phone_book[i].length) {
      checkLength = phone_book[i].length;
    }
  }

  phone_book.forEach((el) => {
    const key = Number(el.slice(0, checkLength));

    if (!result) return;

    if (hash.has(key)) {
      // 키가 이미 있다면 그 key에 해당하는 value와 el이 접두어 관계인지 확인
      const value = hash.get(key);
      // value와 el의 길이를 비교해서 includes 확인
      const comparison =
        value.length > el.length ? value.includes(el) : el.includes(value);
      result = comparison ? false : true;
    } else {
      hash.set(key, el);
      result = true;
    }
  });
  return result;
}