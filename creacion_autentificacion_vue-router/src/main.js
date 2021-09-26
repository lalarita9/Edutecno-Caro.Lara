import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAapQjzI1_OFFXxbalcpzCk1c30ETRRG44",
    authDomain: "autenticacion-5a1a8.firebaseapp.com",
    projectId: "autenticacion-5a1a8",
    storageBucket: "autenticacion-5a1a8.appspot.com",
    messagingSenderId: "499833977432",
    appId: "1:499833977432:web:fb156d3db7abdfbbd7e82d"
};
const app = initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
    app,
    router,
    render: h => h(App)
}).$mount('#app')