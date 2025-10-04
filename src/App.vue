<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useLayout } from './stores/layout'

const layoutStore = useLayout()

layoutStore.checkScreen()
window.addEventListener('resize', layoutStore.checkScreen)

onBeforeUnmount(() => {
  window.removeEventListener('resize', layoutStore.checkScreen)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
