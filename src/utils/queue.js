function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildQueue(questions, scores) {
  // questions: array of { sectionId, questionIndex, question, section }
  const missed = [];
  const partial = [];
  const unseen = [];
  const mastered = [];

  questions.forEach((item) => {
    const key = `${item.sectionId}_${item.questionIndex}`;
    const score = scores[key];
    if (score === 0) missed.push(item);
    else if (score === 1) partial.push(item);
    else if (score === null || score === undefined) unseen.push(item);
    else mastered.push(item);
  });

  return [
    ...shuffle(missed),
    ...shuffle(partial),
    ...shuffle(unseen),
    ...shuffle(mastered),
  ];
}

export function getQuestionsForScope(scope, data) {
  const questions = [];

  if (scope === 'all') {
    data.tests.forEach((test) => {
      test.sections.forEach((section) => {
        section.questions.forEach((q, i) => {
          questions.push({ sectionId: section.id, questionIndex: i, question: q, section, test });
        });
      });
    });
  } else {
    // Check if it's a test id
    const test = data.tests.find((t) => t.id === scope);
    if (test) {
      test.sections.forEach((section) => {
        section.questions.forEach((q, i) => {
          questions.push({ sectionId: section.id, questionIndex: i, question: q, section, test });
        });
      });
    } else {
      // Try section id
      data.tests.forEach((test) => {
        const section = test.sections.find((s) => s.id === scope);
        if (section) {
          section.questions.forEach((q, i) => {
            questions.push({ sectionId: section.id, questionIndex: i, question: q, section, test });
          });
        }
      });
    }
  }

  return questions;
}
