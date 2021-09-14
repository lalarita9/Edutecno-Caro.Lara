import Vue from 'vue'
import Router from 'vue-router'
//import Portada from './components/Portada'
//import SobreMi from './components/SobreMi'
//import Contacto from './components/Contacto'
//import Post from './components/Post'
import Historia from './components/Historia'
import Administrador from './components/Administrador'
import Simple from './components/Simple'
import Avanzado from './components/Avanzado'
import Equivocado from './components/Equivocado'
import RutasInexistentes from './components/RutasInexistentes'
const Portada = () =>
    import ('./components/Portada')
const SobreMi = () =>
    import ('./components/SobreMi')
const Contacto = () =>
    import ('./components/Contacto')
const Post = () =>
    import ('./components/Post')


Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Portada,
            alias: ['/home', '/inicio'],

        },
        {
            path: '/sobremi',
            component: SobreMi,
            name: 'sobremi',
            alias: ['/acerca'],
        },
        {
            path: '/contacto',
            component: Contacto,
            name: 'contacto',
            alias: ['/contactame']
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
            component: Administrador,
            name: 'administrador'
        },
        {
            path: '*/simple',
            component: Simple,
            name: 'simple'

        },
        {
            path: '*/avanzado',
            component: Avanzado,
            name: 'avanzado'
        },

        {
            path: '*/equivocado',
            component: Equivocado,
            nombre: 'equivocado',
        },
        {
            path: '*/rutafalsa',
            component: RutasInexistentes
        },
    ]
})