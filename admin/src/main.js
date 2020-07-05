import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'
// import 'normalize.css'
import '../src/assets/index.css'
import http from './http'


Vue.prototype.$http = http; 
Vue.config.productionTip = false;
// console.log(Vue.prototype)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
