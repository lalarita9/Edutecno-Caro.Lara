import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'Login',
    },
    {
        path: '/login',
        name: 'Login',

        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),

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
            login: true,

        }
    },
    {
        path: '/registro',
        name: 'Registro',
        component: () =>
            import ( /* webpackChunkName: "registro" */ '../views/Registro.vue'),
        meta: {
            login: true
        }
    },

    {
        path: '/agregar',
        name: 'Agregar',
        component: () =>
            import ( /* webpackChunkName: "agregar" */ '../views/Agregar.vue'),
        meta: {
            login: true
        }
    },
    {
        path: '/editar',
        name: 'Editar',
        component: () =>
            import ( /* webpackChunkName: "editar" */ '../views/Editar.vue'),
        meta: {
            login: true
        }
    },
    {
        path: '/administracion',
        name: 'Administracion',
        component: () =>
            import ( /* webpackChunkName: "administracion" */ '../views/Administracion.vue'),
        meta: {
            login: true
        }
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let user = firebase.auth().currentUser;
    let valido = to.matched.some(ruta => ruta.meta.login);

    if (!user && valido) {
        next('/home')
    } else {
        next();
    }
})
export default router