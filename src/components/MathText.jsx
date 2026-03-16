import { parseText } from '../utils/mathParser';

function renderSeg(seg, i) {
  if (seg.type === 'br') return <br key={i} />;
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
  return (
    <div className={className}>
      {segments.map((seg, i) => renderSeg(seg, i))}
    </div>
  );
}
