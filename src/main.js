import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import TypeNav from './components/TypeNav'

Vue.config.productionTip = false;
Vue.component(TypeNav.name,TypeNav)

new Vue({
    el:'#app',
    render:h => h(App),
    router
})