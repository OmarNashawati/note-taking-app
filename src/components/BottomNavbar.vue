<script setup>
import HomeIcon from '@/assets/icons/icon-home.svg'
import SearchIcon from '@/assets/icons/icon-search.svg'
import ArchiveIcon from '@/assets/icons/icon-archive.svg'
import TagIcon from '@/assets/icons/icon-tag.svg'
import SettingsIcon from '@/assets/icons/icon-settings.svg'
import { useMobileNavigation } from '@/stores/mobileNavigation'

const navigation = useMobileNavigation()

const emit = defineEmits(['handleFragmentChange'])
</script>

<template>
  <div class="bottom-bar-wrapper">
    <div
      class="nav-item"
      :class="{ active: navigation.value === 'home' }"
      @click="navigation.setNavigation('home')"
    >
      <HomeIcon class="icon" />
    </div>
    <div
      class="nav-item"
      :class="{ active: navigation.value === 'search' }"
      @click="navigation.setNavigation('search')"
    >
      <SearchIcon class="icon" />
    </div>
    <div
      class="nav-item"
      :class="{ active: navigation.value === 'archive' }"
      @click="navigation.setNavigation('archive')"
    >
      <ArchiveIcon class="icon" />
    </div>
    <div
      class="nav-item"
      :class="{ active: navigation.value === 'tags' }"
      @click="navigation.setNavigation('tags')"
    >
      <TagIcon class="icon" />
    </div>
    <div
      class="nav-item"
      :class="{ active: navigation.value === 'settings' }"
      @click="navigation.setNavigation('settings')"
    >
      <SettingsIcon class="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-bar-wrapper {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: auto;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;

  .nav-item {
    flex: 1;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover:not(.active) {
      background: var(--muted);
    }

    &.active {
      background: var(--muted);
    }
  }
}
</style>
