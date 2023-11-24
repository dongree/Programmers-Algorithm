// DFS 풀이 (효율성 테스트 실패)
// function solution(maps) {
//   const n = maps.length;
//   const m = maps[0].length;
//   const dy = [0, 1, 0, -1];
//   const dx = [1, 0, -1, 0];
//   let answer = -1;

//   const isVisited = Array(n)
//     .fill(false)
//     .map(() => Array(m).fill(false));

//   isVisited[0][0]=true;
//   dfs(0, 0, 1);

//   function dfs(y, x, cnt) {
//     if (y === n - 1 && x === m - 1) {
//       if (answer === -1 || answer > cnt) {
//         answer = cnt;
//       }
//       return;
//     }

//     for (let i = 0; i < 4; i++) {
//       const ny = y + dy[i];
//       const nx = x + dx[i];
//       if (inRange(ny, nx) && !isVisited[ny][nx]) {
//         isVisited[ny][nx] = true;
//         dfs(ny, nx, cnt + 1);
//         isVisited[ny][nx] = false;
//       }
//     }

//   }

//   function inRange(y, x) {
//     return 0 <= y && y < n && 0 <= x && x < m && maps[y][x] === 1;
//   }

//   return answer;
// }

// BFS 풀이
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const q = [];

  q.push([0, 0, 1]);

  while (q.length) {
    const [y, x, cnt] = q.shift();

    if (y === n - 1 && x === m - 1) return cnt;

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (inRange(ny, nx)) {
        maps[ny][nx] = 0;
        q.push([ny, nx, cnt + 1]);
      }
    }
  }

  function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < m && maps[y][x] === 1;
  }

  return -1;
}
