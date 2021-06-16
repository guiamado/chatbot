import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const setGoogleTag = (to) => { 
    try { 
        if (!window.dataLayer || window.dataLayer.length <= 1) 
            return; 
        let configs = window.dataLayer.filter(t => t.length && t.length > 1 && t[0] == "config"); 
        let lastItem = null; 
        if (configs.length > 0) 
            lastItem = configs[configs.length - 1]; 
        if (lastItem && lastItem[2].page_path === to.fullPath) { 
            return; 
        } 
        window.gtag('config', 'G-N1NBGHBKHN', { 
            'page_title': to.name, 
            'page_path': to.fullPath 
        }); 
    } catch (e) { 
        // eslint-disable-next-line 
        console.log(e); 
    } 
 
};

const auth = async (to, from, next) => {
    try {
        setGoogleTag(to);
        next();
    } catch (error) {
        // eslint-disable-next-line 
        console.log(error); 
    }
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/modules/home/Home.vue'),
        beforeEnter: auth
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/modules/about/About.vue'),
        beforeEnter: auth
    },
];

export default new VueRouter({
    routes
});