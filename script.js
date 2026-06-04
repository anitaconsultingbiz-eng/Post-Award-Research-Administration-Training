/* ======================================================
  QUIZ BUTTON FEEDBACK
====================================================== */

const quizButtons = document.querySelectorAll(".quiz-btn");

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quizSection = button.closest(".decision-box");

    if (!quizSection) return;

    const feedback = quizSection.querySelector(".quiz-feedback");
    const buttonsInThisQuiz = quizSection.querySelectorAll(".quiz-btn");
    const isCorrect = button.dataset.correct === "true";

    buttonsInThisQuiz.forEach((btn) => {
      btn.classList.remove("correct-answer", "wrong-answer");
    });

    if (isCorrect) {
      button.classList.add("correct-answer");

      if (feedback) {
        feedback.textContent =
          "Correct. The best response is to pause, review the documentation, understand the project impact, and document the next step.";
      }
    } else {
      button.classList.add("wrong-answer");

      if (feedback) {
        feedback.textContent =
          "Not quite. Think about what Marcus should review, document, or confirm before taking action.";
      }
    }
  });
});

/* ======================================================
  STORY RECAP CAROUSEL
====================================================== */

(() => {
  const storyCarousel = document.querySelector("[data-story-carousel]");

  if (!storyCarousel) return;

  const slides = storyCarousel.querySelectorAll(".story-slide");
  const dots = storyCarousel.querySelectorAll("[data-slide-dot]");
  const prevButton = storyCarousel.querySelector("[data-prev-slide]");
  const nextButton = storyCarousel.querySelector("[data-next-slide]");

  if (!slides.length) return;

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  nextButton?.addEventListener("click", () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  });

  prevButton?.addEventListener("click", () => {
    const previousSlide =
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

    showSlide(previousSlide);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slideDot);

      if (!Number.isNaN(slideIndex) && slides[slideIndex]) {
        showSlide(slideIndex);
      }
    });
  });
})();

/* ======================================================
  CAPSTONE FLIP CARDS
====================================================== */

(() => {
  const flipCards = document.querySelectorAll(".flip-card");

  if (!flipCards.length) return;

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });
  });
})();
