import { parseText } from '../utils/mathParser';

function renderSeg(seg, i) {
  if (seg.type === 'math') {
    if (seg.block) return <div key={i} className="math-block" dangerouslySetInnerHTML={{ __html: seg.html }} />;
    return <span key={i} dangerouslySetInnerHTML={{ __html: seg.html }} />;
  }
  if (seg.type === 'boxed') {
    return (
      <div key={i} className="answer-box">
        {seg.inner.map((s, j) => renderSeg(s, j))}
      </div>
    );
  }
  return <span key={i}>{seg.content}</span>;
}

export default function MathText({ text, className }) {
  const segments = parseText(text);

  // Group segments into logical lines (split on 'br'), then render each line
  // in a nowrap container so equations never break mid-line.
  const lines = [];
  let current = [];
  for (const seg of segments) {
    if (seg.type === 'br') {
      lines.push(current);
      current = [];
    } else {
      current.push(seg);
    }
  }
  lines.push(current);

  return (
    <div className={className}>
      {lines.map((line, li) => (
        <div key={li} className="math-line">
          {line.map((seg, i) => renderSeg(seg, i))}
        </div>
      ))}
    </div>
  );
}
