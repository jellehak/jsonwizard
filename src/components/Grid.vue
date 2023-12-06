<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>

<style>
.flex {
  display: flex;
  gap:10px;
  flex-wrap: wrap;
}
</style>
