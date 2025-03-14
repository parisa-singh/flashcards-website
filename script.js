document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const body = document.body;

    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
        });
    }
});

function flipCard() {
    const card = document.querySelector(".flashcard");
    card.classList.toggle("flipped");
}
