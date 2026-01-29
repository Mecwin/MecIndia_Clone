import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
  "https://rdjtbxzvqnaulkxzouva.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkanRieHp2cW5hdWxreHpvdXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMzU4NzEsImV4cCI6MjA4NDgxMTg3MX0.orPP1-8HP1u4ivG7S6X-heEoUbOWpUowlZZkXaPo22M"
);

const form = document.getElementById("startForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  const { data } = await supabase
    .from("participants")
    .select("email")
    .eq("email", email)
    .single();

  if (data) {
    alert("You already attempted the quiz ❌");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  window.location.href = "quiz.html";
});