// 최대 공약수 구하기 - 유클리드 호제법
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// 두 수의 최소 공배수(lcm) = 두 수의 곱 / 최대공약수(gcd)
function solution(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let lcm = arr[0];
  let gcdVaule;

  for (let i = 1; i < arr.length; i++) {
    gcdVaule = gcd(lcm, arr[i]);

    if (i === 1) {
      lcm = (arr[0] * arr[i]) / gcdVaule;
    } else {
      lcm = (lcm * arr[i]) / gcdVaule;
    }
  }
  return lcm;
}