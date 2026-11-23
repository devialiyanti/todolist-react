import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kuliah');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      category,
      notes: notes.trim()
    });

    setTitle('');
    setCategory('Kuliah');
    setNotes('');
  };

  return (
    <aside className="card form-card">
      <div className="card-header">
        <h2>Tambah Kegiatan</h2>
      </div>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="task-title">Nama Kegiatan</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-category">Kategori</label>
          <select
            id="task-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Kuliah">Kuliah</option>
            <option value="Praktikum">Praktikum</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Pribadi">Pribadi</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="task-notes">Catatan Tambahan</label>
          <textarea
            id="task-notes"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary">
          + Tambah ke Daftar
        </button>
      </form>
    </aside>
  );
}

export default TaskForm;