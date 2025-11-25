const questions = [
  {
    question: "What is the capital of France?",
    // options: ["Paris", "London", "Madrid", "Rome"],
    option1: "Paris",
    option2: "London",
    option3: "Madrid",
    option4: "Rome",
    correctAnswer: "Paris",
  },

  {
    question: "Which planet is known as the Red Planet?",
    // options: ["Mars", "Venus", "Earth", "Jupiter "],
    option1: "Mars",
    option2: "Venus",
    option3: "Earth",
    option4: "Jupiter",
    correctAnswer: "Mars",
  },
  {
    question: "Which planet is known as the Red Planet?",
    // options: ["Mars", "Venus", "Earth", "Jupiter "],
    option1: "Mars",
    option2: "Venus",
    option3: "Earth",
    option4: "Jupiter",
    correctAnswer: "Mars",
  },
  {
    question: "Which planet is known as the Red Planet?",
    // options: ["Mars", "Venus", "Earth", "Jupiter "],
    option1: "Mars",
    option2: "Venus",
    option3: "Earth",
    option4: "Jupiter",
    correctAnswer: "Mars",
  },
  {
    question: "Which planet is known as the Red Planet?",
    // options: ["Mars", "Venus", "Earth", "Jupiter "],
    option1: "Mars",
    option2: "Venus",
    option3: "Earth",
    option4: "Jupiter",
    correctAnswer: "Mars",
  },
  {
    question: "Which planet is known as the Red Planet?",
    // options: ["Mars", "Venus", "Earth", "Jupiter "],
    option1: "Mars",
    option2: "Venus",
    option3: "Earth",
    option4: "Jupiter",
    correctAnswer: "Mars",
  },
];
let counter = 0;
for (let i = 0; i < questions.length; i++) {
  console.log(i);
}

const nextBtn = document.querySelector(".next-btn");

nextBtn?.addEventListener("click", (e) => {
  e.target as HTMLButtonElement;
  counter++;

  console.log({ question: counter });
});

console.log({ counter: counter });

// const renderQuestions = () => {
const quizContainer = document.querySelector(".quiz-body") as HTMLDivElement;

const quizQuestionEl = document.createElement("div");
quizQuestionEl.className = "question-container";

questions.map((question, index) => {
  console.log(index);
});

// ---------------------------- RENDER QUESTION -----------------------------------

const renderQuestions = (index: number) => {
  question.map((question: any) => {
    quizQuestionEl.innerHTML = `
      <div class="question">
                <p>${question.question}</p>
              </div>

              <div class="options">
              <button class="option-btn">${question.option1}</button>
              </div>
    `;
  });
};

quizContainer.append(quizQuestionEl);
// };

// Paris, London, Madrid, Rome — Paris

