import { useNavigate } from 'react-router-dom';
import MasteryBadge from './MasteryBadge';
import ProgressBar from './ProgressBar';

export default function TestCard({ test, stats }) {
  const navigate = useNavigate();
  const total = test.sections.reduce((a, s) => a + s.questions.length, 0);
  return (
    <div className="test-card" style={{ '--test-accent': test.color }}>
      <div className="test-card-header">
        <div>
          <h2 className="test-card-name">{test.name}</h2>
          <div className="test-card-date">{test.date}</div>
        </div>
        <MasteryBadge pct={stats.pct} />
      </div>
      <ProgressBar pct={stats.pct} color={test.color} height={6} />
      <div className="test-card-meta">
        {stats.answered} / {total} questions rated
      </div>
      <div className="test-card-actions">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/test/${test.id}`)}
        >
          View sections
        </button>
        <button
          className="btn btn-primary"
          style={{ background: test.color, borderColor: test.color, boxShadow: `0 2px 12px ${test.color}44` }}
          onClick={() => navigate(`/study/${test.id}`)}
        >
          Study {test.name}
        </button>
      </div>
    </div>
  );
}
