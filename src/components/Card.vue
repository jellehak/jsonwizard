<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  // Add any necessary props, data, methods, etc. here
}
</script>

<style>
.card {
  /* Add your card styles here */
  border: 1px solid #eaeaea;
}
</style>
