import Vue from 'vue'
import Router from 'vue-router'
import Portada from './components/Portada'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Historia from './components/Historia'
import RutasInexistentes from './components/RutasInexistentes'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Portada
        },
        {
            path: '/sobremi',
            component: SobreMi
        },
        {
            path: '/contacto',
            component: Contacto
        },
        {
            path: '/post/:entrada',
            component: Post,
            children: [{
                path: 'historia',
                component: Historia,
                name: 'historia'
            }, ]
        },
        {
            path: '*',
            component: RutasInexistentes
        },
    ]
})