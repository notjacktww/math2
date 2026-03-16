import { useNavigate, useParams } from 'react-router-dom';
import { DATA } from '../data/questions';
import { useProgress } from '../hooks/useProgress';
import MasteryBadge from '../components/MasteryBadge';
import ProgressBar from '../components/ProgressBar';
import SectionCard from '../components/SectionCard';

export default function TestView() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { getTestStats, getSectionStats } = useProgress();

  const test = DATA.tests.find((t) => t.id === testId);
  if (!test) return <div className="page"><p>Test not found.</p></div>;

  const stats = getTestStats(test);

  return (
    <div className="page">
      <button className="btn-back" onClick={() => navigate('/')}>← Dashboard</button>

      <div className="view-header">
        <div>
          <h1>{test.name}</h1>
          <div className="muted">{test.date}</div>
        </div>
        <MasteryBadge pct={stats.pct} />
      </div>

      <ProgressBar pct={stats.pct} color={test.color} />
      <div className="muted mt-sm">
        {stats.answered} / {test.sections.reduce((a, s) => a + s.questions.length, 0)} questions rated
      </div>

      <div className="section-gap" />

      <div className="sections-list">
        {test.sections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            stats={getSectionStats(section)}
            testColor={test.color}
          />
        ))}
      </div>

      <div className="section-gap" />

      <button
        className="btn btn-primary"
        style={{ background: test.color, borderColor: test.color }}
        onClick={() => navigate(`/study/${test.id}`)}
      >
        Study {test.name}
      </button>
    </div>
  );
}
