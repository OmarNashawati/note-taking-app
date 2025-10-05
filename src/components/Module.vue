<script setup>
import DeleteIcon from '@/assets/icons/icon-delete.svg'
</script>

<template>
  <div class="module-wrapper">
    <div class="module-card">
      <div class="body">
        <DeleteIcon />
        <div>
          <h2>Delete Note</h2>
          <p>
            Are you sure you want to peramernty delete this note? This action can not be undone.
          </p>
        </div>
      </div>

      <div class="line-seperator"></div>

      <div class="buttons">
        <div class="btn cancle">Cancle</div>
        <div class="btn delete">Delete</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.module-wrapper {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;

  .module-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 1rem;
    background: var(--background);
    min-height: 150px;
    max-width: fit-content;
    border-radius: 0.5rem;
    border: 1px solid var(--border);

    .body {
      display: flex;
      flex-direction: row;
      gap: 8px;

      h2 {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      p {
        max-width: 300px;
      }
    }

    .buttons {
      display: flex;
      justify-content: end;
      gap: 8px;
      margin-top: auto;

      .btn {
        padding: 8px;
        border-radius: 0.2rem;
        min-width: 80px;
        text-align: center;
        background: var(--muted);
        cursor: pointer;

        &.delete {
          background: var(--destructive);
          color: white;
        }
      }
    }
  }
}
</style>
