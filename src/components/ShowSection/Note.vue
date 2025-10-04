<script setup>
import TagIcon from '@/assets/icons/icon-tag.svg'
import DeleteIcon from '@/assets/icons/icon-delete.svg'
import ArchiveIcon from '@/assets/icons/icon-archive.svg'
import TimeIcon from '@/assets/icons/icon-clock.svg'
import { v4 as uuid } from 'uuid'
import { useNote } from '@/stores/Note'
import { computed } from 'vue'

import { useLayout } from '@/stores/layout'

const layout = useLayout()

const noteStore = useNote()
let note = computed(() => noteStore.note)

// if (!note) {
//   note = {
//     id: uuid(),
//     title: '',
//     note: '',
//     isArchived: false,
//     tags: [],
//   }
// }
</script>

<template>
  <div v-if="note" class="note-content">
    <div class="note-head">
      <input
        type="text"
        class="note-input title-input"
        placeholder="Note Title"
        :value="note.title"
      />

      <div class="note-head-row tags-container">
        <div>
          <TagIcon class="icon" />
          Tags
        </div>
        <input
          type="text"
          class="note-input tags-input"
          placeholder="add tags separated by commas (e.g. Work, Planning)"
          :value="note.tags"
        />
      </div>

      <div v-if="note.last_edit" class="note-head-row date-container">
        <div>
          <TimeIcon class="icon" />
          Last Edited
        </div>
        <i class="note-date">
          {{ note.last_edit.getDate() }} {{ note.last_edit.getMonth() }}
          {{ note.last_edit.getFullYear() }}</i
        >
      </div>
    </div>

    <div class="note-body">
      <textarea
        class="note-input note-contnet-texterea"
        name="note-content"
        id=""
        placeholder="Start typing your note here..."
        >{{ note.note }}</textarea
      >

      <div v-if="!layout.mobile" class="save-button-container">
        <button class="btn btn--primary">Save Note</button>
        <button class="btn btn--secondary">Cancle</button>
      </div>
    </div>
  </div>

  <div v-if="!layout.mobile && note" class="note-options-sidebar">
    <div @click="note.isArchived = !note.isArchived" class="note-option-button">
      <ArchiveIcon class="icon" />
      {{ note.isArchived ? 'Unarchive Note' : 'Archive Note' }}
    </div>

    <div class="note-option-button">
      <DeleteIcon class="icon" />
      Delete Note
    </div>
  </div>
</template>

<style scoped>
.note-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1 1 auto;
}

.note-options-sidebar {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem;
  border-left: 1px solid var(--border);
}

.note-head {
  border-bottom: 1px solid var(--border);
  padding: 10px 0;
}

.note-tags-list {
  width: 100%;
}
.note-head-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 0;
}

.note-head-row div {
  display: flex;
  align-items: center;
  min-width: 100px;
}

.note-body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.note-option-button {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: 8px 12px;
  cursor: pointer;
}

.note-input {
  border: none;
  outline: none;
  background-color: none;
  width: 100%;
  flex: 1 1 auto;
}

.title-input {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.note-contnet-texterea {
  flex: 1 1 auto;
  min-height: 150px;
}

.save-button-container {
  border-top: 1px solid var(--border);
  margin-top: 10px;
  padding: 10px 0;
  display: flex;
  gap: 8px;
}

.btn--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  outline: none;
  padding: 10px 24px;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.btn--secondary {
  background-color: var(--muted);
  color: var(--secondary-foreground);
  border: none;
  outline: none;
  padding: 10px 24px;
  border-radius: var(--border-radius);
  cursor: pointer;
}
</style>
