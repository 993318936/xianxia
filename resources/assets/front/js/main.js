/**
 * Created by lilinhui on 17/3/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from './vuex/store'
import routers from './route'
import './../less/main.less'

Vue.use(VueRouter);
const scrollBehavior = (to,from,savedPosition) => {
    return { x: 0, y: 0 }
};

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    scrollBehavior,
    routes: routers
});
new Vue({
    router
    // store
}).$mount('#app');
