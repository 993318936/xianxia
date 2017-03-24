/**
 * Created by lilinhui on 17/3/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './../js/components/App'

// import store from './vuex/store'
import routers from './route'
import './../less/main.less'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(Element, {locale});
const scrollBehavior = (to, from, savedPosition) => {
    return {x: 0, y: 0}
};

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: routers
});
new Vue({
    router,
    render: h => h(App)
    // store
}).$mount('#app');
