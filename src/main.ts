import { createApp } from 'vue'
import { Store } from 'vuex'
import App from './App.vue'
import router from './router'
import stauth from './store/stauth'
import { sync } from 'vuex-router-sync'

sync(stauth, router) 
createApp(App).use(router).mount('#app')
