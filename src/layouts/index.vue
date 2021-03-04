<template>
  <div class="app-wrapper">
    <div class="sidebar-container"></div>
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
</script>

<style lang="stylus" scoped>
@import '../styles/mixin.styl'

.app-wrapper
  clearfix()
  position relative
  height 100%
  widht 100%
</style>