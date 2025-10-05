<script setup>
import SearchIcon from '@/assets/icons/icon-search.svg'
import SunIcon from '@/assets/icons/icon-sun.svg'
import MoonIcon from '@/assets/icons/icon-moon.svg'
import FontIcon from '@/assets/icons/icon-font.svg'
import ArrowIcon from '@/assets/icons/icon-arrow-left.svg'
import LockIcon from '@/assets/icons/icon-lock.svg'
import SettingsIcon from '@/assets/icons/icon-settings.svg'
import LogoutIcon from '@/assets/icons/icon-logout.svg'

import { ref } from 'vue'
import { useSettings } from '@/stores/settings'
import { useNavigation } from '@/stores/navigations'

const settings = useSettings()
const navigation = useNavigation()

const settingsDropdown = ref(false)
</script>
<template>
  <header>
    <h1 class="header-title">{{ navigation.value === 'all' ? 'All Notes' : 'Archived Notes' }}</h1>

    <div class="header-wrapper">
      <div class="search-container">
        <SearchIcon class="icon" />
        <input type="text" placeholder="Search by target, content or tags ..." />
      </div>

      <div class="dropdown-wrapper">
        <div @click="settingsDropdown = !settingsDropdown" class="settings-button">
          <SettingsIcon class="icon" />
        </div>

        <div v-if="settingsDropdown" class="dropdown">
          <div class="dropdown-button" @click="settings.updateTheme()">
            <SunIcon class="icon" v-if="settings.theme === 'light'" />
            <MoonIcon class="icon" v-if="settings.theme === 'dark'" />
            {{ settings.theme === 'dark' ? 'Dark Theme' : 'Light Theme' }}
            <ArrowIcon class="icon invert-icon" />
          </div>
          <div class="dropdown-button">
            <FontIcon class="icon" />
            Color Theme
            <ArrowIcon class="icon invert-icon" />
          </div>
          <div class="dropdown-button">
            <LockIcon class="icon" />
            Change Password
            <ArrowIcon class="icon invert-icon" />
          </div>

          <i class="line-seperator"></i>

          <div class="dropdown-button">
            <LogoutIcon class="icon" />
            Logout
            <ArrowIcon class="icon invert-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  flex: 0;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);

  .header-title {
    font-size: 1.5rem;
  }

  .header-wrapper {
    display: flex;
    gap: 10px;

    .search-container {
      width: 280px;
      display: flex;
      align-items: center;
      border: 1px solid var(--border);
      border-radius: var(--border-radius);
      gap: 10px;
      padding: 0 10px;

      & > input {
        flex: 1 1 auto;
        border: none;
        outline: none;
        background: none;
        height: 40px;
        color: var(--text);
      }
    }

    .header-button {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .dropdown-wrapper {
      position: relative;

      .settings-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        gap: 8px;
        padding: 8px;
        border-radius: var(--border-radius);

        &:hover {
          background-color: var(--muted);
        }
      }

      .dropdown {
        background: var(--background);
        box-shadow: var(--shadow);
        position: absolute;
        width: 200px;
        right: 0;
        top: 100%;
        border-radius: var(--border-radius);
        padding: 10px 5px;
        z-index: 100;

        .dropdown-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 8px 4px;
          border-radius: var(--border-radius);
          cursor: pointer;
        }

        .dropdown-button:hover {
          background-color: var(--muted);
        }
      }
    }
  }
}
</style>
