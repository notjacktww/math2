import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DATA } from '../data/questions';
import { useProgress } from '../hooks/useProgress';
import MasteryBadge from '../components/MasteryBadge';
import ProgressBar from '../components/ProgressBar';
import MathText from '../components/MathText';

const RATING_LABELS = { 2: 'Got it', 1: 'Partial', 0: 'Missed' };
const RATING_CLASSES = { 2: 'rating-green', 1: 'rating-amber', 0: 'rating-red' };

export default function SectionView() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const { getSectionStats, getScore } = useProgress();
  const [openPtypes, setOpenPtypes] = useState({});

  let section = null;
  let test = null;
  for (const t of DATA.tests) {
    const s = t.sections.find((s) => s.id === sectionId);
    if (s) { section = s; test = t; break; }
  }

  if (!section) return <div className="page"><p>Section not found.</p></div>;

  const stats = getSectionStats(section);

  const togglePtype = (ptypeId) => {
    setOpenPtypes((prev) => ({ ...prev, [ptypeId]: !prev[ptypeId] }));
  };

  // Group questions by ptype
  const grouped = {};
  section.ptypes.forEach((pt) => { grouped[pt.id] = []; });
  section.questions.forEach((q, i) => {
    if (!grouped[q.ptype]) grouped[q.ptype] = [];
    grouped[q.ptype].push({ q, i });
  });

  return (
    <div className="page">
      <div className="breadcrumb">
        <button className="btn-back" onClick={() => navigate('/')}>← Dashboard</button>
        <span className="breadcrumb-sep">/</span>
        <button className="btn-back" onClick={() => navigate(`/test/${test.id}`)}>← {test.name}</button>
      </div>

      <div className="view-header">
        <div>
          <h1>{section.name}</h1>
        </div>
        <MasteryBadge pct={stats.pct} />
      </div>

      <ProgressBar pct={stats.pct} color={test.color} />
      <div className="muted mt-sm">
        {stats.answered}/{section.questions.length} rated · {stats.earned}/{stats.total} pts
      </div>

      <div className="section-gap" />

      {section.ptypes.map((pt) => {
        const qs = grouped[pt.id] || [];
        if (qs.length === 0) return null;
        const isOpen = openPtypes[pt.id] !== false; // default open
        return (
          <div key={pt.id} className="accordion">
            <button
              className="accordion-header"
              onClick={() => togglePtype(pt.id)}
            >
              <span>{pt.name}</span>
              <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <div className="accordion-body">
                {qs.map(({ q, i }) => {
                  const score = getScore(section.id, i);
                  return (
                    <div key={i} className="question-row">
                      <div className="question-row-ref">Ex {section.id} #{q.n}</div>
                      <MathText text={q.text} className="question-row-text" />
                      {score !== null ? (
                        <span className={`pill ${RATING_CLASSES[score]}`}>
                          {RATING_LABELS[score]}
                        </span>
                      ) : (
                        <span className="pill pill-unrated">Not rated</span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div className="section-gap" />

      <button
        className="btn btn-primary"
        style={{ background: test.color, borderColor: test.color }}
        onClick={() => navigate(`/study/${section.id}`)}
      >
        Study this section
      </button>
    </div>
  );
}
