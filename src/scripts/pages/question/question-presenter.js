import * as DataAPI from '../../data/api.js';

export default class QuestionPresenter {
  #model;
  #view;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async init() {
    const question = [
      {
        question: '1: Saya senang memecahkan masalah logika dan hitungan.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '2: Saya tertarik dengan cara kerja komputer atau teknologi.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '3: Saya menikmati membaca buku tentang manusia atau psikologi.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '4: Saya ingin membantu orang lain secara langsung, seperti di bidang kesehatan.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '5: Saya suka bekerja dengan data atau statistik.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '6: Saya tertarik pada seni atau desain visual.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '7: Saya ingin membangun atau merancang sesuatu secara fisik.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '8: Saya suka berbicara atau menyampaikan ide di depan umum.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '9: Saya menikmati menganalisis kejadian sosial atau politik.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '10: Saya senang belajar tentang alam, tumbuhan, atau hewan.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '11: Saya ingin mengembangkan bisnis atau produk.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
      {
        question: '12: Saya tertarik mengajar dan berbagi pengetahuan.',
        options: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }],
      },
    ];

    this.#view.displayQuestion(question);
  }

  async postRecommendation({ answer }) {
    try {
      const response = await this.#model.postRecommendation({
        answer,
      });

      if (!response.ok) {
        console.error('postSubmit: response:', response);
        this.#view.submitFailed(response.message);
        return;
      }
      console.log(response);
      // this.#view.submitSuccessfully(response.message, response.data);
    } catch (error) {
      console.error('postSubmit: error:', error);
    }
  }
}
