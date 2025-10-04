<script setup>
import Logo from '@/assets/logo.svg'
import HomeIcon from '@/assets/icons/icon-home.svg'
import ArchiveIcon from '@/assets/icons/icon-archive.svg'
import ArrowIcon from '@/assets/icons/icon-arrow-left.svg'
import { useNavigation } from '@/stores/navigations'

const navigation = useNavigation()
</script>

<template>
  <aside class="sidebar">
    <div class="logo">
      <Logo />
    </div>

    <div class="navigations">
      <div
        @click="navigation.value = 'all'"
        class="navigation-but"
        :class="{ active: navigation.value === 'all' }"
      >
        <div>
          <HomeIcon class="icon" />
          <i>All Notes</i>
        </div>
        <ArrowIcon class="icon invert-icon" />
      </div>

      <div
        @click="navigation.value = 'archived'"
        class="navigation-but"
        :class="{ active: navigation.value === 'archived' }"
      >
        <div>
          <ArchiveIcon class="icon" />
          <i>Archived Notes</i>
        </div>
        <ArrowIcon class="icon invert-icon" />
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 250px;
  padding: 0 1rem;
  border-right: 1px solid var(--border);
  height: 100%;

  .logo {
    padding: 1rem 0;
  }

  .navigations {
    border-bottom: 1px solid var(--border);

    .navigation-but {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      border-radius: var(--border-radius);
      cursor: pointer;
      margin-bottom: 5px;

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }

      &.active {
        background-color: var(--muted);

        .icon {
          filter: var(--primary-filter);
        }
      }
    }
  }
}
</style>
