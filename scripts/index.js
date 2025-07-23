import { getNotes, getNote } from "../services/notesServices.js";

initializePage();

function initializePage() {
  const notes = getNotes();
  if (notes.length > 0) {
    renderNotes(notes);
  } else {
    renderNoNotesMessage();
  }
}

// ################ RENDER NO NOTES MESSAGE
function renderNoNotesMessage() {
  const noNotesMessageElement = document.querySelector(".js-no-notes-message");
  noNotesMessageElement.classList.add("show");
}

// ################ RENDER ALL NOTES LIST ON [ALL NOTES] BUTTON CLICKED
const allNotesButton = document.querySelector(".js-all-notes-button");
allNotesButton.addEventListener("click", () => {
  renderNotes(getNotes());
  clearSidebarActiveSelection(allNotesButton);
});

// ################ RENDER ARCHIVED NOTES LIST ON [ARCHIVED NOTES] BUTTON CLICKED
const archivedNotesButton = document.querySelector(".js-archived-notes-button");

archivedNotesButton.addEventListener("click", () => {
  const archivedNotes = getNotes({ filter: "archived" });
  renderNotes(archivedNotes);
  clearSidebarActiveSelection(archivedNotesButton);
});

// ################ RENDER NOTES LIST
function renderNotes(notes) {
  let notesHTML = "";
  notes.forEach((note) => {
    notesHTML += `
    <div 
      class="note-item js-note-item"
      data-note-id= "${note.id}">
      <p class="note-item-title">${note.title}</p>
      <div class="note-item-tags">
        ${note.tags.map((tag) => `<i class="tag-item">${tag}</i>`).join("")}
      </div>
      <p class="note-item-last-edit">${note.last_edit.getDate()} ${note.last_edit.getMonth()} ${note.last_edit.getFullYear()}</p>
      <i class="line-seperator"></i>
    </div>
    `;
  });
  document.querySelector(".js-notes-list").innerHTML = notesHTML;

  document.querySelectorAll(".js-note-item").forEach((note) => {
    note.addEventListener("click", () => {
      let id = note.dataset.noteId;
      let noteObj = getNote(id);
      renderNote(noteObj);
    });
  });
}

function clearSidebarActiveSelection(activeButton) {
  document.querySelectorAll(".aside-button").forEach((but) => {
    but.classList.remove("active");
  });
  activeButton.classList.add("active");
}

// ################ RENDER NOTE DETAILS ON NOTE ITEM CLICKED
function renderNote(note) {
  let isNew = false;
  if (!note) {
    isNew = true;
    note = {
      title: "",
      note: "",
      isArchived: false,
      tags: [],
      last_edit: new Date(),
      created_at: new Date(),
    };
  }

  let html = `
  <div class="note-content">
    <div class="note-head">
      <input type="text" class="note-input title-input" placeholder="Note Title" 
      value="${note.title}"/>
      
      <div class="note-head-row tags-container">
        <div>
          <i class="icon tags-icon"></i>
          Tags
        </div>
        <input 
        type="text" class="note-input tags-input" 
        placeholder="add tags separated by commas (e.g. Work, Planning)"
        value="${note.tags}"
        />
      </div>
      <div class="note-head-row date-container">
        <div>
          <i class="icon clock-icon"></i>
          Last Edited
        </div>
        <i class="note-date">${note.last_edit.getDate()} ${note.last_edit.getMonth()} ${note.last_edit.getFullYear()}</i> 
      </div>
    </div>
    <div class="note-body">
      <textarea 
          class="note-input note-contnet-texterea"
          name="note-content" 
          id=""
          placeholder ="Start typing your note here..." 
        >${note.note}</textarea>

        <div class="save-button-container">
          <button class="btn btn--primary">Save Note</button>
          <button class="btn btn--secondary">Cancle</button>
        </div>
    </div>
  </div>
  `;

  if (!isNew) {
    html += `
     <div class="note-options-sidebar">
      <div class="note-option-button">
        <i class="icon archive-icon"></i>
        ${note.isArchived ? "Unarchive Note" : "Archive Note"}
        
      </div>
      <div class="note-option-button">
        <i class="icon delete-icon"></i>
        Delete Note
      </div>
    </div>
    `;
  } else {
    html += `
     <div class="note-options-sidebar">
      
    </div>
    `;
  }

  document.querySelector(".js-note-container").innerHTML = html;
}

// ################ Render Settings dropdown
document.querySelector(".js-settings-toggle").addEventListener("click", () => {
  document.querySelector(".js-settings-dropdown").classList.toggle("show");
});

// ################ CREATE NEW NOTE
document
  .querySelector(".js-create-note-button")
  .addEventListener("click", () => {
    renderNote();
  });

function renderNoteTE(note) {
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


  `;
  document.querySelector(".js-note-container").innerHTML = noteHTML;
}
