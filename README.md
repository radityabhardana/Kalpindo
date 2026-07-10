# Company Profile - PT Kalibrasi Pengujian Indonesia (Kalpindo)

Repositori ini berisi kode sumber untuk website Company Profile resmi **PT Kalibrasi Pengujian Indonesia (Kalpindo)**, sebuah laboratorium independen yang bergerak di bidang jasa kalibrasi, pengujian, pelatihan, dan layanan teknis industri yang telah terakreditasi KAN (Komite Akreditasi Nasional) berstandar ISO/IEC 17025:2017.

## 🚀 Teknologi yang Digunakan

Website ini dibangun menggunakan pendekatan *static site* yang ringan, modern, dan sangat cepat:
- **HTML5**: Struktur utama website.
- **Tailwind CSS v3**: *Utility-first CSS framework* untuk *styling* dan desain responsif.
- **Vanilla JavaScript**: Untuk interaktivitas ringan seperti animasi gulir (scroll) dan sistem FAQ.
- **Phosphor Icons**: Digunakan untuk seluruh kebutuhan ikonografi vektor yang bersih dan profesional.
- **Vercel**: Platform *deployment* dengan konfigurasi khusus agar semua *asset* dapat disajikan dengan cepat (*caching*).

## 📂 Struktur Direktori

```text  
├── assets/
│   ├── css/          # File CSS tambahan dan utilitas (styles.css)
│   ├── fonts/        # Font lokal (Inter) agar tidak bergantung pada koneksi luar
│   ├── icons/        # Library Phosphor icons
│   ├── img/          # Logo dan gambar statis aset UI (seperti Logo KAN)
│   └── js/           # Skrip utama (termasuk build runtime Tailwind)
├── gambar/           # Folder penyimpanan seluruh aset foto dokumentasi real proyek
├── index.html        # Halaman utama (Beranda, Layanan, Tentang, Galeri, FAQ)
├── artikel.html      # Templat halaman baca artikel / blog
├── vercel.json       # Konfigurasi deployment & caching khusus untuk Vercel
└── .gitignore        # Daftar pengecualian file untuk Git
```

## 🛠️ Cara Menjalankan Secara Lokal (Local Development)

Karena ini adalah *static site*, Anda tidak memerlukan server khusus seperti Node.js atau PHP untuk menjalankannya. Cukup buka file HTML-nya:

1. **Clone repositori ini:**
   ```bash
   git clone git@github.com:USERNAME/kalpindo-company-profile.git
   cd kalpindo-company-profile
   ```

2. **Jalankan:**
   - Anda bisa langsung klik ganda (double-click) file `index.html` untuk membukanya di browser.
   - Atau gunakan ekstensi VS Code seperti **Live Server** untuk *hot-reloading* saat melakukan perubahan kode.

## 🌐 Cara Melakukan Deployment (Vercel)

Website ini sudah dikonfigurasi secara khusus (`vercel.json`) agar sangat kompatibel dengan Vercel. 

1. Push perubahan terbaru Anda ke repositori GitHub.
2. Jika akun GitHub Anda sudah terhubung ke Vercel Project, setiap `push` ke branch `main` akan secara otomatis memicu proses *deployment*.
3. **Catatan Penting:** Konfigurasi `vercel.json` sudah diatur untuk membaca *cleanUrls* (sehingga `artikel.html` bisa diakses sebagai `/artikel`) dan mengelola *Cache-Control* untuk memuat gambar lebih cepat.

## 🎨 Fitur Desain & UI/UX

- **Mobile First & Responsive:** Elemen antarmuka secara otomatis menyesuaikan (*scale down*) padding, gap, dan ukuran font di perangkat seluler agar tidak terlihat bertumpuk.
- **Desain "Soft" & Premium:** Menghindari tampilan "kaku" bergaya *bootstrap lama* dengan memanfaatkan *soft shadows*, *rounded corners* besar, dan palet warna korporat (Merah, Oranye, Slate).
- **Interaksi Mikro:** Menggunakan *hover effects* yang halus (animasi membesar, transisi warna) di Galeri dan Kartu Layanan.
- **SEO Ready:** Penanda HTML semantik dan *meta tags* terstruktur.

## 📞 Informasi Kontak
Jika butuh perubahan pada konten atau nomor darurat website:
- **Email:** info@kalpindo.co.id
- **Nomor Telp/WA:** Terdapat di dalam tag HTML dan bisa langsung diganti di source code.
