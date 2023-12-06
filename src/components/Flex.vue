<template>
  <div :class="['flex', direction]">
    <slot></slot>
  </div>
</template>

<style>
.flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}
</style>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'row',
    validator: (value) => {
      return ['row', 'column'].includes(value);
    },
  },
});
</script>