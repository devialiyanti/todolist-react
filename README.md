# TO DO LIST — Aplikasi Manajemen Kegiatan

Aplikasi web daftar kegiatan (*To Do List*) yang dibangun menggunakan **React** dan **Vite** dengan menerapkan konsep **Component-Based UI Development** untuk memenuhi Tugas Mata Kuliah Pengembangan Aplikasi Web.

## Identitas Mahasiswa
- **Nama:** Devi Aliyanti
- **NIM:** 124750029
- **Program Studi:** Teknik Informatika — UIN Sunan Gunung Djati Bandung
- **Materi:** Component-Based UI Development with React

## Fitur Utama
- **Tambah Kegiatan:** Menambahkan agenda baru lengkap dengan pilihan kategori (*Kuliah*, *Praktikum*, *Organisasi*, *Pribadi*) dan catatan tambahan.
- **Ubah Status & Progres:** Menandai kegiatan sebagai selesai atau belum selesai dengan pembaruan persentase progres secara otomatis.
- **Hapus Kegiatan:** Menghapus item kegiatan yang sudah tidak diperlukan.
- **Pencarian & Filter:** Mencari kegiatan berdasarkan kata kunci judul/kategori serta memfilter berdasarkan status (*Semua*, *Belum Selesai*, *Selesai*).
- **Tampilkan/Sembunyikan Informasi:** Mengatur visibilitas kartu ringkasan statistik dan membuka/menutup detail catatan pada setiap kegiatan.

## Penerapan Konsep React
1. **Components (6 Komponen Terpisah):**
   - `Navbar.jsx`: Navigasi utama dan tampilan identitas mahasiswa.
   - `StatsCard.jsx`: *Reusable component* untuk menampilkan ringkasan jumlah total kegiatan, belum selesai, dan selesai.
   - `TaskForm.jsx`: Formulir input kegiatan baru.
   - `FilterBar.jsx`: Kontrol pencarian, tab filter status, dan tombol visibilitas statistik.
   - `TaskItem.jsx`: *Reusable component* untuk merender setiap baris kegiatan beserta tombol aksi.
   - `Footer.jsx`: Informasi pembuat aplikasi pada bagian bawah halaman.
2. **Props:** Mengirimkan data (`studentName`, `studentNim`, `task`, `title`, `count`) serta fungsi *handler* (`onAddTask`, `onToggleStatus`, `onDeleteTask`) dari komponen induk (`App.jsx`) ke komponen anak.
3. **State (`useState`):** Mengelola data dinamis berupa daftar kegiatan (`tasks`), kata kunci pencarian (`searchQuery`), status filter (`filterStatus`), visibilitas statistik (`showStats`), serta visibilitas catatan (`showNotes`).
4. **Event Handling:** Menangani interaksi pengguna melalui `onSubmit` pada formulir, `onChange` pada input teks/dropdown, dan `onClick` pada tombol filter, ceklis status, serta hapus data.
5. **Conditional Rendering:** Menampilkan pesan ketika daftar kegiatan kosong, mengatur tampilan panel statistik, serta menampilkan catatan hanya saat tombol catatan diaktifkan.
6. **List Rendering:** Menampilkan array daftar kegiatan, kartu statistik, dan tombol filter menggunakan fungsi `.map()` dengan atribut `key` yang unik.

## Struktur Folder
```text
todolist-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StatsCard.jsx
│   │   ├── TaskForm.jsx
│   │   ├── FilterBar.jsx
│   │   ├── TaskItem.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md