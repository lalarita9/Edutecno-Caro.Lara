import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getAuth } from 'firebase/auth'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',

        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue'),

    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            login: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.authRequired)) {
        if (getAuth().currentUser) {
            next({
                path: '/'
            });
        }
    } else {
        next();
    }
});


export default router