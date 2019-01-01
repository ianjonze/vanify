import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
