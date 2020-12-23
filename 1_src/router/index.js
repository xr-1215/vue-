import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from '1_src/router/routes'
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes
})