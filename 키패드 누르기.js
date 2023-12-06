function solution(numbers, hand) {
  let answer = '';

  const keypadPos = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  let lPos = [3, 0];
  let rPos = [3, 2];

  for (num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      lPos = keypadPos[num];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      rPos = keypadPos[num];
    } else {
      let lDist =
        Math.abs(keypadPos[num][0] - lPos[0]) +
        Math.abs(keypadPos[num][1] - lPos[1]);
      let rDist =
        Math.abs(keypadPos[num][0] - rPos[0]) +
        Math.abs(keypadPos[num][1] - rPos[1]);
      if (lDist < rDist) {
        answer += 'L';
        lPos = keypadPos[num];
      } else if (lDist > rDist) {
        answer += 'R';
        rPos = keypadPos[num];
      } else {
        if (hand === 'left') {
          answer += 'L';
          lPos = keypadPos[num];
        } else {
          answer += 'R';
          rPos = keypadPos[num];
        }
      }
    }
  }
  return answer;
}
