import { useEffect, useState } from 'react';

const initialStudents = [
  {
    nim: '2405',
    name: ' Rayhan',
    phone: '081234567801',
    email: 'Rayhan@mail.com',
    address: 'Madiun',
    studyProgram: 'Sistem Informasi',
    entryYear: '2024',
  },
  {
    nim: '2405',
    name: 'Ijaz',
    phone: '081234567802',
    email: 'Ijaz@mail.com',
    address: 'Malang',
    studyProgram: 'Sistem Informasi',
    entryYear: '2024',
  },
  {
    nim: '2405',
    name: 'Mawla',
    phone: '081234567803',
    email: 'Mawla@mail.com',
    address: 'Surabaya',
    studyProgram: 'Sistem Informasi',
    entryYear: '2024',
  },
  {
    nim: '2405',
    name: 'Renata',
    phone: '081234567804',
    email: 'Renata@mail.com',
    address: 'Jember',
    studyProgram: 'Sistem Informasi',
    entryYear: '2024',
  },
  {
    nim: '2405',
    name: 'Fawza',
    phone: '081234567805',
    email: 'Fawza@mail.com',
    address: 'Bondowoso',
    studyProgram: 'Sistem Informasi',
    entryYear: '2024',
  },
];

function App() {
  // A. Data mahasiswa disimpan di dalam state React.
  const [students] = useState(initialStudents);

  // B. State waktu diperbarui setiap detik oleh useEffect.
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup: hentikan interval saat komponen di-unmount.
    return () => clearInterval(intervalId);
  }, []);

  const timeText = currentTime.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const dateText = currentTime.toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="page-shell">
      <div className="dashboard">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Student Management home">
            <span className="brand-mark">SM</span>
            <span className="brand-name">STUDENT<span> / PORTAL</span></span>
          </a>
          <span className="topbar-note">
            <span className="status-dot" />
            ACADEMIC DATA
          </span>
        </header>

        <section className="welcome-section" id="top">
          <div className="heading-copy">
            <p className="eyebrow">DASHBOARD / OVERVIEW</p>
            <h1>Student Management</h1>
            <p className="page-description">
              Kelola dan pantau informasi mahasiswa dalam satu tampilan.
            </p>
          </div>

          <aside className="clock-card" aria-label="Jam digital waktu WIB">
            <div className="clock-topline">
              <span className="clock-indicator" />
              <span>WAKTU SEKARANG</span>
              <span className="timezone">WIB</span>
            </div>
            <p className="clock-time" aria-live="off">{timeText}</p>
            <p className="clock-date">{dateText}</p>
          </aside>
        </section>

        <section className="content-section" aria-labelledby="student-list-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DATA AKADEMIK</p>
              <h2 id="student-list-title">Daftar Data Mahasiswa</h2>
              <p className="section-description">
                Informasi mahasiswa yang terdaftar dalam sistem.
              </p>
            </div>
            <div className="student-count" aria-label={`${students.length} mahasiswa terdaftar`}>
              <span className="count-number">{String(students.length).padStart(2, '0')}</span>
              <span className="count-label">TOTAL MAHASISWA</span>
            </div>
          </div>

          <div className="table-card">
            <div className="table-toolbar">
              <div className="table-title-wrap">
                <span className="table-title">Seluruh Mahasiswa</span>
                <span className="table-subtitle">Data dummy · Periode akademik 2023–2024</span>
              </div>
              <span className="data-badge"><span /> DATA AKTIF</span>
            </div>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">NIM</th>
                    <th scope="col">Nama Mahasiswa</th>
                    <th scope="col">No. HP</th>
                    <th scope="col">Email</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Program Studi</th>
                    <th scope="col">Tahun Masuk</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.nim}>
                      <td className="nim-cell">{student.nim}</td>
                      <td>
                        <div className="student-name-cell">
                          <span className="avatar" aria-hidden="true">
                            {student.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                          </span>
                          <span className="student-name">{student.name}</span>
                        </div>
                      </td>
                      <td className="muted-cell">{student.phone}</td>
                      <td><a className="email-link" href={`mailto:${student.email}`}>{student.email}</a></td>
                      <td className="muted-cell">{student.address}</td>
                      <td><span className="program-tag">{student.studyProgram}</span></td>
                      <td><span className="year-cell">{student.entryYear}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span>Menampilkan <strong>{students.length}</strong> dari <strong>{students.length}</strong> mahasiswa</span>
              <span className="footer-note">STUDENT MANAGEMENT SYSTEM</span>
            </div>
          </div>
        </section>

        <footer className="page-footer">
          <span>© 2026 Student Management</span>
          <span>React Hooks Practice <span className="footer-separator">·</span> useState &amp; useEffect</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
