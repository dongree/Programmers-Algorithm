function solution(m, n, puddles) {
  const MOD = 1000000007;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));
  for (puddle of puddles) {
    const [x, y] = puddle;
    dp[y][x] = -1;
  }

  dp[1][1] = 1;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if ((i === 1 && j === 1) || dp[i][j] === -1) continue;
      dp[i][j] =
        ((dp[i - 1][j] === -1 ? 0 : dp[i - 1][j]) +
          (dp[i][j - 1] === -1 ? 0 : dp[i][j - 1])) %
        MOD;
    }
  }

  return dp[n][m];
}
