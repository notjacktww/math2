import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DATA } from '../data/questions';
import { useProgress } from '../hooks/useProgress';
import { buildQueue, getQuestionsForScope } from '../utils/queue';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import MasteryBadge from '../components/MasteryBadge';

function getScopeLabel(scope) {
  if (scope === 'all') return 'All course material';
  const test = DATA.tests.find((t) => t.id === scope);
  if (test) return test.name;
  for (const t of DATA.tests) {
    const s = t.sections.find((s) => s.id === scope);
    if (s) return s.name;
  }
  return scope;
}

function getScopeColor(scope) {
  if (scope === 'all') return '#7F77DD';
  const test = DATA.tests.find((t) => t.id === scope);
  if (test) return test.color;
  for (const t of DATA.tests) {
    const s = t.sections.find((s) => s.id === scope);
    if (s) return t.color;
  }
  return '#7F77DD';
}

function getScopeMastery(scope, getAllStats, getTestStats, getSectionStats) {
  if (scope === 'all') return getAllStats().pct;
  const test = DATA.tests.find((t) => t.id === scope);
  if (test) return getTestStats(test).pct;
  for (const t of DATA.tests) {
    const s = t.sections.find((sec) => sec.id === scope);
    if (s) return getSectionStats(s).pct;
  }
  return 0;
}

export default function StudyView() {
  const { scope } = useParams();
  const navigate = useNavigate();
  const { scores, getScore, setScore, getAllStats, getTestStats, getSectionStats } = useProgress();

  const [queue, setQueue] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [exitConfirm, setExitConfirm] = useState(false);
  const [sessionStats, setSessionStats] = useState({ rated: 0, startMastery: 0 });

  const color = getScopeColor(scope);
  const label = getScopeLabel(scope);

  const initQueue = useCallback(() => {
    const questions = getQuestionsForScope(scope, DATA);
    const q = buildQueue(questions, scores);
    setQueue(q);
    setCurrentIndex(0);
    setSessionDone(false);
    setSessionStats({
      rated: 0,
      startMastery: getScopeMastery(scope, getAllStats, getTestStats, getSectionStats),
    });
  }, [scope, scores]);

  useEffect(() => {
    if (queue === null) initQueue();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (exitConfirm || sessionDone || !queue) return;
      if (e.key === '1') handleRate(2);
      if (e.key === '2') handleRate(1);
      if (e.key === '3') handleRate(0);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [queue, currentIndex, exitConfirm, sessionDone]);

  const handleRate = (rating) => {
    if (!queue || currentIndex >= queue.length) return;
    const item = queue[currentIndex];
    setScore(item.sectionId, item.questionIndex, rating);
    setSessionStats((prev) => ({ ...prev, rated: prev.rated + 1 }));

    if (rating === 0) {
      const insertAt = Math.min(currentIndex + 3, queue.length);
      const newQueue = [...queue];
      newQueue.splice(insertAt, 0, { ...item });
      setQueue(newQueue);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex >= (rating === 0 ? queue.length + 1 : queue.length)) {
      setSessionDone(true);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleExit = () => {
    if (sessionStats.rated > 0) {
      setExitConfirm(true);
    } else {
      navigate(-1);
    }
  };

  if (queue === null) {
    return <div className="page"><p style={{ color: 'var(--muted)' }}>Loading…</p></div>;
  }

  const mastery = getScopeMastery(scope, getAllStats, getTestStats, getSectionStats);

  if (sessionDone) {
    return (
      <div className="page study-complete">
        <div className="complete-card">
          <span className="complete-emoji">🎉</span>
          <h2>Session Complete!</h2>
          <p>You studied <strong style={{ color: 'var(--text)' }}>{label}</strong></p>
          <div className="complete-stats">
            <div>
              <span className="stat-big" style={{ color }}>{mastery}%</span>
              <div className="muted">Mastery</div>
            </div>
            <div>
              <span className="stat-big">{getAllStats().xp.toLocaleString()}</span>
              <div className="muted">Total XP</div>
            </div>
            <div>
              <span className="stat-big">{sessionStats.rated}</span>
              <div className="muted">Rated</div>
            </div>
          </div>
          <div className="complete-actions">
            <button
              className="btn btn-primary btn-large"
              style={{ background: color, borderColor: color, boxShadow: `0 4px 20px ${color}44` }}
              onClick={initQueue}
            >
              Restart session
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              Back to dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const item = queue[currentIndex];
  const lastRating = getScore(item.sectionId, item.questionIndex);
  const progressPct = Math.round((currentIndex / queue.length) * 100);

  return (
    <div className="page study-page">
      {exitConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Exit session?</h3>
            <p>Your ratings so far are saved. You can resume any time.</p>
            <div className="modal-actions">
              <button className="btn btn-danger-solid" onClick={() => navigate(-1)}>Exit</button>
              <button className="btn btn-secondary" onClick={() => setExitConfirm(false)}>Keep studying</button>
            </div>
          </div>
        </div>
      )}

      <div className="study-topbar">
        <button className="btn-back" onClick={handleExit}>← Exit</button>
        <div className="study-context">{label}</div>
        <MasteryBadge pct={mastery} />
      </div>

      <div className="study-progress-row">
        <ProgressBar pct={progressPct} color={color} height={7} />
        <span className="study-counter">{currentIndex + 1} / {queue.length}</span>
      </div>

      <div className="section-gap" />

      <QuestionCard key={currentIndex} item={item} lastRating={lastRating} />

      <div className="section-gap" />

      <div className="rating-buttons">
        <button className="rating-btn rating-got-it" onClick={() => handleRate(2)}>
          <span className="rating-num">1</span>
          <span className="rating-label">Got it</span>
          <span className="rating-pts">+2 pts</span>
        </button>
        <button className="rating-btn rating-partial" onClick={() => handleRate(1)}>
          <span className="rating-num">2</span>
          <span className="rating-label">Understand why</span>
          <span className="rating-pts">+1 pt</span>
        </button>
        <button className="rating-btn rating-missed" onClick={() => handleRate(0)}>
          <span className="rating-num">3</span>
          <span className="rating-label">Don't understand</span>
          <span className="rating-pts">0 pts · review soon</span>
        </button>
      </div>

      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
        Press 1, 2, or 3 to rate
      </p>
    </div>
  );
}
