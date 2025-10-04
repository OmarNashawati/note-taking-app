<script setup>
const props = defineProps(['note'])
</script>

<template>
  <div class="note-item">
    <p class="note-item-title">{{ note.title }}</p>
    <div class="note-item-tags">
      <i v-for="tag in note.tags" class="tag-item">{{ tag }}</i>
    </div>
    <p class="note-item-last-edit">
      {{ note.last_edit.getDate() }} {{ note.last_edit.getMonth() }}
      {{ note.last_edit.getFullYear() }}
    </p>
    <i class="line-seperator"></i>
  </div>
</template>

<style lang="scss" scoped>
.note-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px 0 10px;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--muted);
  }

  .note-item-title {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .note-item-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    .tag-item {
      background: var(--border);
      color: var(--muted-foreground);
      padding: 5px 8px;
      border-radius: var(--border-radius);
      font-size: 0.8rem;
    }
  }

  .note-item-last-edit {
    color: var(--muted-foreground);
  }
}
</style>
