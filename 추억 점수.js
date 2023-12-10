function solution(name, yearning, photo) {
  const answer = [];

  photo.forEach((p) => {
    let score = 0;
    p.forEach((n) => {
      const idx = name.indexOf(n);
      if (idx !== -1) {
        score += yearning[idx];
      }
    });
    answer.push(score);
  });

  return answer;
}
