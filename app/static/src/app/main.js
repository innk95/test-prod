import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './components/Index.vue'


const routes = [
    {path: '/', component: Index}
]
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
});


new Vue({
    el: '#app',
    router: router
})