import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMobileNavigation = defineStore('mobile-navigations', () => {
  const value = ref('home')

  const setNavigation = (newValue) => {
    value.value = newValue
  }

  return {
    value,
    setNavigation,
  }
})
