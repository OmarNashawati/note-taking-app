import {getNotes} from '../services/notesServices.js';
console.log(getNotes().length);

if(getNotes().length > 0) {
  const noNotesMessageElement = document.querySelector('.js-no-notes-message');
  noNotesMessageElement.classList.add('hide');
}


let notesHTML = '';
getNotes().forEach(note => {
  notesHTML += `
  <div class="note-item">
    <p class="note-item-title">${note.title}</p>
    <div class="note-item-tags">
      ${
        note.tags.map(tag => `<i class="tag-item">${tag}</i>`).join("")
      }
    </div>
    <p class="note-item-last-edit">${(note.last_edit).getDate()} ${(note.last_edit).getMonth()} ${(note.last_edit).getFullYear()}</p>
  </div>
  `
})

document.querySelector('.js-note').innerHTML = notesHTML;


document.querySelector('.js-settings-toggle').addEventListener('click', () => {
  
  document.querySelector('.js-settings-dropdown').classList.toggle('show');

});