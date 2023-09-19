import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'
import "@/assets/css/tailwind.css"
import {dollarFilter, percentFilter} from "@/filters.js"
import Chartick from 'vue-chartkick'
import Chart from 'chart.js'
import {VueSpinners} from "@saeris/vue-spinners/src";

Vue.use(Chartick.use(Chart))
Vue.use(VueSpinners)

Vue.filter("dollar", dollarFilter)
Vue.filter("percent", percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
