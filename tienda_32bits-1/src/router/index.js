import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Busquedas from '../views/Busquedas.vue'
import Ventas from '../views/Ventas.vue'
import Total from '../views/Total.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/busquedas',
        name: 'busquedas',
        component: Busquedas
    },
    {
        path: '/ventas',
        name: 'ventas',
        component: Ventas
    },
    {
        path: '/total',
        name: 'total',
        component: Total
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router