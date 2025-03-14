let urlParams = new URLSearchParams(window.location.search);
let setName = urlParams.get("name");

let flashcards = JSON.parse(localStorage.getItem("flashcards")) || {};
let currentSet = flashcards[setName] || [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (currentSet.length > 0) {
        document.getElementById("set-title").textContent = setName;
        loadFlashcard(currentIndex);
    } else {
        document.getElementById("question").textContent = "No Flashcards Found!";
        document.getElementById("answer").textContent = "Go back and add some.";
    }

    document.getElementById("next-card").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentSet.length;
        loadFlashcard(currentIndex);
    });
});

function loadFlashcard(index) {
    document.getElementById("question").textContent = currentSet[index].question;
    document.getElementById("answer").textContent = currentSet[index].answer;
}

function flipCard() {
    document.querySelector(".flashcard").classList.toggle("flipped");
}
