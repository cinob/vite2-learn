import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element3 from './plugins/element3'

// 全局样式
import 'styles/index.styl'


createApp(App)
.use(router)
.use(store)
.use(element3)
.mount('#app')
