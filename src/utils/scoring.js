export function getSectionStats(section, scores) {
  let earned = 0;
  let answered = 0;
  const total = section.questions.length * 2;
  section.questions.forEach((_, i) => {
    const key = `${section.id}_${i}`;
    const s = scores[key];
    if (s !== null && s !== undefined) {
      earned += s;
      answered++;
    }
  });
  const pct = total === 0 ? 0 : Math.round((earned / total) * 100);
  return { earned, total, answered, pct };
}

export function getTestStats(test, scores) {
  let earned = 0;
  let total = 0;
  let answered = 0;
  test.sections.forEach((section) => {
    const s = getSectionStats(section, scores);
    earned += s.earned;
    total += s.total;
    answered += s.answered;
  });
  const pct = total === 0 ? 0 : Math.round((earned / total) * 100);
  return { earned, total, answered, pct };
}

export function getAllStats(tests, scores) {
  let earned = 0;
  let total = 0;
  let answered = 0;
  tests.forEach((test) => {
    const s = getTestStats(test, scores);
    earned += s.earned;
    total += s.total;
    answered += s.answered;
  });
  const pct = total === 0 ? 0 : Math.round((earned / total) * 100);
  const xp = earned * 10;
  return { earned, total, answered, pct, xp };
}

export function masteryColor(pct) {
  if (pct >= 80) return 'mastery-green';
  if (pct >= 50) return 'mastery-amber';
  return 'mastery-red';
}
