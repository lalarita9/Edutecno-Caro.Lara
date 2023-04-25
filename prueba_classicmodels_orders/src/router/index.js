import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue'),

    },
    {
        path: '/ordenes',
        name: 'Ordenes',
        component: () =>
            import ( /* webpackChunkName: "ordenes" */ '../views/Ordenes.vue'),

    },
    {
        path: '*',
        name: 'NoFound',
        component: () =>
            import ( /* webpackChunkName: "noFound" */ '../views/NoFound.vue'),

    },
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router