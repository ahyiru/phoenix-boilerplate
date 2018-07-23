// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

console.log(App)
console.log(router)

// const ele=<h1></h1>

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#phoenix',
  router,
  components: { App },
  template: '<App/>'
})
