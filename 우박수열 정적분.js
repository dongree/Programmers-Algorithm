function solution(k, ranges) {
  const graph = [k];
  const widths = [];
  const answer = [];

  while (k !== 1) {
    k = k % 2 === 0 ? k / 2 : k * 3 + 1;
    graph.push(k);
  }

  const n = graph.length;

  for (let i = 0; i < n - 1; i++) {
    const a = graph[i];
    const b = graph[i + 1];
    const width = Math.min(a, b) + Math.abs(a - b) / 2;
    widths.push(width);
  }

  ranges.forEach((range) => {
    const [a, b] = range;
    const x1 = a;
    const x2 = n + b - 1;
    if (x2 < x1) {
      answer.push(-1);
      return;
    }
    let result = 0;
    for (let i = x1; i < x2; i++) {
      result += widths[i];
    }
    answer.push(result);
  });
  return answer;
}
