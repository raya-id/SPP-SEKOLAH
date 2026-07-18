# e-SPP SEKOLAH v3.5 Enterprise

**Sistem Manajemen Pembayaran Siswa Sekolah (PWA/Lite)**

e-SPP SEKOLAH adalah aplikasi web berbasis *Single-Page Application* (SPA) tingkat *Enterprise* yang dirancang khusus untuk memodernisasi tata kelola administrasi keuangan sekolah. Dibangun di atas arsitektur *serverless* Google Apps Script (GAS) dan Google Sheets, sistem ini menawarkan eksekusi data berkecepatan tinggi, antarmuka *Glassmorphism* yang elegan, serta perlindungan keamanan data yang ketat. 

Aplikasi ini mendigitalkan pencatatan SPP, manajemen tunggakan, hingga portal laporan transparan untuk orang tua siswa, tanpa memerlukan biaya *hosting* server konvensional.

---

## 🚀 Fitur Utama

* **Otorisasi Berbasis Peran (RBAC 4-Tier):** Kontrol akses terisolasi untuk Superadmin, Admin (Tata Usaha), Guru, dan Portal Orang Tua (ORTU).
* **Manajemen Transaksi & Cicilan:** Pencatatan otomatis pembayaran lunas maupun parsial (cicilan) dengan pembaruan status tagihan secara *real-time*.
* **Portal Transparansi Orang Tua:** Antarmuka khusus bagi orang tua untuk memantau tunggakan anak dan mengunduh bukti laporan PDF instan (di-generate *in-memory* di bawah 1 detik).
* **Performa Zero-Latency (Optimistic UI):** Antarmuka merespons aksi pengguna secara instan tanpa *loading* layar, dilengkapi mekanisme *Auto-Rollback* jika koneksi jaringan terputus.
* **Keamanan Lapis Baja:** Dilengkapi hash kredensial *Salted SHA-256*, perlindungan serangan *Brute-Force* (Rate Limiting), mitigasi *Denial of Service* (DoS) pada request *batch*, dan isolasi data persisten.
* **Sistem Ekspor Terintegrasi:** Unduh rekapitulasi data tagihan dan pembayaran ke format CSV dengan satu klik.

---

## 🛠️ Tech Stack

Aplikasi ini dikembangkan menggunakan tumpukan teknologi modern yang ringan namun tangguh:
* **Backend:** Google Apps Script (GAS) — V8 Runtime Engine.
* **Database:** Google Sheets (Non-Relational Data Store) & `PropertiesService` (Secret Vault).
* **Frontend:** HTML5, CSS3 (Modern Glassmorphism Design), Vanilla JavaScript (ES6+).
* **State & Caching:** `CacheService` (Server-side TTL), `localStorage` (Client-side *Stale-While-Revalidate*).
* **Komunikasi Asinkron:** Fetch API dengan AbortController & Batching Router Request.
* **Aset Visual:** FontAwesome v6.4 (Ikonografi) & Google Fonts 'Inter' (Tipografi).

---

## 📈 Riwayat Pembaruan (Versioning)

Sistem ini terus berevolusi dari pencatatan dasar hingga menjadi arsitektur level produksi:

* **v1.0 (The Beginning):** Implementasi dasar CRUD dengan antarmuka statis konvensional, menggunakan Google Sheets sebagai satu-satunya penyimpanan data mentah.
* **v2.0:** Migrasi ke arsitektur *Single-Page Application* (SPA) dengan sistem navigasi *tab*, login token sederhana, dan pembuatan laporan PDF berbasis `DriveApp`.
* **v3.0:** Restrukturisasi backend untuk optimasi pembacaan rentang data terbatas (*scalable limited reads*), pengurangan *payload* JSON, dan pemisahan logika klien-server.
* **v3.5 (Current Version - Enterprise):** Transformasi antarmuka total ke gaya *Glassmorphism* dengan implementasi fitur pembayaran cicilan. Pembaruan keamanan masif (Salted Hash, Rate Limiting, Batch DoS Protection) dan peningkatan UX ekstrem menggunakan *Optimistic UI*, pemuatan paralel, serta dukungan penyematan lintas domain (Iframe/GitHub Pages).

---

## 🤝 Berkontribusi & Gunakan

Jangan ragu untuk mengeksplorasi kode sumber aplikasi ini, melakukan *fork*, dan menerapkannya langsung untuk menunjang efisiensi administrasi di sekolah atau institusi Anda. Jika Anda menemukan kendala teknis, memiliki gagasan optimalisasi, atau ingin menyumbangkan fitur baru, silakan buka *Issue* atau kirimkan *Pull Request* di repositori ini agar kita dapat berkolaborasi membangun ekosistem teknologi pendidikan yang lebih inovatif dan bermanfaat.

---

*Design and Refactoring By Jiraya One Tech (c) July 2026*
 