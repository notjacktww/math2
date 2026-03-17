import katex from 'katex';

// ── Unicode maps ──────────────────────────────────────────────────────────────
const SUP = {
  '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
  '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9',
  'ⁿ':'n','ˣ':'x','ᵏ':'k','ʳ':'r',
};
const SUB = {
  '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4',
  '₅':'5','₆':'6','₇':'7','₈':'8','₉':'9',
  'ₙ':'n','ₖ':'k','ₐ':'a','ₕ':'h','ₚ':'p',
};
const GREEK = {
  'α':'\\alpha','β':'\\beta','γ':'\\gamma','δ':'\\delta',
  'ε':'\\varepsilon','λ':'\\lambda','μ':'\\mu',
  'ω':'\\omega','Ω':'\\Omega','π':'\\pi',
  'φ':'\\varphi','ψ':'\\psi','σ':'\\sigma','τ':'\\tau',
  'ρ':'\\rho','θ':'\\theta','η':'\\eta','κ':'\\kappa',
  'ξ':'\\xi','ζ':'\\zeta',
  'Σ':'\\Sigma','Δ':'\\Delta','Λ':'\\Lambda','Φ':'\\Phi','Ψ':'\\Psi',
};

const SUP_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ]+/g;
const SUB_RE = /[₀₁₂₃₄₅₆₇₈₉ₙₖₐₕₚ]+/g;

function sups(s) { return s.split('').map(c => SUP[c] ?? c).join(''); }
function subs(s) { return s.split('').map(c => SUB[c] ?? c).join(''); }

// ── Convert a math expression string to LaTeX ─────────────────────────────────
function exprToLatex(e) {
  e = e.replace(/−/g, '-');
  e = e.replace(SUP_RE, m => `^{${sups(m)}}`);
  e = e.replace(SUB_RE, m => `_{${subs(m)}}`);
  for (const [u, l] of Object.entries(GREEK)) e = e.split(u).join(l + ' ');
  e = e.replace(/∞/g,'\\infty ').replace(/→/g,'\\to ').replace(/±/g,'\\pm ');
  e = e.replace(/≤/g,'\\leq').replace(/≥/g,'\\geq').replace(/≠/g,'\\neq');
  e = e.replace(/·/g,'\\cdot').replace(/×/g,'\\times');
  e = e.replace(/½/g,'\\tfrac{1}{2}').replace(/¼/g,'\\tfrac{1}{4}');
  e = e.replace(/(?<!\\)\bsin\b/g,'\\sin').replace(/(?<!\\)\bcos\b/g,'\\cos');
  e = e.replace(/(?<!\\)\btan\b/g,'\\tan').replace(/(?<!\\)\bcot\b/g,'\\cot');
  e = e.replace(/(?<!\\)\bsec\b/g,'\\sec').replace(/(?<!\\)\bcsc\b/g,'\\csc');
  e = e.replace(/(?<!\\)\bln\b/g,'\\ln').replace(/(?<!\\)\blog\b/g,'\\log');
  e = e.replace(/(?<!\\)\blim\b/g,'\\lim').replace(/(?<!\\)\barctan\b/g,'\\arctan');
  e = e.replace(/(?<!\\)\barcsin\b/g,'\\arcsin').replace(/(?<!\\)\barccos\b/g,'\\arccos');
  e = e.replace(/(?<!\\)\bexp\b/g,'\\exp');
  // Nested e^(...) inside expressions
  e = e.replace(/e\^\(([^)]+)\)/g, (_, inner) => `e^{${exprToLatex(inner)}}`);
  // x^(...) inside expressions
  e = e.replace(/([A-Za-z0-9}])\^\(([^)]+)\)/g, (_, b, inner) => `${b}^{${exprToLatex(inner)}}`);
  // sqrt and cube root
  e = e.replace(/∛\(([^)]+)\)/g, (_, inner) => `\\sqrt[3]{${exprToLatex(inner)}}`);
  e = e.replace(/∛([A-Za-z0-9])/g, '\\sqrt[3]{$1}');
  e = e.replace(/√\(([^)]+)\)/g, (_, inner) => `\\sqrt{${exprToLatex(inner)}}`);
  e = e.replace(/√([0-9]+|[A-Za-z])/g, '\\sqrt{$1}');
  return e;
}

function renderK(latex) {
  const block = /\\int|\\sum(?!_)|\\prod/.test(latex);
  try {
    return {
      html: katex.renderToString(latex, { throwOnError: false, output: 'html', displayMode: block }),
      block,
    };
  } catch {
    return { html: latex, block: false };
  }
}

// ── Marker helpers ────────────────────────────────────────────────────────────
const MS = '\x02';  // start
const ME = '\x03';  // end

function mark(latex) { return `${MS}${latex}${ME}`; }

// ── Derivative-order helper ───────────────────────────────────────────────────
const SUP_ORD = { '²': '2', '³': '3', '⁴': '4', '⁵': '5' };

function derivFrac(n, f, v) {
  // n = '' | '2' | '3' …,  f = function letter,  v = variable letter
  if (!n) return `\\dfrac{d${f}}{d${v}}`;
  return `\\dfrac{d^{${n}}${f}}{d${v}^{${n}}}`;
}

// ── Main substitution pass ────────────────────────────────────────────────────
function applyPatterns(text) {
  let t = text;

  // ── 1. Higher-order derivatives with unicode superscripts ────────────────
  // e.g. d²y/dx², d³T/dr³, d⁴y/dx⁴
  t = t.replace(/d([²³⁴⁵])([A-Za-z])\/d([a-z])\1/g, (_, sup, f, v) =>
    mark(derivFrac(SUP_ORD[sup], f, v))
  );

  // ── 2. First-order derivatives dy/dx, dT/dr etc. ────────────────────────
  t = t.replace(/d([A-Za-z])\/d([a-z])(?=[^A-Za-z]|$)/g, (_, f, v) =>
    mark(derivFrac('', f, v))
  );

  // ── 3. d²y/dx² where the power appears AFTER the whole numerator/denom ──
  // Handle leftover patterns like "x²d²y/dx²" — the d²y/dx² may not match
  // above if the denominator superscript doesn't match.  Cover generic case:
  t = t.replace(/d([²³⁴⁵]?)([A-Za-z])\/d([a-z])([²³⁴⁵]?)/g, (_, s1, f, v, s2) => {
    const n = SUP_ORD[s1 || s2] ?? '';
    return mark(derivFrac(n, f, v));
  });

  // ── 3.5. Fractions ────────────────────────────────────────────────────────
  // A "simple math token": single letter (incl. Greek) + optional sub/sup + optional !
  //                      OR  an integer / decimal  + optional !
  // Ordered most-specific → least-specific to avoid partial matches.

  // F1: (expr)/(expr) – both sides parenthesized; skip when numerator follows ^
  t = t.replace(/(?<!\^)\(([^()]+)\)\/\(([^()]+)\)(!?)/g, (_, n, d, bang) => {
    const den = bang ? `(${exprToLatex(d)})!` : exprToLatex(d);
    return mark(`\\frac{${exprToLatex(n)}}{${den}}`);
  });

  // F2: simple_token/(expr) – simple numerator, parenthesized denominator
  t = t.replace(
    /([A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ][₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ]*!?|[0-9]+\.?[0-9]*!?)\/\(([^()]+)\)(!?)/g,
    (_, n, d, bang) => {
      const den = bang ? `(${exprToLatex(d)})!` : exprToLatex(d);
      return mark(`\\frac{${exprToLatex(n)}}{${den}}`);
    }
  );

  // F3: (expr)/simple_token – parenthesized numerator, simple denominator
  t = t.replace(
    /(?<!\^)\(([^()]+)\)\/([A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ][₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ]*!?|[0-9]+\.?[0-9]*!?)/g,
    (_, n, d) => mark(`\\frac{${exprToLatex(n)}}{${exprToLatex(d)}}`)
  );

  // F4: simple_token/simple_token – must sit at a token boundary (not mid-word)
  t = t.replace(
    /(?<![A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ0-9₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ])([A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ][₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ]*!?|[0-9]+\.?[0-9]*!?)\/([A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ][₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ]*!?|[0-9]+\.?[0-9]*!?)(?![A-Za-zαβγδεζηθκλμξπρστφψωΩΣΔΛΦΨ0-9₀₁₂₃₄₅₆₇₈₉ₙₖₐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣᵏʳ])/g,
    (_, n, d) => mark(`\\frac{${exprToLatex(n)}}{${exprToLatex(d)}}`)
  );

  // ── 4. e^(expression) ────────────────────────────────────────────────────
  t = t.replace(/e\^\(([^)]+)\)/g, (_, inner) =>
    mark(`e^{${exprToLatex(inner)}}`)
  );

  // ── 5. generic base^(expression) where base is a single letter/digit ─────
  t = t.replace(/([A-Za-z0-9])(?<!\^)\^\(([^)]+)\)/g, (_, base, inner) =>
    mark(`${base}^{${exprToLatex(inner)}}`)
  );

  // ── 6. sqrt / cube root ──────────────────────────────────────────────────
  t = t.replace(/∛\(([^)]+)\)/g, (_, inner) =>
    mark(`\\sqrt[3]{${exprToLatex(inner)}}`)
  );
  t = t.replace(/∛([A-Za-z0-9])/g, (_, x) => mark(`\\sqrt[3]{${x}}`));
  t = t.replace(/√\(([^)]+)\)/g, (_, inner) =>
    mark(`\\sqrt{${exprToLatex(inner)}}`)
  );
  t = t.replace(/√([0-9]+|[A-Za-z])/g, (_, x) => mark(`\\sqrt{${x}}`));

  // ── 7. Subscripted variables: C₁, y₁, N₀, T_b-style ────────────────────
  // Letter immediately followed by one or more subscript digits/letters
  t = t.replace(/([A-Za-z])([₀₁₂₃₄₅₆₇₈₉ₙₖₐ]+)/g, (_, letter, sub) =>
    mark(`${letter}_{${subs(sub)}}`)
  );

  // ── 8. Superscripted letters/expressions ─────────────────────────────────
  // e.g. x², n³ (letter immediately followed by unicode superscript)
  t = t.replace(/([A-Za-z0-9])([²³⁴⁵]+)/g, (_, base, sup) =>
    mark(`${base}^{${sups(sup)}}`)
  );

  // ── 9. Greek letters ─────────────────────────────────────────────────────
  for (const [u, l] of Object.entries(GREEK)) {
    t = t.split(u).join(mark(l));
  }

  // ── 10. Special symbols ──────────────────────────────────────────────────
  const SYMS = [
    ['∞', '\\infty'], ['→', '\\to'], ['←', '\\leftarrow'],
    ['±', '\\pm'],    ['≤', '\\leq'],['≥', '\\geq'], ['≠', '\\neq'],
    ['·', '\\cdot'],  ['×', '\\times'],
    ['∫', '\\int'],   ['∑', '\\sum'], ['∂', '\\partial'],
    ['½', '\\tfrac{1}{2}'], ['¼', '\\tfrac{1}{4}'], ['¾', '\\tfrac{3}{4}'],
    ['=', '='],
  ];
  for (const [sym, latex] of SYMS) {
    t = t.split(sym).join(mark(latex));
  }

  // ── 11. y'  y''  y'''  y'''' (prime notation) ────────────────────────────
  // Use negative lookbehind/ahead to avoid double-matching
  // Single pass longest-first; negative lookbehind avoids matching mid-word
  t = t.replace(/(?<![A-Za-z])y('+)/g, (_, primes) => {
    const n = primes.length;
    if (n >= 4) return mark('y^{(4)}');
    if (n === 3) return mark("y'''");
    if (n === 2) return mark("y''");
    return mark("y'");
  });

  return t;
}

// ── Split already-marked text into math/text segments ────────────────────────
function splitMarked(marked) {
  const segments = [];
  let rest = marked;
  while (rest.length > 0) {
    const si = rest.indexOf(MS);
    if (si === -1) { if (rest) segments.push({ type: 'text', content: rest }); break; }
    if (si > 0)    segments.push({ type: 'text', content: rest.slice(0, si) });
    const ei = rest.indexOf(ME, si + 1);
    if (ei === -1) { segments.push({ type: 'text', content: rest.slice(si) }); break; }
    const latex = rest.slice(si + 1, ei);
    const { html, block } = renderK(latex);
    segments.push({ type: 'math', html, block });
    rest = rest.slice(ei + 1);
  }
  return segments;
}

// ── Render $...$ as a single KaTeX expression (whole expression, consistent font)
function inlineMath(src) {
  const { html, block } = renderK(exprToLatex(src));
  return { type: 'math', html, block };
}

// ── Parse one line: handle $...$, >>boxed<<, then fallback to pattern matching ─
function parseLine(line) {
  const segments = [];
  let rest = line;
  while (rest.length > 0) {
    const di = rest.indexOf('$');
    const bi = rest.indexOf('>>');
    // No special tokens — process the whole chunk normally
    if (di === -1 && bi === -1) { segments.push(...splitMarked(applyPatterns(rest))); break; }

    const first = Math.min(di === -1 ? Infinity : di, bi === -1 ? Infinity : bi);

    if (first === di) {
      // $...$ inline math — whole expression rendered as one KaTeX span
      if (di > 0) segments.push(...splitMarked(applyPatterns(rest.slice(0, di))));
      const close = rest.indexOf('$', di + 1);
      if (close === -1) { segments.push(...splitMarked(applyPatterns(rest))); break; }
      segments.push(inlineMath(rest.slice(di + 1, close)));
      rest = rest.slice(close + 1);
    } else {
      // >>...<< boxed answer
      if (bi > 0) segments.push(...splitMarked(applyPatterns(rest.slice(0, bi))));
      const close = rest.indexOf('<<', bi + 2);
      if (close === -1) { segments.push(...splitMarked(applyPatterns(rest))); break; }
      const inner = rest.slice(bi + 2, close);
      segments.push({ type: 'boxed', inner: parseLine(inner) });
      rest = rest.slice(close + 2);
    }
  }
  return segments;
}

// ── Main entry: split on \n, handle lines ────────────────────────────────────
export function parseText(text) {
  if (!text) return [{ type: 'text', content: '' }];
  const segments = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (i > 0) segments.push({ type: 'br' });
    segments.push(...parseLine(lines[i]));
  }
  return segments;
}
