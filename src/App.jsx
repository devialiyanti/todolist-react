import { useState } from 'react';
import Navbar from './components/Navbar';
import StatsCard from './components/StatsCard';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskItem from './components/TaskItem';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Mengerjakan Tugas Component-Based UI React',
      category: 'Kuliah',
      notes: 'Minimal 5 komponen terpisah, deploy online, dan tautkan di website pribadi.',
      completed: false
    },
    {
      id: 2,
      title: 'Praktikum Manajemen Basis Data',
      category: 'Praktikum',
      notes: 'Uji coba replikasi database dan operasi CRUD.',
      completed: false
    },
    {
      id: 3,
      title: 'Rapat Koordinasi Divisi HMTI',
      category: 'Organisasi',
      notes: 'Finalisasi timeline kegiatan dan kebutuhan dokumentasi.',
      completed: true
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showStats, setShowStats] = useState(true);

  const handleAddTask = (newTask) => {
    const taskItem = {
      id: Date.now(),
      ...newTask,
      completed: false
    };
    setTasks([taskItem, ...tasks]);
  };

  const handleToggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'active' && !task.completed) ||
      (filterStatus === 'completed' && task.completed);

    const keyword = searchQuery.toLowerCase();
    const matchesSearch =
      task.title.toLowerCase().includes(keyword) ||
      task.category.toLowerCase().includes(keyword);

    return matchesStatus && matchesSearch;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const activeCount = tasks.length - completedCount;
  const progressPercent =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const statsList = [
    {
      id: 'total',
      title: 'Total Kegiatan',
      count: tasks.length,
      variant: 'total',
      subtitle: 'Semua agenda tercatat'
    },
    {
      id: 'active',
      title: 'Belum Selesai',
      count: activeCount,
      variant: 'active',
      subtitle: 'Perlu segera dikerjakan'
    },
    {
      id: 'completed',
      title: 'Selesai',
      count: completedCount,
      variant: 'completed',
      subtitle: `${progressPercent}% target tercapai`
    }
  ];

  return (
    <div className="app-wrapper">
      <Navbar studentName="Devi Aliyanti" studentNim="124750029" />

      <section className="hero-banner">
        <div className="hero-inner">
          <div>
            <span className="hero-tag">Dashboard Produktivitas</span>
            <h2>Kelola Agenda & Tugas Kuliah Lebih Terstruktur</h2>
          </div>

          <div className="progress-widget">
            <div className="progress-label">
              <span>Progres Penyelesaian</span>
              <strong>{progressPercent}%</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <main className="main-container">
        {showStats && (
          <section id="ringkasan" className="stats-grid">
            {statsList.map((stat) => (
              <StatsCard
                key={stat.id}
                title={stat.title}
                count={stat.count}
                variant={stat.variant}
                subtitle={stat.subtitle}
              />
            ))}
          </section>
        )}

        <div id="workspace" className="workspace-grid">
          <TaskForm onAddTask={handleAddTask} />

          <section id="daftar" className="card list-card">
            <div className="list-top">
              <div>
                <h2>Daftar Kegiatan</h2>
                <p>Menampilkan {filteredTasks.length} dari {tasks.length} kegiatan</p>
              </div>
            </div>

            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterStatus={filterStatus}
              onFilterChange={setFilterStatus}
              showStats={showStats}
              onToggleStats={() => setShowStats(!showStats)}
            />

            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <h3>Belum ada kegiatan ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau tambahkan kegiatan baru di samping.</p>
              </div>
            ) : (
              <ul className="task-list">
                {filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleStatus={handleToggleStatus}
                    onDeleteTask={handleDeleteTask}
                  />
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>

      <Footer studentName="Devi Aliyanti" studentNim="124750029" />
    </div>
  );
}

export default App;