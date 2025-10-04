import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayout = defineStore('layout', () => {
  const mobile = ref(false)
  const windowWidth = ref(window.innerWidth || 0)

  function checkScreen() {
    windowWidth.value = window.innerWidth
    mobile.value = windowWidth.value <= 1000
  }

  return {
    mobile,
    windowWidth,
    checkScreen,
  }
})
