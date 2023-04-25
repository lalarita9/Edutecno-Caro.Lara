import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/equipos',
        name: 'Equipos',
        component: () =>
            import ( /* webpackChunkName: "equipos" */ '../views/Equipos.vue'),

    },

    {
        path: '/planes',
        name: 'Planes',
        component: () =>
            import ( /* webpackChunkName: "planes" */ '../views/Planes.vue'),

    },
    {
        path: '/prepago',
        name: 'Prepago',
        component: () =>
            import ( /* webpackChunkName: "prepago" */ '../views/Prepago.vue'),

    },
    {
        path: '/oficinavirtual',
        name: 'OficinaVirtual',
        component: () =>
            import ( /* webpackChunkName: "oficinavirtual" */ '../views/OficinaVirtual.vue'),

    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router