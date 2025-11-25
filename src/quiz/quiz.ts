let timeLeft = document.querySelector(".time-left") as HTMLDivElement;
let quizContainer = document.getElementById("container") as HTMLDivElement;
let nextBtn = document.getElementById("next-button") as HTMLButtonElement;
let countOfQuestion = document.querySelector(
  ".number-of-question"
) as HTMLSpanElement;
let displayContainer = document.getElementById(
  "display-container"
) as HTMLDivElement;
let scoreContainer = document.querySelector(
  ".score-container"
) as HTMLDivElement;
let restart = document.getElementById("restart") as HTMLButtonElement;
let userScore = document.getElementById("user-score") as HTMLDivElement;
let startScreen = document.querySelector(".start-screen") as HTMLDivElement;
let startButton = document.getElementById("start-button") as HTMLButtonElement;
let questionCount: number = 0;
let scoreCount = 0;
let count = 11;
let countdown: number = 0;

const quizArray = [
  {
    id: "0",
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    correct: "Mars",
  },
  {
    id: "1",
    question: "What gas do plants need for photosynthesis?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
    correct: "Carbon dioxide",
  },
  {
    id: "2",
    question: "Which device is used to input text into a computer?",
    options: ["Keyboard", "Mouse", "Monitor", "Speaker"],
    correct: "Keyboard",
  },
  {
    id: "3",
    question: "What is H₂O commonly known as?",
    options: ["Water", "Salt", "Sugar", "Alcohol"],
    correct: "Water",
  },
  {
    id: "4",
    question: "Who wrote “Romeo and Juliet”?",
    options: ["Shakespeare", "Dickens", "Tolstoy", "Homer"],
    correct: "Shakespeare",
  },
  {
    id: "5",
    question: "How many hours are in a day?",
    options: ["24", "12", "48", "60"],
    correct: "24",
  },
  {
    id: "6",
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    correct: "Lion",
  },
  {
    id: "7",
    question: "Which continent is the largest?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    correct: "Asia",
  },
  {
    id: "8",
    question: "What do bees produce?",
    options: ["Honey", "Milk", "Butter", "Oil"],
    correct: "Honey",
  },
  {
    id: "9",
    question: "Which color is at the top of a rainbow?",
    options: ["Red", "Blue", "Green", "Purple"],
    correct: "Red",
  },
  {
    id: "10",
    question: "Which organ pumps blood in the human body?",
    options: ["Heart", "Kidney", "Brain", "Liver"],
    correct: "Heart",
  },
  {
    id: "11",
    question: "What is the boiling point of water? (°C)",
    options: ["100°C", "50°C", "200°C", "150°C"],
    correct: "100°C",
  },
  {
    id: "12",
    question: "Which month has 28 days?",
    options: ["February", "All months", "April", "June"],
    correct: "All months",
  },
  {
    id: "13",
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
    correct: "Mitochondria",
  },
  {
    id: "14",
    question: "Who invented the light bulb?",
    options: ["Thomas Edison", "Einstein", "Newton", "Tesla"],
    correct: "Thomas Edison",
  },
  {
    id: "15",
    question: "How many continents are there?",
    options: ["7", "5", "6", "8"],
    correct: "7",
  },
  {
    id: "16",
    question: "Which ocean is the largest?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correct: "Pacific",
  },
  {
    id: "17",
    question: "Which shape has three sides?",
    options: ["Triangle", "Square", "Rectangle", "Circle"],
    correct: "Triangle",
  },
  {
    id: "18",
    question: "What is the largest mammal?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Rhino"],
    correct: "Blue Whale",
  },
  {
    id: "19",
    question: "What do you call a baby cat?",
    options: ["Kitten", "Puppy", "Cub", "Chick"],
    correct: "Kitten",
  },
  {
    id: "20",
    question: "Which country invented pizza?",
    options: ["Italy", "USA", "France", "China"],
    correct: "Italy",
  },
  {
    id: "21",
    question: "Which country is known as the Giant of Africa?",
    options: ["Nigeria", "Kenya", "Egypt", "Ghana"],
    correct: "Nigeria",
  },
  {
    id: "22",
    question: "What do we use to measure temperature?",
    options: ["Thermometer", "Barometer", "Speedometer", "Altimeter"],
    correct: "Thermometer",
  },
  {
    id: "23",
    question: "What is the hardest natural substance?",
    options: ["Diamond", "Gold", "Iron", "Silver"],
    correct: "Diamond",
  },
  {
    id: "24",
    question: "What part of the plant absorbs water?",
    options: ["Roots", "Stem", "Flower", "Leaf"],
    correct: "Roots",
  },
  {
    id: "25",
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "Kilimanjaro", "Fuji", "Alps"],
    correct: "Mount Everest",
  },
  {
    id: "26",
    question: "Which planet is closest to the sun?",
    options: ["Mercury", "Earth", "Mars", "Neptune"],
    correct: "Mercury",
  },
  {
    id: "27",
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gold", "Silver", "Copper"],
    correct: "Mercury",
  },
  {
    id: "28",
    question: "What type of energy comes from the sun?",
    options: ["Solar energy", "Wind energy", "Chemical energy", "Sound energy"],
    correct: "Solar energy",
  },

  // Original questions you provided:
  {
    id: "29",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "30",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "31",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
});

function displayNext() {
  questionCount += 1;

  if (questionCount === quizArray.length) {
    displayContainer?.classList.add("hide");
    scoreContainer?.classList.remove("hide");
    userScore.innerHTML =
      "Your score is " + scoreCount + " out of " + questionCount;
  } else {
    //display questionCount
    countOfQuestion.innerHTML =
      questionCount + 1 + " of " + quizArray.length + " Question";
    //display quiz
    quizDisplay(questionCount);
    count = 11;
    clearInterval(countdown);
    timerDisplay();
  }
}

nextBtn.addEventListener("click", displayNext);

function timerDisplay() {
  countdown = setInterval(() => {
    count--;
    timeLeft.textContent = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
}

function quizDisplay(questionCount: number) {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
}

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);

    const div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

    let question_Div = document.createElement("p");
    question_Div.classList.add("question");
    question_Div.innerHTML = i.question;
    div.appendChild(question_Div);

    div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>

    `;
    quizContainer.appendChild(div);
  }
}

function checker() {}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
