function Navbar({ studentName, studentNim }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="brand-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div>
            <h1>TO DO LIST</h1>
            <span className="brand-subtitle">Student Productivity Workspace</span>
          </div>
        </div>

        <nav className="navbar-links">
          <a href="#ringkasan">Ringkasan</a>
          <a href="#workspace">Tambah Kegiatan</a>
          <a href="#daftar">Daftar Tugas</a>
        </nav>

        <div className="student-pill">
          <div className="student-avatar">DA</div>
          <div className="student-info">
            <strong>{studentName}</strong>
            <span>NIM {studentNim}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;