import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://rdjtbxzvqnaulkxzouva.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkanRieHp2cW5hdWxreHpvdXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMzU4NzEsImV4cCI6MjA4NDgxMTg3MX0.orPP1-8HP1u4ivG7S6X-heEoUbOWpUowlZZkXaPo22M"
);

const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const score = Number(localStorage.getItem("score"));
const answers = JSON.parse(localStorage.getItem("answers"));

document.getElementById("userName").innerText = `👤 ${name}`;

const scoreNumber = document.getElementById("scoreNumber");
const statusText = document.getElementById("statusText");
const progressCircle = document.getElementById("progress");

// 🎯 Animate score number
let count = 0;
const interval = setInterval(() => {
  if (count <= score) {
    scoreNumber.innerText = count;
    count++;
  } else {
    clearInterval(interval);
  }
}, 200);

// 🎯 Animate progress ring
const percentage = (score / 5) * 100;
const offset = 440 - (440 * percentage) / 100;
setTimeout(() => {
  progressCircle.style.strokeDashoffset = offset;
}, 300);

// 🎯 Pass / Fail UI
if (score >= 3) {
  statusText.innerText = "🎉 Congratulations! You Won PEN 🖊️!";
  progressCircle.style.stroke = "#22c55e";
  confetti();
} else {
  statusText.innerText = "❌ Oops! Try Again!";
  progressCircle.style.stroke = "#ef4444";
}

// 💾 Save to Supabase
async function saveResult() {
  await supabase.from("participants").insert([
    { name, email, score, answers }
  ]);
}
saveResult();

// 🎉 Confetti Effect
function confetti() {
  for (let i = 0; i < 80; i++) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "-10px";
    div.style.left = Math.random() * 100 + "vw";
    div.style.width = "8px";
    div.style.height = "8px";
    div.style.background = `hsl(${Math.random()*360},100%,50%)`;
    div.style.animation = "fall 3s linear";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
  }
}

// Confetti animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);