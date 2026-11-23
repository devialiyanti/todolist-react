function FilterBar({
  searchQuery,
  onSearchChange,
  filterStatus,
  onFilterChange,
  showStats,
  onToggleStats
}) {
  const filters = [
    { key: 'all', label: 'Semua' },
    { key: 'active', label: 'Belum Selesai' },
    { key: 'completed', label: 'Selesai' }
  ];

  return (
    <div className="filter-bar">
      <div className="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Cari nama kegiatan atau kategori..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-controls">
        <div className="segmented-tabs">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`tab-btn ${filterStatus === item.key ? 'active' : ''}`}
              onClick={() => onFilterChange(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn-ghost"
          onClick={onToggleStats}
        >
          {showStats ? 'Sembunyikan Statistik' : 'Tampilkan Statistik'}
        </button>
      </div>
    </div>
  );
}

export default FilterBar;