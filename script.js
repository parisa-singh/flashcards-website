document.addEventListener("DOMContentLoaded", () => {
    const flashcard = document.querySelector(".flashcard");
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const nextCardBtn = document.getElementById("next-card");
    const body = document.body;

    let isFlipped = false;

    flashcard.addEventListener("click", () => {
        isFlipped = !isFlipped;
        flashcard.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0)";
    });

    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    nextCardBtn.addEventListener("click", () => {
        // Placeholder for card change logic
        alert("Load next flashcard here!");
    });
});
