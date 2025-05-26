import QuestionPresenter from '../question/question-presenter';

export default class QuestionOne {
  #page;
  #limit;
  #questions = [];

  async render() {
    return `
    <header-page></header-page>
<section class="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-blue-50 !p-2">
  <div class="sm:p-8 rounded-3xl border-8 border-[#00bfff] w-full max-w-lg bg-white !p-2">
    <div class="p-4 space-y-6">
      <!-- Judul -->
      <div class="text-center space-y-2">
        <h1 class="text-4xl font-semibold text-[#00bfff]">Test Potensial Akademik</h1>
        <h2 class="text-[#98e4ae] text-base font-medium">Pertanyaan ini adalah langkah awal untuk menentukan jurusanmu</h2>
      </div>

      <!-- Konten Kuis -->
      <div id="quiz" class="min-h-[150px] !p-4"></div>

      <!-- Tombol Navigasi -->
      <div class="flex justify-center gap-4 !py-4">
        <button id="prev" class="bg-[#98e4ae] text-white font-semibold !px-5 !py-2 rounded-lg border-b-4 border-emerald-500 hover:brightness-110 hover:border-t-4 hover:border-b duration-300 group relative overflow-hidden">
          <span class="absolute -top-[150%] left-0 w-80 h-1 bg-emerald-300 opacity-50 group-hover:top-[150%] duration-500 rounded"></span>
          Prev
        </button>

        <button id="next" class="bg-[#00bfff] text-white font-semibold !px-5 !py-2 rounded-lg border-b-4 border-blue-500 hover:brightness-110 hover:border-t-4 hover:border-b duration-300 group relative overflow-hidden">
          <span class="absolute -top-[150%] left-0 w-80 h-1 bg-blue-300 opacity-50 group-hover:top-[150%] duration-500 rounded"></span>
          Next
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center !pb-2">
    <button id="" class="bg-[#00bfff] text-white font-semibold !px-5 !py-2 rounded-lg border-b-4 border-blue-500 hover:brightness-110 hover:border-t-4 hover:border-b duration-300 group relative overflow-hidden justify-center">
          <span class="absolute -top-[150%] left-0 w-80 h-1 bg-blue-300 opacity-50 group-hover:top-[150%] duration-500 rounded"></span>
         Submit
        </button>
        </div>
  </div>
</section>
<footer-page></footer-page>
    `;
  }

  async afterRender() {
    this.presenter = new QuestionPresenter(this);
    this.#page = 0;
    this.#limit = 4;
    this.presenter.init();
    this.#buttonNext();
    this.#buttonPrev();
  }

  #buttonNext() {
    const nextButton = document.getElementById('next');
    nextButton.addEventListener('click', (event) => {
      event.preventDefault();

      const maxPage = this.#questions.length;
      if (this.#page + this.#limit < maxPage) {
        this.#page += this.#limit;
        this.presenter.init();
      }
    });
  }

  #buttonPrev() {
    const prevButton = document.getElementById('prev');
    prevButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (this.#page - this.#limit >= 0) {
        this.#page -= this.#limit;
        this.presenter.init();
      }
    });
  }

  displayQuestion(questions) {
    this.#questions = questions;

    const container = document.getElementById('quiz');
    if (!questions.length) {
      container.innerHTML = '<p>Tidak ada Data.</p>';
      return;
    }

    const questionList = this.#questions.slice(this.#page, this.#page + this.#limit);

    container.innerHTML = questionList
      .map((question, index) => {
        return `
        <div class="question-${index} flex flex-col gap-2 !pb-2">
            <h2 class="text-lg font-semibold mb-2 text-[#00bfff]">${question.question}</h2>
            <div class="flex justify-between w-full px-4">
  <p class="text-left text-based font-semibold text-[#98e4ae]">Kurang Setuju</p>
  <p class="text-right text-based font-semibold text-[#98e4ae]">Lebih Setuju</p>
</div>

            <div class="flex gap-10 justify-center sm">
                ${question.options
                  .map(
                    (option, i) => `
                    <input class="w-4 h-4" type="radio" name="question-${index}" value="${option.value}" id="option-${index}-${i}" required/>
                  `,
                  )
                  .join('')}
            </div>
        </div>
      `;
      })
      .join('');
  }
}
