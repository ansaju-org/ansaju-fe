const DataArtikel = {
  data: [
    {
      id: 1,
      img: '/images/articles/minat-bakat.jpg',
      judul: 'Kenali Minat dan Bakatmu Sebelum Memilih Jurusan',
      isi: 'Memilih jurusan harus dimulai dari mengenali apa yang kamu sukai dan kuasai. Cobalah tes minat bakat atau refleksi pengalaman belajar di sekolah. Ini membantu kamu menemukan jurusan yang cocok dan tidak salah langkah.',
    },
    {
      id: 2,
      img: '/images/articles/riset-jurusan.jpg',
      judul: 'Lakukan Riset Mendalam Tentang Jurusan Pilihanmu',
      isi: 'Banyak siswa hanya memilih jurusan karena tren atau ikut-ikutan. Lakukan riset mengenai kurikulum, prospek kerja, dan gaya belajar pada jurusan tersebut agar kamu tidak kaget di tengah jalan.',
    },
    {
      id: 3,
      img: '/images/articles/peluang-kerja.jpg',
      judul: 'Pertimbangkan Peluang Kerja Setelah Lulus',
      isi: 'Pilih jurusan yang memiliki prospek kerja sesuai keinginan dan kebutuhan pasar kerja. Jangan ragu konsultasi dengan alumni atau dosen mengenai jalur karier dari jurusan yang kamu incar.',
    },
    {
      id: 4,
      img: '/images/articles/biaya-perkuliahan.jpg',
      judul: 'Sesuaikan Jurusan dengan Kemampuan Finansial',
      isi: 'Beberapa jurusan memiliki biaya tinggi seperti kedokteran atau penerbangan. Pastikan kamu dan keluargamu siap dari sisi biaya atau tersedia beasiswa untuk mendukung pendidikanmu.',
    },
    {
      id: 5,
      img: '/images/articles/pengalaman-organisasi.jpg',
      judul: 'Gunakan Pengalaman Organisasi untuk Menentukan Jurusan',
      isi: 'Pengalaman aktif di organisasi bisa menjadi indikator bakat terpendam. Jika kamu sering memimpin dan menyukai komunikasi, mungkin jurusan manajemen atau komunikasi cocok untukmu.',
    },
  ],
};

const ArtikelLocal = {
  async getAllArticle() {
    return [...DataArtikel.data];
  },

  async getArticleById(id) {
    const numericId = Number(id);
    if (Number.isNaN(numericId)) {
      throw new Error('Invalid ID: ID harus berupa angka');
    }

    const articles = await this.getAllArticle();
    const selectedArticle = articles.find((article) => article.id === numericId);

    if (!selectedArticle) {
      throw new Error(`Article with id ${id} was not found`);
    }

    return selectedArticle;
  },
};

export default ArtikelLocal;
