<script setup>
import AddIcon from '@/assets/icons/icon-plus.svg'

import Head from './ShowSection/Head.vue'
import Notes from './ShowSection/Notes.vue'
import Note from './ShowSection/Note.vue'

import { getNotes } from '@/services/notesService'
import { computed, ref } from 'vue'
import { useNavigation } from '@/stores/navigations'
import { useNote } from '@/stores/Note'

const navigation = useNavigation()
const noteStore = useNote()

const notes = computed(() => {
  if (navigation.value === 'all') {
    return getNotes()
  } else if (navigation.value === 'archived') {
    return getNotes().filter((n) => n.isArchived)
  }
})
</script>

<template>
  <div class="main">
    <Head />

    <div class="main-container">
      <div class="nots-list-container">
        <div class="head">
          <div class="create-note-button">
            <AddIcon class="icon" style="color: white" />
            Create New Note
          </div>
        </div>

        <Notes :notes="notes" />
      </div>

      <div class="note-container">
        <Note />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main-container {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;

    .nots-list-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      padding-bottom: 0;
      width: 250px;
      border-right: 1px solid var(--border);

      .head {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 0 0 auto;

        .create-note-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          font-size: 0.8rem;
          gap: 8px;
          border-radius: var(--border-radius);
          margin-bottom: 8px;
          background-color: var(--primary);
          color: var(--primary-foreground);
          cursor: pointer;

          i {
            filter: var(--on-primary-filter);
          }
        }
      }
    }
  }

  .note-container {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
}
</style>
