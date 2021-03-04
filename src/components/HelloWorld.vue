<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">{{$store.state.counter}}</p>
  <Comp/>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <el-button>我是btn</el-button>
  <el-input></el-input>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import Comp from 'comps/Comp.vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })

// 请求mock
fetch('/api/getUsers').then(res => res.json()).then(data => {
  console.log(data)
})
</script>