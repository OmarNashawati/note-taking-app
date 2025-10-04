import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNote = defineStore('note', () => {
  const note = ref(null)

  const setNote = (selectedNote) => {
    note.value = selectedNote
  }

  return {
    note,
    setNote,
  }
})
