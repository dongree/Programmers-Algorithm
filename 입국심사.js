function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let result = 0;
    for (const time of times) {
      result += Math.floor(mid / time);
      if (result >= n) break;
    }
    if (result >= n) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}
