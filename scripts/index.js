import { getNotes, getNote } from "../services/notesServices.js";

// ################ RENDER NO NOTES MESSAGE
if (getNotes().length > 0) {
  const noNotesMessageElement = document.querySelector(".js-no-notes-message");
  noNotesMessageElement.classList.add("hide");
}

// ################ RENDER NOTES LIST
let notesHTML = "";
getNotes().forEach((note) => {
  notesHTML += `
  <div 
    class="note-item js-note-item"
    data-note-id= "${note.id}">
    <p class="note-item-title">${note.title}</p>
    <div class="note-item-tags">
      ${note.tags.map((tag) => `<i class="tag-item">${tag}</i>`).join("")}
    </div>
    <p class="note-item-last-edit">${note.last_edit.getDate()} ${note.last_edit.getMonth()} ${note.last_edit.getFullYear()}</p>
  </div>
  `;
});
document.querySelector(".js-note").innerHTML = notesHTML;

// ################ Render Settings dropdown
document.querySelector(".js-settings-toggle").addEventListener("click", () => {
  document.querySelector(".js-settings-dropdown").classList.toggle("show");
});

// ################ CREATE NEW NOTE
document
  .querySelector(".js-create-note-button")
  .addEventListener("click", () => {
    renderNoteEditor("new");
  });

function renderNoteEditor(type) {
  if (type === "new") {
    // Create new note
  } else {
    // Editting exist note
  }
  let html = `
  <div class="note-content">
    <div class="note-head">
      <input type="text" class="note-input title-input" placeholder="Note Title"/>
      <div class="note-head-row tags-container">
        <div>
          <i class="icon tags-icon"></i>
          Tags
        </div>
        <div>
            <input type="text" class="note-input tags-input" placeholder="add tags (e.g. Work, Planning)"/>
        </div>
      </div>
      <div class="note-head-row date-container">
        <div>
          <i class="icon clock-icon"></i>
          Last Edited
        </div>
        <div>
          <i class="note-date">Note Saved Yet</i>
        </div>
      </div>
    </div>
    <div class="note-body">
      <textarea 
        class="note-input note-contnet-texterea"
        name="note-content" 
        id=""
        placeholder ="Start typing your note here..." ></textarea>
    </div>
  </div>

  <div class="note-options-sidebar">
    <div class="note-option-button btn--primary">
      Save
    </div>
    <div class="note-option-button">
      Cancle
    </div>
  </div>
  `;
  document.querySelector(".js-note-container").innerHTML = html;
}

// ################ RENDER NOTE DETAILS ON NOTE ITEM CLICKED
document.querySelectorAll(".js-note-item").forEach((note) => {
  note.addEventListener("click", () => {
    let id = note.dataset.noteId;
    let noteObj = getNote(id);
    renderNote(noteObj);
  });
});

function renderNote(note) {
  let noteHTML = `
  <div class="note-content">
      <div class="note-head">
        <h2 class="note-title">${note.title}</h2>
        <div class="note-head-row tags-container">
          <div>
            <i class="icon tags-icon"></i>
            Tags
          </div>
          <div class="note-tags-list">
            ${note.tags.map((tag) => tag).join(", ")}
          </div>
        </div>
        <div class="note-head-row date-container">
          <div>
            <i class="icon clock-icon"></i>
            Last Edited
          </div>
          <div>
            <time class="note-date" datetime="29/10/2024">
            ${note.last_edit.getDate()} ${note.last_edit.getMonth()} ${note.last_edit.getFullYear()}
            </time>
          </div>
        </div>
      </div>
      <div class="note-body">
        ${note.note}
      </div>
    </div>

    <div class="note-options-sidebar">
      <div class="note-option-button">
        <i class="icon archive-icon"></i>
        Archive Note
      </div>
      <div class="note-option-button">
        <i class="icon delete-icon"></i>
        Delete Note
      </div>
    </div>
  `;
  document.querySelector(".js-note-container").innerHTML = noteHTML;
}
