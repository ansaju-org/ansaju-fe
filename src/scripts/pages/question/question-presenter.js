export default class QuestionPresenter {
  constructor(view) {
    this.view = view;
  }

  async init() {
    const question = [
      {
        question: '1: Saya senang memecahkan masalah logika dan hitungan.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '2: Saya tertarik dengan cara kerja komputer atau teknologi.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '3: Saya menikmati membaca buku tentang manusia atau psikologi.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '4: Saya ingin membantu orang lain secara langsung, seperti di bidang kesehatan.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '5: Saya suka bekerja dengan data atau statistik.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '6: Saya tertarik pada seni atau desain visual.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '7: Saya ingin membangun atau merancang sesuatu secara fisik.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '8: Saya suka berbicara atau menyampaikan ide di depan umum.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '9: Saya menikmati menganalisis kejadian sosial atau politik.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '10: Saya senang belajar tentang alam, tumbuhan, atau hewan.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '11: Saya ingin mengembangkan bisnis atau produk.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
      {
        question: '12: Saya tertarik mengajar dan berbagi pengetahuan.',
        options: [{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }],
      },
    ];
    this.view.displayQuestion(question);
  }
}
