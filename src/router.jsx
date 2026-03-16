import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TestView from './pages/TestView';
import SectionView from './pages/SectionView';
import StudyView from './pages/StudyView';

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/test/:testId', element: <TestView /> },
  { path: '/section/:sectionId', element: <SectionView /> },
  { path: '/study/:scope', element: <StudyView /> },
]);
