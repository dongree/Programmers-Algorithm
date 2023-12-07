function solution(n, a, b) {
  let cnt = 1;
  while (!(Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0)) {
    cnt++;
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
  }
  return cnt;
}
