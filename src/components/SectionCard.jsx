import { useNavigate } from 'react-router-dom';
import MasteryBadge from './MasteryBadge';
import ProgressBar from './ProgressBar';

export default function SectionCard({ section, stats, testColor }) {
  const navigate = useNavigate();
  return (
    <div
      className="section-card"
      onClick={() => navigate(`/section/${section.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="section-card-header">
        <span className="section-card-name">{section.name}</span>
        <MasteryBadge pct={stats.pct} />
      </div>
      <ProgressBar pct={stats.pct} color={testColor} height={5} />
      <div className="section-card-meta">
        {stats.answered} / {section.questions.length} questions rated
      </div>
    </div>
  );
}
