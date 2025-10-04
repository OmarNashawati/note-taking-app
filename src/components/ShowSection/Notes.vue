<script setup>
import NoteCard from './NoteCard.vue'
import { useNote } from '@/stores/Note'
import { useMobileNavigation } from '@/stores/mobileNavigation'

const props = defineProps(['notes'])
const noteStore = useNote()
const navigation = useMobileNavigation()

function showDetails(note) {
  noteStore.setNote(note)
  navigation.setNavigation('note')
}
</script>

<template>
  <div class="notes-wrapper">
    <div v-if="!notes.length" class="no-notes-message">
      <p>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</p>
    </div>

    <div v-if="notes.length" class="notes">
      <NoteCard v-for="note in notes" :note="note" :key="note.id" @click="showDetails(note)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notes-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  .no-notes-message {
    border-radius: var(--border-radius);
    padding: 8px;
    font-size: 0.8rem;
    background-color: var(--muted);
    border: 1px solid var(--border);
    max-width: 300px;
    margin: 0 auto;
    margin-top: 16px;
  }

  .notes {
    height: 0;
    flex: 1 1 auto;
    overflow-y: auto;
  }
}
</style>
