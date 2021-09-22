import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        juegos: [
            { codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: true },
            { codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "blue", destacado: false },
            { codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "green", destacado: true },
            { codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color: "yellow", destacado: false },
            { codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "blue", destacado: false },
            { codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "red", destacado: true }
        ],
    },
    getters: {
        numeroJuegos(state) {
            return state.juegos;
        },
        filtroJuego: (state) => (codigo) => {
            return state.juegos.filter(id => id.codigo == codigo);
        },
        totalJuegos(state) {
            return state.juegos.length;
        },
        totalStock: state => {
            return state.juegos.filter((cantidad) => {
                return cantidad.stock > 0
            })
        },
        totalS(state) {
            return state.juegos.reduce((acumulador, valor) => {
                return acumulador + valor.stock;
            }, 0);
        },
        mostrarVentas(state) {
            return state.juegos.reduce((acumulador, valor) => {
                return acumulador + valor.stock;
            }, 0);
        },
        mostrarTotalVentas(state) {
            return state.juegos.reduce((acumulador, valor) => {
                return acumulador + (valor.precio * valor.stock);
            }, 0);
        },
        ventasHechas(state) {
            return state.juegos.filter(producto => producto.stock > 0);
        },

    },
    mutations: {
        ventaJuego(state, juegos) {
            if (state.juegos[juegos].stock > 0) {
                state.juegos[juegos].stock--;
            } else {
                state.juegos[juegos].vender = false;
                alert('Lo sentimos, venta rechazada')

            }
            if (state.juegos[juegos].stock == 0) {
                state.juegos[juegos].vender = false;
            }
        },
    },
    actions: {

        vender(context, juegos) {
            context.commit('ventaJuego', juegos);

        }
    }

})