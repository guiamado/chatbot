import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('../components/modules/home/Home.vue') },
    { path: '/about', component: () => import('../components/modules/about/About.vue') },
];

export default new VueRouter({
    routes
});