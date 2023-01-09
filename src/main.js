import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import {toast} from "@k90mirzaei/vue-toast";
createApp(App).use(store).use(router).use(toast).mount('#app')
