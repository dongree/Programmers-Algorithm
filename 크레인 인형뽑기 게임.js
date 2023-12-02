function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      if (item !== 0) {
        bucket.push(item);
        board[i][move - 1] = 0;
        break;
      }
    }
    if (bucket.length >= 2) {
      if (bucket[bucket.length - 1] === bucket[bucket.length - 2]) {
        bucket.pop();
        bucket.pop();
        answer += 2;
      }
    }
  }

  return answer;
}
