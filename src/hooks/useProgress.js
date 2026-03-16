import { useState, useCallback } from 'react';
import { DATA } from '../data/questions';
import { getSectionStats, getTestStats, getAllStats } from '../utils/scoring';

const STORAGE_KEY = 'math2132_v4';

function loadScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveScores(scores) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

export function useProgress() {
  const [scores, setScoresState] = useState(() => loadScores());

  const setScore = useCallback((sectionId, questionIndex, value) => {
    setScoresState((prev) => {
      const next = { ...prev, [`${sectionId}_${questionIndex}`]: value };
      saveScores(next);
      return next;
    });
  }, []);

  const getScore = useCallback(
    (sectionId, questionIndex) => {
      const val = scores[`${sectionId}_${questionIndex}`];
      return val !== undefined ? val : null;
    },
    [scores]
  );

  const getSectionStatsHook = useCallback(
    (section) => getSectionStats(section, scores),
    [scores]
  );

  const getTestStatsHook = useCallback(
    (test) => getTestStats(test, scores),
    [scores]
  );

  const getAllStatsHook = useCallback(
    () => getAllStats(DATA.tests, scores),
    [scores]
  );

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setScoresState({});
  }, []);

  return {
    scores,
    getScore,
    setScore,
    getSectionStats: getSectionStatsHook,
    getTestStats: getTestStatsHook,
    getAllStats: getAllStatsHook,
    resetAll,
  };
}
