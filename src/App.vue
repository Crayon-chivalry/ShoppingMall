<template>
  <div id="app">
    <!-- 对组件进行缓存 -->
    <!-- exclude不包括 -->
    <keep-alive exclude="Detailed">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
