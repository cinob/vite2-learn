<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/Index.vue'
</script>

<style lang="stylus" scoped>
@import '../styles/mixin.styl'

.app-wrapper
  clearfix()
  position relative
  height 100%
  widht 100%
</style>