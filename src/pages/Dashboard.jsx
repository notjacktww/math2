import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DATA } from '../data/questions';
import { useProgress } from '../hooks/useProgress';
import StatCard from '../components/StatCard';
import TestCard from '../components/TestCard';

export default function Dashboard() {
  const { getAllStats, getTestStats, resetAll } = useProgress();
  const navigate = useNavigate();
  const [confirming, setConfirming] = useState(false);

  const overall = getAllStats();

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-eyebrow">Engineering Math 2</div>
        <h1 className="hero-title">MATH 2132</h1>
        <p className="hero-sub">University of Manitoba · Engineering Mathematical Analysis</p>
      </header>

      <div className="stat-cards-row">
        <StatCard label="Total XP" value={overall.xp.toLocaleString()} />
        <StatCard label="Rated" value={`${overall.answered}`} />
        <StatCard label="Mastery" value={`${overall.pct}%`} />
      </div>

      <div className="section-gap" />

      <div className="test-cards-grid">
        {DATA.tests.map((test) => (
          <TestCard key={test.id} test={test} stats={getTestStats(test)} />
        ))}
      </div>

      <div className="section-gap" />

      <div className="dashboard-actions">
        <button
          className="btn btn-primary btn-large"
          onClick={() => navigate('/study/all')}
        >
          Study all course material
        </button>
      </div>

      <div className="section-gap" />

      <div className="danger-zone">
        {!confirming ? (
          <button className="btn-text btn-danger" onClick={() => setConfirming(true)}>
            Reset all progress
          </button>
        ) : (
          <div className="confirm-dialog">
            <span>Are you sure? This cannot be undone.</span>
            <button
              className="btn btn-danger-solid"
              onClick={() => { resetAll(); setConfirming(false); }}
            >
              Yes, reset everything
            </button>
            <button className="btn btn-secondary" onClick={() => setConfirming(false)}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
