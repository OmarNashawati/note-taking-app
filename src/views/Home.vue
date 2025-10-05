<script setup>
import Module from '@/components/Module.vue'
import DesktopLayout from '@/layouts/desktopLayout.vue'
import MobileLayout from '@/layouts/mobileLayout.vue'
import { useLayout } from '@/stores/layout'
import { computed } from 'vue'
const layout = useLayout()
const mobile = computed(() => layout.mobile)
</script>

<template>
  <!-- <Module /> -->
  <DesktopLayout v-if="!mobile" />
  <MobileLayout v-if="mobile" />
</template>

<style scoped></style>
