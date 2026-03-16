import { masteryColor } from '../utils/scoring';

export default function MasteryBadge({ pct }) {
  const cls = masteryColor(pct);
  return (
    <span className={`mastery-badge ${cls}`}>
      {pct}%
    </span>
  );
}
