<template>
  <div class="float-button">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.float-button {
  background-color: var(--blue-500);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  right: 20px;
  z-index: 98;
  cursor: pointer;
}
</style>
