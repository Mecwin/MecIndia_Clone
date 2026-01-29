import { questionBank } from "./questions.js";

const questions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 5);

let index = 0;
let score = 0;
let answers = [];
let timeLeft = 120;

const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const qCount = document.getElementById("qCount");

// ⏱ TIMER
const timer = setInterval(() => {
  timeLeft--;
  const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const sec = String(timeLeft % 60).padStart(2, "0");
  timerEl.innerText = `⏱ ${min}:${sec}`;

  if (timeLeft <= 0) finishQuiz();
}, 1000);

function loadQuestion() {
  const q = questions[index];
  qCount.innerText = `Question ${index + 1} / 5`;
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(i) {
  answers.push({
    question: questions[index].question,
    selected: i,
    correct: questions[index].correct
  });

  if (i === questions[index].correct) score++;
  index++;

  index < questions.length ? loadQuestion() : finishQuiz();
}

function finishQuiz() {
  clearInterval(timer);
  localStorage.setItem("score", score);
  localStorage.setItem("answers", JSON.stringify(answers));
  window.location.href = "result.html";
}

loadQuestion();