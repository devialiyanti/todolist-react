import { useState } from 'react';

function TaskItem({ task, onToggleStatus, onDeleteTask }) {
  const [showNotes, setShowNotes] = useState(false);

  const categoryClass = `badge-${task.category.toLowerCase()}`;

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-row">
        <div className="task-left">
          <button
            type="button"
            className={`check-circle ${task.completed ? 'checked' : ''}`}
            onClick={() => onToggleStatus(task.id)}
            aria-label="Ubah status selesai"
          >
            {task.completed && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>

          <div className="task-content">
            <div className="task-meta">
              <span className={`category-badge ${categoryClass}`}>
                {task.category}
              </span>
              <span className={`status-pill ${task.completed ? 'done' : 'pending'}`}>
                {task.completed ? 'Selesai' : 'Berjalan'}
              </span>
            </div>
            <h3>{task.title}</h3>
          </div>
        </div>

        <div className="task-actions">
          {task.notes && (
            <button
              type="button"
              className="btn-note"
              onClick={() => setShowNotes(!showNotes)}
            >
              {showNotes ? 'Tutup Catatan' : 'Catatan'}
            </button>
          )}

          <button
            type="button"
            className="btn-delete"
            onClick={() => onDeleteTask(task.id)}
            title="Hapus kegiatan"
          >
            Hapus
          </button>
        </div>
      </div>

      {showNotes && task.notes && (
        <div className="task-notes">
          <strong>Catatan:</strong> {task.notes}
        </div>
      )}
    </li>
  );
}

export default TaskItem;