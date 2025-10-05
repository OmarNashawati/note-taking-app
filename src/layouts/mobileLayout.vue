<script setup>
import Logo from '@/assets/logo.svg'
import AddIcon from '@/assets/icons/icon-plus.svg'
import SunIcon from '@/assets/icons/icon-sun.svg'
import MoonIcon from '@/assets/icons/icon-moon.svg'
import FontIcon from '@/assets/icons/icon-font.svg'
import LockIcon from '@/assets/icons/icon-lock.svg'
import SettingsIcon from '@/assets/icons/icon-settings.svg'
import SearchIcon from '@/assets/icons/icon-search.svg'
import LogoutIcon from '@/assets/icons/icon-logout.svg'
import ArrowIcon from '@/assets/icons/icon-arrow-left.svg'
import DeleteIcon from '@/assets/icons/icon-delete.svg'
import ArchiveIcon from '@/assets/icons/icon-archive.svg'
import BottomNavbar from '@/components/BottomNavbar.vue'
import FloatButton from '@/components/FloatButton.vue'
import Note from '@/components/ShowSection/Note.vue'
import Notes from '@/components/ShowSection/Notes.vue'

import { getNotes } from '@/services/notesService'
import { useMobileNavigation } from '@/stores/mobileNavigation'
import { useSettings } from '@/stores/settings'
import { computed, ref } from 'vue'

const settings = useSettings()
const navigation = useMobileNavigation()
const notes = getNotes()
const searchQuery = ref('')
const searchResult = computed(() =>
  notes.filter(
    (n) =>
      searchQuery.value !== '' &&
      (n.title.toLowerCase().includes(searchQuery.value) ||
        n.note.toLowerCase().includes(searchQuery.value)),
  ),
)
</script>

<template>
  <main>
    <div class="top-bar">
      <Logo class="icon" />
    </div>

    <div class="home-fragment" v-if="navigation.value === 'home'">
      <Notes :notes="notes" />

      <FloatButton>
        <AddIcon style="scale: 1.4; color: white" />
      </FloatButton>
    </div>

    <div v-if="navigation.value === 'note'" class="note-fragment">
      <div class="head">
        <div class="back-but" @click="navigation.setNavigation('home')">
          <ArrowIcon class="icon" style="scale: 0.8" />
          <p>Go back</p>
        </div>

        <div class="note-actions">
          <i>
            <DeleteIcon class="icon" />
          </i>

          <i>
            <ArchiveIcon class="icon" />
          </i>
          <p>Save Note</p>
        </div>
      </div>

      <Note />
    </div>

    <div v-if="navigation.value === 'search'" class="search-fragment">
      <div class="search-container">
        <SearchIcon class="icon" />
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by target, content or tags ..."
        />
      </div>

      <Notes
        :notes="searchResult"
        :empty-list-message="searchQuery ? 'No matching notes found.' : 'Search for notes'"
      />
    </div>

    <div v-if="navigation.value === 'archive'" class="archive-fragment">
      <Notes :notes="notes.filter((n) => n.isArchived)" />
    </div>

    <div v-if="navigation.value === 'tags'">Tags</div>

    <div v-if="navigation.value === 'settings'" class="settings-fragment">
      <h1><SettingsIcon /> Settings</h1>

      <div class="row" @click="settings.updateTheme()">
        <div>
          <SunIcon class="icon" v-if="settings.theme === 'light'" />
          <MoonIcon class="icon" v-if="settings.theme === 'dark'" />
          <i>{{ settings.theme === 'dark' ? 'Dark Theme' : 'Light Theme' }}</i>
        </div>

        <ArrowIcon class="icon invert-icon" />
      </div>

      <div class="row">
        <div><FontIcon class="icon" /> <i>Font Theme</i></div>
        <ArrowIcon class="icon invert-icon" />
      </div>

      <div class="row">
        <div><LockIcon class="icon" /> <i>Change Password</i></div>
        <ArrowIcon class="icon invert-icon" />
      </div>

      <div class="row">
        <div><LogoutIcon class="icon" /> <i>Logout</i></div>
        <ArrowIcon class="icon invert-icon" />
      </div>
    </div>

    <div v-if="navigation.value === 'addNew'">Add New</div>

    <BottomNavbar />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top-bar {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--muted);
  }

  .home-fragment {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .archive-fragment {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .note-fragment {
    display: flex;
    flex-direction: column;

    .head {
      border-bottom: 1px solid var(--border);
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      height: 50px;
      overflow-y: auto;

      .back-but {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .note-actions {
        display: flex;
        align-items: center;
        gap: 16px;

        i {
          cursor: pointer;
        }

        p {
          background-color: var(--blue-500);
          color: white;
          padding: 8px;
          border-radius: var(--border-radius);
          cursor: pointer;
        }
      }
    }
  }

  .settings-fragment {
    display: flex;
    flex-direction: column;
    height: 100%;

    h1 {
      padding: 1rem;
    }

    .row {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      cursor: pointer;

      &:last-child {
        margin-top: auto;
      }

      &:hover {
        background: var(--muted);
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  .search-fragment {
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    flex: 1;

    .search-container {
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
  }
}
</style>
