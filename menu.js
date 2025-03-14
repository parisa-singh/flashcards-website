document.addEventListener("DOMContentLoaded", () => {
    const flashcards = JSON.parse(localStorage.getItem("flashcards")) || {};
    const flashcardSets = document.getElementById("flashcard-sets");

    flashcardSets.innerHTML = ""; 

    Object.keys(flashcards).forEach(setName => {
        const div = document.createElement("div");
        div.classList.add("set-item");

        // Set Name Button (Opens `set.html?name=SET_NAME`)
        const btn = document.createElement("button");
        btn.textContent = setName;
        btn.classList.add("set-btn");
        btn.onclick = () => {
            window.location.href = `set.html?name=${encodeURIComponent(setName)}`;
        };

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏ Edit";
        editBtn.classList.add("edit-btn");
        editBtn.onclick = () => {
            localStorage.setItem("editSet", setName);
            window.location.href = "create.html";
        };

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌ Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteFlashcardSet(setName);

        div.appendChild(btn);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        flashcardSets.appendChild(div);
    });
});

function deleteFlashcardSet(setName) {
    if (confirm(`Are you sure you want to delete "${setName}"?`)) {
        let flashcards = JSON.parse(localStorage.getItem("flashcards")) || {};
        delete flashcards[setName];
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        location.reload();
    }
}
