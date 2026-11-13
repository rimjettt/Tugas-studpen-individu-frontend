# Student Management — React UI Practice

Aplikasi sederhana untuk latihan React Hooks `useState`, `useEffect`, dan looping data dengan `.map()`.

## Fitur

- Menampilkan 5 data mahasiswa dalam tabel.
- Data mahasiswa disimpan pada state React menggunakan `useState`.
- Baris tabel dibuat dengan `.map()` dan `key` unik menggunakan NIM.
- Jam digital WIB diperbarui setiap 1 detik menggunakan `useEffect` dan `setInterval`.
- Cleanup interval menggunakan `clearInterval` saat komponen di-unmount.
- Tampilan monochrome, responsif, dan tabel dapat digulir secara horizontal pada layar kecil.

## Cara menjalankan

Pastikan Node.js dan npm sudah terpasang, lalu buka terminal pada folder project ini.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite pada terminal (biasanya `http://localhost:5173`).

## Membuat build production

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/`.

## Struktur project

```text
student-management-react/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## Kesesuaian dengan ketentuan tugas

| Ketentuan | Implementasi |
|---|---|
| Header | `Student Management` |
| Subheader | `Daftar Data Mahasiswa` |
| Informasi jumlah mahasiswa | Mengambil nilai dari `students.length` |
| Kolom tabel | NIM, Nama Mahasiswa, No. HP, Email, Alamat, Program Studi, Tahun Masuk |
| Minimal 5 data | 5 data contoh dari dokumen tugas |
| useState | Menyimpan data mahasiswa dan waktu saat ini |
| .map() | Melakukan looping setiap data mahasiswa |
| key unik | `key={student.nim}` |
| useEffect | Menjalankan interval jam digital |
| Update 1 detik | `setInterval(..., 1000)` |
| Cleanup | `clearInterval(intervalId)` |
