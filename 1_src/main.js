import Vue from 'vue'
import App from '1_src/App'
import router from '1_src/router'
import TypeNav from './components/TypeNav'
import store from '1_src/store'

Vue.config.productionTip = false;
Vue.component(TypeNav.name,TypeNav)

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store
})