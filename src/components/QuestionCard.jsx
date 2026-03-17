import { useState } from 'react';
import MathText from './MathText';
import { getQuestionDisplay } from '../utils/questionContent';

const RATING_LABELS = { 2: 'Got it', 1: 'Partial', 0: 'Missed' };
const RATING_CLASSES = { 2: 'rating-green', 1: 'rating-amber', 0: 'rating-red' };

export default function QuestionCard({ item, lastRating }) {
  const { question, section } = item;
  const ptype = section.ptypes.find((p) => p.id === question.ptype);
  const [showSolution, setShowSolution] = useState(false);
  const display = getQuestionDisplay(question);
  const hasSolution = display.solution.length > 0;

  return (
    <div className="question-card">
      <div className="question-pills">
        <span className="pill pill-section">{section.id}</span>
        {ptype && <span className="pill pill-type">{ptype.name}</span>}
        <span className="pill pill-ref">#{question.n}</span>
        {lastRating !== null && lastRating !== undefined && (
          <span className={`pill ${RATING_CLASSES[lastRating]}`}>
            Last: {RATING_LABELS[lastRating]}
          </span>
        )}
      </div>
      <MathText text={display.prompt} className="question-text" />
      {hasSolution && (
        <div className="solution-area">
          {showSolution ? (
            <div className="solution-box">
              <div className="solution-label">Solution</div>
              <MathText
                text={display.solution}
                className={`solution-text${display.placeholder ? ' solution-text-missing' : ''}`}
              />
            </div>
          ) : (
            <button className="btn-reveal" onClick={() => setShowSolution(true)}>
              Reveal solution
            </button>
          )}
        </div>
      )}
    </div>
  );
}
