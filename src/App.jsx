import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

export default function App() {
  useTheme(); // initialises data-theme on <html>
  return (
    <>
      <ThemeToggle />
      <RouterProvider router={router} />
    </>
  );
}
