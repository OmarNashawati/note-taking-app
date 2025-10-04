import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigation = defineStore('navigations', () => {
  const value = ref('all')

  const setNavigation = (newValue) => {
    value.value = newValue
  }

  return {
    value,
    setNavigation,
  }
})
