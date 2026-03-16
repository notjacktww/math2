export default function ProgressBar({ pct, color = '#7F77DD', height = 8 }) {
  const filled = Math.min(pct, 100);
  return (
    <div
      className="progress-bar-track"
      style={{ height, borderRadius: height / 2 }}
    >
      <div
        className="progress-bar-fill"
        style={{
          width: `${filled}%`,
          background: color,
          height: '100%',
          borderRadius: height / 2,
          boxShadow: filled > 0 ? `0 0 ${height * 2}px ${color}66` : 'none',
        }}
      />
    </div>
  );
}
