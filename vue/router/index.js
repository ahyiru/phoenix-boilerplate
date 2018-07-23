import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import vueDemo from '../demo/Demo.vue'
import jsxDemo from '../demo/demo.jsx'

console.log(jsxDemo)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: jsxDemo
    }
  ]
})
