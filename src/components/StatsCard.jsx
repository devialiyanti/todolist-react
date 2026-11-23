function StatsCard({ title, count, variant, subtitle }) {
  return (
    <div className={`stats-card stats-${variant}`}>
      <div className="stats-top">
        <span className="stats-title">{title}</span>
        <span className={`stats-dot dot-${variant}`}></span>
      </div>
      <h2 className="stats-count">{count}</h2>
      <p className="stats-subtitle">{subtitle}</p>
    </div>
  );
}

export default StatsCard;