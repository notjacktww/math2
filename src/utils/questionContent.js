const SPLIT_MARKERS = [
  '\n\nApply ',
  '\n\nUse ',
  '\n\nStart from ',
  '\n\nDifferentiate ',
  '\n\nIntegrate ',
  '\n\nRecognize ',
  '\n\nFactor ',
  '\n\nCheck ',
  '\n\nCentred at ',
  '\n\nIdentify as ',
  '\n\nSimilar to ',
  '\n\nIn ',
  '\n\nAdd the series ',
  '\n\nSubtract ',
  '\n\nReplace ',
  '\n\nSubstitute ',
  '\n\nEndpoint check',
  '\n\nDirect comparison',
  '\n\nDivergence test',
  '\n\nRatio Test',
  '\n\nRoot Test',
  '\n\nIntegral test',
  '\n\nLimit Comparison',
  '\n\nGeometric',
  '\n\nThis is ',
  '\n\nAt endpoints',
  '\n\nConverges ',
  '\n\nSeries:',
  '\n\nCompute ',
  '\n\nSimplify:',
  '\n\nNeed ',
  '\n\nError ',
  '\n\nTry ',
  '\n\nAbsolutely convergent',
  '\n\nConditionally convergent',
  '\n\nThis confirms',
  '\n\n$|R_',
  '. Centred at ',
  '. Identify as ',
  '. Similar to ',
  '. In ',
  '. Add the series ',
  '. Subtract ',
  '. Apply ',
  '. Use ',
  '. Start from ',
  '. Differentiate ',
  '. Integrate ',
  '. Recognize ',
  '. Factor ',
  '. Check ',
  '. Replace ',
  '. Substitute ',
  '. Endpoint check',
  '. Direct comparison',
  '. Divergence test',
  '. Ratio Test',
  '. Root Test',
  '. Integral test',
  '. Limit Comparison',
  '. Geometric',
  '. This is ',
  '. At endpoints',
  '. Converges ',
  '. Series:',
  '. Compute ',
  '. Simplify:',
  '. Need ',
  '. Error ',
  '. Try ',
  '. Absolutely convergent',
  '. Conditionally convergent',
  '. This confirms',
  '. Show ',
  '. Find the smallest ',
  '. Compare with ',
  '. Limit Comparison with ',
  '. The radius of convergence is ',
  '. Differentiation does not change the radius',
  '. Integration does not change the radius',
  '. Geometric series with ',
  '. Geometric with ',
  '. $|R_',
  '? Apply ',
  '? Use ',
  '? Need ',
  '? Error ',
  '? Try ',
  '? Show ',
];

function extractEmbeddedNotes(text) {
  let splitAt = -1;

  for (const marker of SPLIT_MARKERS) {
    const idx = text.indexOf(marker);
    if (idx > 0 && (splitAt === -1 || idx < splitAt)) splitAt = idx;
  }

  if (splitAt === -1) return { prompt: text, notes: '' };

  return {
    prompt: text.slice(0, splitAt).trim(),
    notes: text
      .slice(splitAt)
      .replace(/^[\s.?:;-]+/, '')
      .trim(),
  };
}

export function getQuestionDisplay(question) {
  const explicitSolution = typeof question.solution === 'string' ? question.solution.trim() : '';

  if (explicitSolution) {
    return {
      prompt: question.text,
      solution: explicitSolution,
      placeholder: false,
      extracted: false,
    };
  }

  const { prompt, notes } = extractEmbeddedNotes(question.text);
  if (notes) {
    return {
      prompt,
      solution: notes,
      placeholder: false,
      extracted: true,
    };
  }

  return {
    prompt: question.text,
    solution: 'No solution has been attached for this question yet.',
    placeholder: true,
    extracted: false,
  };
}
