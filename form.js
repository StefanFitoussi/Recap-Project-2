const form = document.querySelector('[data-js="form"]');
const inputQuestion = document.querySelector('[data-js="input-question"]');
const inputAnswer = document.querySelector('[data-js="input-answer"]');
const inputTag = document.querySelector('[data-js="input-tag"]');

function createCard(question, answer, tag) {
  console.log(question, answer, tag);

  const cardTemplate = `<li class="card-list__item">
  <article class="card">
    <h2 class="card__question">
        ${question}
    </h2>
    <button
      class="card__button-answer"
      type="button"
      data-js="answerButton"
    >
      Show answer
    </button>
    <p class="card__answer" data-js="answerP">${answer}</p>
    <ul class="card__tag-list">
      <li class="card__tag-list-item">${tag}</li>

    </ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>
</li>`;

  document.querySelector('[data-js="create-here"]').innerHTML = cardTemplate;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  const question = formValues["input-question"];
  const answer = formValues["input-answer"];
  const tag = formValues["input-tag"];

  createCard(question, answer, tag);
  // const question = data.
});
