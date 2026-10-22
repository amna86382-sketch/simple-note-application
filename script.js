const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");
// Get notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
// Display all notes
function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach(function(note, index) {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        
        const noteText = document.createElement("p");
        noteText.textContent = note;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        deleteBtn.addEventListener("click", function() {
            deleteNote(index);
        });
        noteDiv.appendChild(noteText);
        noteDiv.appendChild(deleteBtn);
        notesList.appendChild(noteDiv);
    });
}
// Save a new note
saveBtn.addEventListener("click", function() {
    const note = noteInput.value.trim();
    if (note === "") {
        alert("Please write a note first!");
        return;
    }
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
});
// Delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}
// Show saved notes when page loads
displayNotes();
