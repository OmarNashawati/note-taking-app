<script setup lang="ts">
import Module from '@/components/Module.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import ShowSection from '@/components/ShowSection.vue'
</script>

<template>
  <main>
    <NavigationBar />
    <ShowSection />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
}
</style>
