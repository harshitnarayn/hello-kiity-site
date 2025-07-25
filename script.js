// script.js
document.getElementById("showToysBtn").addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("toysPage").classList.remove("hidden");
});

document.querySelectorAll(".toy").forEach((toy) => {
  toy.addEventListener("click", () => {
    document.getElementById("message").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("toysPage").classList.add("hidden");
      document.getElementById("lovePage").classList.remove("hidden");
    }, 2000);
  });
});

document.getElementById("hugBtn").addEventListener("click", () => {
  document.getElementById("lovePage").classList.add("hidden");
  document.getElementById("finalPage").classList.remove("hidden");
});

document.getElementById("kissBtn").addEventListener("click", () => {
  document.getElementById("lovePage").classList.add("hidden");
  document.getElementById("finalPage").classList.remove("hidden");
});

document.getElementById("yesBtn").addEventListener("click", () => {
  alert("Yay! Harshit is smiling right now 😊");
});

document.getElementById("noBtn").addEventListener("click", () => {
  alert("There's no option for 'No' 😈\nSo it changed to 'Yes'... Now choose again!");
  document.getElementById("noBtn").innerText = "Yes 💖";
});

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Background music autoplay fix for some browsers
const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });
document.addEventListener("click", function enableAudio() {
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
  document.removeEventListener("click", enableAudio);
});



