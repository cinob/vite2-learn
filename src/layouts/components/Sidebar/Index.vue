<template>
  <el-scrollbar wrap-class='scrollbar-wrapper'>
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opend="false"
      :active-text-color="variables.menuActiveText"
    >
      <SidebarItem
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { routes } from '@/router'
import { useRoute } from 'vue-router'
import variables from 'styles/variables.module.styl'
import { computed } from 'vue'

const activeMenu = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>
