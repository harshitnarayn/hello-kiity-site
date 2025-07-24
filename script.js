document.addEventListener("DOMContentLoaded", () => {
  const showToysBtn = document.getElementById("showToysBtn");
  const landing = document.getElementById("landing");
  const toysPage = document.getElementById("toysPage");
  const toys = document.querySelectorAll(".toy");
  const message = document.getElementById("message");

  if (showToysBtn) {
    showToysBtn.addEventListener("click", () => {
      landing.classList.add("hidden");
      toysPage.classList.remove("hidden");
    });
  }

  if (toys.length > 0) {
    toys.forEach(toy => {
      toy.addEventListener("click", () => {
        if (message) {
          message.classList.remove("hidden");
          setTimeout(() => {
            window.location.href = "love.html";
          }, 2000); // 2 seconds pause before redirect
        }
      });
    });
  }
});
