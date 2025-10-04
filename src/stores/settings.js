import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useSettings = defineStore('settings', () => {
  const theme = ref(initTheme())

  const updateTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    setTheme()
  }

  function setTheme() {
    document.querySelector('html').setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  }

  function initTheme() {
    const localStorageTheme = localStorage.getItem('theme')
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (localStorageTheme !== null) {
      return localStorageTheme
    }

    if (systemSettingDark.matches) {
      return 'dark'
    }

    return 'light'
  }

  onMounted(() => {
    setTheme()
  })

  return {
    theme,
    updateTheme,
  }
})
