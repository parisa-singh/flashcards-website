let currentSet = JSON.parse(localStorage.getItem("flashcards")) || {};
let selectedSet = localStorage.getItem("currentSet");

let flashcards = selectedSet ? currentSet[selectedSet] : [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (flashcards.length > 0) {
        document.getElementById("set-title").textContent = selectedSet;
        loadFlashcard(currentIndex);
    }

    document.getElementById("next-card").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        loadFlashcard(currentIndex);
    });
});

function loadFlashcard(index) {
    document.getElementById("question").textContent = flashcards[index].question;
    document.getElementById("answer").textContent = flashcards[index].answer;
}

function flipCard() {
    document.querySelector(".flashcard").classList.toggle("flipped");
}
