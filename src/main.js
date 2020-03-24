import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueTilt from 'vue-tilt.js'

Vue.use(Buefy)
Vue.use(VueTilt)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
