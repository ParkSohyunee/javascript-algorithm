// 1. 문제
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 
// 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 2. 풀이
function solution(my_string, overwrite_string, s) {
    let answer = ''
    
    const firstStr = my_string.slice(0, s)
    const lastStr = my_string.slice(s + overwrite_string.length)
    
    answer = firstStr + overwrite_string + lastStr
    
    return answer
}

// 3. 공부

// 오답 => 만약, overwrite_string이 반복되어 나온다면 replace 매서드를 사용했을 때 다른 위치의 동일한 문자를 대체할 가능성이 있음
my_string.replace(my_string.slice(s, s + overwrite_string.length), overwrite_string)

// Differences between substring() and slice()
// 둘다 문자열을 인덱스 길이만큼 반환하는 매서드로 사용방법도 거의 동일하지만, 음수를 처리하는 방식에 있어서 미묘하게 다르다.

// substring() 
// => indexStart가 indexEnd보다 크면 두 인수를 스왑(swap)하여 문자열을 반환한다.
// => 인수 중 하나 또는 둘 다 음수이거나 NaN인 경우, 인수를 0인 것처럼 처리합니다.

// slice() 
// => indexStart가 indexEnd보다 크면 빈 문자열("")을 반환한다.
// => slice()도 NaN 인수를 0으로 처리하지만 음수 값이 지정되면, 문자열 끝에서 거꾸로 계산하여 인덱스를 찾습니다.
// 단, 세번째 예시처럼 (indexEnd <= indexStart)가 음수 값을 정규화한 후(즉, indexEnd가 indexStart "이전의 문자"를 나타내는 경우) 빈 문자열이 반환됩니다.

const text = "Mozilla";
// 예시 1.
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
// 예시 2.
console.log(text.substring(-5, 2)); // "Mo" => 즉, (0, 2)와 동일
console.log(text.slice(-5, 2)); // ""
// 예시 3.
console.log(text.substring(-5, -2)); // ""
console.log(text.slice(-5, -2)); // "zil"
// 예시 4.
console.log(text.slice(-5, 3)); // "z"