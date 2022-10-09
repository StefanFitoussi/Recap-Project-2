const bookmarkButton = document.querySelector('[data-js="bookmark"]');
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answerButton"]');
const answerP = document.querySelector('[data-js="answerP"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerP.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  } else {
    answerP.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});

const form = document.querySelector('[data-js="form"]');
const inputQuestion = document.querySelector('[data-js="input-question"]');
const inputAnswer = document.querySelector('[data-js="input-answer"]');
const inputTag = document.querySelector('[data-js="input-tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
});
