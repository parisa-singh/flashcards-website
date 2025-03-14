let flashcardSet = [];
const editMode = localStorage.getItem("editSet");

if (editMode) {
    const savedFlashcards = JSON.parse(localStorage.getItem("flashcards")) || {};
    flashcardSet = savedFlashcards[editMode] || [];
    document.getElementById("set-name").value = editMode;
    displayFlashcards();
}

function addFlashcard() {
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    if (question && answer) {
        flashcardSet.push({ question, answer });
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        displayFlashcards();
    }
}

function displayFlashcards() {
    const list = document.getElementById("flashcard-list");
    list.innerHTML = "";
    flashcardSet.forEach((card, index) => {
        const div = document.createElement("div");
        div.classList.add("flashcard-item");
        div.innerHTML = `
            <p><strong>Q:</strong> ${card.question}</p>
            <p><strong>A:</strong> ${card.answer}</p>
            <button class="delete-btn" onclick="deleteFlashcard(${index})">❌</button>
        `;
        list.appendChild(div);
    });
}

function deleteFlashcard(index) {
    flashcardSet.splice(index, 1);
    displayFlashcards();
}

function saveFlashcards() {
    const setName = document.getElementById("set-name").value;
    if (!setName || flashcardSet.length === 0) {
        alert("Enter a set name and at least one flashcard.");
        return;
    }

    let savedFlashcards = JSON.parse(localStorage.getItem("flashcards")) || {};
    savedFlashcards[setName] = flashcardSet;
    localStorage.setItem("flashcards", JSON.stringify(savedFlashcards));
    localStorage.removeItem("editSet");
    window.location.href = "menu.html";
}
