import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase';



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


const firebaseConfig = {
    apiKey: "AIzaSyBNCluug-gcvpCxLwdlqPQBzk6SDTvpGno",
    authDomain: "usuarios-538b7.firebaseapp.com",
    projectId: "usuarios-538b7",
    storageBucket: "usuarios-538b7.appspot.com",
    messagingSenderId: "807973258730",
    appId: "1:807973258730:web:161dbb19534c7a857c1e93"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUI);

new Vue({

    router,
    store,
    render: h => h(App)
}).$mount('#app')