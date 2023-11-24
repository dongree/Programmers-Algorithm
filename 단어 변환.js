function solution(begin, target, words) {
  let answer = Infinity;
  const isVisited = Array(words.length).fill(false);

  dfs(begin, 0);

  function dfs(str, cnt) {
    if (str === target && answer > cnt) {
      answer = cnt;
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!isVisited[i] && isChangable(str, words[i])) {
        isVisited[i] = true;
        dfs(words[i], cnt + 1);
        isVisited[i] = false;
      }
    }
  }

  return answer === Infinity ? 0 : answer;
}

function isChangable(a, b) {
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) cnt++;
  }
  return cnt === 1;
}
