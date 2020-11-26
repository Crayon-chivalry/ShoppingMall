<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
  .tab-bar{
    display: flex;
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f8f8ff;
    box-shadow: 0 -2px 1px rgba(143, 138, 138, 0.1);
    padding: 1px;
  }
</style>