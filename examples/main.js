
import Vue from 'vue'
import App from './App'
import router from './router'
import HUI from '../src/index'
import demoBlock from './components/demo-block.vue'

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock);
Vue.use(HUI);

var a = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
