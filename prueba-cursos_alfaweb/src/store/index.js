import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

import router from '../router/index';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        cursos: [],
        user: {},
        edit: false,
        loading: false,
    },
    getters: {
        enviarUser(state) {
            return state.user;
        },
        enviarCursos(state) {
            return state.cursos;
        },
        cursosTotal(state) {
            return state.cursos.length;
        },
        totalAlumnos(state) {
            return state.cursos.reduce((acumulador, valor) => {
                return acumulador + valor.cupos;
            }, 0);
        },
        totalInscritos(state) {
            return state.cursos.reduce((acumulador, valor) => {
                return acumulador + valor.inscritos;
            }, 0);
        },
        cuposRestantes(state) {
            return state.cursos.reduce((acumulador, valor) => {
                return acumulador + valor.cupos - valor.inscritos;
            }, 0);
        },

        cursosTrue: state => {
            return state.cursos.filter((categoria) => {
                return categoria.checked
            })
        },
        cursosFalse(state) {
            return state.cursos.filter(total => total.checked === false);
        },
        cursosTerminados: (state, getters) => {
            return getters.cursosTrue.length;

        },
        cursosActivos: (state, getters) => {
            return getters.cursosFalse.length;

        },
    },
    mutations: {
        addUsuario(state, userData) {
            state.user = userData;
        },
        mutarCurso(state, arreglo) {
            state.cursos = arreglo;
        }
    },
    actions: {
        traerDatos({ commit }) {
            db.collection('cursos').onSnapshot(resp => {
                let arreglo = [];
                resp.forEach(element => {

                    arreglo.push({
                        id: element.id,
                        nombre: element.data().nombre,
                        imagen: element.data().imagen,
                        cupos: element.data().cupos,
                        inscritos: element.data().inscritos,
                        duracion: element.data().duracion,
                        costo: element.data().costo,
                        codigo: element.data().codigo,
                        descripcion: element.data().descripcion,
                        fecha: element.data().fecha,
                        checked: element.data().checked,
                    })
                });
                commit('mutarCurso', arreglo);
            })
        },
        agregarCurso(context, data) {
            db.collection("cursos").add({
                nombre: data.nombre,
                imagen: data.imagen,
                cupos: data.cupos,
                inscritos: data.inscritos,
                duracion: data.duracion,
                costo: data.costo,
                codigo: data.codigo,
                descripcion: data.descripcion,
                fecha: data.fecha,
                checked: data.checked,
            }).then(resp => {
                console.log(resp);
            })
        },
        eliminarCurso(context, id) {

            db.collection('cursos').doc(id).delete().then(() => {
                console.log("Borrado");
            }).catch(error => {
                console.log(error);
            })
        },
        editarCurso(context, data) {

            db.collection("cursos").doc(data.id).update({
                nombre: data.nombre,
                imagen: data.imagen,
                cupos: data.cupos,
                inscritos: data.inscritos,
                duracion: data.duracion,
                costo: data.costo,
                codigo: data.codigo,
                descripcion: data.descripcion,
                fecha: data.fecha,
                checked: data.checked,
            }).then(() => {
                console.log("Editado");
                setTimeout(() => {
                    router.replace('/editar');
                }, 1000);
            })
        },

        agregarUser({ commit }, user) {
            commit('addUsuario', user);
        }
    }

})