<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="stylus" scoped>
.app-main
  min-height calc(100vh - 50px)
  width 100%
  position relative
  overflow hidden
</style>